import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#foundation' },
    { name: 'Study Materials', href: '#study-materials' },
    { name: 'Mock Tests', href: '#mock-tests' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  const courses = [
    { name: 'Foundation Courses', href: '#foundation' },
    { name: '11th & 12th + CET', href: '#intermediate' },
    { name: 'JEE Preparation', href: '#jee' },
    { name: 'NEET Preparation', href: '#neet' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold font-playfair">Benzyne Academy</h1>
                <p className="text-primary-foreground/80 text-sm">Excellence in Chemistry</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Leading coaching institute for NEET & JEE preparation with specialized focus on Organic Chemistry. 
              Building dreams, creating success stories since 2008.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span>info@benzyneacademy.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <span>123 Education Hub, Knowledge City,<br />Mumbai, Maharashtra 400001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Courses</h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(course.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {course.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-primary-foreground/80">Follow Us:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground/80 hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Newsletter */}
            <div className="flex items-center space-x-4">
              <span className="text-primary-foreground/80">Get Updates:</span>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-lg bg-white text-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button className="px-6 py-2 bg-accent text-white rounded-r-lg hover:bg-accent/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © {new Date().getFullYear()} Benzyne Academy. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;