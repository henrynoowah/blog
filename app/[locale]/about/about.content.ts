import { t, type Dictionary } from 'intlayer';

const aboutContent: Dictionary = {
  key: 'about',
  content: {
    hero: {
      greeting: t({
        en: "Hi, I'm",
        ko: '안녕하세요, 저는',
      }),
      name: t({
        en: 'Hawoon Joh',
        ko: '조하운',
      }),
      subtitle: t({
        en: 'A frontend developer with 3+',
        ko: '공간 디자인 전문성을 가진 프론트엔드 개발자',
      }),
    },
    introduction: {
      description: t({
        en: "I'm a frontend developer with 3+ years of experience specializing in Next.js and TypeScript. With a unique background in spatial design from Korea Kookmin University, I bring a distinctive perspective to creating intuitive and visually compelling web applications that prioritize user experience.",
        ko: '저는 Next.js와 TypeScript를 전문으로 하는 3년 이상의 경험을 가진 프론트엔드 개발자입니다. 국민대학교 공간디자인학과 출신의 독특한 배경을 바탕으로, 사용자 경험을 우선시하는 직관적이고 시각적으로 매력적인 웹 애플리케이션 제작에 차별화된 관점을 제공합니다.',
      }),
      stats: {
        experience: {
          number: t({
            en: '3+',
            ko: '3+',
          }),
          label: t({
            en: 'Years Experience',
            ko: '년 경력',
          }),
        },
        leadership: {
          label: t({
            en: 'Team Leadership Role',
            ko: '팀 리더십 역할',
          }),
        },
        industry: {
          label: t({
            en: 'Healthcare Industry Focus',
            ko: '헬스케어 산업 집중',
          }),
        },
      },
    },
    skills: {
      title: t({
        en: 'Skills & Technologies',
        ko: '기술 및 도구',
      }),
      categories: {
        frontend: {
          title: t({
            en: 'Frontend',
            ko: '프론트엔드',
          }),
          skills: t({
            en: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
            ko: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
          }),
        },
        design: {
          title: t({
            en: 'Design',
            ko: '디자인',
          }),
          skills: t({
            en: ['Spatial Design', 'UI/UX', 'Figma', 'User Experience'],
            ko: ['공간 디자인', 'UI/UX', 'Figma', '사용자 경험'],
          }),
        },
        tools: {
          title: t({
            en: 'Tools',
            ko: '도구',
          }),
          skills: t({
            en: ['Git', 'VS Code', 'Vercel', 'Team Leadership'],
            ko: ['Git', 'VS Code', 'Vercel', '팀 리더십'],
          }),
        },
        industry: {
          title: t({
            en: 'Industry',
            ko: '산업',
          }),
          skills: t({
            en: [
              'Healthcare Tech',
              'CloudHospital',
              'Frontend Architecture',
              'Team Management',
            ],
            ko: [
              '헬스케어 기술',
              'CloudHospital',
              '프론트엔드 아키텍처',
              '팀 관리',
            ],
          }),
        },
      },
    },
    timeline: {
      education: {
        title: t({
          en: '2020',
          ko: '2020년',
        }),
        content: t({
          en: "Graduated with a Bachelor's degree in Spatial Design from Korea Kookmin University. This unique background in spatial design brings a distinctive perspective to frontend development, focusing on user experience and interface spatial relationships.",
          ko: '국민대학교 공간디자인학과에서 학사 학위를 취득했습니다. 공간 디자인의 독특한 배경은 사용자 경험과 인터페이스 공간 관계에 중점을 두어 프론트엔드 개발에 차별화된 관점을 제공합니다.',
        }),
      },
      work: {
        title: t({
          en: '2022 - Present',
          ko: '2022년 - 현재',
        }),
        content: t({
          en: 'Currently working as a Frontend Developer | Team Lead at CloudHospital, leading frontend development initiatives and managing development teams. Specializing in Next.js, TypeScript, and modern frontend architectures for healthcare applications.',
          ko: '현재 CloudHospital에서 프론트엔드 개발자 | 팀 리드로 근무하며, 프론트엔드 개발 이니셔티브를 주도하고 개발팀을 관리하고 있습니다. 헬스케어 애플리케이션을 위한 Next.js, TypeScript 및 현대적인 프론트엔드 아키텍처를 전문으로 합니다.',
        }),
      },
    },
    contact: {
      title: t({
        en: "Let's Work Together",
        ko: '함께 일해요',
      }),
      description: t({
        en: "I'm always excited about new opportunities and interesting projects. Whether you have a question or just want to say hi, feel free to reach out!",
        ko: '저는 항상 새로운 기회와 흥미로운 프로젝트에 대해 기대하고 있습니다. 질문이 있거나 인사를 나누고 싶으시다면 언제든지 연락해 주세요!',
      }),
      button: t({
        en: 'Get In Touch',
        ko: '연락하기',
      }),
    },
  },
} satisfies Dictionary;

export default aboutContent;
