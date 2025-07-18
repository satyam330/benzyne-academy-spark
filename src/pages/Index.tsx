import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyBenzyne from '../components/WhyBenzyne';
import StudyMaterials from '../components/StudyMaterials';
import MockTests from '../components/MockTests';
import CourseDetails from '../components/CourseDetails';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyBenzyne />
      <StudyMaterials />
      <MockTests />
      <CourseDetails />
      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
