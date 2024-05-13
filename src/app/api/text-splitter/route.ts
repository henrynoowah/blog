import { promises as fs } from 'fs'
import { MarkdownTextSplitter, RecursiveCharacterTextSplitter } from 'langchain/text_splitter'

export const GET = async () => {
  try {
    const text = await fs.readFile('README.md', 'utf-8')

    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 500,
      chunkOverlap: 50,
      separators: ['\n\n', '\n', ' ', '', '#', '##']
    })

    const output = await splitter.createDocuments([text])
    return Response.json({ ...output })
  } catch (e) {
    console.log(e)
  }
  return new Response('Hello, Next.js!')
}
