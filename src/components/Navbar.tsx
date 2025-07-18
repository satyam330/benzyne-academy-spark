import { useState } from 'react';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const courses = [
    { name: 'Foundation Courses', subcourses: ['Class 8th', 'Class 9th', 'Class 10th'], id: 'foundation' },
    { name: '11th & 12th + CET', subcourses: [], id: 'intermediate' },
    { name: 'JEE (Mains/Advanced)', subcourses: [], id: 'jee' },
    { name: 'NEET-UG', subcourses: [], id: 'neet' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    setIsCoursesOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-40">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary font-playfair">Benzyne Academy</h1>
              <p className="text-xs text-muted-foreground">Excellence in Chemistry</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            
            {/* Courses Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
              >
                <span>Courses</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-border z-50">
                  {courses.map((course, index) => (
                    <div key={index} className="p-3 hover:bg-muted cursor-pointer transition-colors" onClick={() => scrollToSection(course.id)}>
                      <div className="font-medium text-primary">{course.name}</div>
                      {course.subcourses.length > 0 && (
                        <div className="text-sm text-muted-foreground mt-1">
                          {course.subcourses.join(' • ')}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => scrollToSection('study-materials')} className="text-foreground hover:text-primary transition-colors">
              Study Materials
            </button>
            <button onClick={() => scrollToSection('mock-tests')} className="text-foreground hover:text-primary transition-colors">
              Mock Tests
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-foreground hover:text-primary transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </div>

          {/* Contact Info & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden xl:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@benzyneacademy.com</span>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-4">
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
                About
              </button>
              
              <div>
                <button
                  onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                  className="flex items-center justify-between w-full py-2 text-foreground hover:text-primary transition-colors"
                >
                  <span>Courses</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isCoursesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {courses.map((course, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(course.id)}
                        className="block w-full text-left py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {course.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => scrollToSection('study-materials')} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
                Study Materials
              </button>
              <button onClick={() => scrollToSection('mock-tests')} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
                Mock Tests
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;