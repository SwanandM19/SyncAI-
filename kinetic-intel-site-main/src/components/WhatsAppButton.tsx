import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const WHATSAPP_NUMBER = "+919604073232";
const WA_LINK = "https://wa.me/919604073232";

export function WhatsAppButton() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-black/25 transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          <span className="sr-only">Chat on WhatsApp</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <path
              d="M20.52 3.48A11.78 11.78 0 0 0 12 0C5.373 0 0 5.373 0 12a11.78 11.78 0 0 0 1.95 6.48L0 24l5.76-1.92A11.78 11.78 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.18-1.24-6.18-3.48-8.52Zm-8.52 17.4c-2.1 0-4.14-.56-5.92-1.6l-.42-.24-3.42 1.14 1.14-3.36-.28-.44A9.57 9.57 0 0 1 2.4 12c0-5.28 4.32-9.6 9.6-9.6 2.56 0 4.94.98 6.74 2.74A9.527 9.527 0 0 1 22.4 12c0 5.28-4.32 9.6-9.6 9.6Zm5.28-7.44c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12s-.62.78-.76.94c-.14.16-.28.18-.52.06a8.32 8.32 0 0 1-2.44-1.5 9.02 9.02 0 0 1-1.68-2.08c-.18-.3 0-.46.12-.6.12-.12.26-.3.38-.44.12-.14.16-.24.24-.4.08-.16 0-.3-.04-.42-.04-.12-.54-1.3-.74-1.8-.2-.46-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.86.84-.86 2.06 0 1.22.88 2.4 1 2.56.12.16 1.8 2.88 4.36 4.04 3.04 1.44 3.04 0 3.6-.04.58-.06 1.86-.76 2.12-1.5.26-.74.26-1.36.18-1.5-.08-.14-.22-.22-.46-.34Z"
            />
          </svg>
        </a>
      </TooltipTrigger>
      <TooltipContent side="left">Chat with us on WhatsApp ({WHATSAPP_NUMBER})</TooltipContent>
    </Tooltip>
  );
}
