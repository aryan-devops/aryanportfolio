import React from 'react';
import Section from './Section';
import { content } from '../data/content';

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div style={listStyle}>
        {content.projects.map((proj, i) => (
          <div key={i} style={projectStyle}>
            <h3 style={titleStyle}>{proj.title}</h3>
            <p style={descStyle}>{proj.description}</p>
            
            <ul style={specsList}>
              <li style={specItem}>
                <span className="mono-label" style={specLabel}>Stack</span>
                <span style={specVal}>{proj.stack}</span>
              </li>
              <li style={specItem}>
                <span className="mono-label" style={specLabel}>Scope</span>
                <span style={specVal}>{proj.scope}</span>
              </li>
              <li style={specItem}>
                <span className="mono-label" style={specLabel}>Core</span>
                <span style={specVal}>{proj.core}</span>
              </li>
            </ul>

            <div style={linksStyle}>
              {proj.liveUrl !== 'TODO' && <a href={proj.liveUrl} style={link}>Live Site</a>}
              {proj.repoUrl !== 'TODO' && <a href={proj.repoUrl} style={link}>Repository</a>}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const listStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '64px',
};

const projectStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

const titleStyle = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--text-h3)',
  lineHeight: 1.1,
  margin: 0,
};

const descStyle = {
  color: 'var(--muted)',
  maxWidth: '600px',
  fontSize: '18px',
};

const specsList = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginTop: '16px',
  borderTop: '1px solid var(--line)',
  paddingTop: '24px',
};

const specItem = {
  display: 'flex',
  gap: '24px',
};

const specLabel = {
  flex: '0 0 80px',
};

const specVal = {
  color: 'var(--ink)',
};

const linksStyle = {
  display: 'flex',
  gap: '24px',
  marginTop: '16px',
};

const link = {
  color: 'var(--accent)',
  textDecoration: 'underline',
  textUnderlineOffset: '4px',
  fontWeight: 500,
};
