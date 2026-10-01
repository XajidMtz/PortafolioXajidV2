'use client';

import { useState, type SubmitEvent } from 'react';
import { ArrowUpRight, Mail, Send } from 'lucide-react';
import { profile } from '@/data/profile';

const recipient = profile.email;
const subject = 'CORREO PORTAFOLIO';
const formUrl = `https://shipmyform.com/to/${recipient}`;

type SubmissionState = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const [state, setState] = useState<SubmissionState>('idle');

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === 'sending') return;

    const form = event.currentTarget;
    const fields = new FormData(form);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);

    setState('sending');
    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: fields,
        signal: controller.signal,
      });
      const result: { ok?: boolean } = await response.json();

      if (!response.ok || result.ok !== true) {
        throw new Error('El servicio de correo rechazó el mensaje.');
      }

      form.reset();
      setState('success');
    } catch {
      setState('error');
    } finally {
      window.clearTimeout(timeout);
    }
  }

  return (
    <form
      id="contact-form"
      className="contact-form"
      action={formUrl}
      method="POST"
      onSubmit={handleSubmit}
    >
      <div className="contact-form-heading">
        <span className="contact-form-icon" aria-hidden="true">
          <Mail size={23} />
        </span>
        <span className="mono-label">HABLEMOS</span>
      </div>
      <h3>Cuéntame sobre tu proyecto</h3>
      <p className="contact-form-intro">
        Déjame tus datos y el contexto. Te responderé directamente por correo.
      </p>
      <div className="contact-form-subject">
        <span>ASUNTO</span>
        <strong>{subject}</strong>
      </div>

      <input type="hidden" name="_subject" value={subject} />
      <div className="contact-form-honeypot" aria-hidden="true">
        <label htmlFor="contact-company">Deja este campo vacío</label>
        <input
          id="contact-company"
          name="_gotcha"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="contact-form-row">
        <div className="contact-form-field">
          <label htmlFor="contact-name">Nombre</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Tu nombre"
            autoComplete="name"
            minLength={2}
            maxLength={100}
            required
          />
        </div>
        <div className="contact-form-field">
          <label htmlFor="contact-email">Correo electrónico</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="tu@empresa.com"
            autoComplete="email"
            maxLength={254}
            required
          />
        </div>
      </div>
      <div className="contact-form-field">
        <label htmlFor="contact-message">Mensaje</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="¿Qué te gustaría construir o resolver?"
          rows={5}
          minLength={10}
          maxLength={5000}
          required
        />
      </div>
      <div className="contact-form-bottom">
        <button
          className="button button-primary contact-form-submit"
          type="submit"
          disabled={state === 'sending'}
        >
          <Send size={17} />
          {state === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
        </button>
        <span>Responderé a la dirección que compartas.</span>
      </div>
      <p
        className="contact-form-feedback"
        data-state={state}
        role={state === 'error' ? 'alert' : 'status'}
        aria-live="polite"
      >
        {state === 'success' &&
          'El mensaje fue aceptado. ¡Gracias por escribirme!'}
        {state === 'error' && (
          <>
            No se pudo enviar. Intenta de nuevo o{' '}
            <a
              href={`mailto:${recipient}?subject=${encodeURIComponent(subject)}`}
            >
              escríbeme directamente <ArrowUpRight size={14} />
            </a>
            .
          </>
        )}
      </p>
      <p className="contact-form-privacy">
        El envío se procesa mediante ShipMyForm para entregarlo a mi correo.
      </p>
    </form>
  );
}
