import React from 'react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <a href={href} className="hover:text-zinc-50 transition-colors">
      {children}
    </a>
  );
};

export default FooterLink;

