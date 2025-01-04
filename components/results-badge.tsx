import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ResultsBadgeProps {
  score: number
  total: number
}

export function ResultsBadge({ score, total }: ResultsBadgeProps) {
  const percentage = (score / total) * 100

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-gray-800">Exam Results</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <div className="text-6xl font-bold text-gray-800">{`${percentage.toFixed(1)}%`}</div>
        <Badge 
          variant={percentage >= 70 ? "success" : "destructive"}
          className={percentage >= 70 ? "bg-green-600" : "bg-red-600"}
        >
          {percentage >= 70 ? "Passed" : "Failed"}
        </Badge>
        <div className="text-sm text-gray-600 text-center">
          You got {score} out of {total} questions correct
        </div>
      </CardContent>
    </Card>
  )
}

