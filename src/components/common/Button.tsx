import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'

interface Params extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const Button: FC<Params> = ({ children, ...props }) => {
  return (
    <button
      className={`px-4 py-1 ring-1 ring-primary/20 bg-light text-primary text-sm rounded-md hover:ring-primary ${props.className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
