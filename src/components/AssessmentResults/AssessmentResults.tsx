import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WelcomeScreen } from './screens/WelcomeScreen'
import { StressLevelScreen } from './screens/StressLevelScreen'
import { StrugglingAreasScreen } from './screens/StrugglingAreasScreen'
import { StrengthsScreen } from './screens/StrengthsScreen'
import { RecommendationsScreen } from './screens/RecommendationsScreen'
import { ProgressBar } from './ProgressBar'
import styles from './assessment-results.module.scss'

export interface AssessmentData {
  overallStressLevel: 'low' | 'moderate' | 'high'
  topStrugglingAreas: Array<{
    pillar: string
    theme: string
    score: number
  }>
  strengths: Array<{
    pillar: string
    theme: string
    score: number
  }>
  recommendations: string[]
}

interface AssessmentResultsProps {
  data: AssessmentData
}

const screens = [
  WelcomeScreen,
  StressLevelScreen,
  StrugglingAreasScreen,
  StrengthsScreen,
  RecommendationsScreen
]

export const AssessmentResults: React.FC<AssessmentResultsProps> = ({ data }) => {
  const [currentScreen, setCurrentScreen] = useState(0)

  const nextScreen = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1)
    }
  }

  const prevScreen = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1)
    }
  }

  const handleTap = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const tapX = event.clientX - rect.left
    const screenWidth = rect.width
    
    // If tap is on left third of screen, go back
    if (tapX < screenWidth * 0.33 && currentScreen > 0) {
      prevScreen()
    }
    // If tap is on right two-thirds of screen, go forward
    else if (tapX >= screenWidth * 0.33 && currentScreen < screens.length - 1) {
      nextScreen()
    }
  }

  const CurrentScreenComponent = screens[currentScreen]

  return (
    <div className={styles.container}>
      <ProgressBar
        total={screens.length}
        current={currentScreen}
      />
      
      <div className={styles.screenContainer}>
        <div
          className={styles.screen}
          onClick={handleTap}
        >
          <CurrentScreenComponent 
            data={data}
            onNext={nextScreen}
            onPrev={prevScreen}
            currentScreen={currentScreen}
            totalScreens={screens.length}
          />
        </div>
      </div>
    </div>
  )
}