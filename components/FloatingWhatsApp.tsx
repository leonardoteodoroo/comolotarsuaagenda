import React from 'react';
import { MessageCircle } from 'lucide-react';

// Using the link from the Footer/App
const WHATSAPP_LINK = "https://wa.me/556299918702";

const FloatingWhatsApp: React.FC = () => {
    return (
        <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-500/30 hover:bg-[#20bd5a] hover:scale-105 hover:shadow-green-500/50 transition-all duration-300 group"
            aria-label="Falar no WhatsApp"
        >
            {/* Icon */}
            <MessageCircle size={28} className="relative z-10 fill-white text-white" />
        </a>
    );
};

export default FloatingWhatsApp;
