import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes Benzyne Academy different from other coaching institutes?",
      answer: "Benzyne Academy specializes exclusively in organic chemistry with a proven track record of producing NEET and JEE toppers. Our small batch sizes (max 25 students) ensure personalized attention, and our faculty consists of experienced professors with 15+ years in competitive exam coaching. We provide comprehensive study materials, regular mock tests, and 24/7 doubt resolution support."
    },
    {
      question: "What are the course fees and payment options available?",
      answer: "Our course fees vary by program: Foundation Courses (₹15,000/year), 11th & 12th + CET (₹25,000/year), JEE preparation (₹40,000/year), and NEET preparation (₹35,000/year). We offer flexible payment options including quarterly payments, EMI facilities, and scholarships for deserving students based on entrance test performance."
    },
    {
      question: "Do you provide online classes or only offline classes?",
      answer: "We offer both online and offline classes to cater to different student preferences. Our hybrid model includes live interactive online sessions, recorded lectures for revision, offline doubt clearing sessions, and in-person mock tests. Students can choose the mode that best suits their learning style and location."
    },
    {
      question: "What study materials are provided with the course?",
      answer: "Every enrolled student receives comprehensive study materials including chapter-wise notes, practice question banks with 5000+ problems, previous year question papers with solutions, quick revision guides, video lecture access, and regular updated materials. All materials are designed by our expert faculty and aligned with current exam patterns."
    },
    {
      question: "How do you ensure individual attention in batch classes?",
      answer: "We maintain small batch sizes with maximum 25 students per batch. Each student gets personalized study plans, regular one-on-one sessions with faculty, individual performance tracking through mock tests, customized doubt clearing sessions, and mentor-student programs for comprehensive guidance throughout the course duration."
    },
    {
      question: "What is your success rate and track record?",
      answer: "Benzyne Academy boasts a 98% success rate with over 1000 students successfully placed in top medical and engineering colleges. Our achievements include 50+ AIIMS selections, 200+ IIT placements, consistent NEET toppers in state rankings, and JEE Advanced qualifiers every year. We provide detailed success statistics and can arrange interactions with our alumni."
    },
    {
      question: "Do you provide mock tests and how frequently?",
      answer: "Yes, we conduct comprehensive mock test series including weekly chapter-wise tests, monthly full syllabus tests, quarterly JEE/NEET pattern tests, and final preparation intensive tests. All tests come with detailed analysis, performance reports, rank analysis with peers, and personalized improvement recommendations."
    },
    {
      question: "Is there any scholarship or fee concession available?",
      answer: "We offer merit-based scholarships up to 50% fee concession based on entrance test performance. Additionally, we provide need-based financial assistance for economically disadvantaged students, sibling discounts, and early bird discounts for advance registrations. Scholarship tests are conducted quarterly."
    },
    {
      question: "What support is provided for doubt clearing?",
      answer: "We provide 24/7 doubt resolution through multiple channels: dedicated doubt clearing sessions twice a week, online doubt portal with instant responses, WhatsApp support group with faculty, one-on-one mentoring sessions, and peer learning groups. No doubt goes unresolved, ensuring complete conceptual clarity."
    },
    {
      question: "How can I enroll and what is the admission process?",
      answer: "Enrollment is simple: take our online aptitude test, attend a counseling session with our academic team, choose your preferred course and batch timing, complete the registration with required documents, and begin your journey. We also offer free demo classes and counseling sessions to help you make an informed decision."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Got questions? We've got answers. Find everything you need to know about 
            our courses, admission process, and what makes us the best choice for your success.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Still Have Questions?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our academic counselors are here to help you make the right decision for your future. 
            Get personalized guidance and answers to all your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-hero"
            >
              Contact Our Counselors
            </button>
            <button className="btn-secondary">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;