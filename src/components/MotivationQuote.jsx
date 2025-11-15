import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const MotivationQuote = () => {
  const quotes = [
    "Le succès est la somme de petits efforts répétés jour après jour.",
    "L'éducation est l'arme la plus puissante pour changer le monde.",
    "La persévérance est la clé de la réussite.",
    "Chaque expert a d'abord été un débutant.",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 mb-8 text-white"
    >
      <div className="flex items-start gap-3">
        <Sparkles className="w-6 h-6 flex-shrink-0 mt-1" />
        <div>
          <p className="text-lg font-medium mb-1">Citation du jour</p>
          <p className="text-purple-100 italic">&ldquo;{randomQuote}&rdquo;</p>
        </div>
      </div>
    </motion.div>
  );
};

export default MotivationQuote;
