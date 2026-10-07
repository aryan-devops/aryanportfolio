import React from 'react';
import Section from './Section';
import { content } from '../data/content';

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div style={listStyle}>
        {content.education.map((edu, i) => (
          <div key={i} style={itemStyle}>
            <div style={headerStyle}>
              <h3 style={titleStyle}>{edu.degree}</h3>
              <span className="mono-label">{edu.date}</span>
            </div>
            
            <div style={metaStyle}>
              {edu.school}
            </div>

            <p style={descStyle}>{edu.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const listStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '48px',
};

const itemStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  flexWrap: 'wrap',
  gap: '16px',
};

const titleStyle = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--text-h3)',
  lineHeight: 1.1,
  margin: 0,
};

const metaStyle = {
  color: 'var(--muted)',
  fontSize: '18px',
};

const descStyle = {
  color: 'var(--ink)',
  marginTop: '8px',
};
