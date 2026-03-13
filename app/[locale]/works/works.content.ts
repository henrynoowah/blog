import { t, type Dictionary } from 'intlayer';

const worksContent: Dictionary = {
  key: 'works',
  content: {
    hero: {
      title: t({ en: 'Works', ko: '작업' }),
      description: t({
        en: "A collection of projects I've built — from developer tools to full applications. Each one reflects my focus on clean architecture and great user experience.",
        ko: '개발자 도구부터 완성된 애플리케이션까지 — 제가 만든 프로젝트 모음입니다. 모든 프로젝트는 클린 아키텍처와 뛰어난 사용자 경험에 대한 저의 집중을 반영합니다.',
      }),
    },
    viewSource: t({ en: 'View Source', ko: '소스 보기' }),
    liveDemo: t({ en: 'Live Demo', ko: '라이브 데모' }),
    items: {
      contentBuilder: {
        title: t({ en: 'CMS Content Builder', ko: 'CMS 콘텐츠 빌더' }),
        description: t({
          en: 'Visual UI Editor & Content Builder',
          ko: '비주얼 UI 에디터 & 콘텐츠 빌더',
        }),
        longDescription: t({
          en: 'A visual UI editor and content builder with a component-driven architecture. Provides an intuitive drag-and-drop interface for building rich content layouts with live preview and reusable components.',
          ko: '컴포넌트 기반 아키텍처로 설계된 비주얼 UI 에디터 및 콘텐츠 빌더. 라이브 프리뷰와 재사용 가능한 컴포넌트로 리치 콘텐츠 레이아웃을 구성하는 직관적인 드래그 앤 드롭 인터페이스를 제공합니다.',
        }),
        category: t({ en: 'Application', ko: '애플리케이션' }),
        tags: t({
          en: ['React', 'TypeScript', 'Storybook', 'Drag & Drop', 'Component Library'],
          ko: ['React', 'TypeScript', 'Storybook', '드래그 앤 드롭', '컴포넌트 라이브러리'],
        }),
      },
      prVersioning: {
        title: t({ en: 'node-pr-versioning', ko: 'node-pr-versioning' }),
        description: t({
          en: 'Automated Package Versioning',
          ko: '자동화된 패키지 버저닝',
        }),
        longDescription: t({
          en: 'A GitHub Action that automates Node.js package versioning via PR labels. Supports major/minor/patch bumps, monorepo paths, custom commit messages, tag generation, and dry-run mode for safe testing.',
          ko: 'PR 라벨을 통해 Node.js 패키지 버저닝을 자동화하는 GitHub Action. major/minor/patch 버전 업, 모노레포 경로, 커스텀 커밋 메시지, 태그 생성, dry-run 모드를 지원합니다.',
        }),
        category: t({ en: 'Developer Tool', ko: '개발자 도구' }),
        tags: t({
          en: ['GitHub Action', 'Node.js', 'CI/CD', 'Automation', 'Monorepo'],
          ko: ['GitHub Action', 'Node.js', 'CI/CD', '자동화', '모노레포'],
        }),
      },
      blog: {
        title: t({ en: 'Personal Blog', ko: '개인 블로그' }),
        description: t({
          en: 'Portfolio & Blog Platform',
          ko: '포트폴리오 & 블로그 플랫폼',
        }),
        longDescription: t({
          en: 'A modern portfolio and blog built with Next.js 16, featuring 3D graphics with Spline, internationalization, theme switching, and animated UI components. The site you are currently viewing.',
          ko: 'Next.js 16으로 구축된 현대적인 포트폴리오 및 블로그. Spline 3D 그래픽, 국제화, 테마 전환, 애니메이션 UI 컴포넌트를 특징으로 합니다. 지금 보고 계신 사이트입니다.',
        }),
        category: t({ en: 'Website', ko: '웹사이트' }),
        tags: t({
          en: ['Next.js', 'TypeScript', 'Spline 3D', 'i18n', 'Tailwind CSS'],
          ko: ['Next.js', 'TypeScript', 'Spline 3D', 'i18n', 'Tailwind CSS'],
        }),
      },
    },
  },
} satisfies Dictionary;

export default worksContent;
