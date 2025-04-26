import { Incident } from '../types/incident';

export const mockIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics in job recommendations, leading to potential discrimination issues.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "Privacy Data Leak",
    description: "Unauthorized access to user data through a vulnerability in the authentication system.",
    severity: "High",
    reported_at: "2025-03-14T15:30:00Z"
  },
  {
    id: 3,
    title: "Incorrect Medical Diagnosis",
    description: "AI system provided incorrect medical diagnosis recommendations in 5% of cases.",
    severity: "High",
    reported_at: "2025-03-13T09:15:00Z"
  },
  {
    id: 4,
    title: "Content Moderation Failure",
    description: "System failed to detect and remove harmful content in multiple instances.",
    severity: "Medium",
    reported_at: "2025-03-12T14:20:00Z"
  },
  {
    id: 5,
    title: "Minor UI Glitch",
    description: "Temporary display issue in the dashboard interface.",
    severity: "Low",
    reported_at: "2025-03-11T11:45:00Z"
  }
]; 