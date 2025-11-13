import { Button } from './ui/button';
import { Card } from './ui/card';
import { Sparkles, BarChart3, Palette, TrendingUp, Target, MessageSquare, ArrowLeft } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: 'home' | 'auth' | 'dashboard') => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const tools = [
    {
      icon: Target,
      title: 'إدارة المشروع',
      description: 'خطط وتابع مشروعك بذكاء',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Sparkles,
      title: 'التسويق الذكي',
      description: 'حملات تسويقية مدعومة بالذكاء الاصطناعي',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Palette,
      title: 'الهوية البصرية',
      description: 'صمم هوية علامتك التجارية',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: BarChart3,
      title: 'التحليل المالي',
      description: 'راقب أداءك المالي بدقة',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0f4c81] to-[#2d5f8d] rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl bg-gradient-to-r from-[#0f4c81] to-[#2d5f8d] bg-clip-text text-transparent">منصة نُمو</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button className="text-slate-700 hover:text-blue-600 transition-colors">
                الرئيسية
              </button>
              <button className="text-slate-600 hover:text-blue-600 transition-colors">
                الخدمات
              </button>
              <button 
                onClick={() => onNavigate('auth')}
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                تسجيل الدخول
              </button>
              <Button 
                onClick={() => onNavigate('auth')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                إنشاء حساب
              </Button>
            </nav>

            {/* Mobile Menu */}
            <div className="md:hidden flex gap-2">
              <Button 
                onClick={() => onNavigate('auth')}
                size="sm"
                variant="outline"
              >
                تسجيل الدخول
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span>مدعوم بالذكاء الاصطناعي</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl mb-6 text-slate-900">
            طوّر وسوّق مشروعك الصغير بذكاء
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              في منصة واحدة متكاملة
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            كل ما تحتاجه لإدارة مشروعك وتسويقه وتحليل أدائه في مكان واحد. دع الذكاء الاصطناعي يساعدك على النمو بشكل أسرع.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('auth')}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8"
            >
              ابدأ الآن مجاناً
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8"
            >
              جرّب المنصة
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">+5000</div>
              <div className="text-slate-600">مشروع نشط</div>
            </div>
            <div>
              <div className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">98%</div>
              <div className="text-slate-600">رضا العملاء</div>
            </div>
            <div>
              <div className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">24/7</div>
              <div className="text-slate-600">دعم فني</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-slate-900">أدوات قوية لنجاح مشروعك</h2>
            <p className="text-xl text-slate-600">كل ما تحتاجه في مكان واحد</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-shadow cursor-pointer group border-slate-200"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-slate-900">{tool.title}</h3>
                <p className="text-slate-600">{tool.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-slate-900">
                مساعد ذكاء اصطناعي
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  يعمل لأجلك
                </span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-slate-900 mb-1">تحليل ذكي للبيانات</h4>
                    <p className="text-slate-600">احصل على رؤى عميقة وتوصيات مخصصة لتحسين أداء مشروعك</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-slate-900 mb-1">حملات تسويقية تلقائية</h4>
                    <p className="text-slate-600">أنشئ وأطلق حملات تسويقية فعالة بنقرات قليلة</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-slate-900 mb-1">توقعات مالية دقيقة</h4>
                    <p className="text-slate-600">تنبأ بمستقبل مشروعك المالي واتخذ قرارات مستنيرة</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="opacity-90">المساعد الذكي</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p>كيف يمكنني تحسين أداء حملتي التسويقية؟</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <p>بناءً على تحليل بياناتك، أنصحك بزيادة الاستثمار في الإعلانات على منصة إنستقرام بنسبة 25% لأنها تحقق أفضل عائد استثمار لمشروعك.</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-0 p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl mb-4">
              جاهز لتطوير مشروعك؟
            </h2>
            <p className="text-xl mb-8 opacity-90">
              انضم لآلاف رواد الأعمال الذين يثقون بمنصتنا
            </p>
            <Button 
              onClick={() => onNavigate('auth')}
              size="lg"
              className="bg-white text-blue-600 hover:bg-slate-50"
            >
              ابدأ مجاناً اليوم
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xl">منصة نُمو</span>
              </div>
              <p className="text-slate-400">
                منصة نُمو - التطوير الذكي للمشاريع الصغيرة
              </p>
            </div>
            <div>
              <h4 className="mb-4">المنصة</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">الخدمات</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الأسعار</a></li>
                <li><a href="#" className="hover:text-white transition-colors">عن المنصة</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">الدعم</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">مركز المساعدة</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الأسئلة الشائعة</a></li>
                <li><a href="#" className="hover:text-white transition-colors">تواصل معنا</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">قانوني</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a></li>
                <li><a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>© 2025 منصة نُمو. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}