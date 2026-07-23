export type Plan = {
  id: "starter" | "professional" | "business" | "enterprise";
  name: string;
  monthly: number;
  tagline: string;
  highlight?: boolean;
  includedModules: string[]; // module ids included at no extra cost
  features: string[];
};

export type Module = {
  id: string;
  name: string;
  description: string;
  price: number; // monthly USD
  category: "Operations" | "Finance" | "Communication" | "Growth" | "Platform";
  icon: string; // lucide icon key
};

export const MANDATORY_MODULES = [
  "Authentication",
  "Users",
  "Roles",
  "Settings",
  "Notifications",
  "Profile",
];

export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    monthly: 49,
    tagline: "For small teams getting organized.",
    includedModules: ["contractor", "workorders", "messaging"],
    features: ["Up to 10 users", "5 GB storage", "Email support"],
  },
  {
    id: "professional",
    name: "Professional",
    monthly: 149,
    tagline: "Growing contractor operations.",
    highlight: true,
    includedModules: [
      "contractor",
      "vendor",
      "workorders",
      "invoices",
      "messaging",
      "agreements",
      "forms",
    ],
    features: ["Up to 50 users", "50 GB storage", "Priority support", "Automations"],
  },
  {
    id: "business",
    name: "Business",
    monthly: 349,
    tagline: "Multi-team businesses at scale.",
    includedModules: [
      "contractor",
      "vendor",
      "workorders",
      "invoices",
      "payments",
      "messaging",
      "agreements",
      "forms",
      "workflow",
      "reports",
      "analytics",
      "teams",
    ],
    features: ["Up to 200 users", "500 GB storage", "24/7 support", "Advanced automation"],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthly: 899,
    tagline: "Custom, SSO, dedicated infra.",
    includedModules: [], // enterprise gets all — handled in UI
    features: ["Unlimited users", "Unlimited storage", "SLA & DPA", "Dedicated CSM"],
  },
];

export const MODULES: Module[] = [
  { id: "contractor", name: "Contractor Management", description: "Onboard, verify, and manage 1099 contractors.", price: 29, category: "Operations", icon: "HardHat" },
  { id: "vendor", name: "Vendor Management", description: "Track vendors, POs, and compliance docs.", price: 25, category: "Operations", icon: "Building2" },
  { id: "workflow", name: "Workflow Builder", description: "Drag-and-drop automated processes.", price: 39, category: "Operations", icon: "Workflow" },
  { id: "forms", name: "Dynamic Forms", description: "Create custom intake and data forms.", price: 19, category: "Operations", icon: "FormInput" },
  { id: "workorders", name: "Work Orders", description: "Dispatch, assign, and track jobs.", price: 35, category: "Operations", icon: "ClipboardList" },
  { id: "accounts", name: "Accounts", description: "Client and company account records.", price: 22, category: "Operations", icon: "Users" },
  { id: "messaging", name: "Messaging", description: "In-app chat and channels.", price: 15, category: "Communication" , icon: "MessageSquare" },
  { id: "agreements", name: "Agreement Management", description: "Contracts and e-signatures.", price: 29, category: "Operations", icon: "FileSignature" },
  { id: "invoices", name: "Invoice Management", description: "Create, send, and track invoices.", price: 25, category: "Finance", icon: "FileText" },
  { id: "payments", name: "Payments (Stripe)", description: "Accept payments and payouts.", price: 39, category: "Finance", icon: "CreditCard" },
  { id: "reports", name: "Reports", description: "Scheduled operational reports.", price: 19, category: "Growth", icon: "BarChart3" },
  { id: "analytics", name: "Analytics", description: "Real-time metrics and KPIs.", price: 29, category: "Growth", icon: "LineChart" },
  { id: "teams", name: "Teams", description: "Multi-team organization structure.", price: 18, category: "Operations", icon: "UsersRound" },
  { id: "email", name: "Email Templates", description: "Branded transactional emails.", price: 12, category: "Communication", icon: "Mail" },
  { id: "support", name: "Support Tickets", description: "Internal helpdesk & SLAs.", price: 22, category: "Communication", icon: "LifeBuoy" },
  { id: "calendar", name: "Availability Calendar", description: "Scheduling and availability.", price: 15, category: "Operations", icon: "Calendar" },
  { id: "portfolio", name: "Portfolio", description: "Contractor portfolios & assets.", price: 12, category: "Operations", icon: "Briefcase" },
  { id: "bank", name: "Bank Verification", description: "Verified ACH & payout accounts.", price: 19, category: "Finance", icon: "Landmark" },
  { id: "tax", name: "Tax Management", description: "W-9/1099 and tax docs.", price: 22, category: "Finance", icon: "Receipt" },
  { id: "api", name: "API Access", description: "REST + webhooks for developers.", price: 39, category: "Platform", icon: "Code2" },
  { id: "whitelabel", name: "White Label", description: "Your brand across the platform.", price: 99, category: "Platform", icon: "Palette" },
  { id: "branding", name: "Custom Branding", description: "Logos, colors, and domains.", price: 29, category: "Platform", icon: "Brush" },
  { id: "sso", name: "SSO (SAML/OIDC)", description: "Enterprise single sign-on.", price: 79, category: "Platform", icon: "KeyRound" },
  { id: "audit", name: "Audit Logs", description: "Immutable activity trails.", price: 25, category: "Platform", icon: "ShieldCheck" },
  { id: "perms", name: "Advanced Permissions", description: "Granular RBAC & policies.", price: 29, category: "Platform", icon: "Lock" },
];

export const INDUSTRIES = [
  { name: "Construction", icon: "HardHat" },
  { name: "Maintenance", icon: "Wrench" },
  { name: "Repair", icon: "Hammer" },
  { name: "Electrical", icon: "Zap" },
  { name: "HVAC", icon: "Fan" },
  { name: "Cleaning", icon: "Sparkles" },
  { name: "Logistics", icon: "Truck" },
  { name: "Manufacturing", icon: "Factory" },
  { name: "Healthcare", icon: "Stethoscope" },
  { name: "Field Service", icon: "Radio" },
  { name: "Security", icon: "Shield" },
  { name: "Real Estate", icon: "Home" },
];

export const TAX_RATE = 0.08;
export const ANNUAL_DISCOUNT = 0.2; // 20%
