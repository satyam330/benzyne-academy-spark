import { Clock, FileText, Target, Zap, Users, CheckCircle } from 'lucide-react';

const MockTests = () => {
  const testTypes = [
    {
      icon: FileText,
      title: "Full Syllabus Test",
      description: "Complete mock tests covering entire NEET/JEE organic chemistry syllabus with exam pattern",
      duration: "180 mins",
      questions: "60",
      difficulty: "Mixed",
      attempts: "2.1k",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Target,
      title: "Chapter-wise Test",
      description: "Focused tests for individual chapters to strengthen specific topics and concepts",
      duration: "90 mins",
      questions: "30",
      difficulty: "Moderate",
      attempts: "3.5k",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "Time-based Test",
      description: "Quick revision tests designed for last-minute preparation and speed building",
      duration: "45 mins",
      questions: "20",
      difficulty: "Easy",
      attempts: "4.2k",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "Speed Test",
      description: "High-speed tests to improve time management and quick problem-solving skills",
      duration: "30 mins",
      questions: "25",
      difficulty: "Hard",
      attempts: "1.8k",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  const features = [
    "Instant result analysis",
    "Detailed performance report",
    "Rank analysis with peers",
    "Chapter-wise breakdown",
    "Time management insights",
    "Personalized recommendations"
  ];

  return (
    <section id="mock-tests" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            <span className="text-gradient">Mock Test Series</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Practice makes perfect. Our comprehensive mock test series simulates real exam conditions 
            and helps you build confidence for NEET & JEE examinations.
          </p>
        </div>

        {/* Test Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {testTypes.map((test, index) => {
            const IconComponent = test.icon;
            return (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Header with Gradient */}
                <div className={`bg-gradient-to-r ${test.gradient} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="w-8 h-8" />
                    <div className="text-sm bg-white/20 px-2 py-1 rounded-full">
                      {test.attempts} attempts
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{test.title}</h3>
                  <p className="text-white/90 text-sm">{test.description}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium text-foreground">{test.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Questions:</span>
                      <span className="font-medium text-foreground">{test.questions}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Difficulty:</span>
                      <span className={`font-medium ${
                        test.difficulty === 'Easy' ? 'text-green-600' :
                        test.difficulty === 'Moderate' ? 'text-orange-600' :
                        'text-red-600'
                      }`}>
                        {test.difficulty}
                      </span>
                    </div>
                  </div>

                  <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    Start Test
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 font-playfair text-primary">
                Advanced Test Analytics
              </h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Get detailed insights into your performance with our advanced analytics system. 
                Track your progress, identify weak areas, and improve systematically.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 btn-hero">
                View Sample Report
              </button>
            </div>

            <div className="space-y-6">
              {/* Mock Performance Cards */}
              <div className="bg-muted/50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-foreground">Overall Performance</h4>
                  <div className="text-2xl font-bold text-secondary">85%</div>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-foreground">Time Management</h4>
                  <div className="text-2xl font-bold text-accent">92%</div>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-foreground">Accuracy Rate</h4>
                  <div className="text-2xl font-bold text-primary">88%</div>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-12 text-white">
          <Users className="w-16 h-16 mx-auto mb-6 text-white/80" />
          <h3 className="text-3xl font-bold mb-4 font-playfair">
            Join 10,000+ Students Taking Mock Tests
          </h3>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Start your mock test journey today and track your progress toward your dream college.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors">
            Start Free Mock Test
          </button>
        </div>
      </div>
    </section>
  );
};

export default MockTests;