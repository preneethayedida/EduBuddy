import { useState, FormEvent } from 'react';
import {
  Users,
  Target,
  Timer,
  TrendingUp,
  Bell,
  BookOpen,
  CheckCircle,
  Menu,
  X,
  Star,
  ArrowRight,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Award,
  Shield,
  Zap
} from 'lucide-react';
import { supabase } from './lib/supabase';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                EduBuddy
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">How It Works</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Testimonials</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all">
                Join Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#home" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#how-it-works" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">How It Works</a>
              <a href="#features" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Features</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Testimonials</a>
              <a href="#pricing" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Pricing</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-full font-semibold">
                Join Now
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-coral-100 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-coral-600" />
                <span className="text-sm font-semibold text-coral-600">Your Study Journey Starts Here</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Find Your Perfect
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent"> Study Buddy</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Stop struggling alone. Connect with motivated students, build consistent study habits, and achieve your academic goals together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center space-x-2">
                  <span>Find Your Study Buddy</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all">
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-3">
                  <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="Student" className="w-12 h-12 rounded-full border-4 border-white" />
                  <img src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="Student" className="w-12 h-12 rounded-full border-4 border-white" />
                  <img src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="Student" className="w-12 h-12 rounded-full border-4 border-white" />
                  <img src="https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="Student" className="w-12 h-12 rounded-full border-4 border-white" />
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-1"><span className="font-bold">2,500+</span> students already studying together</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
                <img
                  src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Students studying together"
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">98% Success Rate</p>
                    <p className="text-sm text-gray-600">Students see improved grades</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">2,500+</div>
              <p className="text-gray-600 font-medium">Active Students</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">15K+</div>
              <p className="text-gray-600 font-medium">Study Sessions</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600 font-medium">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">4.9/5</div>
              <p className="text-gray-600 font-medium">Student Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Struggling to <span className="text-coral-500">Stay Focused?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You're not alone. Many students face these challenges when studying solo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-shadow border-2 border-transparent hover:border-coral-200">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">😔</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Lack of Motivation</h3>
              <p className="text-gray-600">Studying alone feels isolating and makes it hard to stay motivated for long study sessions.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-shadow border-2 border-transparent hover:border-coral-200">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Endless Distractions</h3>
              <p className="text-gray-600">Social media, notifications, and procrastination derail your study plans constantly.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-shadow border-2 border-transparent hover:border-coral-200">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">📉</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Inconsistent Habits</h3>
              <p className="text-gray-600">Without accountability, it's easy to skip study sessions and lose track of progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">EduBuddy</span> Works
            </h2>
            <p className="text-xl text-gray-600">Get started in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border-2 border-blue-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4">Create Your Profile</h3>
                <p className="text-gray-600 mb-4">Tell us about your subjects, study goals, and preferred study times.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Select your courses and subjects</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Set your availability schedule</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Define your study preferences</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-coral-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border-2 border-coral-100">
                <div className="w-16 h-16 bg-gradient-to-br from-coral-500 to-coral-600 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4">Get Matched</h3>
                <p className="text-gray-600 mb-4">Our smart algorithm connects you with compatible study partners.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-coral-600 flex-shrink-0 mt-0.5" />
                    <span>AI-powered matching system</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-coral-600 flex-shrink-0 mt-0.5" />
                    <span>Similar academic goals</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-coral-600 flex-shrink-0 mt-0.5" />
                    <span>Compatible schedules</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border-2 border-green-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4">Study Together</h3>
                <p className="text-gray-600 mb-4">Schedule sessions, track progress, and achieve goals together!</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Schedule virtual study sessions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Track study streaks together</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Share resources and notes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose EduBuddy */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Why Choose EduBuddy?</h3>
              <p className="text-blue-100 text-lg">The smart way to study smarter, not harder</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Proven Results</h4>
                <p className="text-blue-100">98% of students report improved grades and focus</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Safe & Secure</h4>
                <p className="text-blue-100">Verified student accounts and secure messaging</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Easy to Use</h4>
                <p className="text-blue-100">Intuitive design that gets you studying fast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features to <span className="text-blue-600">Boost Your Learning</span>
            </h2>
            <p className="text-xl text-gray-600">Everything you need to build lasting study habits</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-200">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Matchmaking</h3>
              <p className="text-gray-600">Find study partners who share your subjects, goals, and study style with our intelligent matching algorithm.</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl hover:shadow-xl transition-all border-2 border-transparent hover:border-coral-200">
              <div className="w-14 h-14 bg-gradient-to-br from-coral-500 to-coral-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Timer className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Focus Timer</h3>
              <p className="text-gray-600">Built-in Pomodoro timer helps you maintain focus and take healthy breaks during study sessions.</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl hover:shadow-xl transition-all border-2 border-transparent hover:border-green-200">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Habit Tracking</h3>
              <p className="text-gray-600">Build consistent study habits with daily tracking, streaks, and visual progress indicators.</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl hover:shadow-xl transition-all border-2 border-transparent hover:border-purple-200">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Progress Dashboard</h3>
              <p className="text-gray-600">Visualize your study time, completed sessions, and achievement milestones with beautiful analytics.</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl hover:shadow-xl transition-all border-2 border-transparent hover:border-yellow-200">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bell className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Reminders</h3>
              <p className="text-gray-600">Never miss a study session with personalized notifications and calendar integration.</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl hover:shadow-xl transition-all border-2 border-transparent hover:border-pink-200">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Study Resources</h3>
              <p className="text-gray-600">Share notes, resources, and study materials with your study partners in one organized place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Students <span className="text-coral-500">Are Saying</span>
            </h2>
            <p className="text-xl text-gray-600">Join thousands of successful students</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border-2 border-blue-100">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "EduBuddy completely changed how I study! Having an accountability partner helped me stay consistent, and my grades improved by 20%."
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Sarah"
                  className="w-14 h-14 rounded-full"
                />
                <div>
                  <p className="font-bold">Sarah Chen</p>
                  <p className="text-sm text-gray-600">Biology Major, NYU</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-coral-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border-2 border-coral-100">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "I used to procrastinate all the time. Now with my study buddy, I actually look forward to our sessions. The focus timer is a game-changer!"
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Marcus"
                  className="w-14 h-14 rounded-full"
                />
                <div>
                  <p className="font-bold">Marcus Johnson</p>
                  <p className="text-sm text-gray-600">CS Student, MIT</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border-2 border-green-100">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "The habit tracker keeps me motivated every day. Seeing my progress streak grow is so satisfying. Best study app I've ever used!"
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Emily"
                  className="w-14 h-14 rounded-full"
                />
                <div>
                  <p className="font-bold">Emily Rodriguez</p>
                  <p className="text-sm text-gray-600">Pre-Med, Stanford</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, <span className="text-blue-600">Student-Friendly</span> Pricing
            </h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your study goals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gray-200 p-8 rounded-3xl hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-gray-600 mb-6">Perfect to get started</p>
              <div className="mb-8">
                <span className="text-5xl font-bold">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Match with 1 study partner</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Basic focus timer</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">7-day habit tracking</span>
                </li>
              </ul>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-full font-bold hover:bg-blue-50 transition-all">
                Get Started
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-3xl shadow-2xl transform scale-105 text-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-coral-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-blue-100 mb-6">For serious students</p>
              <div className="mb-8">
                <span className="text-5xl font-bold">$9</span>
                <span className="text-blue-100">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span>Unlimited study partners</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span>Advanced focus timer with analytics</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span>Unlimited habit tracking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span>Progress dashboard & insights</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span>Smart reminders</span>
                </li>
              </ul>
              <button className="w-full bg-white text-blue-600 py-3 rounded-full font-bold hover:bg-blue-50 transition-all">
                Start Free Trial
              </button>
            </div>

            <div className="bg-white border-2 border-gray-200 p-8 rounded-3xl hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <p className="text-gray-600 mb-6">Maximum productivity</p>
              <div className="mb-8">
                <span className="text-5xl font-bold">$19</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Everything in Pro</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Priority matching</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Group study sessions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom study resources</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">1-on-1 study coaching</span>
                </li>
              </ul>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-full font-bold hover:bg-blue-50 transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about EduBuddy</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100">
              <h3 className="text-xl font-bold mb-3">How does the matching algorithm work?</h3>
              <p className="text-gray-600">Our AI-powered algorithm matches you based on your subjects, study goals, availability, and learning style. We consider factors like time zones, academic level, and personality preferences to ensure the best possible match.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100">
              <h3 className="text-xl font-bold mb-3">Is EduBuddy safe for students?</h3>
              <p className="text-gray-600">Absolutely! All accounts are verified with valid student emails. We have strict privacy policies, secure messaging, and the ability to report/block users. Your safety is our top priority.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100">
              <h3 className="text-xl font-bold mb-3">Can I switch study partners?</h3>
              <p className="text-gray-600">Yes! You can have multiple study partners for different subjects. If a partnership isn't working out, you can easily unmatch and find new partners anytime.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100">
              <h3 className="text-xl font-bold mb-3">What devices does EduBuddy work on?</h3>
              <p className="text-gray-600">EduBuddy works on all devices! Access it from your laptop, tablet, or phone. We also have dedicated mobile apps for iOS and Android for studying on the go.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100">
              <h3 className="text-xl font-bold mb-3">Can I cancel my subscription anytime?</h3>
              <p className="text-gray-600">Yes, you can cancel your subscription at any time with no questions asked. Your access will continue until the end of your current billing period.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-blue-600">Touch</span>
            </h2>
            <p className="text-xl text-gray-600">Have questions? We'd love to hear from you!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Email</p>
                      <a href="mailto:support@edubuddy.com" className="text-blue-600 hover:underline">support@edubuddy.com</a>
                      <p className="text-sm text-gray-600 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-coral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-coral-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Phone</p>
                      <a href="tel:+1-555-EDU-BUDDY" className="text-blue-600 hover:underline">+1 (555) EDU-BUDDY</a>
                      <p className="text-sm text-gray-600 mt-1">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Office</p>
                      <p className="text-gray-600">Bhimavaram</p>
                      <p className="text-gray-600">Vishnu institue of technology</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Live Chat</p>
                      <p className="text-gray-600">Available 24/7</p>
                      <button className="text-blue-600 hover:underline text-sm mt-1 font-semibold">Start Chat →</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
                <h4 className="text-xl font-bold mb-2">Student Support Hours</h4>
                <p className="text-blue-100 mb-4">Our dedicated support team is here to help you succeed</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-100">Monday - Friday:</span>
                    <span className="font-bold">9:00 AM - 9:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-100">Saturday:</span>
                    <span className="font-bold">10:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-100">Sunday:</span>
                    <span className="font-bold">12:00 PM - 6:00 PM EST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Preneetha"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="preneethayedida@gmail.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us more about your question or concern..."
                  />
                </div>

                {formStatus === 'success' && (
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-900">Message sent successfully!</p>
                      <p className="text-sm text-green-700">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                    <p className="font-semibold text-red-900">Oops! Something went wrong.</p>
                    <p className="text-sm text-red-700">Please try again or email us directly.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{formStatus === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Study Habits?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of students who are achieving their academic goals with EduBuddy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center space-x-2">
              <span>Find Your Study Buddy</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">EduBuddy</span>
              </div>
              <p className="text-gray-400 mb-4">Helping students achieve their dreams, together.</p>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-sm">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-sm">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-sm">IG</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EduBuddy. All rights reserved. Made with ❤️ for students worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
