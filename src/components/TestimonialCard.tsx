import React from 'react';
import { SocialLinks } from './SocialLinks';

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  image: string;
  github: string;
  linkedin: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  testimonial,
  image,
  github,
  linkedin,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex flex-col items-center text-center">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 shadow-md mb-4"
        />
        <h2 className="text-2xl font-bold text-blue-900 mb-2">{name}</h2>
        <p className="text-blue-600 mb-4">{role}</p>
        <p className="text-gray-600 mb-6 leading-relaxed">{testimonial}</p>
        <SocialLinks github={github} linkedin={linkedin} />
      </div>
    </div>
  );
};
