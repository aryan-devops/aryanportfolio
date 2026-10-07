import React from 'react';
import { content } from '../data/content';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div className="container" style={innerStyle}>
        <div>&copy; {new Date().getFullYear()} Aryan Pandey.</div>
        <div style={linksStyle}>
          {content.linkedin !== 'TODO: add profile URL' && (
            <a href={content.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          )}
          {content.github !== 'TODO: add URL' && (
            <a href={content.github} target="_blank" rel="noreferrer">GitHub</a>
          )}
        </div>
      </div>
    </footer>
  );
}

const footerStyle = {
  borderTop: '1px solid var(--line)',
  padding: '48px 0',
  marginTop: '96px',
  color: 'var(--muted)',
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--text-label)',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
};

const innerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '16px',
};

const linksStyle = {
  display: 'flex',
  gap: '24px',
};
