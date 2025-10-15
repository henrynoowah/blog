'use client';

import React from 'react';
import { NextPageIntlayer } from 'next-intlayer';
import { motion } from 'motion/react';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { Timeline } from '@/components/ui/timeline';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const timelineData = [
  {
    title: '2020',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Graduated with a <strong>Bachelor's degree in Spatial Design</strong>{' '}
          from Korea Kookmin University. This unique background in spatial
          design brings a distinctive perspective to frontend development,
          focusing on user experience and interface spatial relationships.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {/* <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="graduation"
            width={500}
            height={300}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-sm"
          />
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="spatial design"
            width={500}
            height={300}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-sm"
          /> */}
        </div>
      </div>
    ),
  },
  {
    title: '2022 - Present',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Currently working as a <strong>Frontend Developer | Team Lead</strong>{' '}
          at CloudHospital, leading frontend development initiatives and
          managing development teams. Specializing in Next.js, TypeScript, and
          modern frontend architectures for healthcare applications.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {/* <img
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="healthcare technology"
            width={500}
            height={300}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-sm"
          />
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="team leadership"
            width={500}
            height={300}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-sm"
          /> */}
        </div>
      </div>
    ),
  },
];

const AboutPage: NextPageIntlayer = ({ params }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          Hi, I'm{' '}
          <Highlight className="text-black dark:text-white">
            Hawoon Joh
          </Highlight>
          <br />A frontend developer with spatial design expertise
        </motion.h1>
      </HeroHighlight>

      {/* Introduction Section */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <TextGenerateEffect
          words="I'm a frontend developer with 3+ years of experience specializing in Next.js and TypeScript. With a unique background in spatial design from Korea Kookmin University, I bring a distinctive perspective to creating intuitive and visually compelling web applications that prioritize user experience."
          className="text-center"
        />

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-neutral-50 dark:bg-neutral-900">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-neutral-600 dark:text-neutral-400">
              Years Experience
            </div>
          </div>
          <div className="text-center p-6 rounded-lg bg-neutral-50 dark:bg-neutral-900">
            <div className="text-3xl font-bold text-primary mb-2">Team</div>
            <div className="text-neutral-600 dark:text-neutral-400">
              Leadership Role
            </div>
          </div>
          <div className="text-center p-6 rounded-lg bg-neutral-50 dark:bg-neutral-900">
            <div className="text-3xl font-bold text-primary mb-2">
              Healthcare
            </div>
            <div className="text-neutral-600 dark:text-neutral-400">
              Industry Focus
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-neutral-800 dark:text-white">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              category: 'Frontend',
              skills: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
            },
            {
              category: 'Design',
              skills: ['Spatial Design', 'UI/UX', 'Figma', 'User Experience'],
            },
            {
              category: 'Tools',
              skills: ['Git', 'VS Code', 'Vercel', 'Team Leadership'],
            },
            {
              category: 'Industry',
              skills: [
                'Healthcare Tech',
                'CloudHospital',
                'Frontend Architecture',
                'Team Management',
              ],
            },
          ].map((skillGroup, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-neutral-50 dark:bg-neutral-900"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-neutral-600 dark:text-neutral-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <Timeline data={timelineData} />

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-800 dark:text-white">
          Let's Work Together
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
          I'm always excited about new opportunities and interesting projects.
          Whether you have a question or just want to say hi, feel free to reach
          out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:henrynoowah@gmail.com"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </a>
          {/* <a
            href="/resume.pdf"
            target="_blank"
            className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Download Resume
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
