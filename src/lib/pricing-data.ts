// Plans and modules themselves are managed in the CMS (see @/hooks/use-pricing).
// This file only holds presentation metadata the CMS doesn't store — icons and
// marketing copy — keyed by moduleId / plan name so it can be merged onto the
// live data.

export const DEFAULT_ICON = "Sparkles";

export const ICON_MAP: Record<string, string> = {
  contractor: "HardHat",
  vendor: "Building2",
  workflow: "Workflow",
  forms: "FormInput",
  workorders: "ClipboardList",
  accounts: "Users",
  messaging: "MessageSquare",
  agreements: "FileSignature",
  invoices: "FileText",
  payments: "CreditCard",
  reports: "BarChart3",
  analytics: "LineChart",
  teams: "UsersRound",
  email: "Mail",
  support: "LifeBuoy",
  calendar: "Calendar",
  portfolio: "Briefcase",
  bank: "Landmark",
  tax: "Receipt",
  api: "Code2",
  whitelabel: "Palette",
  branding: "Brush",
  sso: "KeyRound",
  audit: "ShieldCheck",
  perms: "Lock",
};

export const PLAN_META: Record<string, { tagline: string }> = {
  starter: { tagline: "For small teams getting organized." },
  professional: { tagline: "Growing contractor operations." },
  business: { tagline: "Multi-team businesses at scale." },
  enterprise: { tagline: "Custom, SSO, dedicated infra." },
};

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
