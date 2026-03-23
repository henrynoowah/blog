'use client';

import React from 'react';
import { NextPageIntlayer } from 'next-intlayer';
import { motion, useScroll, useTransform } from 'motion/react';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { TextScramble } from '@/components/ui/text-scramble';
import { Timeline } from '@/components/ui/timeline';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  IconBrandGithub,
  IconExternalLink,
  IconCode,
  IconTool,
  IconBuildingHospital,
  IconArrowUpRight,
  IconForms,
  IconAutomation,
} from '@tabler/icons-react';
import { useRef } from 'react';
import { useIntlayer } from 'next-intlayer';

const iconMap = {
  frontend: IconCode,
  tools: IconTool,
  industry: IconBuildingHospital,
} as const;

const spanMap: Record<string, string> = {
  frontend: 'md:col-span-2 md:row-span-1',
  tools: 'md:col-span-1 md:row-span-1',
  industry: 'md:col-span-1 md:row-span-1',
};

const projectMeta = {
  formBuilder: {
    demo: 'https://shadcn-rjsf-form-builder.noowah.dev/',
    icon: IconForms,
  },
  contentBuilder: {
    demo: 'https://content-builder.noowah.dev/',
    icon: IconCode,
  },
  prVersioning: {
    github: 'https://github.com/marketplace/actions/node-pr-versioning',
    icon: IconAutomation,
  },
} as const;

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, x: -12 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-3 mb-10"
  >
    <div className="w-8 h-px bg-primary" />
    <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">
      {children}
    </span>
  </motion.div>
);

const AboutPage: NextPageIntlayer = ({ params }) => {
  const content = useIntlayer('about');
  const introRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ['start end', 'end start'],
  });
  const introY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const stats = [
    {
      key: 'experience',
      value: content.introduction.stats.experience.value,
      label: content.introduction.stats.experience.label,
    },
    {
      key: 'leadership',
      value: content.introduction.stats.leadership.value,
      label: content.introduction.stats.leadership.label,
    },
    {
      key: 'industry',
      value: content.introduction.stats.industry.value,
      label: content.introduction.stats.industry.label,
    },
  ];

  const skillCategories = Object.entries(content.skills.categories) as Array<
    [string, { title: string; skills: string[] }]
  >;

  const projects = [
    {
      key: 'formBuilder' as const,
      title: content.projects.items.formBuilder.title,
      description: content.projects.items.formBuilder.description,
      tags: content.projects.items.formBuilder.tags as string[],
      demo: projectMeta.formBuilder.demo,
      icon: projectMeta.formBuilder.icon,
    },
    {
      key: 'contentBuilder' as const,
      title: content.projects.items.contentBuilder.title,
      description: content.projects.items.contentBuilder.description,
      tags: content.projects.items.contentBuilder.tags as string[],
      demo: projectMeta.contentBuilder.demo,
      icon: projectMeta.contentBuilder.icon,
    },
    {
      key: 'prVersioning' as const,
      title: content.projects.items.prVersioning.title,
      description: content.projects.items.prVersioning.description,
      tags: content.projects.items.prVersioning.tags as string[],
      github: projectMeta.prVersioning.github,
      icon: projectMeta.prVersioning.icon,
    },
  ];

  const timelineData = [
    {
      title: content.timeline.education.title,
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {content.timeline.education.content}
          </p>
        </div>
      ),
    },
    {
      title: content.timeline.work.title,
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {content.timeline.work.content}
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* ─── Hero ─── */}
      <HeroHighlight>
        <div className="max-w-5xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start md:items-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground mb-6"
            >
              {content.hero.subtitle}
            </motion.p>

            <TextScramble
              text="NOOWAH"
              revealText="HAWOON"
              className="font-serif text-[10vw] md:text-7xl lg:text-8xl font-extrabold text-foreground leading-[0.9] tracking-tight md:text-center uppercase"
            />

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 0.7,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-24 h-px bg-primary/40 mt-8 origin-left"
            />
          </motion.div>
        </div>
      </HeroHighlight>

      {/* ─── Introduction ─── */}
      <div
        ref={introRef}
        className="relative max-w-5xl mx-auto px-6 py-24 md:py-32"
      >
        <SectionLabel>{content.sections.about}</SectionLabel>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          <motion.div className="md:col-span-7" style={{ y: introY }}>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/80 font-light">
              {content.introduction.description}
            </p>
          </motion.div>

          <div className="md:col-span-5 md:col-start-8">
            <div className="flex flex-col gap-0">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group py-5 border-b border-border/60 last:border-none"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-serif text-4xl md:text-5xl font-bold text-primary transition-transform duration-300 group-hover:translate-x-1">
                      {stat.value}
                    </span>
                    <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Skills Bento Grid ─── */}
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <SectionLabel>{content.sections.expertise}</SectionLabel>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-12 leading-tight uppercase"
        >
          {content.skills.title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-4 auto-rows-min">
          {skillCategories.map(([key, category], index) => {
            const Icon = iconMap[key as keyof typeof iconMap] ?? IconCode;
            const span = spanMap[key] ?? '';
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={span}
              >
                <Card className="h-full border-border/40 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 group overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="relative">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="size-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/40 transition-all duration-500">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                      <CardTitle className="text-base font-medium tracking-wide">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="flex flex-wrap gap-2">
                      {(category.skills as string[]).map(
                        (skill, skillIndex) => (
                          <motion.div
                            key={`${key}-skill-${skillIndex}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: index * 0.08 + skillIndex * 0.05,
                            }}
                          >
                            <Badge
                              variant="outline"
                              className="text-xs font-light border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-300"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ─── Timeline ─── */}
      <Timeline data={timelineData} />

      {/* ─── Projects ─── */}
      <div id="projects" className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <SectionLabel>{content.sections.work}</SectionLabel>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-12 leading-tight uppercase"
        >
          {content.projects.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Card className="h-full overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm group hover:border-primary/30 transition-all duration-500 relative">
                  {/* Top accent line */}
                  <div className="h-px w-full bg-border/60 group-hover:bg-primary/60 transition-colors duration-500" />

                  <div className="p-5 md:p-6 flex flex-col h-full">
                    {/* Header: number + icon */}
                    <div className="flex items-center justify-between mb-6 md:mb-8">
                      <span className="font-mono text-[10px] tracking-widest text-muted-foreground/50">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="size-9 md:size-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/40 transition-all duration-500">
                        <Icon size={16} strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs md:text-sm text-muted-foreground/80 leading-relaxed font-light mb-5 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={`${project.key}-tag-${tagIndex}`}
                          variant="outline"
                          className="text-[10px] font-light border-border/50 text-muted-foreground/60"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Divider + actions */}
                    <div className="h-px w-full bg-border/40 mb-4" />
                    <div className="flex items-center gap-3">
                      {'github' in project && project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                        >
                          <IconBrandGithub size={14} strokeWidth={1.5} />
                          {content.projects.source}
                        </a>
                      )}
                      {'demo' in project && project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                        >
                          <IconExternalLink size={14} strokeWidth={1.5} />
                          {content.projects.demo}
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ─── Contact ─── */}
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8">
            <div className="min-w-0">
              <SectionLabel>{content.sections.contact}</SectionLabel>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[0.9] uppercase break-words">
                {content.contact.titleLine1}
                <br />
                <span className="text-primary">
                  {content.contact.titleHighlight}
                </span>{' '}
                {content.contact.titleLine2}
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button
                size="lg"
                className="text-sm font-light tracking-wider rounded-full px-8 h-12"
                asChild
              >
                <a href={`mailto:${content.contact.email}`}>
                  {content.contact.button}
                  <IconArrowUpRight size={16} strokeWidth={1.5} />
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-px bg-border/60 mt-12 origin-left"
          />

          <p className="text-xs text-muted-foreground/50 mt-6 tracking-wide">
            {content.contact.email}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
