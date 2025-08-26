import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ReportIssue } from './pages/ReportIssue';
import { ViewReports } from './pages/ViewReports';
import { AdminDashboard } from './pages/AdminDashboard';
import { About } from './pages/About';
import { AuthProvider } from './context/AuthContext';
import { ReportsProvider } from './context/ReportsContext';

function App() {
  return (
    <AuthProvider>
      <ReportsProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/report" element={<ReportIssue />} />
                <Route path="/reports" element={<ViewReports />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ReportsProvider>
    </AuthProvider>
  );
}

export default App;