import { Routes, Route } from 'react-router';

import { HomePage } from './pages/home/HomePage';
import { AllProjectsPage } from './pages/all-projects/AllProjectsPage';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<AllProjectsPage />} />
    </Routes>
  );
}

export default App;
