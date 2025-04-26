import { Incident } from '../types/incident';
import { useState } from 'react';

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'High':
      return 'bg-red-500/10 text-red-300 border-red-400/30';
    case 'Medium':
      return 'bg-yellow-500/10 text-yellow-300 border-yellow-400/30';
    case 'Low':
      return 'bg-green-500/10 text-green-300 border-green-400/30';
    default:
      return 'bg-gray-500/10 text-gray-300 border-gray-400/30';
  }
};

const getSeverityIcon = (severity: string) => {
  switch (severity) {
    case 'High':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      );
    case 'Medium':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'Low':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    default:
      return null;
  }
};

export const IncidentCard = ({ incident }: { incident: Incident }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative group">
      <div className="relative backdrop-blur-2xl bg-transparent/10 border border-white/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/30 shadow-lg hover:shadow-2xl">
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <div className={`px-3 py-1 rounded-full ${getSeverityColor(incident.severity)} backdrop-blur-md flex items-center space-x-2 border border-white/10 shadow-sm`}>
                  {getSeverityIcon(incident.severity)}
                  <span className="text-sm font-medium">{incident.severity}</span>
                </div>
                <span className="text-sm text-white/70">{new Date(incident.reported_at).toLocaleDateString()}</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white/90">{incident.title}</h3>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-4 p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-200 transform hover:scale-110 shadow-md"
            >
              <svg
                className={`w-5 h-5 text-white/80 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="pt-4 border-t border-white/20">
              <p className="text-white/80 leading-relaxed">{incident.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
