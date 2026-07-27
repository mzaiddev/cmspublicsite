import { t as Route } from "./register-CAwE3FK6.js";
import { n as cn, t as Button } from "./button-DRsC1qZi.js";
import { a as ANNUAL_DISCOUNT, i as startCheckout, n as usePricing, r as finalizeCheckout, s as TAX_RATE, t as Checkbox } from "./checkbox-Dxts0Aor.js";
import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { AlertCircle, ArrowLeft, ArrowRight, Building2, Check, ChevronDown, ChevronUp, CreditCard, Loader2, Receipt, ShieldCheck, Sparkles, UserRound } from "lucide-react";
import { cva } from "class-variance-authority";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as SelectPrimitive from "@radix-ui/react-select";
//#region src/components/ui/input.tsx
var Input = React.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ jsx("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
//#endregion
//#region src/components/ui/label.tsx
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = LabelPrimitive.Root.displayName;
//#endregion
//#region src/components/ui/select.tsx
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SelectPrimitive.Trigger, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ jsx(SelectPrimitive.Icon, {
		asChild: true,
		children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.ScrollUpButton, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.ScrollDownButton, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(SelectPrimitive.Content, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ jsx(SelectScrollUpButton, {}),
		/* @__PURE__ */ jsx(SelectPrimitive.Viewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ jsx(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Label, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SelectPrimitive.Item, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ jsx("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })]
}));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Separator, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
//#endregion
//#region src/routes/register.tsx?tsr-split=component
var STRIPE_PUBLISHABLE_KEY = "pk_test_...";
var stripePromise = typeof window !== "undefined" && STRIPE_PUBLISHABLE_KEY ? loadStripe(STRIPE_PUBLISHABLE_KEY) : null;
var PENDING_SIGNUP_STORAGE_KEY = "contractly_pending_signup_id";
var currency = (n) => new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	maximumFractionDigits: 0
}).format(n);
var STEPS = [
	{
		key: "company",
		title: "Company",
		icon: Building2
	},
	{
		key: "owner",
		title: "Owner",
		icon: UserRound
	},
	{
		key: "summary",
		title: "Summary",
		icon: Receipt
	},
	{
		key: "review",
		title: "Review",
		icon: ShieldCheck
	},
	{
		key: "payment",
		title: "Payment",
		icon: CreditCard
	}
];
function RegisterPage() {
	const { plan, billing, modules } = Route.useSearch();
	const navigate = useNavigate();
	const [step, setStep] = useState(0);
	const { plans, modules: allModules, isAllInclusive, isLoading: pricingLoading } = usePricing();
	const [company, setCompany] = useState({
		name: "",
		type: "LLC",
		industry: "Construction",
		website: "",
		country: "United States",
		city: "",
		address: "",
		phone: "",
		email: "",
		timezone: "America/New_York"
	});
	const [owner, setOwner] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		password: "",
		confirm: ""
	});
	const [couponCode, setCouponCode] = useState("");
	const [terms, setTerms] = useState(false);
	const [checkoutLoading, setCheckoutLoading] = useState(false);
	const [pendingSignupId, setPendingSignupId] = useState(null);
	const [clientSecret, setClientSecret] = useState(null);
	const [submitting, setSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState(null);
	const [resumingRedirect, setResumingRedirect] = useState(false);
	const selectedPlan = plans.find((p) => p.id === plan) ?? plans[0];
	const selectedModuleIds = modules ? modules.split(",").filter(Boolean) : [];
	const yearly = billing === "yearly";
	const summary = useMemo(() => {
		if (!selectedPlan) return {
			addons: [],
			addonMonthly: 0,
			baseMonthly: 0,
			subMonthly: 0,
			monthlyBilled: 0,
			preTax: 0,
			tax: 0,
			total: 0
		};
		const allInclusive = isAllInclusive(selectedPlan);
		const addons = allModules.filter((m) => selectedModuleIds.includes(m.id) && !allInclusive && !selectedPlan.includedModules.includes(m.id));
		const addonMonthly = addons.reduce((s, m) => s + m.price, 0);
		const subMonthly = selectedPlan.monthly + addonMonthly;
		const monthlyBilled = yearly ? subMonthly * (1 - ANNUAL_DISCOUNT) : subMonthly;
		const preTax = yearly ? monthlyBilled * 12 : monthlyBilled;
		const tax = preTax * TAX_RATE;
		return {
			addons,
			addonMonthly,
			baseMonthly: selectedPlan.monthly,
			subMonthly,
			monthlyBilled,
			preTax,
			tax,
			total: preTax + tax
		};
	}, [
		selectedPlan,
		allModules,
		selectedModuleIds,
		yearly
	]);
	const goToSuccess = (result) => {
		sessionStorage.removeItem(PENDING_SIGNUP_STORAGE_KEY);
		navigate({
			to: "/success",
			search: {
				plan: result.client.plan,
				subdomain: result.client.subdomain
			}
		});
	};
	useEffect(() => {
		const redirectStatus = new URLSearchParams(window.location.search).get("redirect_status");
		const storedId = sessionStorage.getItem(PENDING_SIGNUP_STORAGE_KEY);
		if (!redirectStatus || !storedId) return;
		setResumingRedirect(true);
		if (redirectStatus === "succeeded") finalizeCheckout(storedId).then(goToSuccess).catch((err) => {
			sessionStorage.removeItem(PENDING_SIGNUP_STORAGE_KEY);
			setSubmitError(err instanceof Error ? err.message : "We couldn't finish setting up your workspace.");
			setResumingRedirect(false);
		});
		else {
			sessionStorage.removeItem(PENDING_SIGNUP_STORAGE_KEY);
			setSubmitError("Payment wasn't completed. Please try again.");
			setResumingRedirect(false);
		}
	}, []);
	const goNext = async () => {
		if (step === STEPS.length - 2 && !pendingSignupId) {
			setCheckoutLoading(true);
			setSubmitError(null);
			try {
				const result = await startCheckout({
					companyName: company.name,
					ownerName: `${owner.firstName} ${owner.lastName}`.trim(),
					ownerEmail: owner.email,
					ownerPassword: owner.password,
					phone: owner.phone || company.phone,
					planId: selectedPlan.id,
					billingCycle: yearly ? "yearly" : "monthly",
					addonModuleIds: summary.addons.map((m) => m.id),
					couponCode: couponCode || void 0
				});
				setPendingSignupId(result.pendingSignupId);
				setClientSecret(result.clientSecret);
			} catch (err) {
				setSubmitError(err instanceof Error ? err.message : "Couldn't start checkout. Please try again.");
				setCheckoutLoading(false);
				return;
			}
			setCheckoutLoading(false);
		}
		setStep((s) => Math.min(s + 1, STEPS.length - 1));
	};
	const back = () => setStep((s) => Math.max(s - 1, 0));
	const canProceed = () => {
		if (step === 0) return company.name && company.email && company.country;
		if (step === 1) return owner.firstName && owner.email && owner.password && owner.password === owner.confirm;
		if (step === 3) return terms;
		return true;
	};
	if (pricingLoading || !selectedPlan || resumingRedirect) return /* @__PURE__ */ jsx("div", {
		className: "grid min-h-screen place-items-center bg-hero",
		children: /* @__PURE__ */ jsx(Loader2, { className: "h-6 w-6 animate-spin text-muted-foreground" })
	});
	const isLastStep = step === STEPS.length - 1;
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-hero",
		children: [/* @__PURE__ */ jsx("header", {
			className: "border-b glass",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
				children: [/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("span", {
						className: "grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-primary-foreground shadow-glow",
						children: /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" })
					}), /* @__PURE__ */ jsx("span", {
						className: "text-base font-bold",
						children: "Contractly"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "text-sm text-muted-foreground",
					children: ["Already have an account? ", /* @__PURE__ */ jsx("a", {
						href: "#",
						className: "font-medium text-foreground hover:underline",
						children: "Log in"
					})]
				})]
			})
		}), /* @__PURE__ */ jsxs("main", {
			className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-14",
			children: [/* @__PURE__ */ jsx("div", {
				className: "mb-10",
				children: /* @__PURE__ */ jsx("div", {
					className: "flex items-center justify-between gap-2 overflow-x-auto",
					children: STEPS.map((s, i) => {
						const Icon = s.icon;
						const done = i < step;
						const active = i === step;
						return /* @__PURE__ */ jsxs("div", {
							className: "flex flex-1 items-center gap-3",
							children: [/* @__PURE__ */ jsxs("div", {
								className: cn("flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors", active && "border-primary bg-primary/10 text-primary", done && "border-success bg-success/10 text-success", !active && !done && "text-muted-foreground"),
								children: [
									/* @__PURE__ */ jsx("span", {
										className: cn("grid h-5 w-5 place-items-center rounded-full text-[10px] font-bold", active && "bg-primary text-primary-foreground", done && "bg-success text-primary-foreground", !active && !done && "bg-muted"),
										children: done ? /* @__PURE__ */ jsx(Check, { className: "h-3 w-3" }) : i + 1
									}),
									/* @__PURE__ */ jsx(Icon, { className: "hidden h-3.5 w-3.5 sm:block" }),
									/* @__PURE__ */ jsx("span", {
										className: "hidden sm:inline",
										children: s.title
									})
								]
							}), i < STEPS.length - 1 && /* @__PURE__ */ jsx("div", { className: cn("h-px flex-1", done ? "bg-success" : "bg-border") })]
						}, s.key);
					})
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid gap-8 lg:grid-cols-[1fr_360px]",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "rounded-3xl border bg-card p-6 shadow-card sm:p-8",
					children: [
						step === 0 && /* @__PURE__ */ jsx(StepShell, {
							title: "Tell us about your company",
							desc: "This becomes your workspace name and profile.",
							children: /* @__PURE__ */ jsxs("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ jsx(Field, {
										label: "Company name",
										required: true,
										children: /* @__PURE__ */ jsx(Input, {
											value: company.name,
											onChange: (e) => setCompany({
												...company,
												name: e.target.value
											}),
											placeholder: "Acme Construction"
										})
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Business type",
										children: /* @__PURE__ */ jsxs(Select, {
											value: company.type,
											onValueChange: (v) => setCompany({
												...company,
												type: v
											}),
											children: [/* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }), /* @__PURE__ */ jsx(SelectContent, { children: [
												"LLC",
												"S-Corp",
												"C-Corp",
												"Sole Proprietor",
												"Partnership"
											].map((x) => /* @__PURE__ */ jsx(SelectItem, {
												value: x,
												children: x
											}, x)) })]
										})
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Industry",
										children: /* @__PURE__ */ jsxs(Select, {
											value: company.industry,
											onValueChange: (v) => setCompany({
												...company,
												industry: v
											}),
											children: [/* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }), /* @__PURE__ */ jsx(SelectContent, { children: [
												"Construction",
												"HVAC",
												"Electrical",
												"Cleaning",
												"Logistics",
												"Manufacturing",
												"Healthcare",
												"Real Estate",
												"Field Service",
												"Security",
												"Other"
											].map((x) => /* @__PURE__ */ jsx(SelectItem, {
												value: x,
												children: x
											}, x)) })]
										})
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Website",
										children: /* @__PURE__ */ jsx(Input, {
											value: company.website,
											onChange: (e) => setCompany({
												...company,
												website: e.target.value
											}),
											placeholder: "acme.com"
										})
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Country",
										required: true,
										children: /* @__PURE__ */ jsx(Input, {
											value: company.country,
											onChange: (e) => setCompany({
												...company,
												country: e.target.value
											})
										})
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "City",
										children: /* @__PURE__ */ jsx(Input, {
											value: company.city,
											onChange: (e) => setCompany({
												...company,
												city: e.target.value
											})
										})
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Address",
										className: "sm:col-span-2",
										children: /* @__PURE__ */ jsx(Input, {
											value: company.address,
											onChange: (e) => setCompany({
												...company,
												address: e.target.value
											}),
											placeholder: "123 Main St"
										})
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Phone",
										children: /* @__PURE__ */ jsx(Input, {
											value: company.phone,
											onChange: (e) => setCompany({
												...company,
												phone: e.target.value
											}),
											placeholder: "+1 555 555 5555"
										})
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Company email",
										required: true,
										children: /* @__PURE__ */ jsx(Input, {
											type: "email",
											value: company.email,
											onChange: (e) => setCompany({
												...company,
												email: e.target.value
											}),
											placeholder: "hello@acme.com"
										})
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Timezone",
										children: /* @__PURE__ */ jsxs(Select, {
											value: company.timezone,
											onValueChange: (v) => setCompany({
												...company,
												timezone: v
											}),
											children: [/* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }), /* @__PURE__ */ jsx(SelectContent, { children: [
												"America/New_York",
												"America/Chicago",
												"America/Denver",
												"America/Los_Angeles",
												"Europe/London",
												"Europe/Berlin",
												"Asia/Singapore"
											].map((x) => /* @__PURE__ */ jsx(SelectItem, {
												value: x,
												children: x
											}, x)) })]
										})
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Company logo",
										children: /* @__PURE__ */ jsx(Input, { type: "file" })
									})
								]
							})
						}),
						step === 1 && /* @__PURE__ */ jsx(StepShell, {
							title: "Your admin account",
							desc: "This account will be the workspace owner.",
							children: /* @__PURE__ */ jsxs("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ jsx(Field, {
										label: "First name",
										required: true,
										children: /* @__PURE__ */ jsx(Input, {
											value: owner.firstName,
											onChange: (e) => setOwner({
												...owner,
												firstName: e.target.value
											})
										})
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Last name",
										children: /* @__PURE__ */ jsx(Input, {
											value: owner.lastName,
											onChange: (e) => setOwner({
												...owner,
												lastName: e.target.value
											})
										})
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Email",
										required: true,
										children: /* @__PURE__ */ jsx(Input, {
											type: "email",
											value: owner.email,
											onChange: (e) => setOwner({
												...owner,
												email: e.target.value
											})
										})
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Phone",
										children: /* @__PURE__ */ jsx(Input, {
											value: owner.phone,
											onChange: (e) => setOwner({
												...owner,
												phone: e.target.value
											})
										})
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Password",
										required: true,
										children: /* @__PURE__ */ jsx(Input, {
											type: "password",
											value: owner.password,
											onChange: (e) => setOwner({
												...owner,
												password: e.target.value
											})
										})
									}),
									/* @__PURE__ */ jsxs(Field, {
										label: "Confirm password",
										required: true,
										children: [/* @__PURE__ */ jsx(Input, {
											type: "password",
											value: owner.confirm,
											onChange: (e) => setOwner({
												...owner,
												confirm: e.target.value
											})
										}), owner.confirm && owner.confirm !== owner.password && /* @__PURE__ */ jsx("p", {
											className: "mt-1 text-xs text-destructive",
											children: "Passwords don't match."
										})]
									})
								]
							})
						}),
						step === 2 && /* @__PURE__ */ jsxs(StepShell, {
							title: "Subscription summary",
							desc: "Confirm what you selected on the pricing page.",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-2xl border bg-secondary/40 p-5",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-baseline justify-between",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "text-lg font-semibold",
												children: [selectedPlan.name, " plan"]
											}), /* @__PURE__ */ jsx("div", {
												className: "text-xs text-muted-foreground",
												children: yearly ? "Billed yearly" : "Billed monthly"
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mt-4 space-y-2 text-sm",
											children: [
												/* @__PURE__ */ jsx(SummaryRow, {
													label: "Base plan",
													value: `${currency(summary.baseMonthly)}/mo`
												}),
												/* @__PURE__ */ jsx(SummaryRow, {
													label: `Modules (${summary.addons.length})`,
													value: `${currency(summary.addonMonthly)}/mo`
												}),
												yearly && /* @__PURE__ */ jsx(SummaryRow, {
													accent: true,
													label: "Annual discount",
													value: `− 20%`
												}),
												/* @__PURE__ */ jsx(SummaryRow, {
													label: `Tax (${Math.round(.08 * 100)}%)`,
													value: currency(summary.tax)
												})
											]
										}),
										/* @__PURE__ */ jsx("div", { className: "my-4 h-px bg-border" }),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-baseline justify-between",
											children: [/* @__PURE__ */ jsxs("span", {
												className: "text-sm text-muted-foreground",
												children: ["Total ", yearly ? "yearly" : "monthly"]
											}), /* @__PURE__ */ jsx("span", {
												className: "text-2xl font-bold",
												children: currency(summary.total)
											})]
										})
									]
								}),
								summary.addons.length > 0 && /* @__PURE__ */ jsxs("div", {
									className: "mt-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "mb-2 text-sm font-semibold",
										children: "Selected modules"
									}), /* @__PURE__ */ jsx("div", {
										className: "flex flex-wrap gap-2",
										children: summary.addons.map((m) => /* @__PURE__ */ jsxs("span", {
											className: "rounded-full border bg-card px-3 py-1 text-xs",
											children: [
												m.name,
												" · +",
												currency(m.price),
												"/mo"
											]
										}, m.id))
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-4 max-w-xs",
									children: [/* @__PURE__ */ jsx(Field, {
										label: "Coupon code",
										children: /* @__PURE__ */ jsx(Input, {
											value: couponCode,
											onChange: (e) => setCouponCode(e.target.value),
											placeholder: "Optional"
										})
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: "Discount is applied at the payment step."
									})]
								})
							]
						}),
						step === 3 && /* @__PURE__ */ jsxs(StepShell, {
							title: "Review everything",
							desc: "One last look before you pay and create your workspace.",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "grid gap-4",
								children: [
									/* @__PURE__ */ jsxs(ReviewGroup, {
										title: "Company",
										children: [
											/* @__PURE__ */ jsx(ReviewItem, {
												k: "Name",
												v: company.name || "—"
											}),
											/* @__PURE__ */ jsx(ReviewItem, {
												k: "Industry",
												v: company.industry
											}),
											/* @__PURE__ */ jsx(ReviewItem, {
												k: "Country",
												v: company.country
											}),
											/* @__PURE__ */ jsx(ReviewItem, {
												k: "Email",
												v: company.email || "—"
											})
										]
									}),
									/* @__PURE__ */ jsxs(ReviewGroup, {
										title: "Owner",
										children: [/* @__PURE__ */ jsx(ReviewItem, {
											k: "Name",
											v: `${owner.firstName} ${owner.lastName}`.trim() || "—"
										}), /* @__PURE__ */ jsx(ReviewItem, {
											k: "Email",
											v: owner.email || "—"
										})]
									}),
									/* @__PURE__ */ jsxs(ReviewGroup, {
										title: "Subscription",
										children: [
											/* @__PURE__ */ jsx(ReviewItem, {
												k: "Plan",
												v: `${selectedPlan.name} (${yearly ? "yearly" : "monthly"})`
											}),
											/* @__PURE__ */ jsx(ReviewItem, {
												k: "Modules",
												v: summary.addons.length ? summary.addons.map((m) => m.name).join(", ") : "None"
											}),
											/* @__PURE__ */ jsx(ReviewItem, {
												k: "Total",
												v: currency(summary.total)
											})
										]
									})
								]
							}), /* @__PURE__ */ jsxs("label", {
								className: "mt-6 flex items-start gap-2 text-sm",
								children: [/* @__PURE__ */ jsx(Checkbox, {
									checked: terms,
									onCheckedChange: (v) => setTerms(!!v),
									className: "mt-0.5"
								}), /* @__PURE__ */ jsxs("span", { children: [
									"I agree to Contractly's ",
									/* @__PURE__ */ jsx("a", {
										className: "text-primary underline",
										href: "#",
										children: "Terms"
									}),
									" and ",
									/* @__PURE__ */ jsx("a", {
										className: "text-primary underline",
										href: "#",
										children: "Privacy Policy"
									}),
									"."
								] })]
							})]
						}),
						step === 4 && /* @__PURE__ */ jsxs(StepShell, {
							title: "Payment",
							desc: "Secure checkout powered by Stripe.",
							children: [checkoutLoading ? /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 py-8 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }), " Setting up secure payment…"]
							}) : !pendingSignupId ? /* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive",
								children: [/* @__PURE__ */ jsx(AlertCircle, { className: "mt-0.5 h-4 w-4 shrink-0" }), " Couldn't start checkout. Go back and try again."]
							}) : clientSecret ? /* @__PURE__ */ jsx(Elements, {
								stripe: stripePromise,
								options: { clientSecret },
								children: /* @__PURE__ */ jsx(CardPaymentStep, {
									pendingSignupId,
									total: summary.total,
									billed: yearly ? "yearly" : "monthly",
									submitting,
									setSubmitting,
									setSubmitError,
									onPaid: goToSuccess
								})
							}) : /* @__PURE__ */ jsx(NoChargeConfirmStep, {
								pendingSignupId,
								submitting,
								setSubmitting,
								setSubmitError,
								onPaid: goToSuccess
							}), submitError && /* @__PURE__ */ jsxs("div", {
								className: "mt-4 flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive",
								children: [
									/* @__PURE__ */ jsx(AlertCircle, { className: "mt-0.5 h-4 w-4 shrink-0" }),
									" ",
									submitError
								]
							})]
						}),
						!isLastStep && /* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex items-center justify-between",
							children: [/* @__PURE__ */ jsxs(Button, {
								variant: "ghost",
								onClick: back,
								disabled: step === 0,
								children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "mr-1 h-4 w-4" }), " Back"]
							}), /* @__PURE__ */ jsxs(Button, {
								onClick: goNext,
								disabled: !canProceed() || checkoutLoading,
								className: "bg-brand-gradient text-primary-foreground shadow-glow",
								children: [
									checkoutLoading ? /* @__PURE__ */ jsx(Loader2, { className: "mr-1 h-4 w-4 animate-spin" }) : null,
									"Continue ",
									/* @__PURE__ */ jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
								]
							})]
						}),
						isLastStep && /* @__PURE__ */ jsx("div", {
							className: "mt-8",
							children: /* @__PURE__ */ jsxs(Button, {
								variant: "ghost",
								onClick: back,
								disabled: submitting,
								children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "mr-1 h-4 w-4" }), " Back"]
							})
						})
					]
				}), /* @__PURE__ */ jsxs("aside", {
					className: "self-start rounded-3xl border bg-card p-6 shadow-card lg:sticky lg:top-24",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
							children: "Your order"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-1 text-xl font-bold",
							children: selectedPlan.name
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "text-xs text-muted-foreground",
							children: [yearly ? "Yearly" : "Monthly", " billing"]
						}),
						/* @__PURE__ */ jsx("div", { className: "my-4 h-px bg-border" }),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2 text-sm",
							children: [
								/* @__PURE__ */ jsx(SummaryRow, {
									label: "Base",
									value: `${currency(summary.baseMonthly)}/mo`
								}),
								/* @__PURE__ */ jsx(SummaryRow, {
									label: `Modules (${summary.addons.length})`,
									value: `${currency(summary.addonMonthly)}/mo`
								}),
								yearly && /* @__PURE__ */ jsx(SummaryRow, {
									accent: true,
									label: "Discount",
									value: "− 20%"
								}),
								/* @__PURE__ */ jsx(SummaryRow, {
									label: "Tax",
									value: currency(summary.tax)
								})
							]
						}),
						/* @__PURE__ */ jsx("div", { className: "my-4 h-px bg-border" }),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-baseline justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-sm text-muted-foreground",
								children: "Total"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-2xl font-bold",
								children: currency(summary.total)
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-xs text-muted-foreground",
							children: "Secure Stripe checkout. Cancel or change modules anytime."
						})
					]
				})]
			})]
		})]
	});
}
/** Payment step when there's a real amount due — collects card details via Stripe Elements. */
function CardPaymentStep({ pendingSignupId, total, billed, submitting, setSubmitting, setSubmitError, onPaid }) {
	const stripe = useStripe();
	const elements = useElements();
	const handlePay = async () => {
		if (!stripe || !elements || submitting) return;
		setSubmitting(true);
		setSubmitError(null);
		try {
			sessionStorage.setItem(PENDING_SIGNUP_STORAGE_KEY, pendingSignupId);
			const { error } = await stripe.confirmPayment({
				elements,
				confirmParams: { return_url: window.location.href },
				redirect: "if_required"
			});
			if (error) throw new Error(error.message || "Payment failed.");
			const result = await finalizeCheckout(pendingSignupId);
			sessionStorage.removeItem(PENDING_SIGNUP_STORAGE_KEY);
			onPaid(result);
		} catch (err) {
			setSubmitError(err instanceof Error ? err.message : "Payment failed. Please try again.");
		} finally {
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(PaymentElement, {}), /* @__PURE__ */ jsxs(Button, {
		onClick: handlePay,
		disabled: !stripe || submitting,
		className: "mt-6 w-full bg-brand-gradient text-primary-foreground shadow-glow",
		size: "lg",
		children: [
			submitting ? /* @__PURE__ */ jsx(Loader2, { className: "mr-1 h-4 w-4 animate-spin" }) : null,
			"Pay ",
			currency(total),
			" ",
			billed === "yearly" ? "/yr" : "/mo",
			" & create workspace"
		]
	})] });
}
/** Payment step when nothing is due (e.g. a 100%-off coupon) — no card needed. */
function NoChargeConfirmStep({ pendingSignupId, submitting, setSubmitting, setSubmitError, onPaid }) {
	const handleConfirm = async () => {
		if (submitting) return;
		setSubmitting(true);
		setSubmitError(null);
		try {
			onPaid(await finalizeCheckout(pendingSignupId));
		} catch (err) {
			setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
		} finally {
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
		className: "rounded-xl border bg-secondary/40 p-4 text-sm text-muted-foreground",
		children: "Nothing due right now — your discount covers this invoice in full."
	}), /* @__PURE__ */ jsxs(Button, {
		onClick: handleConfirm,
		disabled: submitting,
		className: "mt-6 w-full bg-brand-gradient text-primary-foreground shadow-glow",
		size: "lg",
		children: [
			submitting ? /* @__PURE__ */ jsx(Loader2, { className: "mr-1 h-4 w-4 animate-spin" }) : null,
			"Create workspace ",
			/* @__PURE__ */ jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
		]
	})] });
}
function StepShell({ title, desc, children }) {
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx("h2", {
			className: "text-2xl font-bold tracking-tight",
			children: title
		}),
		/* @__PURE__ */ jsx("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: desc
		}),
		/* @__PURE__ */ jsx("div", {
			className: "mt-6",
			children
		})
	] });
}
function Field({ label, required, className, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className,
		children: [/* @__PURE__ */ jsxs(Label, {
			className: "mb-1.5 flex text-xs font-medium text-muted-foreground",
			children: [label, required && /* @__PURE__ */ jsx("span", {
				className: "ml-0.5 text-destructive",
				children: "*"
			})]
		}), children]
	});
}
function SummaryRow({ label, value, accent }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsx("span", {
			className: cn("font-medium tabular-nums", accent && "text-success"),
			children: value
		})]
	});
}
function ReviewGroup({ title, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-2xl border bg-secondary/40 p-4",
		children: [/* @__PURE__ */ jsx("div", {
			className: "mb-2 text-sm font-semibold",
			children: title
		}), /* @__PURE__ */ jsx("dl", {
			className: "grid gap-1.5 text-sm",
			children
		})]
	});
}
function ReviewItem({ k, v }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex justify-between gap-4",
		children: [/* @__PURE__ */ jsx("dt", {
			className: "text-muted-foreground",
			children: k
		}), /* @__PURE__ */ jsx("dd", {
			className: "text-right font-medium",
			children: v
		})]
	});
}
//#endregion
export { RegisterPage as component };
