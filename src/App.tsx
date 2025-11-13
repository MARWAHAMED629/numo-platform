import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { AuthPage } from './components/AuthPage';
import { Dashboard } from './components/Dashboard';
import { ProjectManagement } from './components/ProjectManagement';
import { AIMarketing } from './components/AIMarketing';
import { VisualIdentity } from './components/VisualIdentity';
import { FinancialAnalysis } from './components/FinancialAnalysis';
import { CommunityNetwork } from './components/CommunityNetwork';
import { Support } from './components/Support';

export type UserType = 'owner' | 'consultant' | 'developer' | null;

export interface User {
  email: string;
  type: UserType;
  name: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'auth' | 'dashboard' | 'project' | 'marketing' | 'identity' | 'financial' | 'community' | 'support'>('home');
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (email: string, password: string) => {
    // Mock login
    setUser({ email, type: 'owner', name: 'مستخدم تجريبي' });
    setCurrentPage('dashboard');
  };

  const handleSignup = (email: string, password: string, userType: UserType, name: string) => {
    // Mock signup
    setUser({ email, type: userType, name });
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const navigateTo = (page: typeof currentPage) => {
    if (page === 'auth' || page === 'home') {
      setCurrentPage(page);
    } else {
      if (user) {
        setCurrentPage(page);
      } else {
        setCurrentPage('auth');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
      {currentPage === 'home' && (
        <HomePage 
          onNavigate={navigateTo}
        />
      )}
      {currentPage === 'auth' && (
        <AuthPage 
          mode={authMode}
          onModeChange={setAuthMode}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onNavigate={navigateTo}
        />
      )}
      {currentPage === 'dashboard' && user && (
        <Dashboard 
          user={user}
          onNavigate={navigateTo}
          onLogout={handleLogout}
        />
      )}
      {currentPage === 'project' && user && (
        <ProjectManagement 
          user={user}
          onNavigate={navigateTo}
          onLogout={handleLogout}
        />
      )}
      {currentPage === 'marketing' && user && (
        <AIMarketing 
          user={user}
          onNavigate={navigateTo}
          onLogout={handleLogout}
        />
      )}
      {currentPage === 'identity' && user && (
        <VisualIdentity 
          user={user}
          onNavigate={navigateTo}
          onLogout={handleLogout}
        />
      )}
      {currentPage === 'financial' && user && (
        <FinancialAnalysis 
          user={user}
          onNavigate={navigateTo}
          onLogout={handleLogout}
        />
      )}
      {currentPage === 'community' && user && (
        <CommunityNetwork 
          user={user}
          onNavigate={navigateTo}
          onLogout={handleLogout}
        />
      )}
      {currentPage === 'support' && user && (
        <Support 
          user={user}
          onNavigate={navigateTo}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}
