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
      {/* <div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
</div>
<div class="flex items-center">
    <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
</div> */}

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ node, ...props }) => <h2 className="text-primary font-bold text-xl" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc list-inside" {...props} />,
          li: ({ node, ...props }) => (
            <li
              className="[&>ul]:pl-4 [&>ul>li]:marker:text-primary/50 [&>ul>li>ul>li]:marker:text-primary items-center marker:text-primary"
              {...props}
            >
              {props.children}
            </li>
          ),
          hr: ({ node, ...props }) => <hr className="border-b-2 border-solid border-primary/20" {...props} />,
          a: ({ node, ...props }) => (
            <a target="_blank" className="text-secondary hover:underline underline-offset-1" {...props} />
          ),
          input: ({ node, ...props }) => {
            if (props.checked) {
              return <input className="w-4 h-4" {...props} />
            } else {
              return <input className="w-4 h-4" {...props} />
            }
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
              <code
                className="bg-gray-200 rounded-md overflow-hidden text-sm font-semibold px-2 py-1 text-primary"
                {...props}
              >
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
