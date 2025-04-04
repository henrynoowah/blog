import { MarkdowRenderer } from '@/components/common/markdowns'
import { useTranslations } from 'next-intl'
import React from 'react'

const about = `**👋 Hi, I’m @henrynoowah**

- 📚 I majored in design before becoming a Front-end Developer

<br>

### 💪 Skills

---

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=henrynoowah&theme=react&show_icons=true)

[![noowah's github stats](https://github-readme-stats.vercel.app/api/top-langs/?username=henrynoowah&show_icons=true&hide_border=true&title_color=004386&icon_color=004386&layout=compact)](https://github.com/henrynoowah)

![noowah's solved.ac stats](https://github-readme-solvedac.hyp3rflow.vercel.app/api/?handle=noowah)

`
const page = () => {
  return (
    <div className="w-full max-w-2xl px-4 xl:px-0">
      <div className="border-b py-2 mb-2 border-solid border-primary">
        <h1 className="text-[2rem] font-semibold text-primary">About Me</h1>
      </div>

      <article className="flex flex-col gap-4">
        <MarkdowRenderer markdown={about} />
      </article>
    </div>
  )
}

export default page
