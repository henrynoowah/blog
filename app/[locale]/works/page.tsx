'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  IconBrandGithub,
  IconExternalLink,
  IconCode,
  IconRocket,
  IconAutomation,
} from '@tabler/icons-react';
import { useIntlayer } from 'next-intlayer';

const worksMeta = {
  contentBuilder: {
    demo: 'https://noowah-content-builder-docs.vercel.app/?path=/story/ui-editor--default',
    icon: IconCode,
  },
  prVersioning: {
    github: 'https://github.com/marketplace/actions/node-pr-versioning',
    icon: IconAutomation,
  },
  blog: {
    github: 'https://github.com/henrynoowah/blog',
    icon: IconRocket,
  },
} as const;

const WorksPage = () => {
  const content = useIntlayer('works');

  const works = (
    Object.entries(content.items) as Array<
      [string, { title: string; description: string; longDescription: string; category: string; tags: string[] }]
    >
  ).map(([key, item]) => {
    const meta = worksMeta[key as keyof typeof worksMeta];
    return {
      key,
      ...item,
      tags: item.tags as string[],
      icon: meta.icon,
      github: 'github' in meta ? (meta as { github: string }).github : undefined,
      demo: 'demo' in meta ? (meta as { demo: string }).demo : undefined,
    };
  });

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 md:py-20">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase">
          {content.hero.title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {content.hero.description}
        </p>
      </motion.div>

      {/* Works Grid */}
      <div className="grid gap-8">
        {works.map((work, index) => {
          const Icon = work.icon;
          return (
            <motion.div
              key={work.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 group">
                <div className="flex flex-col md:flex-row">
                  <div className="flex items-center justify-center p-8 md:p-12 bg-muted/50 group-hover:bg-primary/5 transition-colors duration-300">
                    <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                      <Icon size={32} />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-1">
                        <Badge variant="secondary" className="text-xs font-medium">
                          {work.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {work.title}
                      </CardTitle>
                      <CardDescription>{work.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {work.longDescription}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {work.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="gap-3">
                      {work.github && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={work.github} target="_blank" rel="noopener noreferrer">
                            <IconBrandGithub size={16} />
                            {content.viewSource}
                          </a>
                        </Button>
                      )}
                      {work.demo && (
                        <Button size="sm" asChild>
                          <a href={work.demo} target="_blank" rel="noopener noreferrer">
                            <IconExternalLink size={16} />
                            {content.liveDemo}
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WorksPage;
