"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface QuestionCardProps {
  id: number
  text: string
  options: string[]
  correctAnswer: number
  onAnswer: (questionId: number, answer: number) => void
}

export function QuestionCard({
  id,
  text,
  options,
  correctAnswer,
  onAnswer,
}: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | undefined>(undefined)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleAnswer = (answer: number) => {
    setSelectedAnswer(answer)
    onAnswer(id, answer)
  }

  return (
    <Card className="w-full mb-6 border border-gray-200">
      <CardContent className="p-6">
        <div className="mb-4 text-lg font-semibold text-gray-800">{`${id}. ${text}`}</div>
        <RadioGroup
          value={selectedAnswer?.toString()}
          onValueChange={(value) => handleAnswer(parseInt(value))}
          className="space-y-3"
        >
          {options.map((option, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center space-x-2 rounded-lg border p-4",
                showAnswer && index === correctAnswer && "bg-green-100 border-green-500",
                showAnswer && selectedAnswer === index && index !== correctAnswer && "bg-red-100 border-red-500",
                !showAnswer && "hover:bg-gray-100"
              )}
            >
              <RadioGroupItem value={index.toString()} id={`q${id}-o${index}`} />
              <Label className="flex-1 cursor-pointer" htmlFor={`q${id}-o${index}`}>
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
        <Button
          className="mt-4 bg-gray-200 text-gray-800 hover:bg-gray-300"
          variant="outline"
          onClick={() => setShowAnswer(true)}
          disabled={showAnswer}
        >
          Show Answer
        </Button>
      </CardContent>
    </Card>
  )
}

