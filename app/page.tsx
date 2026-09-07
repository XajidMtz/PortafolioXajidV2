import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { getLocalAssets } from '@/lib/assets';
import { About } from '@/components/About';
import { Expertise } from '@/components/Expertise';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { GitHubShowcase } from '@/components/GitHubShowcase';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  const assets = getLocalAssets();
  return (
    <>
      <Header />
      <main id="contenido" tabIndex={-1}>
        <Hero assets={assets} />
        <About />
        <Expertise />
        <Experience />
        <Skills />
        <Projects />
        <GitHubShowcase />
        <Education />
        <Contact assets={assets} />
      </main>
      <Footer />
    </>
  );
}
