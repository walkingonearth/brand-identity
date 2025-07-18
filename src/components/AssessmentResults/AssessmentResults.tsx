import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WelcomeScreen } from './screens/WelcomeScreen'
import { StressLevelScreen } from './screens/StressLevelScreen'
import { StrugglingAreasScreen } from './screens/StrugglingAreasScreen'
import { StrengthsScreen } from './screens/StrengthsScreen'
import { RecommendationsScreen } from './screens/RecommendationsScreen'
import { NavigationDots } from './NavigationDots'
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

  const goToScreen = (index: number) => {
    setCurrentScreen(index)
  }

  const CurrentScreenComponent = screens[currentScreen]

  return (
    <div className={styles.container}>
      <div className={styles.screenContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={styles.screen}
          >
            <CurrentScreenComponent 
              data={data}
              onNext={nextScreen}
              onPrev={prevScreen}
              currentScreen={currentScreen}
              totalScreens={screens.length}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      
      <NavigationDots
        total={screens.length}
        current={currentScreen}
        onDotClick={goToScreen}
      />
    </div>
  )
}