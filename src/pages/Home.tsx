import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Plus, 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  MapPin,
  Clock,
  TrendingUp
} from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Local Resident",
    content: "CrowdLens AI helped me report a dangerous pothole that was fixed within 48 hours. The AI categorization made it so much easier!",
    rating: 5,
    location: "Downtown District"
  },
  {
    name: "Mike Rodriguez",
    role: "Community Leader",
    content: "Finally, a platform that connects citizens with local authorities efficiently. The transparency is amazing.",
    rating: 5,
    location: "Riverside Area"
  },
  {
    name: "Dr. Emily Watson",
    role: "City Councilor",
    content: "The analytics dashboard gives us invaluable insights into community needs. Response times have improved by 60%.",
    rating: 5,
    location: "Municipal Office"
  }
];

const steps = [
  {
    step: "01",
    title: "Report Issue",
    description: "Snap a photo and describe the problem in your neighborhood",
    icon: Plus,
    color: "from-blue-500 to-blue-600"
  },
  {
    step: "02", 
    title: "AI Analysis",
    description: "Our AI categorizes and prioritizes your report automatically",
    icon: Zap,
    color: "from-emerald-500 to-emerald-600"
  },
  {
    step: "03",
    title: "Authorities Act",
    description: "Local authorities receive and resolve issues efficiently",
    icon: CheckCircle,
    color: "from-amber-500 to-amber-600"
  }
];

const benefits = [
  {
    title: "For Citizens",
    items: [
      "Easy issue reporting",
      "Real-time status updates",
      "Community transparency",
      "Faster problem resolution"
    ],
    icon: Users,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "For Authorities", 
    items: [
      "Centralized report management",
      "Priority-based workflows",
      "Data-driven insights",
      "Improved response times"
    ],
    icon: Shield,
    color: "bg-emerald-50 border-emerald-200"
  }
];

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 pt-16 pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8"
            >
              <Zap className="w-5 h-5 text-amber-500 mr-2" />
              <span className="text-xs sm:text-sm font-medium text-slate-700">AI-Powered Citizen Reporting</span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-emerald-900 bg-clip-text text-transparent">
                CrowdLens AI
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Empowering communities through intelligent civic engagement. 
              Report issues, track progress, and build better neighborhoods together.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
            >
              <Link
                to="/report"
                className="group bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <Plus className="w-5 h-5" />
                <span>Report an Issue</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/reports"
                className="group bg-white text-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <Eye className="w-5 h-5" />
                <span>View Reports</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              Three simple steps to make your community better
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative text-center group px-4"
                >
                  <div className={`inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-r ${step.color} text-white mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-slate-900 text-white text-xs sm:text-sm font-bold w-6 sm:w-8 h-6 sm:h-8 rounded-full flex items-center justify-center">
                    {step.step}
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600">{step.description}</p>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 sm:top-8 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-transparent -z-10"></div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4">Benefits for Everyone</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              Creating value for both citizens and local authorities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`p-6 sm:p-8 rounded-2xl border-2 ${benefit.color} backdrop-blur-sm hover:shadow-lg transition-all duration-200`}
                >
                  <div className="flex items-center mb-4 sm:mb-6">
                    <Icon className="w-8 h-8 text-blue-600 mr-4" />
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{benefit.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm sm:text-base text-slate-700">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4">What People Say</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              Real stories from real communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-slate-50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-200 border border-slate-200"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-sm sm:text-base text-slate-700 mb-6 italic">"{testimonial.content}"</p>
                
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                  <div className="flex items-center mt-2 text-sm text-slate-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    {testimonial.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-24 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">10,000+</div>
              <div className="text-xs sm:text-base text-blue-100">Issues Reported</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">85%</div>
              <div className="text-xs sm:text-base text-blue-100">Resolution Rate</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">48hrs</div>
              <div className="text-xs sm:text-base text-blue-100">Avg Response Time</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="col-span-2 md:col-span-1"
            >
              <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">50+</div>
              <div className="text-xs sm:text-base text-blue-100">Cities Served</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Make a Difference?</h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-6 sm:mb-8 px-4">
              Join thousands of citizens making their communities better, one report at a time.
            </p>
            
            <Link
              to="/report"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <Plus className="w-5 h-5 mr-2" />
              Start Reporting Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};