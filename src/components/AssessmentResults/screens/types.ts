import { AssessmentData } from '../AssessmentResults'

export interface ScreenProps {
  data: AssessmentData
  onNext: () => void
  onPrev: () => void
  currentScreen: number
  totalScreens: number
}