import { useState } from 'react';
import { Incident } from '../types/incident';

interface IncidentFormProps {
  onSubmit: (incident: Omit<Incident, 'id'>) => void;
}

export const IncidentForm = ({ onSubmit }: IncidentFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<Incident['severity']>('Low');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      severity,
      reported_at: new Date().toISOString(),
    });
    setTitle('');
    setDescription('');
    setSeverity('Low');
  };

  return (
    <div className="relative backdrop-blur-2xl bg-transparent/30 border border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="relative p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white/90">Report New Incident</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-medium text-white/80 tracking-wide">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-transparent/10 backdrop-blur-md border border-white/20 text-white/90 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 hover:bg-white/20 shadow-inner"
                placeholder="Enter incident title"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="severity" className="block text-sm font-medium text-white/80 tracking-wide">
                Severity
              </label>
              <select
                id="severity"
                value={severity}
                onChange={(e) => setSeverity(e.target.value as Incident['severity'])}
                required
                className="w-full px-4 py-2 rounded-lg bg-transparent/10 backdrop-blur-md border border-white/20 text-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 hover:bg-white/20 shadow-inner"
              >
                <option value="Low" className="bg-black">Low</option>
                <option value="Medium" className="bg-black">Medium</option>
                <option value="High" className="bg-black">High</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-medium text-white/80 tracking-wide">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-transparent/10 backdrop-blur-md border border-white/20 text-white/90 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 hover:bg-white/20 shadow-inner"
              placeholder="Enter incident description"
            />
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] shadow-lg border border-white/20"
            >
              Submit Incident
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
