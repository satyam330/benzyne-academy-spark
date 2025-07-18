import { ArrowRight, Play, Star } from 'lucide-react';
import heroImage from '../assets/hero-chemistry.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCourses = () => {
    const element = document.getElementById('foundation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Chemistry Education" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-accent fill-current" />
              <span className="text-sm font-medium">Trusted by 1000+ NEET & JEE Toppers</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6 leading-tight">
              Master Organic Chemistry with{' '}
              <span className="text-accent">Benzyne Academy</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Expert coaching for NEET & JEE aspirants with specialized focus on Organic Chemistry. 
              Foundation courses for Classes 8-10 to build strong fundamentals.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-white/80">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">98%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToCourses}
                className="btn-hero group"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button 
                onClick={scrollToContact}
                className="btn-secondary group"
              >
                <Play className="w-5 h-5 mr-2" />
                <span>Book Free Demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/80 text-sm mb-3">Trusted by students from:</p>
              <div className="flex flex-wrap gap-4 text-white/70 text-sm">
                <span>• AIIMS Delhi</span>
                <span>• IIT Bombay</span>
                <span>• NEET AIR 1-100</span>
                <span>• JEE Mains 99+ %ile</span>
              </div>
            </div>
          </div>

          {/* Image/Visual Element */}
          <div className="lg:block hidden">
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full animate-pulse delay-300"></div>
              
              {/* Main Visual */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <div className="text-white/90">Live Interactive Classes</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <div className="text-white/90">Personalized Study Plans</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <div className="text-white/90">24/7 Doubt Resolution</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <div className="text-white/90">Regular Mock Tests</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;