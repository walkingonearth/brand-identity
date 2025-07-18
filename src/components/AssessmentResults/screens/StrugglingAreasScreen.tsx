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
      <div className={styles.header}>
        <h2 className={styles.title}>Areas for Growth</h2>
        <p className={styles.subtitle}>
          These areas show the most opportunity for improvement
        </p>
      </div>
      
      <div className={styles.areasContainer}>
        {data.topStrugglingAreas.map((area, index) => (
          <div
            key={`${area.pillar}-${area.theme}`}
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
                  <div
                    className={styles.scoreProgress}
                    style={{ width: `${(area.score / 5) * 100}%` }}
                  />
                </div>
                <span className={styles.scoreText}>
                  {area.score.toFixed(1)}/5.0
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.continueButton}>
        <p className={styles.tapHint}>Tap to continue</p>
      </div>
    </div>
  )
}