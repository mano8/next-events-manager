"use client"
import { Fragment, PropsWithChildren, ReactNode } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, BellIcon, User } from 'lucide-react'
import clsx from 'clsx'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import { UserProfile } from '../auth/UserProfile'
import { cn } from '@/lib/utils'
import NavDropDown from './NavDropDown'

export type navDataProps = {
    name: string,
    id: string,
    href?: string,
    current: boolean,
    submenu?: {
        name: string,
        href: string,
        current: boolean,
    }[]
}[]

const navigation:navDataProps = [
    { name: "Home", id: "nav_home", href: '/', current: true }
]




type NavBarProps = PropsWithChildren<{
    UserLogin?: ReactNode | undefined;
    sizeBreak?: string
}>;

const user = { image: null, username: '' }
export default function NavBarUI({ UserLogin, sizeBreak }: NavBarProps) {
    const displayBreak = sizeBreak ? sizeBreak : 'sm';
    const menuClassCurrent = 'bg-zinc-900 text-white';
    const menuClass = 'text-gray-300 hover:bg-gray-900 hover:text-white';
    return (
        <Disclosure as="nav" className="bg-background w-full rounded" id="nav-bar-menu">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-12 items-center justify-between">
                            <div className={"absolute inset-y-0 left-0 flex items-center navBreak:hidden"}>
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className={"flex flex-1 items-center justify-center navBreak:items-stretch navBreak:justify-start"}>
                                <div className="flex flex-shrink-0 items-center">
                                    {/*
                                    Logo image
                                    <Image
                                        src="/images/logo5_light.webp"
                                        alt="Logo"
                                        className="h-10 w-auto"
                                        width="233"
                                    height="246"></Image>*/}
                                </div>
                                <div className={"hidden navBreak:ml-6 navBreak:block"}>
                                    <div className="flex space-x-4">
                                        {navigation.map((item, indexNav) => {
                                            if (item.submenu) {
                                                return (
                                                    <NavDropDown 
                                                    menu={item}
                                                    indexNav={indexNav}
                                                    classMenu={menuClass}
                                                    key={`NdpMenuSet-${indexNav}`} />
                                                )
                                            } else {
                                                return (
                                                    <Link
                                                        key={`NavLinkMenu-${indexNav}`}
                                                        id={item.id}
                                                        href={item.href ?? ''}
                                                        className={clsx(
                                                            item.current ? menuClassCurrent : menuClass,
                                                            'rounded-md px-3 py-2 text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                )
                                            }
                                        }

                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={"absolute inset-y-0 right-0 flex items-center pr-2 navBreak:static navBreak:inset-auto navBreak:ml-6 navBreak:pr-0"}>
                                <button
                                    type="button"
                                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">{UserLogin}</Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className={"navBreak:hidden"}>
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={clsx(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}