import { useState } from 'react'
import { Incident, Severity, IncidentFormData } from './types/incident'
import { mockIncidents } from './data/mockIncidents'
import { IncidentCard } from './components/IncidentCard'
import { IncidentForm } from './components/IncidentForm'
import { Filters } from './components/Filters'
import './App.css'

function App() {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents)
  const [selectedSeverity, setSelectedSeverity] = useState<Severity | 'All'>('All')
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest')
  const [searchQuery, setSearchQuery] = useState('')

  const handleAddIncident = (formData: IncidentFormData) => {
    const newIncident: Incident = {
      id: incidents.length + 1,
      ...formData,
      reported_at: new Date().toISOString(),
    }
    setIncidents([newIncident, ...incidents])
  }

  const filteredAndSortedIncidents = incidents
    .filter((incident) => {
      const matchesSeverity = selectedSeverity === 'All' || incident.severity === selectedSeverity
      const matchesSearch = searchQuery === '' || 
        incident.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        incident.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesSeverity && matchesSearch
    })
    .sort((a, b) => {
      const dateA = new Date(a.reported_at).getTime()
      const dateB = new Date(b.reported_at).getTime()
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB
    })

  return (
    <div className="min-h-screen w-full bg-transparent/10 border rounded-xl backdrop-blur-2xl text-white/90 relative overflow-hidden">
  {/* Background Blobs Removed */}

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    {/* Header */}
    <div className="flex items-center justify-between mb-12 bg-transparent/10  backdrop-blur-xl p-6 rounded-xl border border-white/20 shadow-lg">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
          AI Safety Incidents
        </h1>
        <p className="text-white/80">Monitor and manage AI safety incidents in real-time</p>
      </div>
      <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center shadow-lg border border-white/20 backdrop-blur-md">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <div className="relative z-10">
          <Filters
            selectedSeverity={selectedSeverity}
            sortOrder={sortOrder}
            onSeverityChange={setSelectedSeverity}
            onSortOrderChange={setSortOrder}
            onSearchChange={setSearchQuery}
          />
        </div>

        <div className="space-y-4">
          {filteredAndSortedIncidents.map((incident, index) => (
            <div
              key={incident.id}
              className="transform transition-all duration-300 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <IncidentCard incident={incident} />
            </div>
          ))}
        </div>
      </div>

      <div className="sticky top-8">
        <IncidentForm onSubmit={handleAddIncident} />
      </div>
    </div>
  </div>
</div>

  )
}

export default App
