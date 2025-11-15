import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Calendar, 
  Target, 
  Award,
  Book,
  Clock,
  Zap,
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import StatCard from '../components/StatCard';
import ProgressChart from '../components/ProgressChart';
import UpcomingRevisions from '../components/UpcomingRevisions';
import MotivationQuote from '../components/MotivationQuote';
import SubjectProgress from '../components/SubjectProgress';

const Dashboard = () => {
  const stats = [
    { icon: Book, label: 'Cours étudiés', value: '24', change: '+3 cette semaine', color: 'primary' },
    { icon: Target, label: 'Objectifs atteints', value: '18/20', change: '90% de réussite', color: 'science' },
    { icon: Clock, label: 'Temps d\'étude', value: '12h 30m', change: '+2h vs semaine dernière', color: 'math' },
    { icon: Award, label: 'Série de jours', value: '7 jours', change: 'Record personnel!', color: 'history' },
  ];

  const quickActions = [
    { to: '/summarizer', icon: Book, label: 'Résumer un cours', color: 'bg-blue-500' },
    { to: '/tutor', icon: Zap, label: 'Poser une question', color: 'bg-purple-500' },
    { to: '/flashcards', icon: Target, label: 'Réviser avec flashcards', color: 'bg-green-500' },
    { to: '/focus', icon: Clock, label: 'Démarrer un timer', color: 'bg-orange-500' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Bonjour, Étudiant! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Voici un aperçu de votre progression d'apprentissage
          </p>
        </div>

        <MotivationQuote />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <ProgressChart />
          </div>
          <div>
            <UpcomingRevisions />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <SubjectProgress />
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Actions rapides
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.to}
                  className="group flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                    {action.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Prêt pour votre prochain défi?</h3>
              <p className="text-primary-100 mb-4">
                Commencez une simulation d'examen pour tester vos connaissances
              </p>
              <Link
                to="/exam"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
              >
                Démarrer un examen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <GraduationCap className="w-32 h-32 text-primary-300 opacity-50" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
