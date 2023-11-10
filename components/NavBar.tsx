import MaxWidthWrapper from '@/app/components/maxWidthWrapper'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server'
import { ArrowRight, PersonStanding } from 'lucide-react'

const NavBar = () => {
    return (
        <div className="sticky inset-x-0 top-0 z-30 h-14
    bg-white/75 w-full backdrop-blur-lg
    transition-all
    border-b border-zinc-300
    ">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href={"/"} className='flex z-40 font-black'><span>Quillian.</span></Link>

                    <div className="    items-center space-x-4 sm:flex">
                        <>
                            <Link href={"/pricing"} className={buttonVariants(
                                {
                                    variant: "ghost",
                                    size: "sm"
                                }
                            )}>Pricing</Link>
                            <LoginLink className={buttonVariants(
                                {
                                    variant: "ghost",
                                    size: "sm"
                                }
                            )}>
                                Log in
                            </LoginLink>
                            <RegisterLink className={buttonVariants(
                                {
                                    size: "sm"
                                }
                            )}>
                                Start Quilling <ArrowRight className='h-5 w-5 ml-1'/>
                            </RegisterLink>
                        </>
                    </div>

                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default NavBar