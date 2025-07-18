import React from 'react'
import { AssessmentResults } from './components/AssessmentResults/AssessmentResults'
import './App.scss'

// Mock assessment data - in real app this would come from your assessment API
const mockAssessmentData = {
  overallStressLevel: 'moderate', // low, moderate, high
  topStrugglingAreas: [
    { pillar: 'Resilience', theme: 'Burnout Risk', score: 2.1 },
    { pillar: 'Energy', theme: 'Sleep Disturbance', score: 2.3 },
    { pillar: 'Activity', theme: 'Sedentariness', score: 1.8 }
  ],
  strengths: [
    { pillar: 'Nutrition', theme: 'Overall Diet', score: 4.2 },
    { pillar: 'Resilience', theme: 'Social Support', score: 3.8 }
  ],
  recommendations: [
    'Focus on establishing a consistent sleep routine',
    'Try incorporating 10-minute mindfulness breaks into your day',
    'Consider light physical activity like walking during breaks'
  ]
}

function App() {
  return (
    <div className="app">
      <AssessmentResults data={mockAssessmentData} />
    </div>
  )
}

export default App