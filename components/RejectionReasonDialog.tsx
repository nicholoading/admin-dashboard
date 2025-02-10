"use client"

import { useState } from "react"
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
import { Textarea } from "@/components/ui/textarea"

interface RejectionReasonDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: (reason: string) => void
}

export function RejectionReasonDialog({ isOpen, onClose, onConfirm }: RejectionReasonDialogProps) {
  const [reason, setReason] = useState("")

  const handleConfirm = () => {
    onConfirm(reason)
    setReason("")
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Provide Rejection Reason</AlertDialogTitle>
          <AlertDialogDescription>
            Please enter the reason for rejecting this team. This will be included in the email sent to the teacher.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Enter rejection reason..."
          className="mt-2"
        />
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm} disabled={!reason.trim()}>
            Confirm Rejection
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

