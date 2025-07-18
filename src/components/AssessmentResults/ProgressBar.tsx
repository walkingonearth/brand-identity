import React from 'react'
import styles from './progress-bar.module.scss'

interface ProgressBarProps {
  total: number
  current: number
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  total,
  current
}) => {
  return (
    <div className={styles.container}>
      {Array.from({ length: total }, (_, index) => (
        <div
          key={index}
          className={styles.segment}
        >
          <div 
            className={styles.progress}
            style={{
              width: index < current ? '100%' : index === current ? '100%' : '0%',
              opacity: index <= current ? 1 : 0.3
            }}
          />
        </div>
      ))}
    </div>
  )
}
</ProgressBar>