import React from 'react';
import { Github, Linkedin } from 'lucide-react';

interface SocialLinksProps {
  github: string;
  linkedin: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  github,
  linkedin,
}) => {
  return (
    <div className="flex space-x-4">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors"
      >
        <Github className="w-6 h-6" />
      </a>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors"
      >
        <Linkedin className="w-6 h-6" />
      </a>
    </div>
  );
};
