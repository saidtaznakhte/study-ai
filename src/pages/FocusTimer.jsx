import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCw, Coffee, Target } from 'lucide-react';

const FocusTimer = () => {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [sessions, setSessions] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
      if (!isBreak) {
        setSessions(sessions + 1);
      }
      setIsBreak(!isBreak);
      setTime(isBreak ? 25 * 60 : 5 * 60);
    }
    return () => clearInterval(interval);
  }, [isActive, time, isBreak, sessions]);

  const toggleTimer = () => setIsActive(!isActive);
  
  const resetTimer = () => {
    setIsActive(false);
    setTime(25 * 60);
    setIsBreak(false);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
          Mode Focus ⏱️
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12 text-center">
          Technique Pomodoro pour une productivité maximale
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 border border-gray-200 dark:border-gray-700 mb-8">
          <div className="text-center mb-8">
            <div className={`inline-block px-6 py-2 rounded-full text-sm font-medium mb-6 ${
              isBreak 
                ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                : 'bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400'
            }`}>
              {isBreak ? '☕ Temps de pause' : '🎯 Temps de focus'}
            </div>
            
            <div className="text-8xl font-bold text-gray-900 dark:text-white mb-8">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={toggleTimer}
                className="w-16 h-16 flex items-center justify-center bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
              >
                {isActive ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
              </button>
              <button
                onClick={resetTimer}
                className="w-16 h-16 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <RotateCw className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <Target className="w-6 h-6 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{sessions}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Sessions</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <Coffee className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{Math.floor(sessions / 4)}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Longues pauses</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <div className="text-2xl mb-2">🔥</div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">7</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Série de jours</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
            <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-3">
              📊 Statistiques d'aujourd'hui
            </h4>
            <div className="space-y-2 text-sm text-blue-700 dark:text-blue-400">
              <p>• Temps total: 2h 30m</p>
              <p>• Sessions complétées: 6</p>
              <p>• Taux de réussite: 95%</p>
            </div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
            <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-3">
              💡 Conseils pour rester concentré
            </h4>
            <div className="space-y-2 text-sm text-purple-700 dark:text-purple-400">
              <p>• Éliminez les distractions</p>
              <p>• Hydratez-vous régulièrement</p>
              <p>• Faites des pauses actives</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FocusTimer;
