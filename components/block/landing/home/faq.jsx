import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Open_Sans from "@/lib/fonts/open-sans";
import Link from "next/link";

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

export default function FAQ() {
  return (
    <div className="flex items-center justify-center mt-24 py-14">
      <div className="flex-col items-center justify-center w-full lg:max-w-screen-lg">
        <span className="text-neutral-600 font-regular text-sm">
          Frequently Asked Question
        </span>
        <div className="flex columns-2 w-full mt-4">
          <div className="flex-col w-full">
            <h1
              className={`text-4xl font-medium text-[#171717] text-left leading-snug max-w-sm ${Open_Sans.className}`}
            >
              Let's Clear Things Up
            </h1>
            <p className="mt-4 mb-6 text-md font-light text-neutral-600 text-justify pr-12">
              Legal innovation can be complex. We break it down into
              easy-to-understand insights. If you have any questions, feel free
              to reach out to our team.
            </p>
            <Link href="/sales">
              <Button variant="default" size="default">
                Contact Sales
              </Button>
            </Link>
          </div>
          <div className="flex w-full justify-end items-end max-w-lg">
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
