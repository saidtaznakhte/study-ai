import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const UpcomingRevisions = () => {
  const revisions = [
    { subject: 'Mathématiques', topic: 'Algèbre linéaire', time: '14:00', color: 'bg-math' },
    { subject: 'Physique', topic: 'Mécanique quantique', time: '16:30', color: 'bg-science' },
    { subject: 'Histoire', topic: 'Révolution française', time: 'Demain', color: 'bg-history' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 h-full">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-5 h-5 text-primary-600 dark:text-primary-400" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Révisions à venir
        </h3>
      </div>
      <div className="space-y-3">
        {revisions.map((revision, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3">
              <div className={`w-1 h-12 ${revision.color} rounded-full`} />
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                  {revision.subject}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {revision.topic}
                </p>
                <div className="flex items-center gap-1 mt-2 text-xs text-gray-500 dark:text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span>{revision.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingRevisions;
