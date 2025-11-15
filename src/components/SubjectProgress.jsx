import React from 'react';
import { BookOpen } from 'lucide-react';

const SubjectProgress = () => {
  const subjects = [
    { name: 'Mathématiques', progress: 85, color: 'bg-math', textColor: 'text-math' },
    { name: 'Physique', progress: 72, color: 'bg-science', textColor: 'text-science' },
    { name: 'Histoire', progress: 90, color: 'bg-history', textColor: 'text-history' },
    { name: 'Français', progress: 68, color: 'bg-language', textColor: 'text-language' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5 text-primary-600 dark:text-primary-400" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Progression par matière
        </h3>
      </div>
      <div className="space-y-4">
        {subjects.map((subject, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {subject.name}
              </span>
              <span className={`text-sm font-semibold ${subject.textColor}`}>
                {subject.progress}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div
                className={`${subject.color} h-2.5 rounded-full transition-all duration-500`}
                style={{ width: `${subject.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectProgress;
