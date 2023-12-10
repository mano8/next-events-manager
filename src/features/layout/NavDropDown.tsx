import { buttonVariants } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import clsx from 'clsx';
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

type NavDropDownProps = PropsWithChildren<{
    menu: {
        name: string
        submenu?: { name: string; href: string; current: boolean; }[],
        current: boolean
    },
    indexNav: number
    classMenu?: string
}>;

export default function NavDropDown({ menu, indexNav, classMenu }: NavDropDownProps) {
    return (
        <DropdownMenu key={`Dpdm-${indexNav}`}>
            <DropdownMenuTrigger 
            key={`DpdmTrig-${indexNav}`}
            className={clsx(
                buttonVariants({
                    variant:"ghost"
                }),
                classMenu
            )}>
                <div className="text" key={`DpdmTrigDiv-${indexNav}`}>
                    {menu.name}
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent key={`DpdmCont-${indexNav}`}>
                {menu.submenu && menu.submenu.map((item, index) => {
                    return (
                        <DropdownMenuItem asChild key={`DpdmItem-${indexNav}-${index}`}>
                            <Link key={`DpdmItemLink-${indexNav}-${index}`} href={item.href}>
                                {item.name}
                            </Link>
                        </DropdownMenuItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
