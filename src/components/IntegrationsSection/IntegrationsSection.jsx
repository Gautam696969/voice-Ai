import React from "react";
import "./IntegrationsSection.css";

const integrations = [
  { name: "Twilio", src: "/logos/Twilio-Logo.wine.png" },
  { name: "Zapier", src: "/logos/Zapier.png" },
  { name: "Dialogflow", src: "/logos/Dialog.png" },
  { name: "OpenAI", src: "/logos/openai-icon.png" },
  { name: "AWS", src: "/logos/Amazon-Web-Services-AWS-Logo-Transparent-PNG.png" },
  { name: "Stripe", src: "/logos/Stripe-Logo.png" },
  { name: "GitHub", src: "/logos/GitHub-Logo.png" },
  { name: "Postman", src: "/logos/postman.png" },
  { name: "Webhooks", src: "/logos/webhook.png" },
];

const IntegrationsSection = () => {
  return (
    <section className="integrations dark">
      <h2 className="integrations-title">🔌 Integrations & Dev Tools</h2>
      <p className="integrations-subtext">
        Plug into your stack seamlessly.
      </p>

      <div className="integrations-grid">
        {integrations.map((tool, index) => (
          <div className="integration-card" key={index} title={tool.name}>
            <img src={tool.src} alt={tool.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntegrationsSection;
