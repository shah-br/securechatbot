'use client'

import Logo from "./logo"
import { useSession } from "next-auth/react"

import { ModalContext } from "../modals/modal-providers"
import { UserAccountNav } from "./user-account-nav"
import { Button } from "../ui/button"
import { Skeleton } from "../ui/skeleton"
import { useContext } from "react"

export function Header() {
    const { setShowSignInModal } = useContext(ModalContext)
    const { data: session, status } = useSession()

    return (
        <header className="py-4 bg-white shadow-sm border-b border-gray-200">
            <div className="layout-container flex justify-between items-center py-1">
                <Logo />
                {session ? (
                    <UserAccountNav />
                ) : status === "unauthenticated" ? (
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowSignInModal(true)}
                        className="bg-white text-black border border-black rounded-full hover:bg-gray-100"
                    >
                        <span>Sign In</span>
                    </Button>
                ) : (
                    <Skeleton className="hidden h-9 w-28 rounded-full lg:flex" />
                )}
            </div>
        </header>
    )
}
