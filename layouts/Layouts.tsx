import { FC, ReactNode } from 'react'
import Header from '../components/common/Header'

type Props = {
  header?: boolean
  footer?: boolean
  children: ReactNode
}

const Layouts: FC<Props> = ({ children, header, footer }) => {
  return (
    <main className="w-full h-[100vh] min-h-[100vh] flex flex-col">
      {header ? <Header /> : <></>}
      <>{children}</>
      {footer ? <Header /> : <></>}
    </main>
  )
}

export default Layouts
