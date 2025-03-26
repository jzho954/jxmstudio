import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Mail, MessageSquare, User } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Replace this with your new access key from Web3Forms dashboard
const ACCESS_KEY = "1963842a-07fc-4a5d-b218-f2415c578b1f";
const SUBMISSION_TIMEOUT = 8000; // 8 seconds timeout

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [metadata, setMetadata] = useState({
    domain: "",
    page_url: "",
    user_agent: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    botcheck: "", // Keep this for spam protection
  });

  // Pre-collect metadata when component mounts
  useEffect(() => {
    setMetadata({
      domain: window.location.hostname,
      page_url: window.location.href,
      user_agent: window.navigator.userAgent,
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create an AbortController for timeout handling
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), SUBMISSION_TIMEOUT);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          botcheck: formData.botcheck,
          subject: "New Contact Form Submission",
          from_name: "JXM Studio Contact Form",
          ...metadata,
          timestamp: new Date().toISOString(),
        }),
      });
      
      clearTimeout(timeoutId);
      
      const result = await response.json();
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon!",
        });
        setFormData({
          name: "",
          email: "",
          message: "",
          botcheck: "",
        });
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      const errorMessage = error instanceof Error && error.name === 'AbortError' 
        ? "Request timed out. Please try again."
        : error instanceof Error ? error.message : "Failed to send message. Please try again.";
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      clearTimeout(timeoutId);
      setIsSubmitting(false);
    }
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

        {/* Honeypot field - hidden from users but will catch bots */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: 'none' }}
          onChange={handleChange}
          value={formData.botcheck}
        />
      </div>
      
      <div className="px-6 py-4 bg-indigo-50 rounded-lg border border-indigo-100 flex items-start gap-3">
        <Calendar className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-indigo-900">
          <span className="font-medium">Schedule a free consultation:</span> After submitting, I'll arrange a 15-30 minute call to discuss your project needs in detail.
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
