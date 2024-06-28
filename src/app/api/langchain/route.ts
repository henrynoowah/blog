import { MarkdownTextSplitter } from 'langchain/text_splitter'
import { promises as fs } from 'fs'
import { createClient } from '@supabase/supabase-js'

import { SupabaseVectorStore } from '@langchain/community/vectorstores/supabase'
import { OpenAIEmbeddings } from '@langchain/openai'

const sbApiKey = process.env.SUPABASE_API_KEY
const sbUrl = process.env.SUPABASE_URL
const openAIApiKey = process.env.OPENAI_API_KEY

export const GET = async (req: Request) => {
  try {
    const file = await fs.readFile(process.cwd() + '/about.md', 'utf-8')

    const splitter = new MarkdownTextSplitter({ chunkSize: 500 })

    const output = await splitter.createDocuments([file])

    if (sbUrl && sbApiKey) {
      const client = createClient(sbUrl, sbApiKey)

      const response = await SupabaseVectorStore.fromDocuments(output, new OpenAIEmbeddings({ openAIApiKey }), {
        client,
        tableName: 'documents'
      })

      console.log(response)
    }

    return Response.json(output)
  } catch (e) {
    console.error(e)
  }

  return Response.json({ error: 'Something went wrong' })
}
