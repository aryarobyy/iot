import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { icon?: ReactNode; variant?: 'primary' | 'secondary' }

export function Button({ children, icon, variant = 'primary', ...props }: Props) {
  return <button className={`button button-${variant}`} {...props}>{icon}{children}</button>
}
