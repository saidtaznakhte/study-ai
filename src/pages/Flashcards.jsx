import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCw, CheckCircle, XCircle, Plus } from 'lucide-react';

const Flashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [stats, setStats] = useState({ correct: 0, incorrect: 0 });

  const flashcards = [
    { question: 'Qu\'est-ce qu\'une dérivée?', answer: 'La dérivée mesure le taux de variation instantané d\'une fonction.' },
    { question: 'Formule de l\'énergie cinétique?', answer: 'E = ½mv²' },
    { question: 'Date de la Révolution française?', answer: '1789' },
  ];

  const currentCard = flashcards[currentIndex];

  const handleAnswer = (correct) => {
    setStats(prev => ({
      ...prev,
      [correct ? 'correct' : 'incorrect']: prev[correct ? 'correct' : 'incorrect'] + 1
    }));
    
    setTimeout(() => {
      setIsFlipped(false);
      setCurrentIndex((prev) => (prev + 1) % flashcards.length);
    }, 500);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Flashcards & Quiz 🧩
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Révisez intelligemment avec la répétition espacée
            </p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            <Plus className="w-5 h-5" />
            Créer un jeu
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{currentIndex + 1}/{flashcards.length}</p>
            <p className="text-sm text-blue-700 dark:text-blue-300">Carte actuelle</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.correct}</p>
            <p className="text-sm text-green-700 dark:text-green-300">Correctes</p>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-red-600 dark:text-red-400">{stats.incorrect}</p>
            <p className="text-sm text-red-700 dark:text-red-300">Incorrectes</p>
          </div>
        </div>

        <div className="perspective-1000 mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={isFlipped ? 'back' : 'front'}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => setIsFlipped(!isFlipped)}
              className="relative h-80 cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 p-8 flex items-center justify-center"
                   style={{ backfaceVisibility: 'hidden' }}>
                <div className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Question</p>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {currentCard.question}
                  </h3>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mt-6">
                    Cliquez pour voir la réponse
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary-600 rounded-2xl border-2 border-primary-700 p-8 flex items-center justify-center"
                   style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                <div className="text-center">
                  <p className="text-sm text-primary-200 mb-4">Réponse</p>
                  <h3 className="text-2xl font-semibold text-white">
                    {currentCard.answer}
                  </h3>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {isFlipped && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-4 justify-center"
          >
            <button
              onClick={() => handleAnswer(false)}
              className="flex items-center gap-2 px-8 py-4 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-xl hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors"
            >
              <XCircle className="w-6 h-6" />
              Je ne savais pas
            </button>
            <button
              onClick={() => handleAnswer(true)}
              className="flex items-center gap-2 px-8 py-4 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-xl hover:bg-green-200 dark:hover:bg-green-900/30 transition-colors"
            >
              <CheckCircle className="w-6 h-6" />
              Je savais!
            </button>
          </motion.div>
        )}

        <div className="mt-8 bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
          <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2 flex items-center gap-2">
            <RotateCw className="w-5 h-5" />
            Répétition espacée active
          </h4>
          <p className="text-purple-700 dark:text-purple-400">
            L'IA adapte la fréquence des cartes selon votre performance pour optimiser votre mémorisation.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Flashcards;
