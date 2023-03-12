'use client'

import '@uiw/react-markdown-preview/markdown.css'
import { MDEditorProps } from '@uiw/react-md-editor'
import '@uiw/react-md-editor/markdown-editor.css'
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

interface Params {
  markdown: string
}

type MarkDownComponents = Partial<
  Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
>

const markdownComponents: MarkDownComponents = {
  h1: ({ node, ...props }) => (
    <h1 className="text-primary font-bold text-2xl pb-2 " {...props}>
      {props.children}
      {props.children ? (
        <hr className="border-b-2 border-spild border-primary/20" />
      ) : (
        ''
      )}
    </h1>
  ),
  h2: ({ node, ...props }) => (
    <h2 className="text-primary font-bold text-xl pb-2" {...props}>
      {props.children}
      {props.children ? (
        <hr className="border-b-2 border-spild border-primary/20" />
      ) : (
        ''
      )}
    </h2>
  ),
  h3: ({ node, ...props }) => (
    <h3 className="text-primary font-bold text-lg" {...props} />
  ),
  h4: ({ node, ...props }) => (
    <h4 className="text-primary font-bold text-md" {...props} />
  ),
  h5: ({ node, ...props }) => (
    <h5 className="text-primary font-bold text-sm" {...props} />
  ),
  h6: ({ node, ...props }) => (
    <h5 className="text-primary/60 font-bold text-sm" {...props} />
  ),
  p: ({ node, ...props }) => (
    <p className="text-dark text-sm leading-7 whitespace-pre-line" {...props} />
  ),
  ul: ({ node, ...props }) => (
    <ul className="list-disc pl-4 text-sm leading-7" {...props} />
  ),
  li: ({ node, ...props }) => (
    <li
      className="[&>ul]:pl-4 [&>ul>li]:marker:text-primary/50 [&>ul>li>ul>li]:marker:text-primary items-center marker:text-primary"
      {...props}
    >
      {props.children}
    </li>
  ),
  hr: ({ node, ...props }) => (
    <div
      className="border-b-2 border-spild border-primary/20 mb-3"
      {...props}
    />
  ),
  a: ({ node, ...props }) => (
    <a
      target="_blank"
      className="text-secondary hover:underline underline-offset-1"
      {...props}
    />
  ),
  input: ({ node, ...props }) => {
    if (props.type === 'checkbox') {
      return (
        <input
          type="checkbox"
          {...props}
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
          className="!bg-dark/90 overflow-hidden rounded-md"
        >
          {codeBlock}
        </SyntaxHighlighter>
      </div>
    ) : (
      <code
        className="bg-gray-200 rounded-md overflow-hidden text-[12px] font-semibold px-2 py-1 mx-1 text-primary ring-1 ring-primary/20"
        {...props}
      >
        {children}
      </code>
    )
  },
  table: ({ node, className, children, ...props }) => (
    <table
      className="w-full ring-2 ring-light ring-inset rounded-md overflow-hidden"
      {...props}
    >
      {children}
    </table>
  ),
  thead: ({ node, className, children, ...props }) => (
    <thead className="w-full border-b-2 border-solid border-light" {...props}>
      {children}
    </thead>
  ),
  tr: ({ node, className, children, isHeader, ...props }) => (
    <tr
      className="w-fit  [&>*]:text-sm [&>*]:border [&>*]:border-solid [&>*]:border-light [&>*]:border-collapse [&>th]:whitespace-pre-line [&>th]:p-2 [&>td]:whitespace-pre-line [&>td]:p-2"
      {...props}
    >
      {children}
    </tr>
  ),
  tbody: ({ node, className, children, ...props }) => (
    <tbody
      className="w-full [&>*]:border [&>*]:border-solid [&>*]:border-light [&>*]:border-collapse"
      {...props}
    >
      {children}
    </tbody>
  ),
}

export const MarkdowRenderer = ({ markdown }: Params) => {
  return (
    <div
      style={
        {
          fontSize: '1rem',
          lineHeight: '2.5rem',
        } as CSSProperties
      }
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={markdownComponents}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

export const MarkdownEditor = ({
  preview = 'live',
  ...props
}: MDEditorProps) => {
  return (
    <div data-color-mode="light">
      {/* <MDEditor
        highlightEnable={true}
        {...props}
        components={{
          preview: (source, state, dispath) => (
            <MarkdowRenderer markdown={source} />
          ),
        }}
        height={600}
        preview={preview}
        previewOptions={{
          rehypePlugins: [rehypeRaw],
          remarkPlugins: [remarkGfm],
        }}
      /> */}
    </div>
  )
}
