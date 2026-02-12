import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const whatsappNumber = "923454140830"; // +92 345 4140830
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-button"
      title="Chat with us on WhatsApp"
      aria-label="Open WhatsApp chat"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;
