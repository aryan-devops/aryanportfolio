import React from 'react';
import Section from './Section';
import { content } from '../data/content';
import { useCopy } from '../hooks/useCopy';

export default function Contact() {
  const { copied, copyToClipboard } = useCopy();

  return (
    <Section id="contact" title="Contact">
      <div style={wrapStyle}>
        <p style={textStyle}>
          Currently exploring opportunities. Feel free to reach out.
        </p>

        <div style={actionsStyle}>
          <button onClick={() => copyToClipboard(content.email)} style={btnPrimary}>
            {copied ? 'Email copied' : content.email}
          </button>
          <a href={`tel:${content.phone.replace(/\\s/g, '')}`} style={btnSecondary}>
            {content.phone}
          </a>
        </div>
      </div>
    </Section>
  );
}

const wrapStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
};

const textStyle = {
  fontSize: '18px',
  color: 'var(--muted)',
  maxWidth: '500px',
};

const actionsStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
};

const btnPrimary = {
  padding: '12px 24px',
  backgroundColor: 'var(--ink)',
  color: 'var(--bg)',
  borderRadius: '4px',
  fontWeight: 500,
  transition: 'opacity 0.2s',
};

const btnSecondary = {
  padding: '12px 24px',
  backgroundColor: 'transparent',
  border: '1px solid var(--line)',
  color: 'var(--ink)',
  borderRadius: '4px',
  fontWeight: 500,
  transition: 'border-color 0.2s',
};
