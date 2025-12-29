import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Phone, Mail, Calendar, HelpCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
  options?: QuickOption[];
  showBackButton?: boolean;
}

interface QuickOption {
  label: string;
  icon?: string;
  category?: string;
}

// Main menu options
const mainMenuOptions: QuickOption[] = [
  { label: 'Printer Services', icon: '🖨️', category: 'printer' },
  { label: 'Door Lock Services', icon: '🔐', category: 'doorlock' },
  { label: 'CCTV Services', icon: '📹', category: 'cctv' },
  { label: 'Fire Alarm Services', icon: '🔥', category: 'firealarm' },
  { label: 'FAQs', icon: '❓', category: 'faq' },
  { label: 'Schedule a Technician', icon: '📅', category: 'schedule' },
];

// Sub-menu options for each category
const subMenuOptions: Record<string, QuickOption[]> = {
  printer: [
    { label: 'Repair & Troubleshooting', category: 'printer-repair' },
    { label: 'Toner & Cartridge Refill', category: 'printer-toner' },
    { label: 'Installation & Setup', category: 'printer-install' },
    { label: 'Maintenance & AMC', category: 'printer-maintenance' },
    { label: 'Printer Rental', category: 'printer-rental' },
    { label: '← Back to Main Menu', category: 'main' },
  ],
  doorlock: [
    { label: 'Smart Lock Installation', category: 'doorlock-smart' },
    { label: 'Keypad & Biometric Locks', category: 'doorlock-biometric' },
    { label: 'Access Control Systems', category: 'doorlock-access' },
    { label: 'Lock Repair & Replacement', category: 'doorlock-repair' },
    { label: '← Back to Main Menu', category: 'main' },
  ],
  cctv: [
    { label: 'New Installation', category: 'cctv-install' },
    { label: 'Maintenance & AMC', category: 'cctv-maintenance' },
    { label: 'Troubleshooting & Repair', category: 'cctv-repair' },
    { label: 'Remote Monitoring Setup', category: 'cctv-remote' },
    { label: '← Back to Main Menu', category: 'main' },
  ],
  firealarm: [
    { label: 'Installation & Setup', category: 'firealarm-install' },
    { label: 'Testing & Certification', category: 'firealarm-testing' },
    { label: 'Maintenance & Repair', category: 'firealarm-maintenance' },
    { label: '← Back to Main Menu', category: 'main' },
  ],
  faq: [
    { label: 'Service Area & Timing', category: 'faq-area' },
    { label: 'Pricing & Payment', category: 'faq-pricing' },
    { label: 'Warranty & Support', category: 'faq-warranty' },
    { label: 'Emergency Services', category: 'faq-emergency' },
    { label: '← Back to Main Menu', category: 'main' },
  ],
};

// Knowledge base responses
const knowledgeBase: Record<string, string> = {
  // Printer Services
  'printer': `Great choice! 🖨️ We offer comprehensive printer services. What do you need help with?`,
  
  'printer-repair': `🔧 **Printer Repair & Troubleshooting**

Common issues we fix:
• Paper jams & feed problems
• Print quality issues (streaks, faded prints)
• Error codes & connectivity issues
• Hardware malfunctions

💡 **Quick Tip for Paper Jams:**
1. Turn off the printer
2. Open all accessible panels
3. Gently remove jammed paper
4. Check for torn pieces
5. Close panels and restart

Need professional help? We're just a call away!
📞 +91 9990820830`,

  'printer-toner': `🖨️ **Toner & Cartridge Services**

We provide:
• Original & compatible toner cartridges
• Cartridge refilling services
• Drum unit replacement
• Color calibration

✅ All brands supported: HP, Canon, Epson, Brother, Samsung, and more!

📞 Call for pricing: +91 9990820830
📧 Email: sachidanand@live.in`,

  'printer-install': `📦 **Printer Installation & Setup**

Our installation includes:
• Unboxing & physical setup
• Driver installation on all devices
• Network configuration (WiFi/LAN)
• Test prints & calibration
• User training

We support all printer types:
• Inkjet & Laser printers
• Multifunction devices
• Network printers
• Label printers

📞 Book installation: +91 9990820830`,

  'printer-maintenance': `🛠️ **Printer Maintenance & AMC**

Our Annual Maintenance Contract includes:
• Quarterly preventive maintenance
• Unlimited breakdown support
• Genuine spare parts
• Priority response time
• Consumables at discounted rates

Benefits:
✅ Extend printer life
✅ Reduce downtime
✅ Fixed annual cost
✅ Expert technicians

📞 Get AMC quote: +91 9990820830`,

  'printer-rental': `💼 **Printer Rental Services**

Flexible rental plans for:
• Short-term events
• Office setups
• Project-based needs

Available models:
• Laser printers
• Multifunction devices
• High-volume copiers

Rental includes maintenance & support!

📞 Inquire now: +91 9990820830`,

  // Door Lock Services
  'doorlock': `Perfect! 🔐 We specialize in smart security solutions. What type of lock service do you need?`,

  'doorlock-smart': `🔐 **Smart Lock Installation**

We install:
• WiFi-enabled smart locks
• Bluetooth smart locks
• App-controlled locks
• Voice assistant compatible locks

Features:
✅ Remote access & monitoring
✅ Temporary access codes
✅ Activity logs
✅ Auto-lock functionality

Popular brands: Yale, Samsung, Godrej, and more!

📞 Get a quote: +91 9990820830`,

  'doorlock-biometric': `👆 **Keypad & Biometric Locks**

Options available:
• Fingerprint locks
• PIN code locks
• RFID card access
• Combination systems

Perfect for:
• Homes & apartments
• Offices & businesses
• Server rooms
• Restricted areas

📞 Schedule demo: +91 9990820830`,

  'doorlock-access': `🏢 **Access Control Systems**

Complete solutions for:
• Office buildings
• Factories & warehouses
• Residential complexes
• Parking areas

Features:
• Multi-door management
• Time-based access
• Visitor management
• Integration with CCTV

📞 Free consultation: +91 9990820830`,

  'doorlock-repair': `🔧 **Lock Repair & Replacement**

We handle:
• Jammed locks
• Key extraction
• Lock cylinder replacement
• Master key systems
• Emergency lockout support

⚡ Emergency service available!

📞 Call now: +91 9990820830`,

  // CCTV Services
  'cctv': `Excellent! 📹 Security is our priority. What CCTV service do you need?`,

  'cctv-install': `📹 **CCTV Installation**

We offer:
• HD & 4K cameras
• Indoor & outdoor cameras
• Night vision systems
• PTZ cameras
• Wireless solutions

Package includes:
✅ Site survey
✅ Camera placement design
✅ Professional installation
✅ DVR/NVR setup
✅ Mobile app configuration

📞 Free site survey: +91 9990820830`,

  'cctv-maintenance': `🛠️ **CCTV Maintenance & AMC**

Our AMC covers:
• Quarterly servicing
• Camera cleaning & alignment
• Cable & connection check
• Storage optimization
• Software updates

Benefits:
✅ 24/7 support
✅ Quick response time
✅ Genuine parts
✅ Remote troubleshooting

📞 Get AMC: +91 9990820830`,

  'cctv-repair': `🔧 **CCTV Troubleshooting & Repair**

Common issues we fix:
• No video signal
• Poor image quality
• Recording failures
• Night vision problems
• Remote access issues

We repair all brands!

📞 Report issue: +91 9990820830`,

  'cctv-remote': `📱 **Remote Monitoring Setup**

We configure:
• Mobile app access
• Cloud storage
• Multiple location monitoring
• Alert notifications
• Remote playback

Watch your property from anywhere in the world!

📞 Setup now: +91 9990820830`,

  // Fire Alarm Services
  'firealarm': `Important choice! 🔥 Fire safety is crucial. How can we help?`,

  'firealarm-install': `🔥 **Fire Alarm Installation**

We install:
• Smoke detectors
• Heat detectors
• Manual call points
• Fire alarm panels
• Hooters & strobes

For:
• Homes & apartments
• Offices & commercial spaces
• Factories & warehouses
• Hotels & restaurants

📞 Get survey: +91 9990820830`,

  'firealarm-testing': `✅ **Fire Alarm Testing & Certification**

Our services:
• Annual testing
• Compliance certification
• Documentation support
• NOC assistance

We ensure your system meets all safety standards!

📞 Schedule testing: +91 9990820830`,

  'firealarm-maintenance': `🛠️ **Fire Alarm Maintenance**

Regular maintenance includes:
• Detector testing
• Battery replacement
• Panel inspection
• Wiring check
• System calibration

Don't compromise on safety!

📞 Book service: +91 9990820830`,

  // FAQs
  'faq': `❓ What would you like to know about? Select a topic below.`,

  'faq-area': `📍 **Service Area & Timing**

**Coverage Area:**
Delhi NCR (Delhi, Noida, Gurgaon, Faridabad, Ghaziabad)

**Our Address:**
224, B1, DDA Flats, Loknayak Puram
New Delhi 110041

**Working Hours:**
Monday - Saturday: 9:00 AM - 7:00 PM
Sunday: By appointment only

📞 +91 9990820830
📧 sachidanand@live.in`,

  'faq-pricing': `💰 **Pricing & Payment**

• Free consultation & estimates
• Competitive market rates
• No hidden charges
• Transparent billing

**Payment Options:**
• Cash
• UPI/PhonePe/Google Pay
• Bank transfer
• Cheque (for AMC)

📞 Get quote: +91 9990820830`,

  'faq-warranty': `🛡️ **Warranty & Support**

• Installation warranty: 1 year
• AMC products: Extended support
• Genuine parts guarantee
• Post-service support

We stand behind our work!

📞 Support: +91 9990820830`,

  'faq-emergency': `🚨 **Emergency Services**

We offer emergency support for:
• Security breaches
• Fire alarm malfunctions
• Lock emergencies
• CCTV failures

⚡ Same-day response for emergencies!

📞 Emergency: +91 9990820830
📱 WhatsApp: +91 9990820830`,

  // Schedule
  'schedule': `📅 **Schedule a Technician**

To book a service visit:

**Option 1: Call Us**
📞 +91 9990820830

**Option 2: WhatsApp**
📱 +91 9990820830

**Option 3: Email**
📧 sachidanand@live.in

Please provide:
• Service type needed
• Your address
• Preferred date & time

We'll confirm your appointment within 2 hours!`,

  // Main menu
  'main': `How else can I help you? Choose a topic below or type your question.`,
};

// Intent keywords mapping
const intentKeywords: Record<string, string[]> = {
  'printer': ['printer', 'print', 'printing', 'toner', 'cartridge', 'ink', 'paper jam', 'scan', 'scanner'],
  'doorlock': ['door', 'lock', 'smart lock', 'biometric', 'fingerprint', 'keypad', 'access', 'key'],
  'cctv': ['cctv', 'camera', 'surveillance', 'security camera', 'dvr', 'nvr', 'recording', 'monitoring'],
  'firealarm': ['fire', 'alarm', 'smoke', 'detector', 'safety', 'emergency'],
  'schedule': ['schedule', 'book', 'appointment', 'technician', 'visit', 'service call'],
  'faq-area': ['location', 'address', 'area', 'timing', 'hours', 'where', 'when'],
  'faq-pricing': ['price', 'cost', 'rate', 'quote', 'estimate', 'fee', 'charge', 'payment'],
  'faq-warranty': ['warranty', 'guarantee', 'support', 'after sales'],
  'faq-emergency': ['emergency', 'urgent', 'immediate', 'asap'],
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
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
      const greeting: Message = {
        id: 'greeting',
        text: "Hello! 👋 Welcome to iTOP Services. How can I help you today? You can type your question or choose a topic below.",
        sender: 'bot',
        timestamp: new Date(),
        options: mainMenuOptions,
      };
      setMessages([greeting]);
    }
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen, messages.length]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const addBotMessage = (text: string, options?: QuickOption[], showBackButton?: boolean) => {
    setIsTyping(true);
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now().toString(),
        text,
        sender: 'bot',
        timestamp: new Date(),
        options,
        showBackButton,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  const detectIntent = (input: string): string | null => {
    const lowerInput = input.toLowerCase();
    
    for (const [category, keywords] of Object.entries(intentKeywords)) {
      for (const keyword of keywords) {
        if (lowerInput.includes(keyword)) {
          return category;
        }
      }
    }
    return null;
  };

  const handleOptionClick = (option: QuickOption) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: option.label,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    const category = option.category || 'main';
    
    if (category === 'main') {
      setCurrentCategory(null);
      addBotMessage(knowledgeBase['main'], mainMenuOptions);
      return;
    }

    setCurrentCategory(category);
    
    const response = knowledgeBase[category];
    const subOptions = subMenuOptions[category];
    
    if (response) {
      addBotMessage(response, subOptions || mainMenuOptions);
    } else {
      addBotMessage("I'm here to help! Please tell me more about what you need.", mainMenuOptions);
    }
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
    const userInput = inputValue;
    setInputValue('');

    const lowerInput = userInput.toLowerCase();
    
    // Detect intent
    const detectedIntent = detectIntent(userInput);
    
    if (detectedIntent) {
      const response = knowledgeBase[detectedIntent];
      const subOptions = subMenuOptions[detectedIntent];
      if (response) {
        setCurrentCategory(detectedIntent);
        addBotMessage(response, subOptions || mainMenuOptions);
        return;
      }
    }

    // Handle greetings
    if (/^(hi|hello|hey|good morning|good afternoon|good evening)/i.test(lowerInput)) {
      addBotMessage("Hello! 👋 Great to hear from you! How can I assist you today? Feel free to ask about any of our services or select an option below.", mainMenuOptions);
      return;
    }

    // Handle thanks
    if (/thank|thanks|thx/i.test(lowerInput)) {
      addBotMessage("You're welcome! 😊 Is there anything else I can help you with? Feel free to ask or choose from the options below.", mainMenuOptions);
      return;
    }

    // Handle bye
    if (/bye|goodbye|see you/i.test(lowerInput)) {
      addBotMessage("Goodbye! 👋 Thank you for chatting with iTOP Services. Have a great day! Feel free to come back anytime you need assistance.", mainMenuOptions);
      return;
    }

    // Handle help requests
    if (/help|assist|support/i.test(lowerInput)) {
      addBotMessage("I'm here to help! 🙌 Please select a service category below, or describe your issue and I'll guide you to the right solution.", mainMenuOptions);
      return;
    }

    // Handle contact requests
    if (/contact|call|phone|email|reach/i.test(lowerInput)) {
      addBotMessage(`📞 **Contact Us**

**Phone/WhatsApp:** +91 9990820830
**Email:** sachidanand@live.in

**Address:**
224, B1, DDA Flats, Loknayak Puram
New Delhi 110041

**Service Area:** Delhi NCR

We're happy to help! 🙂`, mainMenuOptions);
      return;
    }

    // Fallback response
    addBotMessage(`I'm sorry, I'm not sure about that specific question. 🤔

Here's how I can help:
• Select a service category below
• Ask about our services (Printers, Door Locks, CCTV, Fire Alarms)
• Request pricing or scheduling information

Or contact us directly:
📞 +91 9990820830
📧 sachidanand@live.in

Would you like to speak with a technician?`, mainMenuOptions);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleBackToMain = () => {
    setCurrentCategory(null);
    addBotMessage("Back to main menu! How can I help you?", mainMenuOptions);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-4 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
          "bg-primary hover:bg-primary/90 text-primary-foreground",
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
          "fixed bottom-20 right-4 z-50 w-[380px] max-w-[calc(100vw-2rem)] bg-background border border-border rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden",
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        )}
        style={{ maxHeight: 'calc(100vh - 120px)' }}
      >
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-sm">iTOP Services Support</h3>
            <p className="text-xs opacity-80">Online • Usually replies instantly</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Actions Bar */}
        <div className="bg-muted/50 px-3 py-2 flex items-center gap-2 border-b border-border">
          <a
            href="tel:+919990820830"
            className="flex items-center gap-1 px-3 py-1.5 text-xs bg-background border border-border rounded-full hover:bg-accent transition-colors"
          >
            <Phone className="w-3 h-3" />
            <span>Call</span>
          </a>
          <a
            href="mailto:sachidanand@live.in"
            className="flex items-center gap-1 px-3 py-1.5 text-xs bg-background border border-border rounded-full hover:bg-accent transition-colors"
          >
            <Mail className="w-3 h-3" />
            <span>Email</span>
          </a>
          <a
            href="https://wa.me/919990820830"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 text-xs bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
          >
            <span>💬</span>
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Messages Area */}
        <div className="h-[320px] overflow-y-auto p-4 space-y-4 bg-muted/20">
          {messages.map((message) => (
            <div key={message.id}>
              <div
                className={cn(
                  "flex gap-2",
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm",
                    message.sender === 'user'
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-card border border-border text-foreground rounded-bl-md shadow-sm"
                  )}
                >
                  <p className="whitespace-pre-line leading-relaxed">{message.text}</p>
                  <p
                    className={cn(
                      "text-[10px] mt-1.5",
                      message.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
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
                      key={option.label}
                      onClick={() => handleOptionClick(option)}
                      className={cn(
                        "px-3 py-1.5 text-xs border rounded-full transition-colors",
                        option.label.includes('Back')
                          ? "bg-muted text-muted-foreground border-border hover:bg-accent"
                          : "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                      )}
                    >
                      {option.icon && <span className="mr-1">{option.icon}</span>}
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
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
              placeholder="Type your question..."
              className="flex-1 px-4 py-2.5 text-sm bg-muted border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-muted-foreground"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="w-10 h-10 rounded-full p-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-[10px] text-muted-foreground text-center mt-2">
            💬 iTOP Services • Delhi NCR • +91 9990820830
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
