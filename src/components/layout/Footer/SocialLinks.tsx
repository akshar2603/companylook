import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <a href="#facebook" className="text-zinc-300 hover:text-zinc-50 transition-colors">
        <Facebook className="h-5 w-5" />
      </a>
      <a href="#twitter" className="text-zinc-300 hover:text-zinc-50 transition-colors">
        <Twitter className="h-5 w-5" />
      </a>
      <a href="#linkedin" className="text-zinc-300 hover:text-zinc-50 transition-colors">
        <LinkedIn className="h-5 w-5" />
      </a>
      <a href="#instagram" className="text-zinc-300 hover:text-zinc-50 transition-colors">
        <Instagram className="h-5 w-5" />
      </a>
    </div>
  );
};

export default SocialLinks;

