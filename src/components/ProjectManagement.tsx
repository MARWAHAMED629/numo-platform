import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Sidebar } from './Sidebar';
import { User } from '../App';
import { Target, Calendar, Users, TrendingUp, Sparkles, Plus, CheckCircle2, Circle, Clock } from 'lucide-react';

interface ProjectManagementProps {
  user: User;
  onNavigate: (page: 'dashboard' | 'project' | 'marketing' | 'identity' | 'financial' | 'community' | 'support') => void;
  onLogout: () => void;
}

export function ProjectManagement({ user, onNavigate, onLogout }: ProjectManagementProps) {
  const [showNewProject, setShowNewProject] = useState(false);

  const projects = [
    {
      id: 1,
      name: 'متجر الإلكتروني للملابس',
      description: 'إطلاق متجر إلكتروني لبيع الملابس العصرية',
      progress: 75,
      status: 'active',
      targetAudience: 'الشباب 18-35',
      timeline: '6 أشهر',
      goals: ['زيادة المبيعات بنسبة 50%', 'الوصول لـ 10,000 عميل', 'تحسين معدل التحويل']
    },
    {
      id: 2,
      name: 'تطبيق توصيل الطعام',
      description: 'تطوير تطبيق لتوصيل الطعام في المنطقة المحلية',
      progress: 45,
      status: 'active',
      targetAudience: 'جميع الفئات العمرية',
      timeline: '4 أشهر',
      goals: ['إطلاق النسخة التجريبية', 'الحصول على 100 مطعم شريك', 'تحقيق 1000 طلب شهرياً']
    },
    {
      id: 3,
      name: 'مشروع التدريب عن بعد',
      description: 'منصة تدريبية متخصصة في المهارات التقنية',
      progress: 30,
      status: 'planning',
      targetAudience: 'المهتمين بالتطوير المهني',
      timeline: '8 أشهر',
      goals: ['إنشاء 50 دورة تدريبية', '5000 متدرب مسجل', 'تحقيق تقييم 4.5/5']
    }
  ];

  const milestones = [
    { title: 'إطلاق الموقع الإلكتروني', status: 'completed', date: '15 يناير 2025' },
    { title: 'إطلاق الحملة التسويقية الأولى', status: 'completed', date: '1 فبراير 2025' },
    { title: 'الوصول لـ 1000 عميل', status: 'in-progress', date: '15 مارس 2025' },
    { title: 'افتتاح الفرع الثاني', status: 'pending', date: '1 مايو 2025' },
    { title: 'تحقيق هدف الإيرادات السنوي', status: 'pending', date: '31 ديسمبر 2025' }
  ];

  const aiSuggestions = [
    'قم بتحديد أهداف SMART واضحة لتحسين نسبة إنجاز المشروع',
    'الجمهور المستهدف الحالي واسع جداً، يُنصح بتضييقه لزيادة فعالية التسويق',
    'أضف معالم زمنية أكثر تفصيلاً لتتبع التقدم بشكل أفضل',
    'خصص ميزانية منفصلة لكل مرحلة من مراحل المشروع'
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar currentPage="project" onNavigate={onNavigate} onLogout={onLogout} />
      
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl text-slate-900 mb-2">إدارة المشروع</h1>
            <p className="text-slate-600">خطط وتابع تقدم مشاريعك بكفاءة</p>
          </div>
          <Button 
            onClick={() => setShowNewProject(!showNewProject)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Plus className="w-5 h-5 ml-2" />
            مشروع جديد
          </Button>
        </div>

        {/* New Project Form */}
        {showNewProject && (
          <Card className="p-6 mb-8 border-blue-200">
            <h2 className="text-xl text-slate-900 mb-6">إنشاء مشروع جديد</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="projectName">اسم المشروع</Label>
                <Input id="projectName" placeholder="مثال: متجر إلكتروني للأحذية" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeline">المدة الزمنية</Label>
                <Input id="timeline" placeholder="مثال: 6 أشهر" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description">وصف المشروع</Label>
                <Textarea id="description" placeholder="اكتب وصفاً مختصراً للمشروع..." rows={3} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="audience">الجمهور المستهدف</Label>
                <Input id="audience" placeholder="مثال: النساء 25-40" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="goals">الأهداف الرئيسية</Label>
                <Input id="goals" placeholder="مثال: زيادة المبيعات 50%" />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                إنشاء المشروع
              </Button>
              <Button variant="outline" onClick={() => setShowNewProject(false)}>
                إلغاء
              </Button>
            </div>
          </Card>
        )}

        {/* AI Suggestions */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl text-slate-900">اقتراحات تحسين المشروع</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {aiSuggestions.map((suggestion, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-slate-200 flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="w-3 h-3 text-blue-600" />
                </div>
                <p className="text-slate-700">{suggestion}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Projects List */}
        <div className="space-y-6 mb-8">
          {projects.map((project) => (
            <Card key={project.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl text-slate-900">{project.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      project.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {project.status === 'active' ? 'نشط' : 'قيد التخطيط'}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                </div>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-600">الجمهور المستهدف</div>
                    <div className="text-slate-900">{project.targetAudience}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-600">المدة الزمنية</div>
                    <div className="text-slate-900">{project.timeline}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-600">التقدم</div>
                    <div className="text-slate-900">{project.progress}%</div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-700">نسبة الإنجاز</span>
                  <span className="text-slate-900">{project.progress}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Goals */}
              <div>
                <h4 className="text-slate-900 mb-3">الأهداف الرئيسية:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {project.goals.map((goal, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <TrendingUp className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-slate-700">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button variant="outline">عرض التفاصيل</Button>
                <Button variant="outline">تحرير</Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Timeline/Milestones */}
        <Card className="p-6">
          <h3 className="text-xl text-slate-900 mb-6">المعالم الرئيسية</h3>
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  {milestone.status === 'completed' ? (
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  ) : milestone.status === 'in-progress' ? (
                    <Clock className="w-6 h-6 text-blue-600" />
                  ) : (
                    <Circle className="w-6 h-6 text-slate-300" />
                  )}
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-12 bg-slate-200 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center justify-between">
                    <h4 className={`${
                      milestone.status === 'completed' ? 'text-slate-900' : 'text-slate-600'
                    }`}>
                      {milestone.title}
                    </h4>
                    <span className="text-slate-500">{milestone.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
}
