  import { BarChart3, ShieldCheck, Wallet, ArrowUpDown } from "lucide-react";

  const features = [
    {
      title: "Advanced Trading Interface",
      description:
        "Professional-grade trading tools with real-time market data and advanced charting capabilities.",
      icon: <BarChart3 className="w-6 h-6" />,
      image: "/fit1.png",
      isActive: true,
    },
    {
      title: "Portfolio Management",
      description:
        "Track your investments and monitor your gains with our comprehensive portfolio dashboard.",
      icon: <Wallet className="w-6 h-6" />,
      image: "/fit3.png",
      isActive: false,
    },
    {
      title: "Security & Verification",
      description:
        "Industry-leading security measures with KYC verification process to protect your assets.",
      icon: <ShieldCheck className="w-6 h-6" />,
      image: "/fit4.png",
      isActive: false,
    },
    {
      title: "Performance Analytics",
      description:
        "Detailed analytics and credit scoring system to help you make informed decisions.",
      icon: <ArrowUpDown className="w-6 h-6" />,
      image: "/fit2.png",
      isActive: false,
    },
  ];

  const testimonials = [
    {
      name: "Vikram Kumar",
      role: "Retail Trader",
      image: "/av1.png",
      content:
        "As a day trader, execution speed and low costs are my top priorities. On JinahTrade, I get spreads starting from 0.0 pips and almost zero slippage, even during high-impact news events. The user interface is incredibly intuitive, making it seamless to navigate between different currency pairs under pressure.",
    },
    {
      name: "Melissa Schumer",
      role: "Market Analyst",
      image: "/av6.png",
      content:
        "The charting tools on this platform are top-tier. The integration of a real-time economic calendar and a comprehensive suite of technical indicators allows me to perform deep dives without ever leaving the app. Their 'Market Sentiment' feature provides a brilliant objective snapshot of current positioning.",
    },
    {
      name: "Joshua Clarke",
      role: "Algo Developer",
      image: "/av2.png",
      content:
        "It’s rare to find a platform that supports API integration as smoothly as JinahTrade. The latency is exceptionally low, which is vital for my High-Frequency Trading (HFT) strategies. Furthermore, the backtesting environment is robust, providing high-quality historical data that I can actually trust.",
    },
    {
      name: "Emily Zhang",
      role: "Risk Manager",
      image: "/av4.png",
      content:
        "Security of funds and risk mitigation are non-negotiable for us. I highly value the advanced Stop-Loss features and the highly responsive Margin Call alerts. The platform’s regulatory compliance and transparent transaction reporting provide the peace of mind necessary for professional fund management.",
    },
    {
      name: "James Rodriguez",
      role: "Forex Security Expert",
      image: "/av3.png",
      content:
        "I was particularly impressed by their DDoS mitigation strategies and the fact that client funds are kept in segregated Tier-1 bank accounts. For any trader concerned about data breaches or 'man-in-the-middle' attacks, this platform’s infrastructure is exceptionally resilient.",
    },
    {
      name: "Linda Kane",
      role: "Fund Manager",
      image: "/av5.png",
      content:
        "Managing multiple client accounts requires a stable and scalable environment. JinahTrade offers a sophisticated MAM/PAMM system that makes allocation effortless. The reporting tools are professional and detailed, which helps immensely when presenting performance results to my investors.",
    },
  ];

  const pricingData = [
    {
      _id: "p1",
      isPopular: false,
      name: "Basic",
      description: "Ideal for beginners just starting their trading journey.",
      price: "Rp.0",
      features: ["Market & limit order", "Standard charts", "Email support", "Basic analytics"]
    },
    {
      _id: "p2",
      isPopular: true, 
      name: "Pro",
      description: "Advanced tools for professional traders who need more.",
      price: "Rp.490k",
      features: ["Advanced trading tools", "Margin trading up to 10x", "Advanced technical analysis", "Priority support", "API access"]
    },
    {
      _id: "p3",
      isPopular: false,
      name: "Enterprise",
      description: "Institutional-grade features for heavy-duty trading.",
      price: "Custom",
      features: ["Custom Trading Solutions", "Unlimited Trading Volume", "OTC desk access", "Dedicated account manager", "Custom API integration", "24/7 priority support"]
    }
  ];

  const footerLinks = [
    {
      _id: "001",
      title: "Trading",
      links: ["Markets", "Trading Fees"],
    },
    {
      _id: "002",
      title: "Resources",
      links: ["Trading Guide", "Market Analysis"],
    },
    {
      _id: "003",
      title: "Legal",
      links: ["Privacy Policy", "Terms of Services"],
    },
  ];

  export { footerLinks, testimonials, features, pricingData };
