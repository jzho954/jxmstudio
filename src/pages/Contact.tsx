import React from "react";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Contact = () => {
  // Use the scroll to top hook
  useScrollToTop();

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Let's Chat</h1>
            <p className="text-xl text-white/80 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Ready to discuss your project? Get in touch and let's create something amazing together.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info + Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-navy-500 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-10">
                I'm always interested in new projects and collaborations. Feel free to reach out with any questions or to discuss your project needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-navy-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-navy-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">jamiezhou777@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-navy-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-navy-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">022 089 0142</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-navy-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-navy-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Auckland, New Zealand</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-navy-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-navy-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Availability</h3>
                    <p className="text-gray-600">Monday to Friday, 9am - 5pm</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-navy-500 mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
