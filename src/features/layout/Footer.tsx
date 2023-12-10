import { buttonVariants } from '@/components/ui/button'
import clsx from 'clsx'
import {Home, PenSquare, User} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 items-center py-2 bottom-0 left-0 right-0 bg-background w-full m-auto">
        <div className="flex justify-between gap-1 border-t border-b border-accent"></div>
        <div className="">
          <p className="text-base text-textSecondary">Designed and built by Eli Serra</p>
          <p className="text-base text-textSecondary">©Copyright 2023 - Eli Serra</p>
        </div>
    </footer>
  )
}
