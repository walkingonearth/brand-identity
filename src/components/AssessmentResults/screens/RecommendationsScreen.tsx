import React from 'react'
import { motion } from 'framer-motion'
import { AssessmentData } from '../AssessmentResults'
import { ScreenProps } from './types'
import styles from './recommendations-screen.module.scss'

const recommendationIcons = ['💡', '🎯', '🌱']

export const RecommendationsScreen: React.FC<ScreenProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={styles.header}
      >
        <div className={styles.headerIcon}>🚀</div>
        <h2 className={styles.title}>Your Action Plan</h2>
        <p className={styles.subtitle}>
          Small steps that can make a big difference
        </p>
      </motion.div>
      
      <div className={styles.recommendationsContainer}>
        {data.recommendations.map((recommendation, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            className={styles.recommendationCard}
          >
            <div className={styles.recommendationIcon}>
              {recommendationIcons[index] || '✨'}
            </div>
            <div className={styles.recommendationContent}>
              <p className={styles.recommendationText}>{recommendation}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className={styles.footer}
      >
        <p className={styles.footerText}>
          Remember, small consistent changes lead to lasting improvements in your wellbeing.
        </p>
        <div className={styles.encouragementIcon}>💪</div>
      </motion.div>
    </div>
  )
}