import React from 'react'
import { motion } from 'framer-motion'
import { AssessmentData } from '../AssessmentResults'
import { ScreenProps } from './types'
import styles from './recommendations-screen.module.scss'

const recommendationIcons = ['💡', '🎯', '🌱']

export const RecommendationsScreen: React.FC<ScreenProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerIcon}>🚀</div>
        <h2 className={styles.title}>Your Action Plan</h2>
        <p className={styles.subtitle}>
          Small steps that can make a big difference
        </p>
      </div>
      
      <div className={styles.recommendationsContainer}>
        {data.recommendations.map((recommendation, index) => (
          <div
            key={index}
            className={styles.recommendationCard}
          >
            <div className={styles.recommendationIcon}>
              {recommendationIcons[index] || '✨'}
            </div>
            <div className={styles.recommendationContent}>
              <p className={styles.recommendationText}>{recommendation}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.footer}>
        <p className={styles.footerText}>
          Remember, small consistent changes lead to lasting improvements in your wellbeing.
        </p>
        <div className={styles.encouragementIcon}>💪</div>
      </div>
    </div>
  )
}