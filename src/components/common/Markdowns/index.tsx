'use client'

import '@uiw/react-markdown-preview/markdown.css'
import { CSSProperties } from 'react'
import ReactMarkdown from 'react-markdown'
import { SpecialComponents } from 'react-markdown/lib/ast-to-react'
import { NormalComponents } from 'react-markdown/lib/complex-types'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

import '@uiw/react-markdown-preview/markdown.css'
import '@uiw/react-md-editor/markdown-editor.css'
import Image from 'next/image'

interface Params {
  markdown?: string
}

type MarkDownComponents = Partial<Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents>

const markdownComponents: MarkDownComponents = {
  h1: ({ node, ...props }) => (
    <h1 className="text-primary dark:text-light font-bold text-2xl py-6" {...props}>
      {props.children}
      {/* {props.children ? <hr className="border-b-2 border-spild border-primary/20" /> : ''} */}
    </h1>
  ),
  h2: ({ node, ...props }) => (
    <h2 className="text-primary dark:text-light font-bold text-xl py-6" {...props}>
      {props.children}
      {/* {props.children ? <hr className="border-b-2 border-spild border-primary/20" /> : ''} */}
    </h2>
  ),
  h3: ({ node, ...props }) => <h3 className="text-primary dark:text-light font-bold text-lg py-6" {...props} />,
  h4: ({ node, ...props }) => <h4 className="text-primary dark:text-light font-bold text-md" {...props} />,
  h5: ({ node, ...props }) => <h5 className="text-primary dark:text-light font-bold text-md" {...props} />,
  h6: ({ node, ...props }) => <h5 className="text-primary/60 font-bold text-md" {...props} />,
  p: ({ node, ...props }) => (
    <p className="text-dark dark:text-light text-md leading-[1.7rem] whitespace-pre-line py-1" {...props} />
  ),
  ul: ({ node, ...props }) => {
    const { ordered: _, ...rest } = props
    return <ul className="list-disc text-md leading-6 ps-4 md:ps-10" {...rest} />
  },
  ol: ({ node, ...props }) => <ul className="list-decimal pl-4 text-md leading-8" {...props} />,
  li: ({ node, ...props }) => {
    const { ordered: _, ...rest } = props
    return (
      <li
        className={[
          `[&>ul]:pl-4 [&>ul>li]:marker:text-primary/50 [&>ul>li>ul>li]:marker:text-primary`,
          `items-center marker:text-primary text-dark dark:text-light leading-8 !py-0`
        ].join(' ')}
        {...rest}
      >
        {props.children}
      </li>
    )
  },
  hr: ({ node, ...props }) => <hr className="my-6" {...props} />,
  a: ({ node, ...props }) => (
    <a target="_blank" className="text-secondary dark:text-light/60 underline underline-offset-1" {...props} />
  ),
  input: ({ node, ...props }) => {
    if (props.type === 'checkbox') {
      const { checked: _, ...rest } = props
      return (
        <input
          type="checkbox"
          {...rest}
          disabled={false}
          className="w-4 h-4 translate-y-[0.2rem] rounded-sm accent-primary pointer-events-none"
        />
      )
    } else {
      return <input {...props} />
    }
  },
  blockquote: ({ node, ...props }) => (
    <blockquote
      className="bg-primary/10 text-primary pl-4 py-1 border-l-[0.2rem] border-primary border-solid [&>p]:leading-8"
      {...props}
    >
      {props.children}
    </blockquote>
  ),
  code: ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '')
    const codeBlock = String(children).replace(/\n$/, ' ')
    return !inline && match ? (
      <div className="rounded-md overflow-hidden">
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
          className="!bg-dark/90 overflow-hidden rounded-md ring-1 ring-inset dark:ring-light/10"
        >
          {codeBlock}
        </SyntaxHighlighter>
      </div>
    ) : (
      <code
        className="bg-gray-200 dark:bg-secondary rounded-md overflow-hidden text-xs font-medium px-2 py-1 mx-1 ring-1 ring-primary/20 dark:ring-light/10"
        {...props}
      >
        {children}
      </code>
    )
  },
  table: ({ node, className, children, ...props }) => (
    <div className="w-full overflow-auto ring-1 ring-inset dark:ring-light/10">
      <table className="w-full text-dark dark:text-light ring-inset rounded-md" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ node, className, children, ...props }) => (
    <thead className="w-full border-b-1 border-solid border-light/10" {...props}>
      {children}
    </thead>
  ),
  tr: ({ node, className, children, isHeader, ...props }) => (
    <tr
      className="w-fit [&>*]:text-md [&>*]:border [&>*]:border-solid [&>*]:border-light [&>*]:border-collapse [&>th]:whitespace-pre-line [&>th]:p-2 [&>td]:whitespace-pre-line [&>td]:p-2"
      {...props}
    >
      {children}
    </tr>
  ),
  tbody: ({ node, className, children, ...props }) => (
    <tbody className="w-full [&>*]:border [&>*]:border-solid [&>*]:border-light [&>*]:border-collapse" {...props}>
      {children}
    </tbody>
  ),
  img: ({ node, className, children, ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} alt="" className="w-full overflow-hidden rounded-md ring-1 ring-light  shadow-md my-4" />
    // <div className="relative">
    //   {/* {typeof src !== 'undefined' ? <Image width={width } height={height} alt="" {...props} src={src} /> : <></>} */}
    // </div>
  )
}

export const MarkdowRenderer = ({ markdown }: Params) => {
  return (
    <div
      style={
        {
          fontSize: '1rem',
          lineHeight: '2.5rem'
        } as CSSProperties
      }
      className="[&>*>*]:py-2"
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={markdownComponents}>
        {markdown ?? ''}
      </ReactMarkdown>
    </div>
  )
}
