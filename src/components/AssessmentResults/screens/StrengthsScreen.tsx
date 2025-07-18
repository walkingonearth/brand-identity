import React from 'react'
import { motion } from 'framer-motion'
import { AssessmentData } from '../AssessmentResults'
import { ScreenProps } from './types'
import styles from './strengths-screen.module.scss'

const pillarIcons: Record<string, string> = {
  'Resilience': '🛡️',
  'Energy': '⚡',
  'Nutrition': '🥗',
  'Activity': '🏃‍♀️'
}

const getScoreColor = (score: number) => {
  if (score >= 4) return '#7fb8ea' // blue for excellent scores
  if (score >= 3) return '#ed897f' // peach for good scores
  return '#c3405b' // red for lower scores
}

export const StrengthsScreen: React.FC<ScreenProps> = ({ data, onNext }) => {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={styles.header}
      >
        <div className={styles.celebrationIcon}>🌟</div>
        <h2 className={styles.title}>Your Strengths</h2>
        <p className={styles.subtitle}>
          These areas show you're doing well - keep it up!
        </p>
      </motion.div>
      
      <div className={styles.strengthsContainer}>
        {data.strengths.map((strength, index) => (
          <motion.div
            key={`${strength.pillar}-${strength.theme}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            className={styles.strengthCard}
          >
            <div className={styles.strengthIcon}>
              {pillarIcons[strength.pillar] || '📊'}
            </div>
            <div className={styles.strengthContent}>
              <h3 className={styles.pillarName}>{strength.pillar}</h3>
              <p className={styles.themeName}>{strength.theme}</p>
              <div className={styles.scoreContainer}>
                <div 
                  className={styles.scoreBar}
                  style={{ backgroundColor: getScoreColor(strength.score) }}
                >
                  <motion.div
                    className={styles.scoreProgress}
                    initial={{ width: 0 }}
                    animate={{ width: `${(strength.score / 5) * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  />
                </div>
                <span className={styles.scoreText}>
                  {strength.score.toFixed(1)}/5.0
                </span>
              </div>
            </div>
            <div className={styles.checkmark}>✓</div>
          </motion.div>
        ))}
      </div>
      
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className={styles.continueButton}
        onClick={onNext}
        whileTap={{ scale: 0.95 }}
      >
        Continue
      </motion.button>
    </div>
  )
}