import { Quote, Star, GraduationCap } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      achievement: "NEET AIR 47",
      college: "AIIMS Delhi",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "Benzyne Academy's organic chemistry coaching was exceptional. The faculty's deep understanding and personalized attention helped me crack NEET with flying colors.",
      rating: 5,
      course: "NEET-UG"
    },
    {
      name: "Arjun Patel",
      achievement: "JEE Advanced AIR 123",
      college: "IIT Bombay",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "The problem-solving approach at Benzyne Academy is outstanding. They made organic chemistry concepts crystal clear, which was crucial for my JEE success.",
      rating: 5,
      course: "JEE Mains/Advanced"
    },
    {
      name: "Sneha Reddy",
      achievement: "NEET AIR 89",
      college: "JIPMER Puducherry",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "The study materials and mock tests were perfectly aligned with NEET pattern. The regular doubt clearing sessions boosted my confidence tremendously.",
      rating: 5,
      course: "NEET-UG"
    },
    {
      name: "Rahul Kumar",
      achievement: "JEE Mains 99.2%ile",
      college: "NIT Trichy",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "From weak chemistry student to JEE qualifier - Benzyne Academy transformed my understanding completely. Their teaching methodology is simply brilliant.",
      rating: 5,
      course: "JEE Mains/Advanced"
    },
    {
      name: "Ananya Singh",
      achievement: "State Topper",
      college: "12th Board - 98%",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      quote: "The foundation course helped me build strong basics. Now I'm confident about cracking competitive exams. Thanks to the amazing faculty!",
      rating: 5,
      course: "Foundation"
    },
    {
      name: "Vikram Joshi",
      achievement: "NEET AIR 156",
      college: "GMC Mumbai",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      quote: "The personalized study plan and regular assessments kept me on track. Benzyne Academy's guidance was instrumental in achieving my medical dream.",
      rating: 5,
      course: "NEET-UG"
    }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from our successful students who achieved their dreams with Benzyne Academy's guidance. 
            Their success is our pride and motivation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-muted-foreground">Students Placed</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-secondary mb-2">50+</div>
            <div className="text-muted-foreground">AIIMS Selections</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Quote className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-accent mb-2">200+</div>
            <div className="text-muted-foreground">IIT Selections</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-elegant">
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Student Info */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.achievement}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.college}</div>
                </div>
              </div>

              {/* Course Badge */}
              <div className="mt-4 pt-4 border-t border-border">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {testimonial.course}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4 font-playfair">
            Watch Video Testimonials
          </h3>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            See our successful students share their journey and experience at Benzyne Academy
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors">
            View Video Stories
          </button>
        </div>

        {/* Join Success Story CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Write Your Success Story?</h3>
          <p className="text-muted-foreground mb-6">Join thousands of successful students who achieved their dreams with us</p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-hero"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;