"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface StateStatus {
  name: string
  isActive: boolean
}

export default function StateManagement() {
  const { toast } = useToast()
  const [states, setStates] = useState<StateStatus[]>([
    { name: "Johor", isActive: false },
    { name: "Kedah", isActive: false },
    { name: "Kelantan", isActive: false },
    { name: "Melaka", isActive: false },
    { name: "Negeri Sembilan", isActive: false },
    { name: "Pahang", isActive: false },
    { name: "Perak", isActive: false },
    { name: "Perlis", isActive: false },
    { name: "Pulau Pinang", isActive: false },
    { name: "Sabah", isActive: false },
    { name: "Sarawak", isActive: false },
    { name: "Selangor", isActive: false },
    { name: "Terengganu", isActive: false },
    { name: "Kuala Lumpur", isActive: false },
    { name: "Labuan", isActive: false },
    { name: "Putrajaya", isActive: false },
  ])

  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [dialogType, setDialogType] = useState<"start" | "end" | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleAction = (stateName: string, action: "start" | "end") => {
    setSelectedState(stateName)
    setDialogType(action)
    setIsDialogOpen(true)
  }

  const handleConfirm = () => {
    if (!selectedState || !dialogType) return

    setStates(
      states.map((state) => {
        if (state.name === selectedState) {
          return { ...state, isActive: dialogType === "start" }
        }
        return state
      }),
    )

    toast({
      title: `State ${dialogType === "start" ? "Started" : "Ended"}`,
      description: `${selectedState} has been ${dialogType === "start" ? "started" : "ended"} successfully.`,
      variant: dialogType === "start" ? "default" : "destructive",
    })

    setIsDialogOpen(false)
    setSelectedState(null)
    setDialogType(null)
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-6">
        <Link href="/" className="mr-4">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">State Management</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {states.map((state) => (
          <Card key={state.name}>
            <CardHeader>
              <CardTitle>{state.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between gap-4">
                <Button
                  variant="default"
                  onClick={() => handleAction(state.name, "start")}
                  disabled={state.isActive}
                  className="flex-1"
                >
                  Start
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => handleAction(state.name, "end")}
                  disabled={!state.isActive}
                  className="flex-1"
                >
                  End
                </Button>
              </div>
              <div className="mt-4 text-center">
                Status:{" "}
                <span className={state.isActive ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
                  {state.isActive ? "Active" : "Inactive"}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{dialogType === "start" ? "Start State" : "End State"}</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to {dialogType} {selectedState}?
              {dialogType === "start"
                ? " This will activate all features for this state."
                : " This will deactivate all features for this state."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsDialogOpen(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirm}>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

