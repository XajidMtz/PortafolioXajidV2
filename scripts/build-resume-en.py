"""Build the English CV from the portfolio's current profile data."""

import json
import subprocess
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import KeepTogether, PageBreak, Paragraph, SimpleDocTemplate

ROOT = Path(__file__).resolve().parents[1]
EXPORT = """
import { profile } from './data/profile.ts';
import { experience } from './data/experience.ts';
import { skillGroups } from './data/skills.ts';
import { education, certifications } from './data/education.ts';
import { projects } from './data/projects.ts';
process.stdout.write(JSON.stringify({profile, experience, skillGroups, education, certifications, projects}));
"""
result = subprocess.run(
    ['node', '--experimental-strip-types', '--input-type=module', '-e', EXPORT],
    cwd=ROOT, check=True, capture_output=True, encoding='utf-8',
)
data = json.loads(result.stdout)
profile = data['profile']

jobs = {
    'freelance': {
        'title': 'Freelance Developer',
        'location': 'Remote',
        'description': (
            'Tailored solutions from requirements through production. I design AI agents '
            'around each client\'s needs and workflows, working directly with clients remotely.'
        ),
        'responsibilities': [
            'Build websites and web applications, as well as Python-based solutions.',
            'Analyze data and create dashboards and strategic reports.',
            'Design AI agents with the OpenAI API, tailored to client goals and connected to APIs, external services, and SQL databases.',
            'Integrate AI into existing products and build workflows to query and process information from other systems.',
            'Automate processes with RPA and AI to reduce manual work and operational effort.',
        ],
    },
    'web-data': {
        'title': 'Web Developer and Data Management',
        'location': 'Mexico City',
        'description': (
            'Data analysis for the insurance sector, web development, and database management. '
            'I turn information into insights that support decisions while handling it responsibly.'
        ),
        'responsibilities': [
            'Design and build websites and internal tools with C# and Python.',
            'Maintain relational databases responsibly; create SQL Server views and optimize SQL queries.',
            'Analyze information with Python, Pandas, NumPy, and Excel; build Power BI dashboards and generate insights.',
            'Run ETL and source integration processes; develop and optimize Telerik reports.',
            'Integrate AI agents and automate processes using RPA.',
        ],
    },
    'developer': {
        'title': 'Software Developer',
        'location': 'Toluca',
        'description': (
            'Worked on domestic and international sales systems, addressing requirements, '
            'maintaining applications, and managing information.'
        ),
        'responsibilities': [
            'Gather and document functional requirements with key users.',
            'Diagnose and fix defects, maintain systems, and update catalogs.',
            'Manage information and supplier databases.',
            'Build and consume web services to connect systems.',
        ],
    },
}
if {job['id'] for job in data['experience']} != set(jobs):
    raise ValueError('Update English translations for every experience entry.')
for job in data['experience']:
    if len(job['responsibilities']) != len(jobs[job['id']]['responsibilities']):
        raise ValueError(f"Update English responsibilities for {job['id']}.")

skill_groups = {
    'data': 'Data Analysis',
    'ai': 'AI Agents and Automation',
    'software': 'Software Development',
    'database': 'Databases',
    'security': 'Cybersecurity and Information Protection',
}
if {group['id'] for group in data['skillGroups']} != set(skill_groups):
    raise ValueError('Update English translations for every skill group.')
skill_terms = {
    'Excel Avanzado': 'Advanced Excel',
    'Diseño de agentes a medida': 'Custom AI Agent Design',
    'Desarrollo Web': 'Web Development',
    'Sistemas empresariales': 'Enterprise Systems',
    'Infraestructura de Redes': 'Network Infrastructure',
    'Seguridad Informática': 'Information Security',
    'Hacking Ético': 'Ethical Hacking',
    'Ciberseguridad': 'Cybersecurity',
    'Protección de información': 'Information Protection',
}

projects = {
    'flechisa-rpa': (
        'Process Automation - FLECHISA',
        'Contributed to five automation robots for a distribution and logistics company.',
    ),
    'thb-web': (
        'Web Development - THB',
        'Collaborated with SAO on the THB website in the insurance sector.',
    ),
    'recetario-api': (
        'Recipe App with API Integration',
        'Web app that uses APIs to retrieve and display recipe information.',
    ),
    'login-demo': (
        'Login and Temporary Database',
        'Demo web project with a login flow and temporary database.',
    ),
}
published = [item for item in data['projects'] if item['status'] == 'published']
if {item['id'] for item in published} != set(projects):
    raise ValueError('Update English translations for every published project.')

education = {
    'Ingeniería en Redes y Ciberseguridad': 'Engineering Degree in Networks and Cybersecurity',
    'Técnico en Tecnologías de la Información': 'Information Technology Technician',
}
if {item['title'] for item in data['education']} != set(education):
    raise ValueError('Update English translations for every education entry.')

courses = {
    'Seguridad Informática y Pentesting': 'Information Security and Penetration Testing',
    'Hacking Ético y Ciberseguridad': 'Ethical Hacking and Cybersecurity',
    'Hacking Ético': 'Ethical Hacking',
    'CCNAv7: Redes empresariales, seguridad y automatización': 'CCNAv7: Enterprise Networking, Security, and Automation',
    'Seguridad Forense': 'Digital Forensics',
    'Hacking con Python': 'Hacking with Python',
}
if {item['name'] for item in data['certifications']} != set(courses):
    raise ValueError('Update English translations for every course.')


def translate_period(period):
    months = {
        'Enero': 'January', 'Febrero': 'February', 'Marzo': 'March',
        'Abril': 'April', 'Mayo': 'May', 'Junio': 'June',
        'Julio': 'July', 'Agosto': 'August', 'Septiembre': 'September',
        'Octubre': 'October', 'Noviembre': 'November', 'Diciembre': 'December',
    }
    for spanish, english in months.items():
        period = period.replace(spanish, english)
    return period.replace('Actualidad', 'Present').replace(' — ', ' - ')


regular, bold = 'Helvetica', 'Helvetica-Bold'
for directory, normal_file, bold_file in [
    (Path('C:/Windows/Fonts'), 'arial.ttf', 'arialbd.ttf'),
    (Path('/usr/share/fonts/truetype/dejavu'), 'DejaVuSans.ttf', 'DejaVuSans-Bold.ttf'),
]:
    if (directory / normal_file).exists() and (directory / bold_file).exists():
        pdfmetrics.registerFont(TTFont('Resume', str(directory / normal_file)))
        pdfmetrics.registerFont(TTFont('Resume-Bold', str(directory / bold_file)))
        pdfmetrics.registerFontFamily('Resume', normal='Resume', bold='Resume-Bold')
        regular, bold = 'Resume', 'Resume-Bold'
        break

INK = colors.HexColor('#182822')
GREEN = colors.HexColor('#176246')
MUTED = colors.HexColor('#53605a')
LINE = colors.HexColor('#d7e2dc')
styles = {
    'name': ParagraphStyle('name', fontName=bold, fontSize=23, leading=27, textColor=INK, spaceAfter=5),
    'role': ParagraphStyle('role', fontName=bold, fontSize=11.4, leading=15, textColor=GREEN, spaceAfter=5),
    'body': ParagraphStyle('body', fontName=regular, fontSize=9.4, leading=13.5, textColor=INK, spaceAfter=5),
    'small': ParagraphStyle('small', fontName=regular, fontSize=8.6, leading=12, textColor=MUTED, spaceAfter=4),
    'section': ParagraphStyle('section', fontName=bold, fontSize=10.5, leading=15, textColor=GREEN, spaceBefore=12, spaceAfter=7, keepWithNext=True),
    'job': ParagraphStyle('job', fontName=bold, fontSize=11.2, leading=15, textColor=INK, spaceBefore=7, spaceAfter=3, keepWithNext=True),
    'bullet': ParagraphStyle('bullet', fontName=regular, fontSize=9.2, leading=13, textColor=INK, leftIndent=10, firstLineIndent=-8, spaceAfter=3, alignment=TA_LEFT),
}
story = []


def safe(text):
    return escape(str(text), {'"': '&quot;'})


def add(text, style='body'):
    story.append(Paragraph(text, styles[style]))


def link(url, text):
    return f'<link href="{safe(url)}" color="#176246">{safe(text)}</link>'


def section(title):
    add(safe(title.upper()), 'section')


add(safe(profile['name']), 'name')
add('Network and Cybersecurity Engineer', 'role')
add('Data Analyst - Custom AI Agents - Information Protection', 'small')
add('Mexico City, Mexico - Remote / Hybrid / On-site', 'small')
contacts = [
    link('mailto:' + profile['email'], profile['email']),
    link(profile['phoneHref'], profile['phone']),
    link(profile['whatsappUrl'], 'WhatsApp'),
]
add(' &nbsp; | &nbsp; '.join(contacts), 'small')
contacts = [link(profile['github'], 'github.com/XajidMtz')]
if profile['linkedin']:
    contacts.append(link(profile['linkedin'], 'LinkedIn'))
add(' &nbsp; | &nbsp; '.join(contacts), 'small')

section('Professional Profile')
add(
    'Network and Cybersecurity Engineer with more than three years of experience in '
    '<b>software development and data analysis</b>. I use SQL, Python, and dashboards to '
    'turn data into insights that support decisions. <b>I create AI agents tailored to each client\'s '
    'needs</b>, connecting APIs and databases to automate processes. My cybersecurity '
    'background guides the <b>responsible handling and protection of information</b>.'
)

section('Professional Experience')
for job in data['experience']:
    translated = jobs[job['id']]
    add(safe(translated['title']), 'job')
    add(safe(translate_period(job['period']) + ' - ' + translated['location']), 'small')
    add(safe(translated['description']))
    for responsibility in translated['responsibilities']:
        add('• ' + safe(responsibility), 'bullet')

story.append(PageBreak())
add(safe(profile['shortName']) + ' - Technical Profile', 'role')

section('Skills')
for group in data['skillGroups']:
    translated_skills = [skill_terms.get(skill, skill) for skill in group['skills']]
    add('<b>' + safe(skill_groups[group['id']]) + '</b> - ' + safe(' · '.join(translated_skills)))

section('Projects and Collaborations')
for project in published:
    title, description = projects[project['id']]
    text = '<b>' + safe(title) + '</b> - ' + safe(description)
    if project.get('demo'):
        text += ' ' + link(project['demo'], 'View demo')
    add(text)

section('Education')
for item in data['education']:
    title = education[item['title']]
    lines = [Paragraph('<b>' + safe(title) + '</b>' + (' - Graduated' if item.get('status') else ''), styles['body'])]
    detail = [translate_period(item['period'])]
    if item.get('institution'):
        detail.append(item['institution'])
    if item.get('specialization'):
        detail.append('Higher University Technician - Digital Network Infrastructure')
    lines.append(Paragraph(safe(' - '.join(detail)), styles['small']))
    story.append(KeepTogether(lines))

section('Courses and Additional Training')
for course in data['certifications']:
    text = '• ' + safe(courses[course['name']])
    if course.get('year'):
        text += ' - ' + safe(course['year'])
    add(text, 'bullet')

section('Languages and Availability')
add('Spanish: Native · English: B1 - Intermediate')
add(
    'Primarily interested in Mexico City and the metropolitan area. Open to opportunities '
    'elsewhere. Available for remote, hybrid, and on-site roles.'
)


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.line(18 * mm, 15 * mm, doc.pagesize[0] - 18 * mm, 15 * mm)
    canvas.setFont(regular, 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 10 * mm, profile['shortName'])
    canvas.drawRightString(doc.pagesize[0] - 18 * mm, 10 * mm, str(doc.page))
    canvas.restoreState()


output = ROOT / 'public' / 'CV_Xajid_Martinez_EN.pdf'
document = SimpleDocTemplate(
    str(output), pagesize=(210 * mm, 297 * mm),
    rightMargin=18 * mm, leftMargin=18 * mm, topMargin=17 * mm, bottomMargin=22 * mm,
    title=profile['name'] + ' | Resume', author=profile['name'],
    subject='Data Analysis, Software Development, AI Agents, and Cybersecurity',
)
document.build(story, onFirstPage=footer, onLaterPages=footer)
print(output)
