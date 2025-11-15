import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';

const AITutor = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Bonjour! Je suis votre tuteur IA. Comment puis-je vous aider aujourd\'hui?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { role: 'user', content: input },
      { role: 'assistant', content: 'Excellente question! Laissez-moi vous expliquer cela en détail...' }
    ];
    
    setMessages(newMessages);
    setInput('');
  };

  return (
    <div className="p-8 max-w-4xl mx-auto h-[calc(100vh-4rem)] flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Tuteur IA 24/7 💬
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Posez vos questions et obtenez des explications personnalisées
        </p>
      </motion.div>

      <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.role === 'user' 
                  ? 'bg-primary-600' 
                  : 'bg-gradient-to-br from-purple-500 to-pink-500'
              }`}>
                {message.role === 'user' ? (
                  <User className="w-5 h-5 text-white" />
                ) : (
                  <Bot className="w-5 h-5 text-white" />
                )}
              </div>
              <div className={`max-w-[70%] p-4 rounded-2xl ${
                message.role === 'user'
                  ? 'bg-primary-600 text-white rounded-tr-none'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-tl-none'
              }`}>
                <p className="text-sm">{message.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Posez votre question..."
              className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
            />
            <button
              onClick={handleSend}
              className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Appuyez sur Entrée pour envoyer
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <button className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-left hover:shadow-md transition-shadow">
          <p className="text-sm font-medium text-blue-900 dark:text-blue-300">
            Expliquer les dérivées
          </p>
        </button>
        <button className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl text-left hover:shadow-md transition-shadow">
          <p className="text-sm font-medium text-green-900 dark:text-green-300">
            Exemples de physique quantique
          </p>
        </button>
        <button className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-left hover:shadow-md transition-shadow">
          <p className="text-sm font-medium text-purple-900 dark:text-purple-300">
            Résumé de l'histoire moderne
          </p>
        </button>
      </div>
    </div>
  );
};

export default AITutor;
