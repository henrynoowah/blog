import { getPost, getPosts } from '@/services/posts'
const token = process.env.GH_TOKEN
const owner = 'henrynoowah'
const repo = 'posts-dev'
const API_ROOT = `https://api.github.com/repos/${owner}/${repo}/issues`

export const GET = async (req: Request) => {
  // const posts = await getPosts({ limit: 100, cursor: '' })

  // console.log(posts)
  // let cursor = ''

  // let vposts: any[] = []

  // const arr = Array.from({ length: 4 })
  // for (let i of arr) {
  //   const posts = await getPosts({ limit: 20, cursor })
  //   console.log(posts.map((x) => x.title))
  //   vposts = [...vposts, ...posts]
  //   cursor = posts[posts.length - 1].id
  // }

  const data = [
    'PYTHON-Programmers-주식가격',
    'PYTHON-Programmers-모의고사',
    'PYTHON-Programmers-다리를-지나는-트',
    'HTTP-Header-Body',
    'PYTHON-BAEKJOON-2606-바이러스',
    '프로그래머스-기능개발-PYTHON',
    '프로그래머스-소수찾기-lvl.2-PYTHON',
    '프로그래머스-체육복-JavaScript',
    '프로그래머스-완주하지-못한-선수-PYTHON',
    '프로그래머스-타겟넘버-PYTHON',
    'VUE-Directive',
    '프로그래머스-타겟넘버-PYTHON-61fk9t38',
    'JavaScript-AJAX',
    '프로그래머스-구명보트-JavaScript',
    '백준-계단오르기-PYTHON',
    'JPA-Annotations-Sequence',
    '프로그래머스-배달-PYTHON',
    '백준-18352번-특정-거리의-도시-찾기-PYTHON',
    '프로그래머스-가장-먼-노드-PYTHON',
    'Vue.js-Vue-directives-extended',
    'Vue.js-Components-props-emit',
    'Spring-AOP-관점-지향-프로그래밍',
    'Spring-MVC-Pattern-Basics',
    'Spring-URI-Template',
    'Spring-Session-Tracking',
    'Spring-Boot-Spring-Data-JPA',
    '프로그래머스-섬-연결하기-PYTHON',
    '프로그래머스-여행경로-PYTHON',
    '백준-9184번-PYTHON',
    'Next.js-Routing-Basics',
    'Next.js-Routes-Navigation',
    'Next.js-Pre-Rendering',
    'Next.js-Typescript-Basics',
    'Next.js-getStaticPath',
    'React.js-UseMemo-UseCallback',
    'Next.js-Incremental-Static-Regeneration',
    'Next.js-Sever-Side-Rendering',
    'Next.js-Redux',
    'Redux-Tool-Kit-CreateSlice',
    'React.js-Modal-using-React-Portal',
    'React.js-Styled-Components-Parameters',
    'Typescript-Generics',
    'Typescript-Generics-Utility-Types-1',
    'React.js-Custom-Hooks',
    'CSS-CSS-reset',
    'Next.js-Private-Route',
    'TypeScript-tsconfig.json',
    'Next.js-Redux-Wrapper',
    'Next.js-NEXT-JS-environment-variables',
    'SEO-Robots.txt-Sitemap.xml',
    'SEO-HTML-Head-Elements',
    'Next.js-v13-Changes',
    'Next.js-Experimental-AppDir-4fx9bci5',
    'SWR-2.0-mutation',
    'Next-Auth-Reload-Session-Client-side',
    'Next.js-TailwindCSS-환경변수를-이용한-컬러-테마-설정',
    'HTML-Dir-rtl-tlr',
    'Next.js-v13.2-Feature-Metadata',
    'Next.js-v13.2-Feature-appDir-Route-Handlers',
    'Next.js-Chunk-naming',
    'JS-BUG-Cant-find-variable-IntersectionObserver',
    'Next.js-Pre-build-scripts',
    'Next.js-v13.-nextnavigation',
    '9q8wb8lv',
    'Github-Workflows-Tag-Release-Automation',
    'Github-Workflows-Vercel-Managing-Deployments'
  ]

  // const sorted = vposts.sort((a: any, b: any) => Date.parse(a.released_at) - Date.parse(b.released_at))
  let completed: string[] = []
  for (let p of data) {
    const post = await getPost(p)

    const payload = {
      title: post.title,
      body: post.body,
      labels: [...post.tags.map((x: string) => x.toLowerCase()), 'ko']
    }

    const response = await fetch(API_ROOT, {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github+json'
      },
      method: 'POST',
      body: JSON.stringify(payload)
    })

    const data = await response.json()
    completed.push(data.title)
  }

  return Response.json(completed)
}
