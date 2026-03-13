import { t, type Dictionary } from 'intlayer';

const aboutContent: Dictionary = {
  key: 'about',
  content: {
    hero: {
      subtitle: t({
        en: 'Frontend Developer & Spatial Designer',
        ko: '프론트엔드 개발자 & 공간 디자이너',
      }),
      name: t({
        en: 'Hawoon Joh',
        ko: '조하운',
      }),
    },
    sections: {
      about: t({
        en: 'About',
        ko: '소개',
      }),
      expertise: t({
        en: 'Expertise',
        ko: '전문 분야',
      }),
      work: t({
        en: 'Work',
        ko: '작업',
      }),
      contact: t({
        en: 'Contact',
        ko: '연락처',
      }),
    },
    introduction: {
      description: t({
        en: "I'm a frontend developer with 3+ years of experience specializing in Next.js and TypeScript. With a unique background in spatial design from Korea Kookmin University, I bring a distinctive perspective to creating intuitive and visually compelling web applications that prioritize user experience.",
        ko: '저는 Next.js와 TypeScript를 전문으로 하는 3년 이상의 경험을 가진 프론트엔드 개발자입니다. 국민대학교 공간디자인학과 출신의 독특한 배경을 바탕으로, 사용자 경험을 우선시하는 직관적이고 시각적으로 매력적인 웹 애플리케이션 제작에 차별화된 관점을 제공합니다.',
      }),
      highlightWord: t({
        en: 'spatial design',
        ko: '공간 디자인',
      }),
      experienceHighlight: t({
        en: '3+ years of experience',
        ko: '3년 이상의 경력',
      }),
      stats: {
        experience: {
          value: t({ en: '3+', ko: '3+' }),
          label: t({ en: 'Years of Experience', ko: '년 경력' }),
        },
        leadership: {
          value: t({ en: 'Lead', ko: '리드' }),
          label: t({ en: 'Team Leadership', ko: '팀 리더십' }),
        },
        industry: {
          value: t({ en: 'Health', ko: '헬스' }),
          label: t({ en: 'Industry Focus', ko: '산업 집중' }),
        },
      },
    },
    skills: {
      title: t({
        en: 'Skills & Technologies',
        ko: '기술 & 도구',
      }),
      categories: {
        frontend: {
          title: t({ en: 'Frontend', ko: '프론트엔드' }),
          skills: t({
            en: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
            ko: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
          }),
        },
        design: {
          title: t({ en: 'Design', ko: '디자인' }),
          skills: t({
            en: ['Spatial Design', 'UI/UX', 'Figma', 'User Experience'],
            ko: ['공간 디자인', 'UI/UX', 'Figma', '사용자 경험'],
          }),
        },
        tools: {
          title: t({ en: 'Tools', ko: '도구' }),
          skills: t({
            en: ['Git', 'VS Code', 'Vercel', 'Team Leadership'],
            ko: ['Git', 'VS Code', 'Vercel', '팀 리더십'],
          }),
        },
        industry: {
          title: t({ en: 'Industry', ko: '산업' }),
          skills: t({
            en: ['Healthcare Tech', 'CloudHospital', 'Frontend Architecture', 'Team Management'],
            ko: ['헬스케어 기술', 'CloudHospital', '프론트엔드 아키텍처', '팀 관리'],
          }),
        },
      },
    },
    timeline: {
      title: t({
        en: 'My Journey',
        ko: '나의 여정',
      }),
      subtitle: t({
        en: "Here's a timeline of my professional and personal growth.",
        ko: '저의 전문적, 개인적 성장의 타임라인입니다.',
      }),
      education: {
        title: t({ en: '2020', ko: '2020년' }),
        degree: t({
          en: "Bachelor's degree in Spatial Design",
          ko: '공간디자인학과 학사 학위',
        }),
        content: t({
          en: "Graduated with a Bachelor's degree in Spatial Design from Korea Kookmin University. This unique background in spatial design brings a distinctive perspective to frontend development, focusing on user experience and interface spatial relationships.",
          ko: '국민대학교 공간디자인학과에서 학사 학위를 취득했습니다. 공간 디자인의 독특한 배경은 사용자 경험과 인터페이스 공간 관계에 중점을 두어 프론트엔드 개발에 차별화된 관점을 제공합니다.',
        }),
      },
      work: {
        title: t({ en: '2022 - Present', ko: '2022년 - 현재' }),
        role: t({
          en: 'Frontend Developer | Team Lead',
          ko: '프론트엔드 개발자 | 팀 리드',
        }),
        content: t({
          en: 'Currently working as a Frontend Developer | Team Lead at CloudHospital, leading frontend development initiatives and managing development teams. Specializing in Next.js, TypeScript, and modern frontend architectures for healthcare applications.',
          ko: '현재 CloudHospital에서 프론트엔드 개발자 | 팀 리드로 근무하며, 프론트엔드 개발 이니셔티브를 주도하고 개발팀을 관리하고 있습니다. 헬스케어 애플리케이션을 위한 Next.js, TypeScript 및 현대적인 프론트엔드 아키텍처를 전문으로 합니다.',
        }),
      },
    },
    projects: {
      title: t({
        en: 'Selected Projects',
        ko: '주요 프로젝트',
      }),
      source: t({ en: 'Source', ko: '소스' }),
      demo: t({ en: 'Demo', ko: '데모' }),
      items: {
        contentBuilder: {
          title: t({ en: 'CMS Content Builder', ko: 'CMS 콘텐츠 빌더' }),
          description: t({
            en: 'A visual UI editor and content builder with a component-driven architecture. Provides an intuitive drag-and-drop interface for building rich content layouts.',
            ko: '컴포넌트 기반 아키텍처로 설계된 비주얼 UI 에디터 및 콘텐츠 빌더. 직관적인 드래그 앤 드롭 인터페이스로 리치 콘텐츠 레이아웃을 구성할 수 있습니다.',
          }),
          tags: t({
            en: ['UI Editor', 'CMS', 'Storybook', 'Component Library'],
            ko: ['UI 에디터', 'CMS', 'Storybook', '컴포넌트 라이브러리'],
          }),
        },
        prVersioning: {
          title: t({ en: 'node-pr-versioning', ko: 'node-pr-versioning' }),
          description: t({
            en: 'A GitHub Action that automates Node.js package versioning via PR labels. Supports major/minor/patch bumps, monorepo paths, custom commit messages, tag generation, and dry-run mode.',
            ko: 'PR 라벨을 통해 Node.js 패키지 버저닝을 자동화하는 GitHub Action. major/minor/patch 버전 업, 모노레포 경로, 커스텀 커밋 메시지, 태그 생성, dry-run 모드를 지원합니다.',
          }),
          tags: t({
            en: ['GitHub Action', 'Node.js', 'Automation', 'CI/CD'],
            ko: ['GitHub Action', 'Node.js', '자동화', 'CI/CD'],
          }),
        },
      },
    },
    contact: {
      titleLine1: t({ en: "Let's build", ko: '함께' }),
      titleHighlight: t({ en: 'something', ko: '멋진 것을' }),
      titleLine2: t({ en: 'great.', ko: '만들어요.' }),
      button: t({ en: 'Get in Touch', ko: '연락하기' }),
      email: 'henrynoowah@gmail.com',
    },
  },
} satisfies Dictionary;

export default aboutContent;
