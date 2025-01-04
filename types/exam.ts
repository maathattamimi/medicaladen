export interface Question {
  id: number
  text: string
  options: string[]
  correctAnswer: number
}

export interface ExamState {
  answers: Record<number, number>
  isComplete: boolean
  score?: number
}

