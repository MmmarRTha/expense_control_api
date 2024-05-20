import { PropsWithChildren } from 'react'


export default function ErrorMessage({children} : PropsWithChildren) {
  return (
    <p className="relative p-2 my-2 text-sm font-bold leading-normal text-center text-red-700 uppercase bg-red-200 rounded-lg">
        {children}
    </p>
  )
}
