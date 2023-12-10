import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { getAuthSession } from '@/src/auth/nextauth-option'
import { User2 } from 'lucide-react'
import Link from 'next/link'
import { DropDownMenuLogout } from './DropDownMenuLogout'
import { LoginButton } from './LoginButton'

export const UserProfile = async () => {
    const session = await getAuthSession()
    if(session?.user.id){
        return (
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="text">
                        {session?.user.name ?? ""}
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                        <Link href="/profile">
                            <User2 className='mr-2 h-4 w-4' />
                            Profile
                        </Link>
                    </DropdownMenuItem>
                    <DropDownMenuLogout />
                </DropdownMenuContent>
            </DropdownMenu>
          )
    }else{
        return <LoginButton />
    }
  
}
