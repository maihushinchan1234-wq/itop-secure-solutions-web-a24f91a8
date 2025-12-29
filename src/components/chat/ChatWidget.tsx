import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
  options?: string[];
}

const serviceResponses: Record<string, string> = {
  'Printer Support': `Great choice! We offer comprehensive printer services including:
• Installation & Setup
• Repair & Maintenance
• Toner & Cartridge Replacement
• Network Printer Configuration

📞 Call us: +91 9849655559
📧 Email: sachidanand@live.in

Would you like to schedule a service visit or have any specific questions?`,

  'Door Lock Support': `We're experts in smart door lock solutions:
• Smart Lock Installation
• Keypad & Biometric Locks
• Access Control Systems
• Lock Repair & Replacement

📞 Call us: +91 9849655559
📧 Email: sachidanand@live.in

How can we assist you with your door lock needs?`,

  'CCTV Support': `Our CCTV services include:
• HD Camera Installation
• DVR/NVR Setup & Configuration
• Remote Monitoring Setup
• Maintenance & Troubleshooting

📞 Call us: +91 9849655559
📧 Email: sachidanand@live.in

What type of CCTV solution are you looking for?`,

  'Fire Alarm Support': `We provide complete fire safety solutions:
• Fire Alarm Installation
• Smoke Detector Setup
• System Testing & Certification
• Emergency Response Integration

📞 Call us: +91 9849655559
📧 Email: sachidanand@live.in

How can we help with your fire safety requirements?`,

  'Other Questions': `We'd love to help you! For other inquiries:

📞 Call: +91 9849655559
📱 WhatsApp: +91 9849655559
📧 Email: sachidanand@live.in
🏠 Visit: Plot No 6, Siri Enclave, Dammaiguda, Hyderabad

Or type your question below and we'll get back to you!`,
};

const quickOptions = [
  'Printer Support',
  'Door Lock Support',
  'CCTV Support',
  'Fire Alarm Support',
  'Other Questions',
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add initial greeting
      const greeting: Message = {
        id: 'greeting',
        text: "Hello! 👋 Welcome to iTOP Services. How can we help you with Printers, Door Locks, CCTV, or Fire Alarms today?",
        sender: 'bot',
        timestamp: new Date(),
        options: quickOptions,
      };
      setMessages([greeting]);
    }
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const addBotMessage = (text: string, options?: string[]) => {
    setIsTyping(true);
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now().toString(),
        text,
        sender: 'bot',
        timestamp: new Date(),
        options,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleOptionClick = (option: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: option,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    const response = serviceResponses[option] || "I'm here to help! Please tell me more about what you need.";
    addBotMessage(response, quickOptions);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Generate response based on keywords
    const lowerInput = inputValue.toLowerCase();
    let response = '';

    if (lowerInput.includes('printer') || lowerInput.includes('print')) {
      response = serviceResponses['Printer Support'];
    } else if (lowerInput.includes('door') || lowerInput.includes('lock')) {
      response = serviceResponses['Door Lock Support'];
    } else if (lowerInput.includes('cctv') || lowerInput.includes('camera') || lowerInput.includes('security')) {
      response = serviceResponses['CCTV Support'];
    } else if (lowerInput.includes('fire') || lowerInput.includes('alarm') || lowerInput.includes('smoke')) {
      response = serviceResponses['Fire Alarm Support'];
    } else if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('quote')) {
      response = `For pricing and quotes, please contact us directly:

📞 Call: +91 9849655559
📧 Email: sachidanand@live.in

We'll provide you with a customized quote based on your requirements!`;
    } else if (lowerInput.includes('location') || lowerInput.includes('address') || lowerInput.includes('where')) {
      response = `📍 Our Location:
Plot No 6, Siri Enclave, Dammaiguda, 
Hyderabad, Telangana 500083

🕐 Working Hours:
Monday - Saturday: 9:00 AM - 7:00 PM
Sunday: 10:00 AM - 2:00 PM

We look forward to seeing you!`;
    } else if (lowerInput.includes('thank')) {
      response = "You're welcome! 😊 Is there anything else I can help you with?";
    } else if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      response = "Hello! 👋 How can I assist you today? Feel free to ask about any of our services!";
    } else {
      response = `Thank you for your message! For detailed assistance, please:

📞 Call us: +91 9849655559
📧 Email: sachidanand@live.in

Our team will get back to you shortly. Is there anything specific about our services I can help you with?`;
    }

    addBotMessage(response, quickOptions);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-4 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
          "bg-blue-600 hover:bg-blue-700 text-white",
          isOpen && "rotate-90"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-20 right-4 z-50 w-[350px] max-w-[calc(100vw-2rem)] bg-background border border-border rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden",
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        )}
        style={{ maxHeight: 'calc(100vh - 120px)' }}
      >
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-sm">iTOP Services</h3>
            <p className="text-xs text-blue-100">Online | Usually replies instantly</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="h-[350px] overflow-y-auto p-4 space-y-4 bg-muted/30">
          {messages.map((message) => (
            <div key={message.id}>
              <div
                className={cn(
                  "flex gap-2",
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
                    message.sender === 'user'
                      ? "bg-blue-600 text-white rounded-br-md"
                      : "bg-card border border-border text-foreground rounded-bl-md"
                  )}
                >
                  <p className="whitespace-pre-line">{message.text}</p>
                  <p
                    className={cn(
                      "text-[10px] mt-1",
                      message.sender === 'user' ? 'text-blue-100' : 'text-muted-foreground'
                    )}
                  >
                    {formatTime(message.timestamp)}
                  </p>
                </div>
                {message.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </div>

              {/* Quick Options */}
              {message.sender === 'bot' && message.options && (
                <div className="mt-3 ml-10 flex flex-wrap gap-2">
                  {message.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionClick(option)}
                      className="px-3 py-1.5 text-xs bg-blue-50 text-blue-600 border border-blue-200 rounded-full hover:bg-blue-100 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 border-t border-border bg-background">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 text-sm bg-muted border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 p-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-[10px] text-muted-foreground text-center mt-2">
            Powered by iTOP Services • We usually reply instantly
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
