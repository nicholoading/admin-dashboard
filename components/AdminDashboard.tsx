"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { supabase } from "@/utils/supabaseClient"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye } from "lucide-react"

export function AdminDashboard() {
  const [teams, setTeams] = useState<any[]>([])
  const [stateFilter, setStateFilter] = useState<string>("all")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  // Fetch teams from Supabase
  useEffect(() => {
    const fetchTeams = async () => {
      const { data, error } = await supabase.from("teams").select("*")
      if (error) {
        console.error("Error fetching teams:", error)
      } else {
        setTeams(data || [])
      }
    }

    fetchTeams()
  }, [])

  const filteredTeams = teams.filter(
    (team) =>
      (stateFilter === "all" || team.state === stateFilter) &&
      (categoryFilter === "all" || team.category === categoryFilter) &&
      (statusFilter === "all" || team.registrationStatus === statusFilter)
  )

  const uniqueStates = Array.from(new Set(teams.map((team) => team.state)))
  const uniqueCategories = Array.from(new Set(teams.map((team) => team.category)))
  const uniqueStatuses = Array.from(new Set(teams.map((team) => team.registrationStatus)))

  const getStatusBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "success"
      case "pending":
        return "warning"
      case "rejected":
        return "destructive"
      default:
        return "default"
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="flex space-x-4 mb-4">
        <Select onValueChange={(value) => setStateFilter(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by State" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All States</SelectItem>
            {uniqueStates.map((state) => (
              <SelectItem key={state} value={state}>
                {state}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => setCategoryFilter(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {uniqueCategories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => setStatusFilter(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            {uniqueStatuses.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Team Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>State</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTeams.map((team) => (
            <TableRow key={team.teamName}>
              <TableCell>{team.teamName}</TableCell>
              <TableCell>
                <Badge variant={getStatusBadgeVariant(team.registrationStatus)}>{team.registrationStatus}</Badge>
              </TableCell>
              <TableCell>{team.category}</TableCell>
              <TableCell>{team.state}</TableCell>
              <TableCell>
                <Link href={`/team/${encodeURIComponent(team.teamName)}`} passHref>
                  <Button variant="ghost" size="icon" title="View Team Details">
                    <Eye className="h-4 w-4" />
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
