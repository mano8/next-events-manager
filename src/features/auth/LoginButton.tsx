"use client"
import { Button } from '@/components/ui/button'
import { Loader } from '@/components/ui/loader'
import { User } from 'lucide-react'
import {signIn} from 'next-auth/react'
import { useTransition } from 'react'

export const LoginButton = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <Button className='hover:text-slate-950 text-white outline-1 rounded-full px-1 bg-transparent' onClick={async ()=>{
      startTransition(() => signIn())
    }}>
        {isPending ? 
          (<Loader className='h-4 w-4' />): 
          (<User className='h-6 w-6' />)
        }
    </Button>
  )
}
