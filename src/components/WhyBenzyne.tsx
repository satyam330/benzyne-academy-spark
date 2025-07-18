import { Award, Users, BookOpen, Target, Zap, Trophy } from 'lucide-react';

const WhyBenzyne = () => {
  const benefits = [
    {
      icon: Award,
      title: "Expert Faculty",
      description: "Learn from experienced chemistry professors with proven track records in NEET & JEE coaching.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Small Batch Size",
      description: "Personalized attention with maximum 25 students per batch for better learning outcomes.",
      color: "text-secondary"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Study Material",
      description: "Meticulously designed study materials covering complete syllabus with practice questions.",
      color: "text-accent"
    },
    {
      icon: Target,
      title: "Result-Oriented Approach",
      description: "Focused methodology that has consistently produced NEET & JEE toppers year after year.",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Quick Doubt Resolution",
      description: "24/7 doubt clearing sessions and instant support through our dedicated doubt portal.",
      color: "text-secondary"
    },
    {
      icon: Trophy,
      title: "Proven Success Rate",
      description: "98% of our students crack their target exams with remarkable improvement in scores.",
      color: "text-accent"
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Why Choose <span className="text-gradient">Benzyne Academy?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don't just teach chemistry; we create future doctors and engineers. 
            Our unique methodology and personalized approach ensure every student reaches their potential.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="card-elegant group">
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-${benefit.color.split('-')[1]}/10 to-${benefit.color.split('-')[1]}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Students Taught</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">AIIMS Selections</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-hero"
          >
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyBenzyne;