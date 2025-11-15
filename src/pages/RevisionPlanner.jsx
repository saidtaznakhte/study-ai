import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Plus, Clock, CheckCircle } from 'lucide-react';

const RevisionPlanner = () => {
  const [tasks, setTasks] = useState([
    { id: 1, subject: 'Mathématiques', topic: 'Dérivées', date: '2025-01-15', time: '14:00', completed: false },
    { id: 2, subject: 'Physique', topic: 'Optique', date: '2025-01-15', time: '16:00', completed: false },
    { id: 3, subject: 'Histoire', topic: 'Guerre mondiale', date: '2025-01-16', time: '10:00', completed: true },
  ]);

  const subjectColors = {
    'Mathématiques': 'bg-math',
    'Physique': 'bg-science',
    'Histoire': 'bg-history',
    'Français': 'bg-language',
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Planning de révision adaptatif 📅
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Votre emploi du temps personnalisé basé sur vos objectifs
            </p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            <Plus className="w-5 h-5" />
            Nouvelle révision
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
            <CalendarIcon className="w-8 h-8 mb-3 opacity-80" />
            <h3 className="text-2xl font-bold mb-1">12</h3>
            <p className="text-blue-100">Révisions cette semaine</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
            <CheckCircle className="w-8 h-8 mb-3 opacity-80" />
            <h3 className="text-2xl font-bold mb-1">8/12</h3>
            <p className="text-green-100">Objectifs complétés</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
            <Clock className="w-8 h-8 mb-3 opacity-80" />
            <h3 className="text-2xl font-bold mb-1">3h 20m</h3>
            <p className="text-purple-100">Temps restant aujourd'hui</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Révisions planifiées
          </h3>
          <div className="space-y-3">
            {tasks.map((task) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`p-4 rounded-xl border-2 transition-all ${
                  task.completed
                    ? 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 opacity-60'
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      task.completed
                        ? 'bg-green-500 border-green-500'
                        : 'border-gray-300 dark:border-gray-600 hover:border-primary-500'
                    }`}
                  >
                    {task.completed && <CheckCircle className="w-4 h-4 text-white" />}
                  </button>
                  <div className={`w-1 h-12 rounded-full ${subjectColors[task.subject] || 'bg-other'}`} />
                  <div className="flex-1">
                    <h4 className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900 dark:text-white'}`}>
                      {task.subject} - {task.topic}
                    </h4>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4" />
                        {new Date(task.date).toLocaleDateString('fr-FR')}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {task.time}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
          <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
            💡 Conseil IA
          </h4>
          <p className="text-blue-700 dark:text-blue-400">
            Basé sur votre rythme d'apprentissage, nous recommandons d'ajouter 30 minutes de révision supplémentaire en mathématiques cette semaine.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RevisionPlanner;
