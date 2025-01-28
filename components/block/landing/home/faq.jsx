import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Open_Sans from "@/lib/fonts/open-sans";
import Link from "next/link";

export default function FAQ() {
  const faqs = [
    {
      question: "Is LEXA compatible with different legal systems?",
      answer:
        "Yes, our platform supports 16+ languages and is specifically designed for Southeast Asian legal frameworks. We've built specialized AI models that understand nuanced legal terminology across jurisdictions like Indonesia, Malaysia, Singapore, and Thailand, ensuring accurate and contextually relevant research.",
    },
    {
      question: "How secure is my data on LEXA?",
      answer:
        "We use enterprise-grade AES-256 encryption, implement multi-factor authentication, and comply with GDPR and CCPA data protection regulations. Our secure cloud infrastructure ensures your sensitive legal documents remain confidential and protected against unauthorized access.",
    },
    {
      question: "Can I try LEXA before purchasing?",
      answer:
        "We offer a 14-day free trial that provides full access to our core features. No credit card required. Explore the AI assistant, research tools, and document management capabilities to evaluate how LEXA can transform your legal workflow.",
    },
    {
      question: "How does LEXA's AI understand legal context?",
      answer:
        "Our AI is trained on extensive legal documents from Southeast Asian jurisdictions. Using advanced natural language processing and machine learning, we analyze case laws, statutes, and legal precedents to provide precise, contextually accurate insights.",
    },
    {
      question: "When will LEXA be available for public?",
      answer:
        "Our public launch is planned for Q3 2025. We're currently in a private beta, refining features based on early user feedback. Professionals interested in early access can join our waitlist via Private Beta Registration to receive priority onboarding and exclusive beta testing opportunities.",
    },
  ];

  return (
    <div className="flex items-center justify-center mt-20 md:mt-32 px-8 md:px-0">
      <div className="flex flex-col items-start justify-center w-full md:max-w-screen-lg">
        <div className="flex flex-row w-full">
          <span className="text-neutral-600 font-regular text-sm">
            Frequently Asked Question
          </span>
        </div>
        <div className="flex flex-col md:flex-row w-full mt-6">
          <div className="flex flex-col w-full md:w-1/2">
            <h1
              className={`text-3xl md:text-4xl font-medium text-[#171717] text-left leading-snug max-w-sm ${Open_Sans.className}`}
            >
              Let's Clear Things Up
            </h1>
            <p className="mt-4 text-md font-light text-neutral-600 text-justify md:pr-12">
              Legal innovation can be complex. We break it down into
              easy-to-understand insights. If you have any questions, feel free
              to reach out to our team.
            </p>
            <div className="w-full mt-6">
              <Button variant="default" size="default" asChild>
                <Link href="/sales">Contact Sales</Link>
              </Button>
            </div>
          </div>
          <div className="flex w-full md:w-1/2 justify-end items-end max-w-lg mt-6 md:mt-0">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`faq-item-${index}`} key={index}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
