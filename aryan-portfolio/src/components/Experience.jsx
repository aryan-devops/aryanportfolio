import React from 'react';
import Section from './Section';
import { content } from '../data/content';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div style={listStyle}>
        {content.experience.map((exp, i) => (
          <div key={i} style={itemStyle}>
            <div style={headerStyle}>
              <h3 style={titleStyle}>{exp.role}</h3>
              <span className="mono-label">{exp.date}</span>
            </div>
            
            <div style={metaStyle}>
              {exp.company}, {exp.location}
            </div>

            <ul style={pointsStyle}>
              {exp.points.map((pt, j) => (
                <li key={j} style={pointStyle}>
                  <span style={dash}>—</span> {pt}
                </li>
              ))}
            </ul>
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

const pointsStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginTop: '16px',
};

const pointStyle = {
  display: 'flex',
  gap: '16px',
  color: 'var(--ink)',
};

const dash = {
  color: 'var(--muted)',
};
