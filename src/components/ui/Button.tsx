interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger' | 'ghost'
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const base = [
    'px-6 py-2.5 rounded-xl font-semibold text-sm',
    'transition-all duration-200 cursor-pointer',
    'active:scale-95 shadow-md',
  ].join(' ')

  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-900',
    danger: 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-900',
    ghost: 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700',
  }

  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}
