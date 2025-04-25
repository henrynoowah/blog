'use client'

import '@noowah/content-builder/styles.css'
import { EditorProvider, Toolbar, useEditor } from '@noowah/content-builder/editor'
const Canvas = dynamic(() => import('@noowah/content-builder/editor').then((mod) => mod.Canvas), { ssr: false })
import { Sidebar } from '@noowah/content-builder/editor/plugins'
import { defaultElementTemplates } from '@noowah/content-builder/editor/templates'
import dynamic from 'next/dynamic'

const Page = () => {
  return (
    <>
      <EditorProvider
        pageDetails={{
          name: 'Content Builder',
          slug: 'content-builder',
          id: 'content-builder'
        }}
        elementTemplates={defaultElementTemplates}
      >
        <></>
        <Toolbar />
        <ContainerElement>
          <Canvas />
          <Sidebar style={{ height: '100%', overflowY: 'scroll' }} />
        </ContainerElement>
      </EditorProvider>
    </>
  )
}

export default Page

const ContainerElement = ({ children }: { children: React.ReactNode }) => {
  const { state } = useEditor()
  const { liveMode } = state.editor
  return (
    <div
      style={{
        overflowY: 'auto',
        width: '100%',
        height: liveMode ? '100vh' : 'calc(100vh - 64px)'
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'stretch'
        }}
      >
        {children}
      </div>
    </div>
  )
}
