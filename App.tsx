import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProcessDetails } from './components/ProcessDetails';
import { ExamTable } from './components/ExamTable';
import { ScholarshipRules } from './components/ScholarshipRules';
import { RegistrationSection } from './components/RegistrationSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-aurea-ebony selection:bg-aurea-orange selection:text-white">
      <Navbar />
      <Hero />
      <ProcessDetails />
      <ExamTable />
      <ScholarshipRules />
      <RegistrationSection />
      <Footer />
    </main>
  );
}

export default App;