import { Users, Target, Zap, Shield, Globe, Heart } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To make travel planning effortless and enjoyable for everyone, turning dream destinations into carefully crafted experiences.',
  },
  {
    icon: Zap,
    title: 'AI-Powered Planning',
    description: 'Our advanced algorithms analyze your preferences to create personalized itineraries that match your travel style.',
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Explore destinations worldwide with local insights and recommendations from our extensive database.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Benefit from real traveler reviews and experiences shared by our vibrant community of explorers.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Your data is protected with enterprise-grade security while ensuring reliable service availability.',
  },
  {
    icon: Heart,
    title: 'Passionate Team',
    description: 'Built by travel enthusiasts who understand the joy of discovery and the importance of seamless planning.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent mb-6">
            About Smart Tour Planner
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing the way people plan and experience travel through innovative technology
            and personalized recommendations that turn every journey into an unforgettable adventure.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="gradient-card p-12 rounded-2xl mb-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transforming Travel, One Journey at a Time
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              At Smart Tour Planner, we believe that every trip should be extraordinary. Our platform combines
              cutting-edge artificial intelligence with deep travel expertise to create personalized itineraries
              that reflect your unique interests, budget, and travel style. Whether you're planning a weekend
              getaway or a month-long adventure, we're here to make your travel dreams a reality.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-slate-300">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                  50K+
                </div>
                <div className="text-sm">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                  200+
                </div>
                <div className="text-sm">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                  1M+
                </div>
                <div className="text-sm">Trips Planned</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="gradient-card p-8 rounded-2xl hover-lift">
              <div className="gradient-primary p-4 rounded-2xl inline-block mb-6">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent mb-12">
            How Smart Tour Planner Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Tell Us Your Preferences</h3>
              <p className="text-slate-300">
                Share your destination, dates, interests, and budget to help us understand your travel style.
              </p>
            </div>
            <div className="text-center">
              <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Creates Your Itinerary</h3>
              <p className="text-slate-300">
                Our intelligent system analyzes thousands of options to craft a personalized day-by-day plan.
              </p>
            </div>
            <div className="text-center">
              <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Enjoy Your Perfect Trip</h3>
              <p className="text-slate-300">
                Follow your customized itinerary and make adjustments on-the-go for the ultimate travel experience.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="gradient-card p-12 rounded-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Adventure?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who have already discovered the joy of stress-free trip planning
            with Smart Tour Planner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="gradient-primary text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-300">
              Start Planning Now
            </button>
            <button className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}