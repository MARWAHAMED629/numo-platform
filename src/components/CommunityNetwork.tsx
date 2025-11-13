import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar } from './ui/avatar';
import { Sidebar } from './Sidebar';
import { User } from '../App';
import { 
  Users, 
  Sparkles, 
  TrendingUp, 
  MessageSquare, 
  Star, 
  Search,
  Filter,
  Building2,
  Handshake,
  Lightbulb,
  Share2,
  ThumbsUp,
  Eye
} from 'lucide-react';
import { useState } from 'react';

interface CommunityNetworkProps {
  user: User;
  onNavigate: (page: 'dashboard' | 'project' | 'marketing' | 'identity' | 'financial' | 'community' | 'support') => void;
  onLogout: () => void;
}

export function CommunityNetwork({ user, onNavigate, onLogout }: CommunityNetworkProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'الكل', icon: Users },
    { id: 'tech', label: 'تقنية', icon: Sparkles },
    { id: 'retail', label: 'تجارة', icon: Building2 },
    { id: 'services', label: 'خدمات', icon: Handshake },
    { id: 'creative', label: 'إبداعية', icon: Lightbulb }
  ];

  const suggestedPartnerships = [
    {
      id: 1,
      title: 'شراكة استراتيجية مقترحة',
      member1: {
        name: 'أحمد محمد',
        project: 'متجر ملابس عصرية',
        category: 'تجارة',
        avatar: 'AM'
      },
      member2: {
        name: 'سارة علي',
        project: 'تصميم جرافيك احترافي',
        category: 'إبداعية',
        avatar: 'SA'
      },
      matchScore: 95,
      reason: 'سارة يمكنها تصميم الهوية البصرية والمحتوى التسويقي لمتجر أحمد',
      potentialBenefit: '+40% زيادة متوقعة في المبيعات'
    },
    {
      id: 2,
      title: 'فرصة تعاون مثالية',
      member1: {
        name: 'خالد إبراهيم',
        project: 'تطبيقات موبايل',
        category: 'تقنية',
        avatar: 'KI'
      },
      member2: {
        name: 'ليلى حسن',
        project: 'استشارات تسويقية',
        category: 'خدمات',
        avatar: 'LH'
      },
      matchScore: 88,
      reason: 'خالد يحتاج خبرة تسويقية لإطلاق تطبيقه الجديد، وليلى متخصصة في تسويق التطبيقات',
      potentialBenefit: 'وصول متوقع: +10,000 مستخدم'
    },
    {
      id: 3,
      title: 'تكامل أعمال محتمل',
      member1: {
        name: 'محمد عمر',
        project: 'مطعم وجبات صحية',
        category: 'خدمات',
        avatar: 'MO'
      },
      member2: {
        name: 'نور الدين',
        project: 'توصيل سريع',
        category: 'خدمات',
        avatar: 'ND'
      },
      matchScore: 92,
      reason: 'شراكة توصيل حصرية ستفيد كلا المشروعين وتوسع قاعدة العملاء',
      potentialBenefit: '+35% زيادة في الطلبات'
    }
  ];

  const communityMembers = [
    {
      id: 1,
      name: 'فاطمة السيد',
      project: 'مخبز حلويات منزلية',
      category: 'تجارة',
      rating: 4.9,
      reviews: 127,
      skills: ['إدارة مخبز', 'تسويق إنستقرام', 'خدمة عملاء'],
      looking: 'أبحث عن مورد مواد خام موثوق',
      avatar: 'FS'
    },
    {
      id: 2,
      name: 'يوسف كمال',
      project: 'استوديو تصوير فوتوغرافي',
      category: 'إبداعية',
      rating: 4.8,
      reviews: 89,
      skills: ['تصوير المنتجات', 'تحرير احترافي', 'تصوير فعاليات'],
      looking: 'مستعد للتعاون مع المتاجر الإلكترونية',
      avatar: 'YK'
    },
    {
      id: 3,
      name: 'منى أحمد',
      project: 'تطوير مواقع ويب',
      category: 'تقنية',
      rating: 5.0,
      reviews: 156,
      skills: ['React', 'تصميم UI/UX', 'تحسين محركات البحث'],
      looking: 'أقدم خصومات للمشاريع الناشئة',
      avatar: 'MA'
    },
    {
      id: 4,
      name: 'عبدالله ناصر',
      project: 'استشارات إدارية',
      category: 'خدمات',
      rating: 4.7,
      reviews: 94,
      skills: ['التخطيط الاستراتيجي', 'إدارة العمليات', 'الموارد البشرية'],
      looking: 'أبحث عن شراكات طويلة الأمد',
      avatar: 'AN'
    },
    {
      id: 5,
      name: 'رنا خالد',
      project: 'كتابة محتوى إبداعي',
      category: 'إبداعية',
      rating: 4.9,
      reviews: 112,
      skills: ['كتابة إعلانات', 'محتوى سوشيال ميديا', 'مقالات SEO'],
      looking: 'مستعدة لتبادل الخبرات والخدمات',
      avatar: 'RK'
    },
    {
      id: 6,
      name: 'طارق سعيد',
      project: 'متجر إلكتروني للاكسسوارات',
      category: 'تجارة',
      rating: 4.6,
      reviews: 78,
      skills: ['التجارة الإلكترونية', 'إدارة المخزون', 'التسعير'],
      looking: 'أبحث عن مصمم هوية بصرية',
      avatar: 'TS'
    }
  ];

  const discussions = [
    {
      id: 1,
      author: 'أحمد محمود',
      avatar: 'AM',
      title: 'كيف تحسنون تجربة العملاء في مشاريعكم؟',
      category: 'نصائح',
      replies: 24,
      likes: 156,
      views: 892,
      time: 'منذ ساعتين'
    },
    {
      id: 2,
      author: 'هدى سليم',
      avatar: 'HS',
      title: 'موارد مجانية للتسويق الرقمي - قائمة محدثة 2025',
      category: 'موارد',
      replies: 45,
      likes: 321,
      views: 1547,
      time: 'منذ 5 ساعات'
    },
    {
      id: 3,
      author: 'كريم عادل',
      avatar: 'KA',
      title: 'تجربتي في زيادة المبيعات بنسبة 200% خلال 3 أشهر',
      category: 'قصص نجاح',
      replies: 67,
      likes: 489,
      views: 2134,
      time: 'منذ يوم'
    }
  ];

  const resources = [
    {
      id: 1,
      title: 'دليل التسويق عبر إنستقرام 2025',
      author: 'سارة محمد',
      type: 'PDF',
      downloads: 342,
      rating: 4.8
    },
    {
      id: 2,
      title: 'قوالب عقود تجارية جاهزة',
      author: 'محامي أعمال',
      type: 'DOCX',
      downloads: 567,
      rating: 4.9
    },
    {
      id: 3,
      title: 'أدوات مجانية لإدارة المشاريع',
      author: 'يوسف كمال',
      type: 'قائمة روابط',
      downloads: 891,
      rating: 5.0
    }
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar currentPage="community" onNavigate={onNavigate} onLogout={onLogout} />
      <div className="flex-1 overflow-auto">
        <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0f4c81] to-[#2d5f8d] rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl text-slate-900">المجتمع الذكي للمشاريع</h1>
              <p className="text-slate-600">تواصل وتعاون مع رواد أعمال آخرين</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input 
              placeholder="ابحث عن مشاريع أو أعضاء..." 
              className="pr-10 w-80"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            تصفية
          </Button>
        </div>
      </div>

      {/* AI Partnership Suggestions */}
      <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-[#0f4c81]/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-[#0f4c81] to-[#2d5f8d] rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl text-slate-900">شراكات مقترحة بالذكاء الاصطناعي</h2>
            <p className="text-slate-600">تحليل ذكي لأفضل الفرص التعاونية</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {suggestedPartnerships.map((partnership) => (
            <Card key={partnership.id} className="p-5 bg-white border-slate-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Handshake className="w-5 h-5 text-[#0f4c81]" />
                  <h3 className="text-slate-900">{partnership.title}</h3>
                </div>
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  توافق {partnership.matchScore}%
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <Avatar className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white">
                    {partnership.member1.avatar}
                  </Avatar>
                  <div className="flex-1">
                    <div className="text-slate-900">{partnership.member1.name}</div>
                    <div className="text-slate-600">{partnership.member1.project}</div>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {partnership.member1.category}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <Avatar className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white">
                    {partnership.member2.avatar}
                  </Avatar>
                  <div className="flex-1">
                    <div className="text-slate-900">{partnership.member2.name}</div>
                    <div className="text-slate-600">{partnership.member2.project}</div>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {partnership.member2.category}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg mb-3">
                <div className="flex items-start gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-[#0f4c81] mt-1 flex-shrink-0" />
                  <div className="text-slate-700">{partnership.reason}</div>
                </div>
                <div className="flex items-center gap-2 mr-6">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <div className="text-green-700">{partnership.potentialBenefit}</div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1 bg-gradient-to-r from-[#0f4c81] to-[#2d5f8d]">
                  اقتراح الشراكة
                </Button>
                <Button variant="outline" className="flex-1">
                  معرفة المزيد
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Categories Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              className={`gap-2 flex-shrink-0 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-[#0f4c81] to-[#2d5f8d]'
                  : ''
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <Icon className="w-4 h-4" />
              {category.label}
            </Button>
          );
        })}
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="members" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="members" className="gap-2">
            <Users className="w-4 h-4" />
            الأعضاء
          </TabsTrigger>
          <TabsTrigger value="discussions" className="gap-2">
            <MessageSquare className="w-4 h-4" />
            النقاشات
          </TabsTrigger>
          <TabsTrigger value="resources" className="gap-2">
            <Share2 className="w-4 h-4" />
            الموارد
          </TabsTrigger>
        </TabsList>

        {/* Members Tab */}
        <TabsContent value="members" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {communityMembers.map((member) => (
              <Card key={member.id} className="p-5 border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16 bg-gradient-to-br from-[#0f4c81] to-[#2d5f8d] flex items-center justify-center text-white text-xl">
                    {member.avatar}
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-slate-900">{member.name}</h3>
                        <p className="text-slate-600">{member.project}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-slate-900">{member.rating}</span>
                        <span className="text-slate-500">({member.reviews})</span>
                      </div>
                    </div>

                    <Badge variant="outline" className="mb-3">
                      {member.category}
                    </Badge>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {member.skills.map((skill, idx) => (
                        <Badge key={idx} className="bg-blue-50 text-blue-700 border-blue-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="p-3 bg-slate-50 rounded-lg mb-3">
                      <p className="text-slate-700">{member.looking}</p>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-[#0f4c81] to-[#2d5f8d]">
                        تواصل
                      </Button>
                      <Button variant="outline" className="flex-1">
                        عرض الملف
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Discussions Tab */}
        <TabsContent value="discussions" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl text-slate-900">أحدث النقاشات</h3>
            <Button className="bg-gradient-to-r from-[#0f4c81] to-[#2d5f8d] gap-2">
              <MessageSquare className="w-4 h-4" />
              بدء نقاش جديد
            </Button>
          </div>

          <div className="space-y-3">
            {discussions.map((discussion) => (
              <Card key={discussion.id} className="p-5 border-slate-200 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12 bg-gradient-to-br from-[#0f4c81] to-[#2d5f8d] flex items-center justify-center text-white">
                    {discussion.avatar}
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-slate-900 mb-1">{discussion.title}</h4>
                        <div className="flex items-center gap-3 text-slate-600">
                          <span>{discussion.author}</span>
                          <span>•</span>
                          <Badge variant="outline" className="text-xs">
                            {discussion.category}
                          </Badge>
                          <span>•</span>
                          <span>{discussion.time}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 mt-3">
                      <div className="flex items-center gap-2 text-slate-600">
                        <MessageSquare className="w-4 h-4" />
                        <span>{discussion.replies} رد</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{discussion.likes} إعجاب</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Eye className="w-4 h-4" />
                        <span>{discussion.views} مشاهدة</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl text-slate-900">موارد مشتركة</h3>
            <Button className="bg-gradient-to-r from-[#0f4c81] to-[#2d5f8d] gap-2">
              <Share2 className="w-4 h-4" />
              مشاركة مورد
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((resource) => (
              <Card key={resource.id} className="p-5 border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <Badge className="bg-[#0f4c81] text-white">
                    {resource.type}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-slate-900">{resource.rating}</span>
                  </div>
                </div>

                <h4 className="text-slate-900 mb-2">{resource.title}</h4>
                <p className="text-slate-600 mb-4">بواسطة: {resource.author}</p>

                <div className="flex items-center justify-between">
                  <div className="text-slate-600">
                    {resource.downloads} تحميل
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-[#0f4c81] to-[#2d5f8d]">
                    تحميل
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center border-slate-200">
          <Users className="w-8 h-8 text-[#0f4c81] mx-auto mb-2" />
          <div className="text-2xl text-slate-900">1,247</div>
          <div className="text-slate-600">عضو نشط</div>
        </Card>
        <Card className="p-4 text-center border-slate-200">
          <Handshake className="w-8 h-8 text-[#0f4c81] mx-auto mb-2" />
          <div className="text-2xl text-slate-900">342</div>
          <div className="text-slate-600">شراكة ناجحة</div>
        </Card>
        <Card className="p-4 text-center border-slate-200">
          <MessageSquare className="w-8 h-8 text-[#0f4c81] mx-auto mb-2" />
          <div className="text-2xl text-slate-900">2,891</div>
          <div className="text-slate-600">نقاش نشط</div>
        </Card>
        <Card className="p-4 text-center border-slate-200">
          <Share2 className="w-8 h-8 text-[#0f4c81] mx-auto mb-2" />
          <div className="text-2xl text-slate-900">567</div>
          <div className="text-slate-600">مورد مشترك</div>
        </Card>
      </div>
        </div>
      </div>
    </div>
  );
}
