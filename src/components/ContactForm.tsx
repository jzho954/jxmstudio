
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Mail, MessageSquare, User } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This would be a real API call in production
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            className="pl-10"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div className="relative">
          <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            className="pl-10"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <Textarea
            name="message"
            placeholder="Tell me about your project..."
            className="pl-10 min-h-[120px]"
            required
            value={formData.message}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="px-6 py-4 bg-indigo-50 rounded-lg border border-indigo-100 flex items-start gap-3">
        <Calendar className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-indigo-900">
          <span className="font-medium">Schedule a free consultation:</span> After submitting, we'll arrange a 15-30 minute call to discuss your project needs in detail.
        </p>
      </div>
      
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Book Free Consultation"}
      </Button>
    </form>
  );
};

export default ContactForm;
