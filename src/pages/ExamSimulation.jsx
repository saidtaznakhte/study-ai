import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Award, BarChart } from 'lucide-react';

const ExamSimulation = () => {
  const [isExamActive, setIsExamActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(null);

  const questions = [
    {
      question: 'Quelle est la formule de la loi d\'Ohm?',
      options: ['V = R × I', 'V = I / R', 'V = R + I', 'V = R - I'],
      correct: 0
    },
    {
      question: 'En quelle année a eu lieu la prise de la Bastille?',
      options: ['1789', '1799', '1804', '1815'],
      correct: 0
    },
  ];

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].correct) {
      setScore((prev) => (prev || 0) + 1);
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsExamActive(false);
    }
  };

  const startExam = () => {
    setIsExamActive(true);
    setCurrentQuestion(0);
    setScore(0);
  };

  if (isExamActive) {
    const question = questions[currentQuestion];
    return (
      <div className="p-8 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Clock className="w-5 h-5" />
                <span className="text-sm">Temps restant: 45:00</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Question {currentQuestion + 1} sur {questions.length}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              {question.question}
            </h3>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full p-4 text-left bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-500 border-2 border-transparent transition-all"
                >
                  <span className="text-gray-900 dark:text-white font-medium">
                    {String.fromCharCode(65 + index)}. {option}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Simulation d'examen 🎓
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Testez vos connaissances dans des conditions réelles
        </p>

        {score !== null && (
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white mb-8">
            <div className="flex items-center gap-4">
              <Award className="w-16 h-16" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Examen terminé!</h3>
                <p className="text-green-100">
                  Score: {score}/{questions.length} ({Math.round((score / questions.length) * 100)}%)
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Examens disponibles
            </h3>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <h4 className="font-medium text-blue-900 dark:text-blue-300 mb-1">Mathématiques</h4>
                <p className="text-sm text-blue-700 dark:text-blue-400">20 questions • 60 min</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <h4 className="font-medium text-green-900 dark:text-green-300 mb-1">Physique</h4>
                <p className="text-sm text-green-700 dark:text-green-400">15 questions • 45 min</p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                <h4 className="font-medium text-purple-900 dark:text-purple-300 mb-1">Histoire</h4>
                <p className="text-sm text-purple-700 dark:text-purple-400">25 questions • 90 min</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Performances récentes
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Mathématiques</span>
                <span className="font-semibold text-green-600 dark:text-green-400">85%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Physique</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">78%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Histoire</span>
                <span className="font-semibold text-purple-600 dark:text-purple-400">92%</span>
              </div>
            </div>
            <button className="w-full mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              <BarChart className="w-5 h-5" />
              Voir tous les résultats
            </button>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={startExam}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors text-lg font-semibold"
          >
            <Play className="w-6 h-6" />
            Démarrer un examen
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ExamSimulation;
