import React from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Zap, 
  Shield, 
  Users, 
  Heart, 
  Target, 
  Award,
  MapPin,
  Mail,
  Phone,
  ExternalLink
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "AI-Powered Analysis",
    description: "Our advanced AI automatically categorizes issues, determines priority levels, and routes reports to the right authorities for faster resolution."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is protected with enterprise-grade security. We respect your privacy and never share personal information without consent."
  },
  {
    icon: Users,
    title: "Community-Driven",
    description: "Built for communities, by communities. Every report helps create a better neighborhood for everyone who lives there."
  },
  {
    icon: Target,
    title: "Results-Oriented",
    description: "Track real progress with transparency. See how your reports are being addressed and the positive impact on your community."
  }
];

const team = [
  {
    name: "Michael Rodriguez",
    role: "Founder & CEO",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    bio: "Former city planner with 15+ years in civic technology and urban development."
  },
  {
    name: "Dr. Sarah Chen",
    role: "CTO",
    image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=300",
    bio: "AI specialist and former Google engineer focused on making technology accessible to everyone."
  },
  {
    name: "Emily Watson",
    role: "Head of Community",
    image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=300",
    bio: "Community organizer and public policy expert dedicated to citizen engagement."
  }
];

const stats = [
  { number: "50+", label: "Cities Served" },
  { number: "100K+", label: "Issues Resolved" },
  { number: "85%", label: "Resolution Rate" },
  { number: "48hrs", label: "Avg Response Time" }
];

export const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 py-12 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mb-6 sm:mb-8">
              <Eye className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              About CrowdLens AI
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed px-4">
              We believe every voice matters in building better communities. CrowdLens AI is the bridge between 
              citizens and local authorities, making civic engagement effortless and impactful.
            </p>
            
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 sm:px-6 py-2 sm:py-3">
              <Heart className="w-5 h-5 text-red-500 mr-2" />
              <span className="text-sm sm:text-base text-slate-700 font-medium">Built with love for communities worldwide</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">Our Mission</h2>
              <p className="text-base sm:text-lg text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                To democratize civic engagement by making it easier for citizens to report issues, 
                track progress, and participate in building better communities. We leverage AI to 
                ensure every report gets the attention it deserves.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-sm sm:text-base text-slate-700">Empower citizens to make a difference</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-4"></div>
                  <span className="text-sm sm:text-base text-slate-700">Help authorities respond more effectively</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-4"></div>
                  <span className="text-sm sm:text-base text-slate-700">Create transparent, accountable governance</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Community meeting"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-slate-200">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-amber-500" />
                  <div>
                    <div className="text-sm sm:text-base font-bold text-slate-900">Award Winner</div>
                    <div className="text-sm text-slate-600">Best Civic Tech 2024</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4">Why Choose CrowdLens AI?</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              We combine cutting-edge technology with human-centered design to create 
              meaningful civic engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-24 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">Making Real Impact</h2>
            <p className="text-lg sm:text-xl text-blue-100">
              Numbers that show our commitment to communities
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-base text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              Passionate individuals dedicated to improving communities through technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 sm:w-32 h-24 sm:h-32 rounded-full mx-auto mb-4 sm:mb-6 object-cover border-4 border-white shadow-lg"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-sm sm:text-base text-blue-600 font-medium mb-3 sm:mb-4">{member.role}</p>
                <p className="text-slate-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 sm:py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg sm:text-xl text-slate-300 px-4">
              Ready to bring CrowdLens AI to your community? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800 rounded-xl p-4 sm:p-6"
            >
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-sm sm:text-base font-semibold mb-2">Email Us</h3>
              <p className="text-sm sm:text-base text-slate-300">contact@crowdlens.ai</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800 rounded-xl p-4 sm:p-6"
            >
              <Phone className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-sm sm:text-base font-semibold mb-2">Call Us</h3>
              <p className="text-sm sm:text-base text-slate-300">+91-60000-12345</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-800 rounded-xl p-4 sm:p-6"
            >
              <MapPin className="w-8 h-8 text-amber-400 mx-auto mb-4" />
              <h3 className="text-sm sm:text-base font-semibold mb-2">Visit Us</h3>
              <p className="text-sm sm:text-base text-slate-300">Aurangabad, MH</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8 sm:mt-12"
          >
            <a
              href="mailto:shaikhalfishan2401@gmail.com"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              Start a Conversation
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};