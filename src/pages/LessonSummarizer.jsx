import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, Volume2, Download, Loader } from 'lucide-react';

const LessonSummarizer = () => {
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [summary, setSummary] = useState('');

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setIsProcessing(true);
      setTimeout(() => {
        setSummary('Voici un résumé intelligent de votre cours...\n\nPoints clés:\n• Concept principal 1\n• Concept principal 2\n• Concept principal 3\n\nCe résumé couvre les éléments essentiels de votre leçon.');
        setIsProcessing(false);
      }, 2000);
    }
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Résumé de cours intelligent 📚
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Téléchargez vos notes et obtenez un résumé clair et concis
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-dashed border-gray-300 dark:border-gray-600">
            <div className="text-center">
              <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Télécharger un document
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                PDF, images, ou notes manuscrites
              </p>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg cursor-pointer hover:bg-primary-700 transition-colors"
              >
                Choisir un fichier
              </label>
              {file && (
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  Fichier: {file.name}
                </p>
              )}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Résumé généré
              </h3>
              {summary && (
                <div className="flex gap-2">
                  <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <Volume2 className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </button>
                  <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <Download className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </button>
                </div>
              )}
            </div>
            {isProcessing ? (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader className="w-12 h-12 text-primary-600 animate-spin mb-4" />
                <p className="text-gray-600 dark:text-gray-400">Analyse en cours...</p>
              </div>
            ) : summary ? (
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{summary}</p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                <FileText className="w-12 h-12 mb-4" />
                <p>Aucun résumé pour le moment</p>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
            <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
              Résumé simplifié
            </h4>
            <p className="text-sm text-blue-700 dark:text-blue-400">
              Concepts complexes expliqués simplement
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
            <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">
              Format audio
            </h4>
            <p className="text-sm text-green-700 dark:text-green-400">
              Écoutez vos résumés en déplacement
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
            <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">
              Niveaux adaptés
            </h4>
            <p className="text-sm text-purple-700 dark:text-purple-400">
              Ajusté à votre niveau d'étude
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LessonSummarizer;
