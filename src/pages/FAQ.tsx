import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FAQAccordion from "@/components/FAQAccordion";
import { faqItems } from "@/data/faq";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const FAQ = () => {
  // Use the scroll to top hook
  useScrollToTop();

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Got Questions?</h1>
            <p className="text-xl text-white/80 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Find answers to common questions about working with me and my web design process.
              
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FAQAccordion items={faqItems} />
          
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Still have questions? Feel free to reach out directly!
            </p>
            <Button asChild className="bg-navy-600 hover:bg-navy-700">
              <Link to="/contact">
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-700 mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's create a website that perfectly represents your brand and helps you achieve your goals.
            </p>
            
            <Button asChild className="bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white">
              <Link to="/contact">
                Schedule a Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
