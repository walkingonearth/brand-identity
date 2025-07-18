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
      <div className={styles.header}>
        <div className={styles.celebrationIcon}>🌟</div>
        <h2 className={styles.title}>Your Strengths</h2>
        <p className={styles.subtitle}>
          These areas show you're doing well - keep it up!
        </p>
      </div>
      
      <div className={styles.strengthsContainer}>
        {data.strengths.map((strength, index) => (
          <div
            key={`${strength.pillar}-${strength.theme}`}
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
                  <div
                    className={styles.scoreProgress}
                    style={{ width: `${(strength.score / 5) * 100}%` }}
                  />
                </div>
                <span className={styles.scoreText}>
                  {strength.score.toFixed(1)}/5.0
                </span>
              </div>
            </div>
            <div className={styles.checkmark}>✓</div>
          </div>
        ))}
      </div>
      
      <div className={styles.continueButton}>
        <p className={styles.tapHint}>Tap to continue</p>
      </div>
    </div>
  )
}