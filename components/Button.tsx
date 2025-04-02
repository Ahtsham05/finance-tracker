import React from 'react'

type ButtonProps = {
    label: string,
    href: string,
    active?: boolean,
    OnClick?: (href : string) => void
}
const Button = ({href,label,active,OnClick} : ButtonProps) => {
  return (
    <button className={`text-black lg:text-white text-left lg:text-center w-full lg:w-auto cursor-pointer hover:bg-white/25 px-5 py-1 lg:px-2 lg:py-1.5 rounded background transition active:bg-gray-200 ${active ? 'bg-white/15': 'bg-transparent'}`} onClick={() => OnClick && OnClick(href)}>
        {label}
    </button>
  )
}

export default Button