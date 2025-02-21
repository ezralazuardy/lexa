import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function isProductionMode() {
  return process.env.NODE_ENV === "production";
}

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export function getDateFromTimestamp(
  timestamp,
  format = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  },
) {
  return new Date(timestamp * 1000)
    .toLocaleDateString("en-US", format)
    .replace(/ /g, " ");
}

export async function getHtmlContent(path) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}${path}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    let content = await response.text();

    const placeholders = {
      COMPANY_NAME: process.env.NEXT_PUBLIC_COMPANY_NAME,
      COMPANY_DEVELOPER_NAME: process.env.NEXT_PUBLIC_COMPANY_DEVELOPER_NAME,
      COMPANY_LEGAL_NAME: process.env.NEXT_PUBLIC_COMPANY_LEGAL_NAME,
      COMPANY_ADDRESS: process.env.NEXT_PUBLIC_COMPANY_ADDRESS,
      COMPANY_EMAIL_ADDRESS: process.env.NEXT_PUBLIC_COMPANY_EMAIL_ADDRESS,
      COMPANY_PHONE_NUMBER: process.env.NEXT_PUBLIC_COMPANY_PHONE_NUMBER,
    };

    for (const [placeholder, value] of Object.entries(placeholders)) {
      const regex = new RegExp(`{{${placeholder}}}`, "g");
      content = content.replace(regex, value);
    }

    return content;
  } catch (error) {
    console.error(`Error fetching file ${path}:`, error);
    return "";
  }
}

export function getTypingAnimationSequence(words, delay = 4000) {
  const sequence = [];
  for (const word of words) {
    sequence.push(word, delay);
  }
  return sequence;
}
