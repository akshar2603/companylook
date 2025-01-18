import React from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => {
  return (
    <div>
      <h3 className="text-zinc-50 font-semibold mb-3">{title}</h3>
      {children}
    </div>
  );
};

export default FooterSection;

