import React from 'react'
import { motion } from 'framer-motion'
import { AssessmentData } from '../AssessmentResults'
import { ScreenProps } from './types'
import styles from './struggling-areas-screen.module.scss'

const pillarIcons: Record<string, string> = {
  'Resilience': '🛡️',
  'Energy': '⚡',
  'Nutrition': '🥗',
  'Activity': '🏃‍♀️',
  'Current Stress': '😰'
}

const getScoreColor = (score: number) => {
  if (score <= 2) return '#c3405b' // red for low scores (high concern)
  if (score <= 3) return '#ed897f' // peach for moderate scores
  return '#7fb8ea' // blue for good scores
}

export const StrugglingAreasScreen: React.FC<ScreenProps> = ({ data, onNext }) => {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={styles.header}
      >
        <h2 className={styles.title}>Areas for Growth</h2>
        <p className={styles.subtitle}>
          These areas show the most opportunity for improvement
        </p>
      </motion.div>
      
      <div className={styles.areasContainer}>
        {data.topStrugglingAreas.map((area, index) => (
          <motion.div
            key={`${area.pillar}-${area.theme}`}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            className={styles.areaCard}
          >
            <div className={styles.areaIcon}>
              {pillarIcons[area.pillar] || '📊'}
            </div>
            <div className={styles.areaContent}>
              <h3 className={styles.pillarName}>{area.pillar}</h3>
              <p className={styles.themeName}>{area.theme}</p>
              <div className={styles.scoreContainer}>
                <div 
                  className={styles.scoreBar}
                  style={{ backgroundColor: getScoreColor(area.score) }}
                >
                  <motion.div
                    className={styles.scoreProgress}
                    initial={{ width: 0 }}
                    animate={{ width: `${(area.score / 5) * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  />
                </div>
                <span className={styles.scoreText}>
                  {area.score.toFixed(1)}/5.0
                </span>
              </div>
            </div>
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