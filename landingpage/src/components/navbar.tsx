import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Links = [{
    title: "Founders",
    href: "#",
}, {
    title: "Guide",
    href: "#",
}, {
    title: "Pricing",
    href: "#",
}, {
    title: "Log In",
    href: "#",
}
]
export const Navbar = () => {
    return (
        <div className='flex items-center justify-between py-3 px-4'>
            <Link href={"/"}>
                <Image src={"/finta-logo-light.svg"}
                    height={50}
                    width={50}
                    alt="logo"
                    loading="lazy"
                    draggable={false}
                />
            </Link>
            <div className="flex items-center gap-x-6 gap-y-4 text-[14px]">
                {Links.map((link, index) => <Link key={index} href={link.href} className='text-neutral-800 font-medium text-md hover:text-neutral-500 transition duration-200'>
                    {link.title}
                </Link>)}
                <button className='bg-[#2579F4] text-white px-4  py-2 rounded-lg font-medium shadow-lg text-shadow-md  text-center hover:bg-[#2262C7]'>Get started</button>
            </div>
        </div>
    )
}
