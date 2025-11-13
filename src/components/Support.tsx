import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Sidebar } from './Sidebar';
import { User } from '../App';
import { MessageSquare, Send, Bot, Search, Book, FileQuestion, Video, Mail, Phone, ChevronRight } from 'lucide-react';

interface SupportProps {
  user: User;
  onNavigate: (page: 'dashboard' | 'project' | 'marketing' | 'identity' | 'financial' | 'support') => void;
  onLogout: () => void;
}

interface Message {
  id: number;
  sender: 'user' | 'ai';
  text: string;
  time: string;
}

export function Support({ user, onNavigate, onLogout }: SupportProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'ai',
      text: 'مرحباً! أنا المساعد الذكي. كيف يمكنني مساعدتك اليوم؟',
      time: '10:30'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const faqCategories = [
    {
      title: 'البدء مع المنصة',
      icon: Book,
      questions: [
        'كيف أبدأ مشروعي الأول؟',
        'ما هي الخطوات الأساسية لإعداد حسابي؟',
        'كيف أربط حساباتي على وسائل التواصل؟'
      ]
    },
    {
      title: 'إدارة المشروع',
      icon: FileQuestion,
      questions: [
        'كيف أتابع تقدم مشروعي؟',
        'كيف أضيف أهداف جديدة؟',
        'ما هي أفضل الممارسات لإدارة المشاريع؟'
      ]
    },
    {
      title: 'التسويق الذكي',
      icon: MessageSquare,
      questions: [
        'كيف أنشئ حملة تسويقية فعالة؟',
        'ما هي أفضل منصة للإعلان؟',
        'كيف أحلل نتائج حملاتي؟'
      ]
    },
    {
      title: 'الشؤون المالية',
      icon: FileQuestion,
      questions: [
        'كيف أتابع دخلي ومصروفاتي؟',
        'كيف أفهم التقارير المالية؟',
        'ما هي التوقعات المالية؟'
      ]
    }
  ];

  const tutorials = [
    {
      title: 'البدء السريع مع المنصة',
      duration: '5 دقائق',
      thumbnail: 'video-1'
    },
    {
      title: 'إنشاء حملة تسويقية ناجحة',
      duration: '8 دقائق',
      thumbnail: 'video-2'
    },
    {
      title: 'تحليل البيانات المالية',
      duration: '6 دقائق',
      thumbnail: 'video-3'
    }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      text: inputMessage,
      time: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        sender: 'ai',
        text: 'شكراً على سؤالك! دعني أساعدك في ذلك. بناءً على تحليل بياناتك، أنصحك بالخطوات التالية...',
        time: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar currentPage="support" onNavigate={onNavigate} onLogout={onLogout} />
      
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-slate-900 mb-2">المساعدة والدعم</h1>
          <p className="text-slate-600">نحن هنا لمساعدتك في كل خطوة</p>
        </div>

        {/* Quick Search */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
          <div className="flex items-center gap-3">
            <Search className="w-6 h-6 text-slate-400" />
            <Input 
              placeholder="ابحث عن إجابات سريعة..."
              className="flex-1 bg-white"
            />
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              بحث
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* AI Chat Assistant */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-slate-900">المساعد الذكي</h3>
                  <p className="text-xs text-slate-600">متاح دائماً للمساعدة</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                          : 'bg-slate-100 text-slate-900'
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className={`text-xs mt-2 ${
                        message.sender === 'user' ? 'text-white/70' : 'text-slate-500'
                      }`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-slate-200">
                <div className="flex gap-3">
                  <Input
                    placeholder="اكتب سؤالك هنا..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Options */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg text-slate-900 mb-4">طرق التواصل</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-right">
                      <div className="text-slate-900">البريد الإلكتروني</div>
                      <div className="text-xs text-slate-600">support@najah.sa</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </button>

                <button className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="text-right">
                      <div className="text-slate-900">الدعم الهاتفي</div>
                      <div className="text-xs text-slate-600">800-123-4567</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </button>

                <button className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="text-right">
                      <div className="text-slate-900">واتساب</div>
                      <div className="text-xs text-slate-600">متاح 24/7</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </button>
              </div>
            </Card>

            {/* Video Tutorials */}
            <Card className="p-6">
              <h3 className="text-lg text-slate-900 mb-4">دروس فيديو</h3>
              <div className="space-y-3">
                {tutorials.map((tutorial, index) => (
                  <button key={index} className="w-full text-right">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Video className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-slate-900 text-sm mb-1">{tutorial.title}</div>
                        <div className="text-xs text-slate-600">{tutorial.duration}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-8">
          <h2 className="text-2xl text-slate-900 mb-6">الأسئلة الشائعة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg text-slate-900">{category.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.questions.map((question, qIndex) => (
                      <button
                        key={qIndex}
                        className="w-full text-right p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-between group"
                      >
                        <span className="text-slate-700">{question}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                      </button>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
