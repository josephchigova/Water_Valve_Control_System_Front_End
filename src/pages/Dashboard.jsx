import React from 'react';
import SumpCircle from '../components/SumpCircle';

export default function Dashboard() {
  const sumpLevels = [
    { id: 1, label: 'SUMP 1', level: 65 },
    { id: 2, label: 'SUMP 2', level: 45 },
    { id: 3, label: 'SUMP 3', level: 80 },
    { id: 4, label: 'SUMP 4', level: 30 },
  ];

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="sump-container">
        {sumpLevels.map(({ id, label, level }) => (
          <SumpCircle key={id} label={label} level={level} />
        ))}
      </div>
    </div>
  );
}
