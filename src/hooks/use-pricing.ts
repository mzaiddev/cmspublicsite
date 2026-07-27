import { useQuery } from "@tanstack/react-query";
import { fetchPricing, type ModuleCategory } from "@/lib/api";
import { DEFAULT_ICON, ICON_MAP, PLAN_META } from "@/lib/pricing-data";

export type UiModule = {
  id: string; // moduleId
  name: string;
  description: string;
  price: number;
  category: ModuleCategory;
  icon: string;
  isCore: boolean;
};

export type UiPlan = {
  id: string; // Mongo _id
  name: string;
  monthly: number;
  yearly: number;
  tagline: string;
  highlight: boolean;
  includedModules: string[]; // moduleIds bundled free
  addonModules: string[]; // moduleIds this plan can sell as paid add-ons
  features: string[];
};

/**
 * Live plan/module catalog from the CMS, reshaped for the landing page UI.
 * Icons and taglines aren't stored in the CMS, so they're merged in from
 * static presentation metadata keyed by moduleId / plan name.
 */
export function usePricing() {
  const query = useQuery({
    queryKey: ["public-pricing"],
    queryFn: fetchPricing,
    staleTime: 60_000,
  });

  const modules: UiModule[] = (query.data?.modules ?? [])
    .filter((m) => !m.isCore)
    .map((m) => ({
      id: m.moduleId,
      name: m.name,
      description: m.description ?? "",
      price: m.price,
      category: m.category,
      icon: ICON_MAP[m.moduleId] ?? DEFAULT_ICON,
      isCore: m.isCore,
    }));

  const coreModuleNames = (query.data?.modules ?? [])
    .filter((m) => m.isCore)
    .map((m) => m.name);

  const allModuleIds = modules.map((m) => m.id);

  const plans: UiPlan[] = (query.data?.plans ?? []).map((p) => ({
    id: p._id,
    name: p.name,
    monthly: p.monthlyPrice,
    yearly: p.yearlyPrice,
    tagline: p.description || PLAN_META[p.name.toLowerCase()]?.tagline || "",
    highlight: p.isPopular,
    includedModules: p.defaultModules,
    addonModules: p.availableAddonModules,
    features: p.features,
  }));

  // A plan is "all-inclusive" once every sellable module is bundled free —
  // there's nothing left to offer as a paid add-on (e.g. an Enterprise tier).
  const isAllInclusive = (plan: UiPlan) =>
    allModuleIds.length > 0 && allModuleIds.every((id) => plan.includedModules.includes(id));

  return { ...query, plans, modules, coreModuleNames, isAllInclusive };
}
