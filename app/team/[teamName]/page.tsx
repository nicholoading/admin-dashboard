"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { supabase } from "@/utils/supabaseClient"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Check, X } from "lucide-react"
import { ConfirmationDialog } from "@/components/ConfirmationDialog"
import { RejectionReasonDialog } from "@/components/RejectionReasonDialog"
import { useToast } from "@/components/ui/use-toast"
import "@/components/ui/toast.css"
import { notFound } from "next/navigation"
import { teamData } from "@/utils/teamData"
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


type TeamStatus = "Pending" | "Approved" | "Rejected" | "Private"

export default function TeamDetailsPage({ params }: { params: { teamName: string } }) {
  const router = useRouter()
  const { toast } = useToast()
  const decodedTeamName = decodeURIComponent(params.teamName)

  const [team, setTeam] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [teamStatus, setTeamStatus] = useState<TeamStatus>("Pending") // ✅ Ensure hook order is consistent

  // ✅ Missing State Variables
  const [isApproveDialogOpen, setIsApproveDialogOpen] = useState(false)
  const [isPrivateConfirmationOpen, setIsPrivateConfirmationOpen] = useState(false)
  const [isRejectDialogOpen, setIsRejectDialogOpen] = useState(false)
  const [isRejectionReasonDialogOpen, setIsRejectionReasonDialogOpen] = useState(false)

  // Fetch team details from Supabase
  useEffect(() => {
    const fetchTeam = async () => {
      const { data, error } = await supabase
        .from("teams")
        .select("*")
        .eq("teamName", decodedTeamName)
        .single()

      if (error) {
        console.error("Error fetching team details:", error)
        router.push("/") // Redirect if team not found
      } else {
        setTeam(data)
        setTeamStatus(data.registrationStatus) // ✅ Ensure state updates only after data loads
      }
      setLoading(false)
    }

    fetchTeam()
  }, [decodedTeamName, router])

  if (loading) return <p className="text-center mt-6">Loading...</p>
  if (!team) return <p className="text-center mt-6">Team not found</p>

  const getStatusBadgeVariant = (status: TeamStatus) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "success"
      case "pending":
        return "warning"
      case "rejected":
        return "destructive"
      case "private":
        return "secondary"
      default:
        return "default"
    }
  }

  const handleApprove = async () => {
    setIsApproveDialogOpen(false)
    setIsPrivateConfirmationOpen(true)
  }

  const handlePrivateConfirmation = async (isPrivate: boolean) => {
    const status = isPrivate ? "Private" : "Approved"

    const { error } = await supabase
      .from("teams")
      .update({ registrationStatus: status })
      .eq("teamName", team.teamName)

    if (error) {
      console.error("Error updating team status:", error)
      toast({
        title: "Error",
        description: "Failed to update team status.",
        variant: "destructive",
      })
    } else {
      setTeamStatus(status as TeamStatus)
      toast({
        title: "Team Approved",
        description: `Team has been approved as a ${status.toLowerCase()} school.`,
      })
    }

    setIsPrivateConfirmationOpen(false)
  }

  const handleReject = () => {
    setIsRejectDialogOpen(false)
    setIsRejectionReasonDialogOpen(true)
  }

  const handleRejectionReason = async (reason: string) => {
    const { error } = await supabase
      .from("teams")
      .update({ registrationStatus: "Rejected" })
      .eq("teamName", team.teamName)

    if (error) {
      console.error("Error rejecting team:", error)
      toast({
        title: "Error",
        description: "Failed to reject team.",
        variant: "destructive",
      })
    } else {
      setTeamStatus("Rejected")
      toast({
        title: "Team Rejected",
        description: "Team has been rejected. An email will be sent to the teacher.",
        variant: "destructive",
      })
    }

    setIsRejectionReasonDialogOpen(false)
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-6">
        <Link href="/" className="mr-4">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">{team.teamName} Details</h1>
      </div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Team Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p><strong>Representing School:</strong> {team.representingSchool}</p>
              <p><strong>School Name:</strong> {team.schoolName}</p>
              <p><strong>School Address:</strong> {team.schoolAddress}</p>
              <p><strong>Postal Code:</strong> {team.postalCode}</p>
              <p><strong>Education Level:</strong> {team.educationLevel}</p>
              <p><strong>Category:</strong> {team.category}</p>
            </div>
            <div>
              <p><strong>City:</strong> {team.city}</p>
              <p><strong>State:</strong> {team.state}</p>
              <p><strong>Registration Status:</strong> <Badge variant={getStatusBadgeVariant(teamStatus)}>{teamStatus}</Badge></p>
              <p><strong>Teacher Name:</strong> {team.teacherName}</p>
              <p><strong>Teacher Email:</strong> {team.teacherEmail}</p>
              <p><strong>Teacher Phone:</strong> {team.teacherPhone}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <h2 className="text-2xl font-semibold mb-4">Team Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[1, 2, 3].map((num, index) => {
          const member = team[`teamMember${num}Name`] ? {
            name: team[`teamMember${num}Name`],
            ic: team[`teamMember${num}IC`],
            gender: team[`teamMember${num}Gender`],
            race: team[`teamMember${num}Race`],
            grade: team[`teamMember${num}Grade`],
            parentName: team[`teamMember${num}ParentName`],
            parentPhone: team[`teamMember${num}ParentPhone`],
            parentEmail: team[`teamMember${num}ParentEmail`],
            size: team[`teamMember${num}Size`],
          } : null;

          return member ? (
            <Card key={index}>
              <CardHeader>
                <CardTitle>Member {index + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Name:</strong> {member.name}</p>
                <p><strong>IC:</strong> {member.ic}</p>
                <p><strong>Gender:</strong> {member.gender}</p>
                <p><strong>Race:</strong> {member.race}</p>
                <p><strong>Grade:</strong> {member.grade}</p>
                <p><strong>Parent Name:</strong> {member.parentName}</p>
                <p><strong>Parent Phone:</strong> {member.parentPhone}</p>
                <p><strong>Parent Email:</strong> {member.parentEmail}</p>
                <p><strong>Size:</strong> {member.size}</p>
              </CardContent>
            </Card>
          ) : null;
        })}
      </div>


    <div className="container mx-auto p-4">
      <div className="flex justify-end space-x-4">
        <Button onClick={() => setIsApproveDialogOpen(true)} variant="default" disabled={teamStatus !== "Pending"}>
          <Check className="mr-2 h-4 w-4" /> Approve
        </Button>
        <Button onClick={() => setIsRejectDialogOpen(true)} variant="destructive" disabled={teamStatus !== "Pending"}>
          <X className="mr-2 h-4 w-4" /> Reject
        </Button>
      </div>

      <ConfirmationDialog
        isOpen={isApproveDialogOpen}
        onClose={() => setIsApproveDialogOpen(false)}
        onConfirm={handleApprove}
        title="Approve Team"
        description="Are you sure you want to approve this team?"
      />

      {/* ✅ Restored Private/Public School Confirmation Dialog */}
      <AlertDialog open={isPrivateConfirmationOpen} onOpenChange={setIsPrivateConfirmationOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Approve as Private or Public School</AlertDialogTitle>
            <AlertDialogDescription>
              Choose how you want to approve this team. Selecting "Private" will send an email asking for registration
              fee payment.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsPrivateConfirmationOpen(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => handlePrivateConfirmation(true)}
              className="bg-yellow-500 hover:bg-yellow-600"
            >
              Approve as Private
            </AlertDialogAction>
            <AlertDialogAction
              onClick={() => handlePrivateConfirmation(false)}
              className="bg-green-500 hover:bg-green-600"
            >
              Approve as Public
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <ConfirmationDialog
        isOpen={isRejectDialogOpen}
        onClose={() => setIsRejectDialogOpen(false)}
        onConfirm={handleReject}
        title="Reject Team"
        description="Are you sure you want to reject this team?"
      />

      <RejectionReasonDialog
        isOpen={isRejectionReasonDialogOpen}
        onClose={() => setIsRejectionReasonDialogOpen(false)}
        onConfirm={handleRejectionReason}
      />
    </div>

    </div>
)}

