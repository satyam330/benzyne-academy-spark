import { Download, FileText, Video, BookOpen, Clock, Star } from 'lucide-react';

const StudyMaterials = () => {
  const materials = [
    {
      icon: FileText,
      title: "Complete Notes",
      description: "Comprehensive chapter-wise notes covering complete NEET & JEE organic chemistry syllabus",
      downloads: "2.5k",
      rating: "4.9",
      type: "PDF",
      color: "bg-blue-500"
    },
    {
      icon: Video,
      title: "Video Lectures",
      description: "High-quality recorded lectures explaining complex organic chemistry concepts with animations",
      downloads: "1.8k",
      rating: "4.8",
      type: "Video",
      color: "bg-red-500"
    },
    {
      icon: BookOpen,
      title: "Practice Sets",
      description: "Topic-wise practice questions with detailed solutions and difficulty level classification",
      downloads: "3.2k",
      rating: "4.9",
      type: "PDF",
      color: "bg-green-500"
    },
    {
      icon: Clock,
      title: "Quick Revision",
      description: "Last-minute revision materials including formulas, reactions, and important concepts",
      downloads: "1.9k",
      rating: "4.7",
      type: "PDF",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="study-materials" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            <span className="text-gradient">Study Materials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access high-quality study materials crafted by expert faculty members. 
            Everything you need to excel in organic chemistry, available at your fingertips.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {materials.map((material, index) => {
            const IconComponent = material.icon;
            return (
              <div key={index} className="card-elegant group cursor-pointer">
                {/* Icon & Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${material.color} rounded-lg flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-medium px-2 py-1 bg-muted rounded-full text-muted-foreground">
                    {material.type}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {material.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {material.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Download className="w-4 h-4" />
                    <span>{material.downloads} downloads</span>
                  </div>
                  <div className="flex items-center space-x-1 text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-foreground">{material.rating}</span>
                  </div>
                </div>

                {/* Download Button */}
                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium transition-all duration-300 hover:bg-primary/90 group-hover:bg-secondary group-hover:text-secondary-foreground">
                  Download Now
                </button>
              </div>
            );
          })}
        </div>

        {/* Featured Section */}
        <div className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 font-playfair">
                Premium Study Package
              </h3>
              <p className="text-white/90 mb-6 text-lg leading-relaxed">
                Get access to our complete study material library including exclusive content, 
                video lectures, and personalized study plans tailored for your target exam.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Complete NEET & JEE organic chemistry coverage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>5000+ practice questions with solutions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>100+ hours of video content</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Monthly updated materials</span>
                </li>
              </ul>
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                Get Premium Access
              </button>
            </div>
            
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-white/90">
                    <span>Study Materials</span>
                    <span className="text-accent">500+ Files</span>
                  </div>
                  <div className="flex items-center justify-between text-white/90">
                    <span>Video Lectures</span>
                    <span className="text-accent">100+ Hours</span>
                  </div>
                  <div className="flex items-center justify-between text-white/90">
                    <span>Practice Questions</span>
                    <span className="text-accent">5000+</span>
                  </div>
                  <div className="flex items-center justify-between text-white/90">
                    <span>Mock Tests</span>
                    <span className="text-accent">50+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyMaterials;