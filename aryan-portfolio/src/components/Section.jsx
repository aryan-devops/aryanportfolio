import React from 'react';

export default function Section({ id, title, children }) {
  return (
    <section id={id} style={sectionStyle}>
      <div className="container" style={innerStyle}>
        <div style={railStyle}>
          <span className="mono-label">{title}</span>
        </div>
        <div style={contentStyle}>
          {children}
        </div>
      </div>
    </section>
  );
}

const sectionStyle = {
  padding: '96px 0',
  borderBottom: '1px solid var(--line)',
};

const innerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '32px',
};

const railStyle = {
  flex: '0 0 190px',
  position: 'sticky',
  top: '80px',
  alignSelf: 'flex-start',
};

const contentStyle = {
  flex: '1 1 0%',
  minWidth: '0',
};

/* Media query logic can be handled via standard CSS or keeping inline as fallback.
   For responsive flex-direction, we'd ideally use CSS classes. I'll inject a small style tag. */
