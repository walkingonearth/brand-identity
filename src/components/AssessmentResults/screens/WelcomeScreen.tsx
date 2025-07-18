import React from 'react'
import { motion } from 'framer-motion'
import { AssessmentData } from '../AssessmentResults'
import { ScreenProps } from './types'
import styles from './welcome-screen.module.scss'

export const WelcomeScreen: React.FC<ScreenProps> = ({ onNext }) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>✨</div>
      </div>
      
      <div className={styles.content}>
        <h1 className={styles.title}>Your Stress Insights</h1>
        <p className={styles.subtitle}>
          We've analyzed your responses to provide personalized insights about your stress levels and wellbeing.
        </p>
      </div>
      
      <div className={styles.continueButton}>
        <p className={styles.tapHint}>Tap to continue</p>
      </div>
    </div>
  )
}