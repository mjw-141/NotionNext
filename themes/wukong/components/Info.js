import React from 'react';

const Info = () => {
  const shopLinks = [
    { name: "Phones", url: "/phones" },
    { name: "Tablets", url: "/tablets" },
    { name: "Watches", url: "/watches" },
    { name: "Mobile Accessories", url: "/mobile-accessories" },
    { name: "Mobile Audio", url: "/mobile-audio" },
    { name: "TV & Home Theater", url: "/tv-home-theater" },
    { name: "Computing", url: "/computing" },
    { name: "Monitors", url: "/monitors" },
    { name: "Memory & Storage", url: "/memory-storage" },
    { name: "Home Appliances", url: "/home-appliances" },
    { name: "Smart Home", url: "/smart-home" },
    { name: "Samsung Experience Stores", url: "/samsung-experience-stores" },
    { name: "Apps & Services", url: "/apps-services" },
    { name: "Shop Certified Re-Newed", url: "/shop-certified-renewed" },
    { name: "Samsung Authorized Reseller Program", url: "/reseller-program" }
  ];

  const supportLinks = [
    { name: "Chat with Us", url: "/chat-with-us" },
    { name: "Product Support", url: "/product-support" },
    { name: "Order Support", url: "/order-support" },
    { name: "Your Account", url: "/your-account" },
    { name: "Register Your Product", url: "/register-product" },
    { name: "Request a Repair", url: "/request-repair" },
    { name: "Contact Us", url: "/contact" },
    { name: "Samsung Community", url: "/community" },
    { name: "Give Feedback", url: "/feedback" },
    { name: "Slide-in Electric Range Recall", url: "/range-recall" }
  ];

  const offersLinks = [
    { name: "Offers", url: "/offers" },
    { name: "Samsung Rewards", url: "/rewards" },
    { name: "Referral Program", url: "/referral" },
    { name: "Education Offers Program", url: "/education-offers" },
    { name: "Government Offers Program", url: "/government-offers" },
    { name: "Military Offers Program", url: "/military-offers" },
    { name: "Employee Offers Program", url: "/employee-offers" },
    { name: "First Responders Offers Program", url: "/first-responders" },
    { name: "Business Offers Program", url: "/business-offers" }
  ];

  const sustainabilityLinks = [
    { name: "Overview", url: "/overview" },
    { name: "Environment", url: "/environment" },
    { name: "Digital Responsibility", url: "/digital-responsibility" },
    { name: "Security and Privacy", url: "/security-privacy" },
    { name: "Accessibility", url: "/accessibility" },
    { name: "Labor & Human Rights", url: "/labor-rights" },
    { name: "Diversity, Equity, Inclusion", url: "/diversity-equity-inclusion" },
    { name: "Sustainable Supply Chain", url: "/supply-chain" },
    { name: "Corporate Citizenship", url: "/corporate-citizenship" },
    { name: "Corporate Sustainability", url: "/corporate-sustainability" }
  ];

  const aboutLinks = [
    { name: "Leadership & Mission", url: "/leadership-mission" },
    { name: "Our Business", url: "/our-business" },
    { name: "Brand Identity", url: "/brand-identity" },
    { name: "Careers", url: "/careers" },
    { name: "Investor Relations", url: "/investor-relations" },
    { name: "Newsroom", url: "/newsroom" },
    { name: "Ethics", url: "/ethics" },
    { name: "Samsung Design", url: "/samsung-design" }
  ];

  const renderLinks = (title, links) => (
    <div className="mb-8">
      <h3 className="font-bold text-lg mb-4 dark:text-white">{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mb-2">
            <a href={link.url} className="text-gray-300 hover:text-gray-100">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="bg-gray-10 p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {renderLinks("SHOP", shopLinks)}
        {renderLinks("SUPPORT", supportLinks)}
        {renderLinks("OFFERS", offersLinks)}
        {renderLinks("SUSTAINABILITY", sustainabilityLinks)}
        {renderLinks("ABOUT US", aboutLinks)}
      </div>
    </div>
  );
};

export default Info;
