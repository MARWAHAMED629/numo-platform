import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Sidebar } from './Sidebar';
import { User } from '../App';
import { Sparkles, TrendingUp, Users, Eye, MousePointer, Plus, Instagram, Facebook, Twitter } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface AIMarketingProps {
  user: User;
  onNavigate: (page: 'dashboard' | 'project' | 'marketing' | 'identity' | 'financial' | 'community' | 'support') => void;
  onLogout: () => void;
}

export function AIMarketing({ user, onNavigate, onLogout }: AIMarketingProps) {
  const [showNewCampaign, setShowNewCampaign] = useState(false);

  const campaigns = [
    {
      id: 1,
      name: 'حملة الربيع 2025',
      platform: 'Instagram',
      status: 'active',
      budget: '5000 د.ل',
      reach: '45,230',
      clicks: '2,341',
      conversions: '156',
      roi: '245%'
    },
    {
      id: 2,
      name: 'إطلاق المنتج الجديد',
      platform: 'Facebook',
      status: 'active',
      budget: '3000 د.ل',
      reach: '32,100',
      clicks: '1,890',
      conversions: '98',
      roi: '189%'
    },
    {
      id: 3,
      name: 'عروض الصيف',
      platform: 'Twitter',
      status: 'paused',
      budget: '2000 د.ل',
      reach: '18,500',
      clicks: '890',
      conversions: '45',
      roi: '125%'
    }
  ];

  const contentIdeas = [
    {
      title: 'فيديو قصير عن المنتج الجديد',
      platform: 'Instagram Reels',
      engagement: 'مرتفع',
      effort: 'متوسط'
    },
    {
      title: 'مسابقة تفاعلية للمتابعين',
      platform: 'Instagram Stories',
      engagement: 'مرتفع جداً',
      effort: 'منخفض'
    },
    {
      title: 'مقال تعليمي عن استخدام المنتج',
      platform: 'مدونة',
      engagement: 'متوسط',
      effort: 'مرتفع'
    },
    {
      title: 'شهادات العملاء بالفيديو',
      platform: 'YouTube',
      engagement: 'مرتفع',
      effort: 'مرتفع'
    }
  ];

  const performanceData = [
    { week: 'الأسبوع 1', reach: 12000, clicks: 580, conversions: 34 },
    { week: 'الأسبوع 2', reach: 18500, clicks: 890, conversions: 52 },
    { week: 'الأسبوع 3', reach: 25000, clicks: 1200, conversions: 78 },
    { week: 'الأسبوع 4', reach: 32000, clicks: 1560, conversions: 95 }
  ];

  const platformComparison = [
    { platform: 'Instagram', engagement: 4.5, reach: 35000 },
    { platform: 'Facebook', engagement: 3.2, reach: 28000 },
    { platform: 'Twitter', engagement: 2.8, reach: 15000 },
    { platform: 'LinkedIn', engagement: 3.8, reach: 12000 }
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar currentPage="marketing" onNavigate={onNavigate} onLogout={onLogout} />
      
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl text-slate-900 mb-2">التسويق الذكي</h1>
            <p className="text-slate-600">أنشئ وأدر حملاتك التسويقية بذكاء اصطناعي</p>
          </div>
          <Button 
            onClick={() => setShowNewCampaign(!showNewCampaign)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Plus className="w-5 h-5 ml-2" />
            حملة جديدة
          </Button>
        </div>

        {/* New Campaign Form */}
        {showNewCampaign && (
          <Card className="p-6 mb-8 border-blue-200">
            <h2 className="text-xl text-slate-900 mb-6">إنشاء حملة تسويقية جديدة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="campaignName">اسم الحملة</Label>
                <Input id="campaignName" placeholder="مثال: حملة العيد 2025" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="platform">المنصة</Label>
                <select id="platform" className="w-full px-3 py-2 border border-slate-200 rounded-lg">
                  <option>Instagram</option>
                  <option>Facebook</option>
                  <option>Twitter</option>
                  <option>LinkedIn</option>
                  <option>جميع المنصات</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">الميزانية (د.ل)</Label>
                <Input id="budget" type="number" placeholder="5000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">مدة الحملة</Label>
                <Input id="duration" placeholder="مثال: 30 يوم" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="objective">هدف الحملة</Label>
                <Textarea id="objective" placeholder="مثال: زيادة الوعي بالعلامة التجارية وجذب عملاء جدد..." rows={3} />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Sparkles className="w-4 h-4 ml-2" />
                إنشاء بالذكاء الاصطناعي
              </Button>
              <Button variant="outline" onClick={() => setShowNewCampaign(false)}>
                إلغاء
              </Button>
            </div>
          </Card>
        )}

        {/* AI Content Ideas */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl text-slate-900">أفكار محتوى مقترحة</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contentIdeas.map((idea, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-slate-200">
                <h3 className="text-slate-900 mb-2">{idea.title}</h3>
                <div className="flex items-center gap-4 text-xs mb-3">
                  <span className="text-slate-600">📱 {idea.platform}</span>
                  <span className={`px-2 py-1 rounded-full ${
                    idea.engagement === 'مرتفع جداً' ? 'bg-green-100 text-green-700' :
                    idea.engagement === 'مرتفع' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    تفاعل {idea.engagement}
                  </span>
                  <span className="text-slate-600">جهد {idea.effort}</span>
                </div>
                <Button variant="outline" size="sm">
                  استخدم هذه الفكرة
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Active Campaigns */}
        <div className="mb-8">
          <h2 className="text-xl text-slate-900 mb-4">الحملات النشطة</h2>
          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <Card key={campaign.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      campaign.platform === 'Instagram' ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
                      campaign.platform === 'Facebook' ? 'bg-blue-600' :
                      'bg-blue-400'
                    }`}>
                      {campaign.platform === 'Instagram' ? <Instagram className="w-6 h-6 text-white" /> :
                       campaign.platform === 'Facebook' ? <Facebook className="w-6 h-6 text-white" /> :
                       <Twitter className="w-6 h-6 text-white" />}
                    </div>
                    <div>
                      <h3 className="text-lg text-slate-900">{campaign.name}</h3>
                      <p className="text-slate-600">{campaign.platform}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    campaign.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {campaign.status === 'active' ? 'نشط' : 'متوقف'}
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="text-xs text-slate-600 mb-1">الميزانية</div>
                    <div className="text-lg text-slate-900">{campaign.budget}</div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="text-xs text-slate-600 mb-1 flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      الوصول
                    </div>
                    <div className="text-lg text-slate-900">{campaign.reach}</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="text-xs text-slate-600 mb-1 flex items-center gap-1">
                      <MousePointer className="w-3 h-3" />
                      النقرات
                    </div>
                    <div className="text-lg text-slate-900">{campaign.clicks}</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="text-xs text-slate-600 mb-1 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      التحويلات
                    </div>
                    <div className="text-lg text-slate-900">{campaign.conversions}</div>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                    <div className="text-xs text-slate-600 mb-1">عائد الاستثمار</div>
                    <div className="text-lg text-green-700">{campaign.roi}</div>
                  </div>
                </div>

                <div className="flex gap-3 mt-4">
                  <Button variant="outline" size="sm">عرض التفاصيل</Button>
                  <Button variant="outline" size="sm">تحرير</Button>
                  {campaign.status === 'active' ? (
                    <Button variant="outline" size="sm">إيقاف مؤقت</Button>
                  ) : (
                    <Button variant="outline" size="sm">تفعيل</Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Performance Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Performance Over Time */}
          <Card className="p-6">
            <h3 className="text-xl text-slate-900 mb-6">أداء الحملات - 4 أسابيع</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="week" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                />
                <Legend />
                <Line type="monotone" dataKey="reach" stroke="#3b82f6" strokeWidth={2} name="الوصول" />
                <Line type="monotone" dataKey="clicks" stroke="#8b5cf6" strokeWidth={2} name="النقرات" />
                <Line type="monotone" dataKey="conversions" stroke="#10b981" strokeWidth={2} name="التحويلات" />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Platform Comparison */}
          <Card className="p-6">
            <h3 className="text-xl text-slate-900 mb-6">مقارنة أداء المنصات</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={platformComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="platform" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                />
                <Legend />
                <Bar dataKey="engagement" fill="#8b5cf6" name="معدل التفاعل %" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </main>
    </div>
  );
}