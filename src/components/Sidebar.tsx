import { LayoutDashboard, Target, Sparkles, Palette, BarChart3, HelpCircle, LogOut, Menu, X, Users } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: 'dashboard' | 'project' | 'marketing' | 'identity' | 'financial' | 'community' | 'support') => void;
  onLogout: () => void;
}

export function Sidebar({ currentPage, onNavigate, onLogout }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'لوحة التحكم' },
    { id: 'project', icon: Target, label: 'إدارة المشروع' },
    { id: 'marketing', icon: Sparkles, label: 'التسويق الذكي' },
    { id: 'identity', icon: Palette, label: 'الهوية البصرية' },
    { id: 'financial', icon: BarChart3, label: 'التحليل المالي' },
    { id: 'community', icon: Users, label: 'المجتمع الذكي' },
    { id: 'support', icon: HelpCircle, label: 'المساعدة والدعم' }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-white rounded-lg shadow-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 right-0 h-screen bg-white border-l border-slate-200 z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        }`}
        style={{ width: '280px' }}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0f4c81] to-[#2d5f8d] rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl bg-gradient-to-r from-[#0f4c81] to-[#2d5f8d] bg-clip-text text-transparent">منصة نُمو</span>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id as any);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-[#0f4c81] to-[#2d5f8d] text-white shadow-lg'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-slate-200">
            <Button
              onClick={onLogout}
              variant="outline"
              className="w-full flex items-center gap-3 text-red-600 hover:bg-red-50 hover:border-red-200"
            >
              <LogOut className="w-5 h-5" />
              <span>تسجيل الخروج</span>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}