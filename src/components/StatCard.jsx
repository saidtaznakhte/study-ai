import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, change, color, index }) => {
  const colorMap = {
    primary: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    science: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
    math: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
    history: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${colorMap[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
        <TrendingUp className="w-5 h-5 text-green-500" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{value}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{label}</p>
      <p className="text-xs text-green-600 dark:text-green-400 font-medium">{change}</p>
    </motion.div>
  );
};

export default StatCard;
