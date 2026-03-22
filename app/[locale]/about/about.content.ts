import { t, type Dictionary } from 'intlayer';

const aboutContent: Dictionary = {
  key: 'about',
  content: {
    hero: {
      subtitle: t({
        en: 'Frontend Developer',
        ko: '프론트엔드 개발자',
      }),
      name: 'NOOWAH',
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
        en: "I'm a frontend developer with 3+ years of experience specializing in Next.js and TypeScript. With a background in spatial design (B.A., Korea Kookmin University), I bring a design-informed perspective to building intuitive and performant web applications.",
        ko: '저는 Next.js와 TypeScript를 전문으로 하는 3년 이상의 경험을 가진 프론트엔드 개발자입니다. 국민대학교 공간디자인학과 학사 학위를 바탕으로, 직관적이고 성능 높은 웹 애플리케이션 개발에 디자인적 관점을 더합니다.',
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
        tools: {
          title: t({ en: 'Tools & DevOps', ko: '도구 & DevOps' }),
          skills: t({
            en: ['Git', 'VS Code', 'Vercel', 'GitHub Actions', 'CI/CD'],
            ko: ['Git', 'VS Code', 'Vercel', 'GitHub Actions', 'CI/CD'],
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
          en: "Graduated with a Bachelor's degree in Spatial Design from Korea Kookmin University. This design background informs my approach to frontend development — focusing on layout, spatial relationships, and user experience.",
          ko: '국민대학교 공간디자인학과에서 학사 학위를 취득했습니다. 디자인 전공 배경은 레이아웃, 공간 관계, 사용자 경험에 중점을 둔 프론트엔드 개발 접근 방식에 영향을 줍니다.',
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
        formBuilder: {
          title: t({ en: 'shadcn/ui RJSF Form Builder', ko: 'shadcn/ui RJSF 폼 빌더' }),
          description: t({
            en: 'A form builder powered by react-jsonschema-form with shadcn/ui components. Generates dynamic forms from JSON Schema with a visual builder interface.',
            ko: 'shadcn/ui 컴포넌트와 react-jsonschema-form을 활용한 폼 빌더. JSON Schema로부터 동적 폼을 생성하는 비주얼 빌더 인터페이스를 제공합니다.',
          }),
          tags: t({
            en: ['React', 'JSON Schema', 'shadcn/ui', 'Form Builder'],
            ko: ['React', 'JSON Schema', 'shadcn/ui', '폼 빌더'],
          }),
        },
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
