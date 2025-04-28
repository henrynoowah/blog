'use client'

import { EditorProvider, Toolbar, useEditor, Canvas } from '@noowah/content-builder/editor'
import '@noowah/content-builder/styles.css'
import { Sidebar } from '@noowah/content-builder/editor/plugins'
import { defaultElementTemplates } from '@noowah/content-builder/editor/templates'
import { useEffect } from 'react'

const Page = () => {
  return (
    <>
      <EditorProvider
        pageDetails={{
          name: 'Content Builder',
          slug: 'content-builder',
          id: 'content-builder'
        }}
        liveMode={true}
        elementTemplates={defaultElementTemplates}
        onSave={({ state }) => {
          console.log('save', state.editor.elements)
        }}
      >
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
  const { state, actions } = useEditor()
  const { liveMode, previewMode } = state.editor

  console.log('liveMode', state.editor.elements)
  useEffect(() => {
    setTimeout(() => {
      actions.toggleLiveMode(!liveMode)
      actions.togglePreviewMode(!previewMode)
    }, 1000)
  }, [])

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
