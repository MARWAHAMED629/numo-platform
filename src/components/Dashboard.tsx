import { Card } from './ui/card';
import { Button } from './ui/button';
import { Sidebar } from './Sidebar';
import { User } from '../App';
import { TrendingUp, TrendingDown, DollarSign, Users, Target, Sparkles, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface DashboardProps {
  user: User;
  onNavigate: (page: 'dashboard' | 'project' | 'marketing' | 'identity' | 'financial' | 'community' | 'support') => void;
  onLogout: () => void;
}

export function Dashboard({ user, onNavigate, onLogout }: DashboardProps) {
  const stats = [
    {
      title: 'إجمالي الإيرادات',
      value: '45,231 د.ل',
      change: '+20.1%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'العملاء النشطون',
      value: '2,345',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'الحملات النشطة',
      value: '12',
      change: '+4',
      trend: 'up',
      icon: Target,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'معدل التحويل',
      value: '3.2%',
      change: '-0.4%',
      trend: 'down',
      icon: TrendingUp,
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const revenueData = [
    { month: 'يناير', revenue: 30000, target: 35000 },
    { month: 'فبراير', revenue: 35000, target: 35000 },
    { month: 'مارس', revenue: 38000, target: 40000 },
    { month: 'أبريل', revenue: 42000, target: 40000 },
    { month: 'مايو', revenue: 45000, target: 45000 },
    { month: 'يونيو', revenue: 48000, target: 45000 }
  ];

  const campaignData = [
    { name: 'إنستقرام', value: 35, color: '#E1306C' },
    { name: 'فيسبوك', value: 25, color: '#1877F2' },
    { name: 'تويتر', value: 20, color: '#1DA1F2' },
    { name: 'البحث', value: 20, color: '#34A853' }
  ];

  const projectProgress = [
    { task: 'خطة التسويق', progress: 85 },
    { task: 'الهوية البصرية', progress: 100 },
    { task: 'التحليل المالي', progress: 60 },
    { task: 'تطوير المنتج', progress: 40 }
  ];

  const aiSuggestions = [
    {
      title: 'زيادة الإنفاق على إعلانات إنستقرام',
      description: 'بناءً على تحليل الأداء، توصي خوارزمياتنا بزيادة الميزانية بنسبة 25%',
      impact: 'مرتفع',
      color: 'green'
    },
    {
      title: 'تحسين وقت نشر المحتوى',
      description: 'أفضل وقت للنشر هو بين الساعة 7-9 مساءً لزيادة التفاعل',
      impact: 'متوسط',
      color: 'blue'
    },
    {
      title: 'تحديث الهوية البصرية',
      description: 'حان وقت تحديث بعض العناصر البصرية لمواكبة الاتجاهات الحديثة',
      impact: 'منخفض',
      color: 'yellow'
    }
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar currentPage="dashboard" onNavigate={onNavigate} onLogout={onLogout} />
      
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-slate-900 mb-2">مرحباً، {user.name} 👋</h1>
          <p className="text-slate-600">إليك نظرة سريعة على أداء مشروعك اليوم</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                    stat.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {stat.change}
                  </div>
                </div>
                <div className="text-slate-600 mb-1">{stat.title}</div>
                <div className="text-2xl text-slate-900">{stat.value}</div>
              </Card>
            );
          })}
        </div>

        {/* AI Suggestions */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-[#0f4c81]/20">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-[#0f4c81] to-[#2d5f8d] rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl text-slate-900">توصيات الذكاء الاصطناعي</h2>
          </div>
          <div className="space-y-3">
            {aiSuggestions.map((suggestion, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-slate-200">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-slate-900">{suggestion.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    suggestion.color === 'green' ? 'bg-green-100 text-green-700' :
                    suggestion.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    تأثير {suggestion.impact}
                  </span>
                </div>
                <p className="text-slate-600 mb-3">{suggestion.description}</p>
                <Button variant="outline" size="sm">
                  تطبيق التوصية
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Chart */}
          <Card className="p-6">
            <h3 className="text-xl text-slate-900 mb-6">تطور الإيرادات</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} name="الإيرادات الفعلية" />
                <Line type="monotone" dataKey="target" stroke="#8b5cf6" strokeWidth={2} strokeDasharray="5 5" name="الهدف" />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Campaign Distribution */}
          <Card className="p-6">
            <h3 className="text-xl text-slate-900 mb-6">توزيع الحملات التسويقية</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={campaignData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {campaignData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Project Progress */}
        <Card className="p-6">
          <h3 className="text-xl text-slate-900 mb-6">تقدم المشروع</h3>
          <div className="space-y-4">
            {projectProgress.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-900">{item.task}</span>
                  <span className="text-slate-600">{item.progress}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
}