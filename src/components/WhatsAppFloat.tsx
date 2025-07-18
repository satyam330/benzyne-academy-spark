import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "+919876543210";
    const message = "Hi! I'm interested in learning more about Benzyne Academy courses. Can you help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* WhatsApp Float Button */}
      <button
        onClick={handleWhatsAppClick}
        className="whatsapp-float group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Floating tooltip */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          <span className="text-sm font-medium">Chat with us on WhatsApp</span>
          {/* Arrow */}
          <div className="absolute right-[-4px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
        </div>
      </button>

      {/* Pulsing indicator */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        <div className="absolute inset-1 bg-green-500 rounded-full animate-ping opacity-40 animation-delay-150"></div>
      </div>
    </>
  );
};

export default WhatsAppFloat;