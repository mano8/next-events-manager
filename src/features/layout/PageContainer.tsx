import clsx from 'clsx'
import React, { PropsWithChildren } from 'react'

export default function PageContainer({className, children }: PropsWithChildren<
    { className?: string }>) {
        
  return (
    <div className={clsx("container flex-1 items-center mx-auto", className)}>
        {children}
    </div>
  )
}
