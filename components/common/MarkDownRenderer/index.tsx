import { CSSProperties, FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'

interface Params {
  markdown: string
}

const MarkdowRenderer: FC<Params> = ({ markdown }) => {
  return (
    <div
      style={
        {
          fontSize: '1rem',
          lineHeight: '2.5rem'
        } as CSSProperties
      }
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ node, ...props }) => <h2 className="text-primary font-bold text-xl" {...props} />,
          ul: ({ node, ...props }) => <ul className="my-1 list-disc" {...props} />,
          input: ({ node, ...props }) => {
            return <input className="my-1 list-disc checked:" {...props} />
          },
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="bg-primary/20 text-primary pl-3 border-l-[0.5em] border-primary border-solid"
              {...props}
            />
          ),
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <div className="rounded-md overflow-hidden">
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  className="!bg-dark/90 overflow-hidden rounded-md"
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdowRenderer
