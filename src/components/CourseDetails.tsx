import { BookOpen, Clock, Users, Target, CheckCircle, Star } from 'lucide-react';

const CourseDetails = () => {
  const courses = [
    {
      id: 'foundation',
      title: 'Foundation Courses',
      subtitle: 'Classes 8th, 9th & 10th',
      description: 'Build strong fundamentals in chemistry with our comprehensive foundation courses designed for young minds.',
      duration: '12 months',
      batchSize: '20 students',
      price: '₹15,000/year',
      highlights: [
        'Basic to advanced chemistry concepts',
        'Interactive learning methods',
        'Regular assessments and feedback',
        'Science Olympiad preparation',
        'Conceptual clarity focus'
      ],
      syllabus: [
        'Atomic Structure & Periodic Table',
        'Chemical Bonding Basics',
        'Acids, Bases & Salts',
        'Metals & Non-metals',
        'Introduction to Organic Chemistry'
      ]
    },
    {
      id: 'intermediate',
      title: '11th & 12th + CET',
      subtitle: 'Pre-Engineering & Medical',
      description: 'Comprehensive coaching for 11th & 12th chemistry along with Common Entrance Test preparation.',
      duration: '24 months',
      batchSize: '25 students',
      price: '₹25,000/year',
      highlights: [
        'Complete board exam preparation',
        'CET-focused problem solving',
        'Regular mock tests',
        'Doubt clearing sessions',
        'Career guidance included'
      ],
      syllabus: [
        'Physical Chemistry (Thermodynamics, Kinetics)',
        'Inorganic Chemistry (Coordination, d-block)',
        'Organic Chemistry (Hydrocarbons, Alcohols)',
        'Environmental Chemistry',
        'Chemistry in Everyday Life'
      ]
    },
    {
      id: 'jee',
      title: 'JEE (Mains/Advanced)',
      subtitle: 'Engineering Entrance',
      description: 'Specialized coaching for JEE Mains and Advanced with focus on problem-solving and conceptual understanding.',
      duration: '24 months',
      batchSize: '30 students',
      price: '₹40,000/year',
      highlights: [
        'IIT-level problem solving',
        'Advanced organic chemistry focus',
        'Regular JEE pattern tests',
        'Rank improvement strategies',
        'Previous year analysis'
      ],
      syllabus: [
        'Advanced Organic Chemistry',
        'Reaction Mechanisms',
        'Stereochemistry',
        'Biomolecules',
        'Polymers & Chemistry in Action'
      ]
    },
    {
      id: 'neet',
      title: 'NEET-UG',
      subtitle: 'Medical Entrance',
      description: 'Intensive NEET preparation with special emphasis on organic chemistry and biological applications.',
      duration: '24 months',
      batchSize: '30 students',
      price: '₹35,000/year',
      highlights: [
        'NEET-specific curriculum',
        'Biology-chemistry integration',
        'Medical applications focus',
        'AIIMS preparation included',
        'Counseling support'
      ],
      syllabus: [
        'Biomolecules (Detailed)',
        'Organic Chemistry for Biology',
        'Drug Chemistry Basics',
        'Environmental & Green Chemistry',
        'Chemistry in Health & Medicine'
      ]
    }
  ];

  return (
    <div className="space-y-20">
      {courses.map((course, index) => (
        <section 
          key={course.id} 
          id={course.id} 
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-muted/30'}`}
        >
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-medium">Popular Course</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
                  {course.title}
                </h2>
                <p className="text-xl text-secondary font-semibold mb-6">
                  {course.subtitle}
                </p>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="grid sm:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">{course.duration}</div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-secondary" />
                    <div>
                      <div className="font-semibold text-foreground">{course.batchSize}</div>
                      <div className="text-sm text-muted-foreground">Batch Size</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="w-6 h-6 text-accent" />
                    <div>
                      <div className="font-semibold text-foreground">{course.price}</div>
                      <div className="text-sm text-muted-foreground">Course Fee</div>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Course Highlights</h3>
                  <div className="space-y-3">
                    {course.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="btn-hero">
                  Enroll Now
                </button>
              </div>

              {/* Syllabus Card */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="card-elegant">
                  <div className="flex items-center space-x-3 mb-6">
                    <BookOpen className="w-8 h-8 text-primary" />
                    <h3 className="text-2xl font-semibold text-foreground">Syllabus Overview</h3>
                  </div>

                  <div className="space-y-4">
                    {course.syllabus.map((topic, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                          <span className="text-primary text-sm font-medium">{idx + 1}</span>
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{topic}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">What's Included?</h4>
                    <div className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <div>• Study Materials</div>
                      <div>• Mock Tests</div>
                      <div>• Doubt Sessions</div>
                      <div>• Progress Tracking</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default CourseDetails;