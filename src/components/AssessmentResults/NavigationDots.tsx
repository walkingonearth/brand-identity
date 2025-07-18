import React from 'react'
import clsx from 'clsx'
import styles from './navigation-dots.module.scss'

interface NavigationDotsProps {
  total: number
  current: number
  onDotClick: (index: number) => void
}

export const NavigationDots: React.FC<NavigationDotsProps> = ({
  total,
  current,
  onDotClick
}) => {
  return (
    <div className={styles.container}>
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          className={clsx(styles.dot, {
            [styles.active]: index === current
          })}
          onClick={() => onDotClick(index)}
          aria-label={`Go to screen ${index + 1}`}
        />
      ))}
    </div>
  )
}