"use client";
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Loader } from '@/components/ui/loader';
import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'
import { useTransition } from 'react'
import React from 'react'

export const DropDownMenuLogout = () => {
    const [isPending, startTransition] = useTransition();
    return (
        <DropdownMenuItem onClick={async () => {
        startTransition(() => signOut())
        }}>
            {isPending ? 
                (<Loader className='mr-2 h-4 w-4' />): 
                (<LogOut className='mr-2 h-4 w-4' />)
            }
            Logout
        </DropdownMenuItem>
    )
}
