"use client"

import { useSession, signOut } from "next-auth/react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AuthStatus() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="absolute top-4 right-4 flex items-center gap-4">
        <span>Signed in as {session.user?.email}</span>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    )
  }

  return (
    <div className="absolute top-4 right-4">
      <Button asChild>
        <Link href="/sign-in">Sign in</Link>
      </Button>
    </div>
  )
}

