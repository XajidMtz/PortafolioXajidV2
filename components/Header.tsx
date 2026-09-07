'use client';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navigation, profile } from '@/data/profile';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';

export function Header() {
  const [active, setActive] = useState('inicio');
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-15% 0px -65% 0px' },
    );
    navigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <header className="site-header">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <div className="container header-inner">
        <a
          className="brand"
          href="#inicio"
          aria-label={`${profile.shortName}, inicio`}
        >
          xm<span>.</span>
          <span className="brand-caption">PORTAFOLIO</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.slice(0, -1).map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? 'location' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          className="header-contact"
          href="#contacto"
          aria-current={active === 'contacto' ? 'location' : undefined}
        >
          Contacto <ArrowUpRight size={16} />
        </a>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger
            className="mobile-toggle icon-button"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <Menu size={23} />
          </DialogTrigger>
          <DialogContent className="mobile-dialog" showCloseButton={false}>
            <DialogTitle className="mobile-title">
              Explora el portafolio
            </DialogTitle>
            <DialogDescription className="sr-only">
              Navega a una sección del portafolio de Xajid Martínez.
            </DialogDescription>
            <DialogClose
              className="mobile-close icon-button"
              aria-label="Cerrar menú"
            >
              <X />
            </DialogClose>
            <nav className="mobile-nav" aria-label="Navegación móvil">
              {navigation.map(({ id, label }, index) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === id ? 'location' : undefined}
                >
                  <span>0{index + 1}</span>
                  {label}
                  <ArrowUpRight size={18} />
                </a>
              ))}
            </nav>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
