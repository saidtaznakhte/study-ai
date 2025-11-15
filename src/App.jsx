import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import LessonSummarizer from './pages/LessonSummarizer';
import RevisionPlanner from './pages/RevisionPlanner';
import AITutor from './pages/AITutor';
import Flashcards from './pages/Flashcards';
import ExamSimulation from './pages/ExamSimulation';
import FocusTimer from './pages/FocusTimer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/summarizer" element={<LessonSummarizer />} />
              <Route path="/planner" element={<RevisionPlanner />} />
              <Route path="/tutor" element={<AITutor />} />
              <Route path="/flashcards" element={<Flashcards />} />
              <Route path="/exam" element={<ExamSimulation />} />
              <Route path="/focus" element={<FocusTimer />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
