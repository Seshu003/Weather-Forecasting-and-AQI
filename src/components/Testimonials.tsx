import React from 'react';
import { TestimonialCard } from './TestimonialCard';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Seshu',
      role: 'Full Stack Developer',
      testimonial:
        'Passionate about creating innovative solutions and building scalable applications. Experienced in modern web technologies and cloud platforms.',
      image: 'https://avatars.githubusercontent.com/u/110688141?v=4',
      github: 'https://github.com/Seshu003',
      linkedin: 'https://www.linkedin.com/in/sai-seshu',
    },
    {
      name: 'Yaswanth',
      role: 'Tech Enthusiast',
      testimonial:
        'Skilled in ECE, cloud engineering, AI/ML, and web development. Passionate about crafting efficient solutions and innovative tech projects.',
      image:
        'https://avatars.githubusercontent.com/u/86795414?s=400&u=4ceabe254bdbbda883dedf80b6ddf0bdf35b72f1&v=4',
      github: 'https://github.com/yaswanth-yashu',
      linkedin: 'https://www.linkedin.com/in/yaswanthd',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
