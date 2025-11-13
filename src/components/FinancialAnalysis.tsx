import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Sidebar } from './Sidebar';
import { User } from '../App';
import { DollarSign, TrendingUp, TrendingDown, PieChart, ArrowUpRight, ArrowDownRight, Sparkles, Plus, Calendar } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart as RePieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface FinancialAnalysisProps {
  user: User;
  onNavigate: (page: 'dashboard' | 'project' | 'marketing' | 'identity' | 'financial' | 'community' | 'support') => void;
  onLogout: () => void;
}

export function FinancialAnalysis({ user, onNavigate, onLogout }: FinancialAnalysisProps) {
  const [showAddTransaction, setShowAddTransaction] = useState(false);

  const financialStats = [
    {
      title: 'إجمالي الإيرادات',
      value: '125,450 د.ل',
      change: '+15.3%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'إجمالي المصروفات',
      value: '68,230 د.ل',
      change: '+8.2%',
      trend: 'up',
      icon: TrendingDown,
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'صافي الربح',
      value: '57,220 د.ل',
      change: '+22.1%',
      trend: 'up',
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'هامش الربح',
      value: '45.6%',
      change: '+3.2%',
      trend: 'up',
      icon: PieChart,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const monthlyData = [
    { month: 'يناير', revenue: 18500, expenses: 10200, profit: 8300 },
    { month: 'فبراير', revenue: 22000, expenses: 11500, profit: 10500 },
    { month: 'مارس', revenue: 25000, expenses: 12800, profit: 12200 },
    { month: 'أبريل', revenue: 28000, expenses: 13200, profit: 14800 },
    { month: 'مايو', revenue: 26500, expenses: 12000, profit: 14500 },
    { month: 'يونيو', revenue: 30000, expenses: 14500, profit: 15500 }
  ];

  const expenseBreakdown = [
    { category: 'التسويق', value: 25000, color: '#3b82f6' },
    { category: 'الرواتب', value: 20000, color: '#8b5cf6' },
    { category: 'الإيجار', value: 12000, color: '#ec4899' },
    { category: 'المخزون', value: 8000, color: '#10b981' },
    { category: 'أخرى', value: 3230, color: '#f59e0b' }
  ];

  const recentTransactions = [
    { id: 1, type: 'income', description: 'بيع منتجات', amount: '5,230 د.ل', date: '6 نوفمبر 2025', category: 'مبيعات' },
    { id: 2, type: 'expense', description: 'حملة إعلانية', amount: '2,500 د.ل', date: '5 نوفمبر 2025', category: 'تسويق' },
    { id: 3, type: 'income', description: 'اشتراكات شهرية', amount: '3,800 د.ل', date: '4 نوفمبر 2025', category: 'اشتراكات' },
    { id: 4, type: 'expense', description: 'رواتب الموظفين', amount: '15,000 د.ل', date: '1 نوفمبر 2025', category: 'رواتب' },
    { id: 5, type: 'expense', description: 'إيجار المكتب', amount: '4,000 د.ل', date: '1 نوفمبر 2025', category: 'إيجار' }
  ];

  const aiInsights = [
    {
      title: 'تحسين مصروفات التسويق',
      description: 'لاحظنا أن مصروفات التسويق زادت 15% دون زيادة متناسبة في المبيعات. نوصي بمراجعة استراتيجية الإعلانات.',
      impact: 'مرتفع',
      savings: '~3,500 د.ل شهرياً',
      color: 'red'
    },
    {
      title: 'فرصة للنمو',
      description: 'مبيعاتك تنمو بمعدل ثابت. هذا وقت مناسب لزيادة الاستثمار في التوسع.',
      impact: 'متوسط',
      savings: 'زيادة محتملة +20%',
      color: 'green'
    },
    {
      title: 'تحسين التدفق النقدي',
      description: 'يمكنك تحسين التدفق النقدي بتحصيل الفواتير المتأخرة بقيمة 8,500 د.ل.',
      impact: 'متوسط',
      savings: '8,500 د.ل',
      color: 'blue'
    }
  ];

  const projections = [
    { month: 'يوليو', projected: 32000, optimistic: 35000, pessimistic: 28000 },
    { month: 'أغسطس', projected: 34000, optimistic: 38000, pessimistic: 30000 },
    { month: 'سبتمبر', projected: 36000, optimistic: 41000, pessimistic: 32000 },
    { month: 'أكتوبر', projected: 38000, optimistic: 44000, pessimistic: 34000 }
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar currentPage="financial" onNavigate={onNavigate} onLogout={onLogout} />
      
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl text-slate-900 mb-2">التحليل المالي</h1>
            <p className="text-slate-600">راقب وحلل أداءك المالي بذكاء</p>
          </div>
          <Button 
            onClick={() => setShowAddTransaction(!showAddTransaction)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Plus className="w-5 h-5 ml-2" />
            إضافة معاملة
          </Button>
        </div>

        {/* Add Transaction Form */}
        {showAddTransaction && (
          <Card className="p-6 mb-8 border-blue-200">
            <h2 className="text-xl text-slate-900 mb-6">إضافة معاملة جديدة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="transactionType">نوع المعاملة</Label>
                <select id="transactionType" className="w-full px-3 py-2 border border-slate-200 rounded-lg">
                  <option>إيراد</option>
                  <option>مصروف</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">المبلغ (د.ل)</Label>
                <Input id="amount" type="number" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">الفئة</Label>
                <select id="category" className="w-full px-3 py-2 border border-slate-200 rounded-lg">
                  <option>مبيعات</option>
                  <option>تسويق</option>
                  <option>رواتب</option>
                  <option>إيجار</option>
                  <option>أخرى</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">التاريخ</Label>
                <Input id="date" type="date" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description">الوصف</Label>
                <Input id="description" placeholder="وصف المعاملة..." />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                حفظ المعاملة
              </Button>
              <Button variant="outline" onClick={() => setShowAddTransaction(false)}>
                إلغاء
              </Button>
            </div>
          </Card>
        )}

        {/* Financial Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {financialStats.map((stat, index) => {
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

        {/* AI Insights */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl text-slate-900">رؤى مالية ذكية</h2>
          </div>
          <div className="space-y-4">
            {aiInsights.map((insight, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-slate-200">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-slate-900">{insight.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    insight.color === 'green' ? 'bg-green-100 text-green-700' :
                    insight.color === 'red' ? 'bg-red-100 text-red-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {insight.impact}
                  </span>
                </div>
                <p className="text-slate-600 mb-2">{insight.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-700">{insight.savings}</span>
                  <Button variant="outline" size="sm">
                    عرض التفاصيل
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Revenue vs Expenses */}
          <Card className="p-6 lg:col-span-2">
            <h3 className="text-xl text-slate-900 mb-6">الإيرادات والمصروفات - 6 أشهر</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                />
                <Legend />
                <Bar dataKey="revenue" fill="#10b981" name="الإيرادات" />
                <Bar dataKey="expenses" fill="#ef4444" name="المصروفات" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Expense Breakdown */}
          <Card className="p-6">
            <h3 className="text-xl text-slate-900 mb-6">توزيع المصروفات</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RePieChart>
                <Pie
                  data={expenseBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {expenseBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RePieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Projections */}
        <Card className="p-6 mb-8">
          <h3 className="text-xl text-slate-900 mb-6">التوقعات المالية - 4 أشهر قادمة</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={projections}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
              />
              <Legend />
              <Line type="monotone" dataKey="projected" stroke="#3b82f6" strokeWidth={3} name="المتوقع" />
              <Line type="monotone" dataKey="optimistic" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" name="متفائل" />
              <Line type="monotone" dataKey="pessimistic" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" name="متحفظ" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Recent Transactions */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl text-slate-900">المعاملات الأخيرة</h3>
            <Button variant="outline" size="sm">
              عرض الكل
            </Button>
          </div>
          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {transaction.type === 'income' ? (
                      <ArrowUpRight className="w-5 h-5 text-green-600" />
                    ) : (
                      <ArrowDownRight className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <div className="text-slate-900">{transaction.description}</div>
                    <div className="text-xs text-slate-600">
                      {transaction.category} • {transaction.date}
                    </div>
                  </div>
                </div>
                <div className={`text-lg ${
                  transaction.type === 'income' ? 'text-green-700' : 'text-red-700'
                }`}>
                  {transaction.type === 'income' ? '+' : '-'}{transaction.amount}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
}