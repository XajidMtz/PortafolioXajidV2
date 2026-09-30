"""Build the editable, two-page resume from the portfolio's TypeScript data.

Optional tool: Python 3 + ReportLab. Run from anywhere with Node.js installed.
This is deliberately separate from the website build: a supplied PDF is also valid.
"""

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
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, PageBreak, KeepTogether,
)

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
    'bullet': ParagraphStyle('bullet', fontName=regular, fontSize=9.2, leading=13, textColor=INK, leftIndent=10, firstLineIndent=-8, spaceAfter=2, alignment=TA_LEFT),
}

story = []


def paragraph(text, style='body'):
    return Paragraph(text, styles[style])


def add(text, style='body'):
    story.append(paragraph(text, style))


def safe(text):
    return escape(str(text))


def link(url, text):
    return f'<link href="{safe(url)}" color="#176246">{safe(text)}</link>'


def section(title):
    add(safe(title.upper()), 'section')


add(safe(profile['name']), 'name')
add(safe(profile['role']) + ' · Titulado', 'role')
add('Analista de datos · Agentes de IA a medida · Protección de la información', 'small')
add(safe(profile['location']) + ' · ' + safe(' / '.join(profile['availability'])), 'small')
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

section('Perfil profesional')
add('Ingeniero titulado con más de 3 años de experiencia en desarrollo de software y '
    '<b>análisis de datos</b>. Transformo información con SQL, Python y dashboards para apoyar '
    'decisiones. <b>Creo agentes de IA ajustados a las necesidades de cada cliente</b>, conectados '
    'a APIs y bases de datos para automatizar procesos. Mi formación en ciberseguridad guía la '
    '<b>protección y el cuidado de la información</b> en cada solución.')

section('Experiencia profesional')
for job in data['experience']:
    add(safe(job['title']), 'job')
    add(safe(job['period']) + ' · ' + safe(job['location']), 'small')
    add(safe(job['description']))
    for responsibility in job['responsibilities']:
        add('• ' + safe(responsibility), 'bullet')

story.append(PageBreak())
add(safe(profile['shortName']) + ' · Perfil técnico', 'role')

section('Habilidades')
for group in data['skillGroups']:
    add('<b>' + safe(group['title']) + '</b> — ' + safe(' · '.join(group['skills'])))

section('Proyectos y colaboraciones')
for project in data['projects']:
    if project['status'] != 'published':
        continue
    text = '<b>' + safe(project['name']) + '</b> — ' + safe(project['description'])
    if project.get('demo'):
        text += ' ' + link(project['demo'], 'Ver demo')
    add(text)

section('Educación')
for item in data['education']:
    lines = [paragraph('<b>' + safe(item['title']) + '</b>' + (' · ' + safe(item['status']) if item.get('status') else ''))]
    detail = [item['period']]
    if item.get('institution'):
        detail.append(item['institution'])
    if item.get('specialization'):
        detail.append(item['specialization'])
    lines.append(paragraph(safe(' · '.join(detail)), 'small'))
    story.append(KeepTogether(lines))

section('Cursos y formación complementaria')
for course in data['certifications']:
    add('• ' + safe(course['name']) + (' · ' + safe(course['year']) if course.get('year') else ''), 'bullet')

section('Idiomas y disponibilidad')
add(' · '.join(safe(item['name'] + ': ' + item['level']) for item in profile['languages']))
add('Interés principal en CDMX y zona metropolitana. Abierto a oportunidades fuera de CDMX. '
    'Disponibilidad remota, híbrida y presencial.')


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.line(18 * mm, 15 * mm, doc.pagesize[0] - 18 * mm, 15 * mm)
    canvas.setFont(regular, 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 10 * mm, profile['shortName'])
    canvas.drawRightString(doc.pagesize[0] - 18 * mm, 10 * mm, str(doc.page))
    canvas.restoreState()


output = ROOT / 'public' / 'CV_Xajid_Martinez.pdf'
document = SimpleDocTemplate(
    str(output), pagesize=(210 * mm, 297 * mm),
    rightMargin=18 * mm, leftMargin=18 * mm, topMargin=17 * mm, bottomMargin=22 * mm,
    title=profile['name'] + ' | Currículum', author=profile['name'],
    subject='Data Analytics, Software Development, AI Automation y Ciberseguridad',
)
document.build(story, onFirstPage=footer, onLaterPages=footer)
print(output)
