import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Sparkles, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { UserType } from '../App';

interface AuthPageProps {
  mode: 'login' | 'signup';
  onModeChange: (mode: 'login' | 'signup') => void;
  onLogin: (email: string, password: string) => void;
  onSignup: (email: string, password: string, userType: UserType, name: string) => void;
  onNavigate: (page: 'home') => void;
}

export function AuthPage({ mode, onModeChange, onLogin, onSignup, onNavigate }: AuthPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [userType, setUserType] = useState<UserType>('owner');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'login') {
      onLogin(email, password);
    } else {
      onSignup(email, password, userType, name);
    }
  };

  const userTypes = [
    { value: 'owner', label: 'صاحب مشروع', description: 'أدير مشروعي الخاص' },
    { value: 'consultant', label: 'مستشار', description: 'أقدم الاستشارات للمشاريع' },
    { value: 'developer', label: 'مطوّر', description: 'أقدم خدمات تطوير' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Card className="w-full max-w-md relative z-10 p-8 bg-white/80 backdrop-blur-md border-slate-200">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-[#0f4c81] to-[#2d5f8d] rounded-xl flex items-center justify-center">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <span className="text-3xl bg-gradient-to-r from-[#0f4c81] to-[#2d5f8d] bg-clip-text text-transparent">منصة نُمو</span>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl text-slate-900 mb-2">
            {mode === 'login' ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}
          </h2>
          <p className="text-slate-600">
            {mode === 'login' ? 'مرحباً بعودتك!' : 'ابدأ رحلتك نحو النمو'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {mode === 'signup' && (
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                الاسم الكامل
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="أدخل اسمك الكامل"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="text-right"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              البريد الإلكتروني
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-right"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              كلمة المرور
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="text-right"
            />
          </div>

          {mode === 'signup' && (
            <div className="space-y-3">
              <Label className="flex items-center gap-2">
                نوع المستخدم
              </Label>
              <div className="space-y-2">
                {userTypes.map((type) => (
                  <label
                    key={type.value}
                    className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      userType === type.value
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="userType"
                      value={type.value}
                      checked={userType === type.value}
                      onChange={(e) => setUserType(e.target.value as UserType)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="text-slate-900">{type.label}</div>
                      <div className="text-slate-600">{type.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            {mode === 'login' ? 'تسجيل الدخول' : 'إنشاء الحساب'}
            <ArrowRight className="w-4 h-4 mr-2" />
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => onModeChange(mode === 'login' ? 'signup' : 'login')}
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            {mode === 'login' ? (
              <>
                ليس لديك حساب؟{' '}
                <span className="text-blue-600">إنشاء حساب جديد</span>
              </>
            ) : (
              <>
                لديك حساب بالفعل؟{' '}
                <span className="text-blue-600">تسجيل الدخول</span>
              </>
            )}
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-200 text-center">
          <button
            onClick={() => onNavigate('home')}
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            ← العودة للصفحة الرئيسية
          </button>
        </div>
      </Card>
    </div>
  );
}