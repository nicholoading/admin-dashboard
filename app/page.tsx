"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AdminDashboard } from "@/components/AdminDashboard"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const authStatus = localStorage.getItem("isAdminAuthenticated")
    if (authStatus === "true") {
      setIsAuthenticated(true)
    } else {
      router.push("/sign-in")
    }
  }, [router])

  if (!isAuthenticated) return null

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex gap-4">
            <Link href="/state-management">
              <Button variant="default">Manage States</Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => {
                localStorage.removeItem("isAdminAuthenticated")
                router.push("/sign-in")
              }}
            >
              Sign Out
            </Button>
          </div>
        </div>
        <AdminDashboard />
      </div>
    </main>
  )
}
