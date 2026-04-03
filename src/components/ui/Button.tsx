interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const base = 'px-6 py-2 rounded-lg font-semibold transition-all duration-150 cursor-pointer'
  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-500 text-white',
    ghost: 'bg-transparent hover:bg-slate-700 text-slate-300 hover:text-white',
  }

  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}
