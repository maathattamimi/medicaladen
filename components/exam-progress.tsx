"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

interface ExamProgressProps {
  total: number
  answered: number
}

export function ExamProgress({ total, answered }: ExamProgressProps) {
  const progress = (answered / total) * 100

  return (
    <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">Progress</span>
        <span className="text-sm text-muted-foreground">{`${answered}/${total} Questions`}</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  )
}

