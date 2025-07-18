import React from 'react'
import { motion } from 'framer-motion'
import { AssessmentData } from '../AssessmentResults'
import { ScreenProps } from './types'
import styles from './welcome-screen.module.scss'

export const WelcomeScreen: React.FC<ScreenProps> = ({ onNext }) => {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={styles.iconContainer}
      >
        <div className={styles.icon}>✨</div>
      </motion.div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={styles.content}
      >
        <h1 className={styles.title}>Your Stress Insights</h1>
        <p className={styles.subtitle}>
          We've analyzed your responses to provide personalized insights about your stress levels and wellbeing.
        </p>
      </motion.div>
      
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className={styles.continueButton}
        onClick={onNext}
        whileTap={{ scale: 0.95 }}
      >
        View My Results
      </motion.button>
    </div>
  )
}