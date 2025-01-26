import feature1 from "@/public/images/features/feature-1.png";
import feature2 from "@/public/images/features/feature-2.png";
import feature3 from "@/public/images/features/feature-3.png";
import feature4 from "@/public/images/features/feature-4.png";
import feature5 from "@/public/images/features/feature-5.png";
import feature6 from "@/public/images/features/feature-6.png";
import {
  Building2,
  Filter,
  FolderLock,
  MessageCircle,
  Search,
  Users,
} from "lucide-react";

const features = [
  {
    id: 1,
    image: feature1,
    icon: MessageCircle,
    title: "Assistant",
    description: "Ask anything about law and legal.",
    long_description:
      "Get instant answers to legal questions with LEXA's AI-powered Assistant. Whether you're researching case law or seeking guidance on legal principles, this feature provides quick, reliable, and accurate responses tailored to your queries.<br/><br/>Simplify your legal tasks and boost productivity with actionable insights at your fingertips.",
  },
  {
    id: 2,
    image: feature2,
    icon: Search,
    title: "Research",
    description: "Find the legal information instantly.",
    long_description:
      "Dive deep into the legal world with the Research feature, offering instant access to legal information. From statutes to case laws and precedents, LEXA enables you to find what you need in seconds, empowering smarter decision-making.<br/><br/>Say goodbye to time-consuming searches and hello to efficiency.",
  },
  {
    id: 3,
    image: feature3,
    icon: FolderLock,
    title: "Vault",
    description: "Store legal documents securely.",
    long_description:
      "Store your legal documents securely with LEXA's Vault. Featuring enterprise-grade encryption and easy accessibility, this feature ensures that your sensitive information is both protected and organized.<br/><br/>Access your files anytime, anywhere with confidence and convenience.",
  },
  {
    id: 4,
    image: feature4,
    icon: Filter,
    title: "Query",
    description: "Extract key legal details easily.",
    long_description:
      "Extract critical legal details effortlessly with the Query feature. LEXA's intelligent algorithms analyze complex documents, saving time by surfacing key information in seconds.<br/><br/>Simplify the legal review process with precision and speed.",
  },
  {
    id: 5,
    image: feature5,
    icon: Building2,
    title: "Client",
    description: "Track all clients in one place.",
    long_description:
      "Manage all your clients effectively with the Client feature. Keep track of case details, communications, and history in one centralized platform.<br/><br/>Deliver a seamless experience to your clients while maintaining organization and control over your workload.",
  },
  {
    id: 6,
    image: feature6,
    icon: Users,
    title: "Team",
    description: "Work together seamlessly.",
    long_description:
      "Collaborate with ease using the Team feature, designed for seamless teamwork. Share files, assign tasks, and communicate effortlessly within your team, ensuring everyone stays aligned.<br/><br/>Streamline your workflows and achieve more together with LEXA.",
  },
];

export function getFeatures() {
  return features;
}

export function getFeatureById(id) {
  return getFeatures().find((item) => item.id === id) ?? null;
}
