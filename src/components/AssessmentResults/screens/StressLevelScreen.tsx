import React from 'react'
import { motion } from 'framer-motion'
import { AssessmentData } from '../AssessmentResults'
import { ScreenProps } from './types'
import styles from './stress-level-screen.module.scss'

const stressLevelConfig = {
  low: {
    color: '#7fb8ea',
    icon: '🌱',
    title: 'Low Stress Level',
    description: 'You\'re managing stress well overall. Your responses suggest you have good coping mechanisms in place.',
    percentage: 25
  },
  moderate: {
    color: '#ed897f',
    icon: '⚖️',
    title: 'Moderate Stress Level',
    description: 'You\'re experiencing some stress that could benefit from attention. There are opportunities to improve your wellbeing.',
    percentage: 60
  },
  high: {
    color: '#c3405b',
    icon: '🔥',
    title: 'High Stress Level',
    description: 'Your responses indicate significant stress levels. It\'s important to prioritize stress management strategies.',
    percentage: 85
  }
}

export const StressLevelScreen: React.FC<ScreenProps> = ({ data, onNext }) => {
  const config = stressLevelConfig[data.overallStressLevel]
  
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>{config.icon}</div>
      </div>
      
      <div className={styles.content}>
        <h2 className={styles.title}>{config.title}</h2>
        <p className={styles.description}>{config.description}</p>
      </div>
      
      <div className={styles.progressContainer}>
        <div className={styles.progressRing}>
          <svg className={styles.progressSvg} viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="8"
            />
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke={config.color}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 50}`}
              strokeDashoffset={2 * Math.PI * 50 * (1 - config.percentage / 100)}
            />
          </svg>
          <div className={styles.progressText}>
            <span className={styles.percentage}>{config.percentage}%</span>
            <span className={styles.label}>Stress Level</span>
          </div>
        </div>
      </div>
      
      <div className={styles.continueButton}>
        <p className={styles.tapHint}>Tap to continue</p>
      </div>
    </div>
  )
}