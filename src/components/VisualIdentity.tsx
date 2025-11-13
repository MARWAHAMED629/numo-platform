import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Sidebar } from './Sidebar';
import { User } from '../App';
import { Palette, Upload, Image, Video, FileText, Download, Sparkles, Plus } from 'lucide-react';

interface VisualIdentityProps {
  user: User;
  onNavigate: (page: 'dashboard' | 'project' | 'marketing' | 'identity' | 'financial' | 'community' | 'support') => void;
  onLogout: () => void;
}

export function VisualIdentity({ user, onNavigate, onLogout }: VisualIdentityProps) {
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [secondaryColor, setSecondaryColor] = useState('#8b5cf6');

  const colorPalettes = [
    {
      name: 'الأزرق الاحترافي',
      primary: '#3b82f6',
      secondary: '#1e40af',
      accent: '#06b6d4',
      description: 'مثالي للخدمات المهنية والتقنية'
    },
    {
      name: 'الأرجواني العصري',
      primary: '#8b5cf6',
      secondary: '#6d28d9',
      accent: '#ec4899',
      description: 'مناسب للعلامات التجارية الإبداعية'
    },
    {
      name: 'الأخضر الطبيعي',
      primary: '#10b981',
      secondary: '#059669',
      accent: '#84cc16',
      description: 'رائع للمنتجات العضوية والصحية'
    },
    {
      name: 'البرتقالي النشيط',
      primary: '#f97316',
      secondary: '#ea580c',
      accent: '#fbbf24',
      description: 'مميز للعلامات التجارية الديناميكية'
    }
  ];

  const assets = [
    { type: 'logo', name: 'شعار_المشروع_الرئيسي.svg', size: '45 KB', date: '15 يناير 2025' },
    { type: 'image', name: 'صورة_الغلاف_1.jpg', size: '2.3 MB', date: '14 يناير 2025' },
    { type: 'image', name: 'صورة_المنتج_1.png', size: '1.8 MB', date: '13 يناير 2025' },
    { type: 'video', name: 'فيديو_ترويجي.mp4', size: '15.2 MB', date: '10 يناير 2025' },
    { type: 'document', name: 'دليل_الهوية_البصرية.pdf', size: '890 KB', date: '8 يناير 2025' },
    { type: 'image', name: 'بوسترات_حملة_الربيع.zip', size: '5.4 MB', date: '5 يناير 2025' }
  ];

  const templates = [
    { name: 'منشور إنستقرام', preview: 'instagram-post', downloads: 234 },
    { name: 'قصة إنستقرام', preview: 'instagram-story', downloads: 189 },
    { name: 'بوست فيسبوك', preview: 'facebook-post', downloads: 156 },
    { name: 'غلاف تويتر', preview: 'twitter-header', downloads: 98 },
    { name: 'شعار متجر', preview: 'shop-logo', downloads: 312 },
    { name: 'بطاقة عمل', preview: 'business-card', downloads: 267 }
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'logo':
      case 'image':
        return Image;
      case 'video':
        return Video;
      case 'document':
        return FileText;
      default:
        return FileText;
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar currentPage="identity" onNavigate={onNavigate} onLogout={onLogout} />
      
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-slate-900 mb-2">الهوية البصرية</h1>
          <p className="text-slate-600">صمم وأدر هويتك البصرية الاحترافية</p>
        </div>

        {/* Color Palette Generator */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl text-slate-900">مولد الألوان الذكي</h2>
          </div>

          {/* Color Picker */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="primaryColor" className="mb-2 block">اللون الأساسي</Label>
              <div className="flex gap-3 items-center">
                <Input
                  id="primaryColor"
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-20 h-12 cursor-pointer"
                />
                <Input
                  type="text"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="flex-1"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="secondaryColor" className="mb-2 block">اللون الثانوي</Label>
              <div className="flex gap-3 items-center">
                <Input
                  id="secondaryColor"
                  type="color"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  className="w-20 h-12 cursor-pointer"
                />
                <Input
                  type="text"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  className="flex-1"
                />
              </div>
            </div>
          </div>

          {/* Suggested Palettes */}
          <div>
            <h3 className="text-slate-900 mb-4">لوحات ألوان مقترحة</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {colorPalettes.map((palette, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-slate-200 cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="flex gap-2 mb-3">
                    <div 
                      className="w-full h-16 rounded-lg"
                      style={{ backgroundColor: palette.primary }}
                    />
                    <div 
                      className="w-full h-16 rounded-lg"
                      style={{ backgroundColor: palette.secondary }}
                    />
                    <div 
                      className="w-full h-16 rounded-lg"
                      style={{ backgroundColor: palette.accent }}
                    />
                  </div>
                  <h4 className="text-slate-900 mb-1">{palette.name}</h4>
                  <p className="text-xs text-slate-600 mb-3">{palette.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setPrimaryColor(palette.primary);
                      setSecondaryColor(palette.secondary);
                    }}
                  >
                    استخدم هذه اللوحة
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Logo Upload */}
        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-slate-900">الشعار والملفات</h2>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Upload className="w-4 h-4 ml-2" />
              رفع ملفات جديدة
            </Button>
          </div>

          <div className="border-2 border-dashed border-slate-300 rounded-lg p-12 text-center mb-6 hover:border-blue-500 transition-colors cursor-pointer">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-slate-900 mb-2">اسحب وأفلت الملفات هنا</h3>
            <p className="text-slate-600 mb-4">أو انقر للاختيار من جهازك</p>
            <p className="text-xs text-slate-500">PNG, JPG, SVG, PDF حتى 10MB</p>
          </div>

          {/* Files List */}
          <div className="space-y-3">
            {assets.map((asset, index) => {
              const Icon = getFileIcon(asset.type);
              return (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200">
                      <Icon className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <div className="text-slate-900">{asset.name}</div>
                      <div className="text-xs text-slate-600">{asset.size} • {asset.date}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      معاينة
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Templates */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-slate-900">قوالب التصميم</h2>
            <Button variant="outline">
              <Plus className="w-4 h-4 ml-2" />
              تصفح المزيد
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, index) => (
              <div key={index} className="group cursor-pointer">
                <div 
                  className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden group-hover:shadow-xl transition-shadow"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor}20, ${secondaryColor}20)`
                  }}
                >
                  <Palette className="w-16 h-16 text-slate-400" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <Button 
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      size="sm"
                    >
                      استخدم القالب
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-slate-900">{template.name}</h4>
                    <p className="text-xs text-slate-600">{template.downloads} تحميل</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
}
