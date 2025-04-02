'use client'
import { useMedia } from 'react-use';
import React, { useState } from 'react'
import Button from './Button'
import { usePathname, useRouter } from 'next/navigation'
import { Menu } from 'lucide-react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

const NavItems = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/dashboard",
        label: "Dashboard"
    },
    {
        href: "/transactions",
        label: "Transactions"
    },
    {
        href: "/settings",
        label: "Settings"
    },
]

const Navigation = () => {
    const isMobile = useMedia('(max-width: 768px)');
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    const router = useRouter()
    const OnClick = (href: string) => {
        router.push(href)
        setOpen(false)
    }

    if (isMobile) {
        return (
            <div className='flex lg:hidden items-center'>
                <Sheet>
                    <SheetTrigger className='p-2 text-white bg-white/10 rounded hover:bg-white/20 transition'>
                        <Menu className='text-white size-5' />
                    </SheetTrigger>
                    <SheetContent side='left' className='py-10'>
                        <SheetClose className='grid gap-2'>
                            {
                                NavItems?.map((item, index) => (
                                    <Button
                                        label={item.label}
                                        href={item.href}
                                        key={item.href}
                                        active={pathname === item.href}
                                        OnClick={OnClick}
                                    />
                                ))
                            }
                        </SheetClose>
                    </SheetContent>

                </Sheet>
            </div>
        )
    }

    return (
        <div className='hidden lg:flex items-center gap-3'>
            {
                NavItems?.map((item, index) => (
                    <Button
                        label={item.label}
                        href={item.href}
                        key={item.href}
                        active={pathname === item.href}
                        OnClick={OnClick}
                    />
                ))
            }
        </div>
    )
}

export default Navigation