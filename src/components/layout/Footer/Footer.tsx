import FooterSection from './FooterSection';
import FooterLink from './FooterLink';
import SocialLinks from './SocialLinks';
import { Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Code2 className="h-6 w-6 text-blue-500" />
              <span className="ml-2 text-lg font-semibold text-zinc-50">Lakhankiya Innovations</span>
            </div>
            <p className="text-sm">
              Transforming businesses through innovative technology solutions and digital excellence.
            </p>
            <SocialLinks />
          </div>
  
          {/* Services */}
          <FooterSection title="Services">
            <ul className="space-y-2 text-sm">
              <li><FooterLink href="#web-development">Web Solutions</FooterLink></li>
              <li><FooterLink href="#mobile">Mobile Solutions</FooterLink></li>
              <li><FooterLink href="#custom-development">Custom Development</FooterLink></li>
              <li><FooterLink href="#analytics">Data Analytics</FooterLink></li>
            </ul>
          </FooterSection>
  
          {/* Company */}
          <FooterSection title="Company">
            <ul className="space-y-2 text-sm">
              <li><FooterLink href="#about">About Us</FooterLink></li>
              <li><FooterLink href="#careers">Careers</FooterLink></li>
              <li><FooterLink href="#news">Latest News</FooterLink></li>
              <li><FooterLink href="#sustainability">Sustainability</FooterLink></li>
              <li><FooterLink href="#investors">Investors</FooterLink></li>
            </ul>
          </FooterSection>
  
          {/* Resources */}
          <FooterSection title="Resources">
            <ul className="space-y-2 text-sm">
              <li><FooterLink href="#insights">Industry Insights</FooterLink></li>
              <li><FooterLink href="#case-studies">Case Studies</FooterLink></li>
              <li><FooterLink href="#events">Events</FooterLink></li>
              <li><FooterLink href="#blog">Blog</FooterLink></li>
              <li><FooterLink href="#support">Support</FooterLink></li>
            </ul>
          </FooterSection>
        </div>
      </div>
  
      {/* Bottom Bar */}
      <div className="border-t border-zinc-700 h-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center m-2">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between text-xs w-full py-1">
            <div className="mb-1 md:mb-0">
              © {new Date().getFullYear()} Lakhankiya Innovations. All rights reserved.
            </div>
            <div>
              <ul className="flex flex-wrap space-x-4 md:space-x-8">
                <li><a href="#privacy" className="hover:text-zinc-50 transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-zinc-50 transition-colors">Terms of Service</a></li>
                <li><a href="#cookies" className="hover:text-zinc-50 transition-colors">Cookie Settings</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

