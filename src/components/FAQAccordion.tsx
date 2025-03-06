
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQItem } from "@/data/faq";

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion = ({ items }: FAQAccordionProps) => {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border border-gray-200 rounded-lg mb-4 overflow-hidden bg-white shadow-sm"
        >
          <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 font-medium text-gray-800 text-left">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 text-gray-600">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
