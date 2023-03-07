import { ReactNode } from 'react'

interface Params {
  children: ReactNode
}

const layouts = ({ children }: Params) => {
  return <div>{children}</div>
}

export default layouts
