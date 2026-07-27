import { n as cn, t as Button } from "./button-DRsC1qZi.js";
import { a as ANNUAL_DISCOUNT, n as usePricing, o as INDUSTRIES, s as TAX_RATE, t as Checkbox } from "./checkbox-Dxts0Aor.js";
import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, BarChart3, Briefcase, Brush, Building2, Calendar, Check, ChevronDown, ChevronRight, ClipboardList, Code2, CreditCard, Factory, Fan, FileSignature, FileText, FormInput, Github, Hammer, HardHat, Home, KeyRound, Landmark, LifeBuoy, LineChart, Linkedin, Loader2, Lock, Mail, Menu, MessageSquare, Palette, Play, Radio, Receipt, Shield, ShieldCheck, Sparkles, Star, Stethoscope, Truck, Twitter, Users, UsersRound, Workflow, Wrench, X, Youtube, Zap } from "lucide-react";
import { cva } from "class-variance-authority";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as SwitchPrimitives from "@radix-ui/react-switch";
//#region src/components/ui/badge.tsx
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
//#endregion
//#region src/components/ui/accordion.tsx
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, {
	className: "flex",
	children: /* @__PURE__ */ jsxs(AccordionPrimitive.Trigger, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Content, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ jsx("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
//#endregion
//#region src/components/ui/tabs.tsx
var Tabs = TabsPrimitive.Root;
var TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(TabsPrimitive.List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(TabsPrimitive.Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(TabsPrimitive.Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = TabsPrimitive.Content.displayName;
//#endregion
//#region src/components/landing-sections.tsx
var iconMap = {
	HardHat,
	Building2,
	Workflow,
	FormInput,
	ClipboardList,
	Users,
	MessageSquare,
	FileSignature,
	FileText,
	CreditCard,
	BarChart3,
	LineChart,
	UsersRound,
	Mail,
	LifeBuoy,
	Calendar,
	Briefcase,
	Landmark,
	Receipt,
	Code2,
	Palette,
	Brush,
	KeyRound,
	Shield,
	Lock,
	Wrench,
	Hammer,
	Fan,
	Truck,
	Factory,
	Stethoscope,
	Radio,
	Home,
	Zap,
	Sparkles,
	ShieldCheck
};
function SiteHeader() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const nav = [
		{
			label: "Features",
			href: "#features"
		},
		{
			label: "Solutions",
			href: "#industries"
		},
		{
			label: "Pricing",
			href: "#pricing"
		},
		{
			label: "Modules",
			href: "#modules-compare"
		},
		{
			label: "Resources",
			href: "#faq"
		}
	];
	return /* @__PURE__ */ jsxs("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "glass border-b" : "bg-transparent"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("span", {
						className: "grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-primary-foreground shadow-glow",
						children: /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" })
					}), /* @__PURE__ */ jsx("span", {
						className: "text-base font-bold tracking-tight",
						children: "Contractly"
					})]
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "hidden items-center gap-1 md:flex",
					children: [nav.map((n) => /* @__PURE__ */ jsx("a", {
						href: n.href,
						className: "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground",
						children: n.label
					}, n.label)), /* @__PURE__ */ jsx("a", {
						href: "#contact",
						className: "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground",
						children: "Contact"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "hidden items-center gap-2 md:flex",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						children: "Log in"
					}), /* @__PURE__ */ jsx(Link, {
						to: "/register",
						children: /* @__PURE__ */ jsx(Button, {
							size: "sm",
							className: "bg-brand-gradient text-primary-foreground shadow-glow",
							children: "Get started"
						})
					})]
				}),
				/* @__PURE__ */ jsx("button", {
					className: "grid h-10 w-10 place-items-center rounded-md md:hidden",
					onClick: () => setOpen((v) => !v),
					"aria-label": open ? "Close menu" : "Open menu",
					children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "border-t bg-background md:hidden",
			children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-1 px-4 py-3",
				children: [nav.map((n) => /* @__PURE__ */ jsx("a", {
					href: n.href,
					onClick: () => setOpen(false),
					className: "block rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary",
					children: n.label
				}, n.label)), /* @__PURE__ */ jsxs("div", {
					className: "mt-2 flex flex-col gap-2 pt-2",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						children: "Log in"
					}), /* @__PURE__ */ jsx(Link, {
						to: "/register",
						onClick: () => setOpen(false),
						children: /* @__PURE__ */ jsx(Button, {
							className: "w-full bg-brand-gradient text-primary-foreground",
							children: "Get started"
						})
					})]
				})]
			})
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28",
		children: [
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 -z-10 bg-hero" }),
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 -z-10 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" }),
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -top-24 -left-20 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-blob" }),
			/* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute -top-10 right-0 -z-10 h-96 w-96 rounded-full bg-[color:var(--brand-2)]/25 blur-3xl animate-blob",
				style: { animationDelay: "-6s" }
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-4xl text-center",
					children: [
						/* @__PURE__ */ jsxs(Badge, {
							className: "mx-auto mb-6 gap-1.5 rounded-full border bg-card/70 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur",
							children: [
								/* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3 text-primary" }),
								"New — AI workflow automation is live",
								/* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3" })
							]
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl",
							children: [
								"Run your entire contractor business",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-gradient",
									children: "from one platform"
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl",
							children: "Contractly is the modern operating system for contractor-driven companies — onboarding, work orders, agreements, invoices, payments, and analytics, unified."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap items-center justify-center gap-3",
							children: [/* @__PURE__ */ jsx(Link, {
								to: "/register",
								children: /* @__PURE__ */ jsxs(Button, {
									size: "lg",
									className: "bg-brand-gradient text-primary-foreground shadow-glow",
									children: ["Get started", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1 h-4 w-4" })]
								})
							}), /* @__PURE__ */ jsxs(Button, {
								size: "lg",
								variant: "outline",
								className: "gap-2",
								children: [/* @__PURE__ */ jsx(Play, { className: "h-4 w-4" }), " Book a demo"]
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-4 text-xs text-muted-foreground",
							children: "Transparent pricing · Cancel anytime · Set up in under 10 minutes"
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto mt-16 max-w-6xl",
					children: [
						/* @__PURE__ */ jsx("div", { className: "absolute inset-x-8 -bottom-6 -z-10 h-24 rounded-[3rem] bg-primary/30 blur-3xl" }),
						/* @__PURE__ */ jsx("div", {
							className: "rounded-[2rem] border bg-card/70 p-2 shadow-glow backdrop-blur",
							children: /* @__PURE__ */ jsx(DashboardMock, {})
						}),
						/* @__PURE__ */ jsx(FloatingCard, {
							className: "left-[-1rem] top-16 hidden sm:block",
							delay: "0s",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("div", {
									className: "grid h-9 w-9 place-items-center rounded-lg bg-success/15 text-success",
									children: /* @__PURE__ */ jsx(CreditCard, { className: "h-4 w-4" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "text-xs text-muted-foreground",
									children: "New invoice paid"
								}), /* @__PURE__ */ jsx("div", {
									className: "text-sm font-semibold",
									children: "$4,820.00"
								})] })]
							})
						}),
						/* @__PURE__ */ jsx(FloatingCard, {
							className: "right-[-1rem] top-32 hidden sm:block",
							delay: "-2s",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("div", {
									className: "grid h-9 w-9 place-items-center rounded-lg bg-primary/15 text-primary",
									children: /* @__PURE__ */ jsx(HardHat, { className: "h-4 w-4" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "text-xs text-muted-foreground",
									children: "Contractor onboarded"
								}), /* @__PURE__ */ jsx("div", {
									className: "text-sm font-semibold",
									children: "Sarah M. · Verified"
								})] })]
							})
						}),
						/* @__PURE__ */ jsx(FloatingCard, {
							className: "right-8 -bottom-4 hidden md:block",
							delay: "-4s",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("div", {
									className: "grid h-9 w-9 place-items-center rounded-lg bg-[color:var(--brand-2)]/20 text-[color:var(--brand-2)]",
									children: /* @__PURE__ */ jsx(BarChart3, { className: "h-4 w-4" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "text-xs text-muted-foreground",
									children: "Revenue this month"
								}), /* @__PURE__ */ jsxs("div", {
									className: "text-sm font-semibold",
									children: ["$182,540 ", /* @__PURE__ */ jsx("span", {
										className: "text-success",
										children: "↑ 12%"
									})]
								})] })]
							})
						})
					]
				})]
			})
		]
	});
}
function FloatingCard({ children, className, delay = "0s" }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("absolute z-10 rounded-2xl border bg-card p-3 shadow-card animate-float", className),
		style: { animationDelay: delay },
		children
	});
}
function DashboardMock() {
	return /* @__PURE__ */ jsxs("div", {
		className: "overflow-hidden rounded-[1.5rem] border bg-background",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2 border-b px-4 py-2.5",
			children: [
				/* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-destructive/70" }),
				/* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-warning/80" }),
				/* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-success/70" }),
				/* @__PURE__ */ jsx("div", { className: "ml-3 h-6 flex-1 max-w-md rounded-md bg-secondary" })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-12 gap-0",
			children: [/* @__PURE__ */ jsxs("aside", {
				className: "col-span-3 hidden border-r bg-secondary/40 p-4 lg:block",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-4 flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("span", {
						className: "grid h-7 w-7 place-items-center rounded-md bg-brand-gradient text-primary-foreground",
						children: /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5" })
					}), /* @__PURE__ */ jsx("span", {
						className: "text-sm font-semibold",
						children: "Contractly"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "space-y-1",
					children: [
						"Overview",
						"Contractors",
						"Work Orders",
						"Invoices",
						"Messaging",
						"Analytics",
						"Settings"
					].map((l, i) => /* @__PURE__ */ jsxs("div", {
						className: cn("flex items-center gap-2 rounded-md px-2 py-1.5 text-xs", i === 0 ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground"),
						children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-current opacity-60" }), l]
					}, l))
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "col-span-12 p-5 lg:col-span-9",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "text-sm font-semibold",
							children: "Operations overview"
						}), /* @__PURE__ */ jsx("div", {
							className: "text-xs text-muted-foreground",
							children: "Today · March 14"
						})] }), /* @__PURE__ */ jsxs("div", {
							className: "hidden gap-2 sm:flex",
							children: [/* @__PURE__ */ jsx("div", { className: "h-8 w-24 rounded-md bg-secondary" }), /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-md bg-brand-gradient" })]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
						children: [
							{
								l: "Active jobs",
								v: "128",
								t: "+8%"
							},
							{
								l: "Contractors",
								v: "412",
								t: "+3%"
							},
							{
								l: "Invoices due",
								v: "$46.2k",
								t: "-2%"
							},
							{
								l: "Revenue MTD",
								v: "$182k",
								t: "+12%"
							}
						].map((k) => /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border p-3",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "text-[10px] uppercase tracking-wider text-muted-foreground",
									children: k.l
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-1 text-lg font-bold",
									children: k.v
								}),
								/* @__PURE__ */ jsx("div", {
									className: "text-[11px] text-success",
									children: k.t
								})
							]
						}, k.l))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-4 grid grid-cols-1 gap-3 lg:grid-cols-3",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border p-4 lg:col-span-2",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "mb-2 flex items-center justify-between",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-xs font-semibold",
									children: "Revenue"
								}), /* @__PURE__ */ jsx("div", {
									className: "text-[11px] text-muted-foreground",
									children: "Last 30 days"
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "flex h-32 items-end gap-1.5",
								children: [
									42,
									55,
									38,
									62,
									48,
									71,
									58,
									66,
									74,
									61,
									82,
									76,
									91,
									84
								].map((h, i) => /* @__PURE__ */ jsx("div", {
									className: "flex-1 rounded-t bg-brand-gradient",
									style: {
										height: `${h}%`,
										opacity: .6 + i / 30
									}
								}, i))
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border p-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "mb-3 text-xs font-semibold",
								children: "Recent activity"
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-2.5",
								children: [
									{
										c: "text-success",
										t: "Invoice #2481 paid"
									},
									{
										c: "text-primary",
										t: "Work order assigned"
									},
									{
										c: "text-[color:var(--brand-2)]",
										t: "Contractor verified"
									},
									{
										c: "text-warning",
										t: "Agreement pending"
									}
								].map((a, i) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 text-[11px]",
									children: [/* @__PURE__ */ jsx("span", { className: cn("h-1.5 w-1.5 rounded-full bg-current", a.c) }), /* @__PURE__ */ jsx("span", {
										className: "text-muted-foreground",
										children: a.t
									})]
								}, i))
							})]
						})]
					})
				]
			})]
		})]
	});
}
function TrustSection() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-y bg-secondary/40 py-12",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 gap-6 md:grid-cols-4",
				children: [
					{
						v: "10,000+",
						l: "Contractors Managed"
					},
					{
						v: "500+",
						l: "Companies Trust Us"
					},
					{
						v: "99.9%",
						l: "Platform Uptime"
					},
					{
						v: "$120M+",
						l: "Payments Processed"
					}
				].map((s) => /* @__PURE__ */ jsxs("div", {
					className: "text-center",
					children: [/* @__PURE__ */ jsx("div", {
						className: "text-3xl font-bold tracking-tight text-gradient sm:text-4xl",
						children: s.v
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-1 text-sm text-muted-foreground",
						children: s.l
					})]
				}, s.l))
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60",
				children: [
					"NORTHWIND",
					"ACME CO",
					"STELLARIS",
					"BLUEROOF",
					"IRONWORKS",
					"MERIDIAN"
				].map((b) => /* @__PURE__ */ jsx("span", {
					className: "text-sm font-bold tracking-[0.2em] text-muted-foreground",
					children: b
				}, b))
			})]
		})
	});
}
function FeaturesSection() {
	const { modules } = usePricing();
	return /* @__PURE__ */ jsx("section", {
		id: "features",
		className: "py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsx(SectionHeader, {
					eyebrow: "Everything you need",
					title: "One platform for every part of your operation",
					subtitle: "Contractly replaces spreadsheets, chats, and half a dozen tools with a modern, connected system your whole team will love."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
					children: [
						{
							icon: HardHat,
							title: "Contractor Management",
							desc: "Onboard, verify, and manage 1099s with a beautiful contractor portal."
						},
						{
							icon: Workflow,
							title: "Workflow Builder",
							desc: "Automate approvals, dispatch, and reminders with a visual builder."
						},
						{
							icon: ClipboardList,
							title: "Work Orders",
							desc: "Assign, track, and complete jobs with real-time status updates."
						},
						{
							icon: FileSignature,
							title: "Agreements & E-Sign",
							desc: "Send, negotiate, and legally sign contracts in minutes."
						},
						{
							icon: CreditCard,
							title: "Invoices & Payments",
							desc: "Bill clients and pay contractors with built-in Stripe."
						},
						{
							icon: BarChart3,
							title: "Reports & Analytics",
							desc: "KPIs, insights, and exports for every stakeholder."
						}
					].map((f, i) => /* @__PURE__ */ jsxs("div", {
						className: "group relative overflow-hidden rounded-3xl border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow",
						style: { animationDelay: `${i * 60}ms` },
						children: [
							/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-gradient opacity-0 blur-3xl transition-opacity group-hover:opacity-30" }),
							/* @__PURE__ */ jsx("div", {
								className: "mb-4 inline-grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-primary-foreground shadow-glow",
								children: /* @__PURE__ */ jsx(f.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-lg font-semibold",
								children: f.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1.5 text-sm text-muted-foreground",
								children: f.desc
							})
						]
					}, f.title))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-12 rounded-3xl border bg-secondary/40 p-6 sm:p-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-4 text-sm font-semibold text-muted-foreground",
						children: [
							"And ",
							modules.length,
							"+ more modules"
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap gap-2",
						children: modules.map((m) => {
							return /* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1.5 text-xs font-medium shadow-card",
								children: [
									/* @__PURE__ */ jsx(iconMap[m.icon] ?? Sparkles, { className: "h-3.5 w-3.5 text-primary" }),
									" ",
									m.name
								]
							}, m.id);
						})
					})]
				})
			]
		})
	});
}
function HowItWorks() {
	const steps = [
		{
			t: "Create account",
			d: "Sign up in seconds."
		},
		{
			t: "Choose subscription",
			d: "Pick a base plan."
		},
		{
			t: "Select modules",
			d: "Enable what you need."
		},
		{
			t: "Company details",
			d: "Add your workspace."
		},
		{
			t: "Payment",
			d: "Secure Stripe checkout."
		},
		{
			t: "Platform ready",
			d: "Invite your team."
		}
	];
	return /* @__PURE__ */ jsx("section", {
		className: "py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsx(SectionHeader, {
				eyebrow: "How it works",
				title: "From signup to live in under 10 minutes"
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6",
				children: steps.map((s, i) => /* @__PURE__ */ jsxs("div", {
					className: "relative rounded-2xl border bg-card p-5 shadow-card",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "mb-3 inline-grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-xs font-bold text-primary-foreground",
							children: i + 1
						}),
						/* @__PURE__ */ jsx("div", {
							className: "text-sm font-semibold",
							children: s.t
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-1 text-xs text-muted-foreground",
							children: s.d
						}),
						i < steps.length - 1 && /* @__PURE__ */ jsx(ChevronRight, { className: "absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-muted-foreground lg:block" })
					]
				}, s.t))
			})]
		})
	});
}
function ComparePlans() {
	const { plans, modules, coreModuleNames, isAllInclusive, isLoading } = usePricing();
	if (isLoading || plans.length === 0) return null;
	const rows = [...coreModuleNames.map((name) => ({
		id: name,
		name,
		mandatory: true
	})), ...modules.map((m) => ({
		id: m.id,
		name: m.name,
		mandatory: false
	}))];
	const hasModule = (plan, id, mandatory) => {
		if (mandatory) return true;
		if (isAllInclusive(plan)) return true;
		return plan.includedModules.includes(id);
	};
	return /* @__PURE__ */ jsx("section", {
		id: "modules-compare",
		className: "py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsx(SectionHeader, {
				eyebrow: "Compare plans",
				title: "Everything included, side by side"
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-10 overflow-x-auto rounded-3xl border bg-card shadow-card",
				children: /* @__PURE__ */ jsxs("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ jsx("thead", {
						className: "bg-secondary/60 text-left",
						children: /* @__PURE__ */ jsxs("tr", { children: [/* @__PURE__ */ jsx("th", {
							className: "p-4 font-semibold",
							children: "Module"
						}), plans.map((p) => /* @__PURE__ */ jsxs("th", {
							className: "p-4 text-center font-semibold",
							children: [p.name, /* @__PURE__ */ jsxs("div", {
								className: "text-xs font-normal text-muted-foreground",
								children: [
									"$",
									p.monthly,
									"/mo"
								]
							})]
						}, p.id))] })
					}), /* @__PURE__ */ jsx("tbody", { children: rows.map((r, i) => /* @__PURE__ */ jsxs("tr", {
						className: cn("border-t", i % 2 === 1 && "bg-secondary/20"),
						children: [/* @__PURE__ */ jsxs("td", {
							className: "p-3 font-medium",
							children: [r.name, r.mandatory && /* @__PURE__ */ jsx(Badge, {
								className: "ml-2 bg-primary/10 text-primary hover:bg-primary/10",
								children: "Core"
							})]
						}), plans.map((p) => /* @__PURE__ */ jsx("td", {
							className: "p-3 text-center",
							children: hasModule(p, r.id, r.mandatory) ? /* @__PURE__ */ jsx(Check, { className: "mx-auto h-4 w-4 text-success" }) : /* @__PURE__ */ jsx("span", {
								className: "text-xs text-muted-foreground",
								children: "Add-on"
							})
						}, p.id))]
					}, r.id)) })]
				})
			})]
		})
	});
}
function ProductPreview() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsx(SectionHeader, {
				eyebrow: "Product tour",
				title: "A modern workspace your team will actually use",
				subtitle: "Beautifully designed screens for every workflow — from field to finance."
			}), /* @__PURE__ */ jsxs(Tabs, {
				defaultValue: "overview",
				className: "mt-10",
				children: [/* @__PURE__ */ jsx(TabsList, {
					className: "mx-auto flex w-fit flex-wrap justify-center gap-1 rounded-full bg-secondary p-1",
					children: [
						"overview",
						"invoices",
						"workorders",
						"messaging",
						"workflow",
						"analytics"
					].map((t) => /* @__PURE__ */ jsx(TabsTrigger, {
						value: t,
						className: "rounded-full data-[state=active]:bg-brand-gradient data-[state=active]:text-primary-foreground",
						children: t[0].toUpperCase() + t.slice(1)
					}, t))
				}), [
					{
						v: "overview",
						el: /* @__PURE__ */ jsx(DashboardMock, {})
					},
					{
						v: "invoices",
						el: /* @__PURE__ */ jsx(MockInvoices, {})
					},
					{
						v: "workorders",
						el: /* @__PURE__ */ jsx(MockWorkOrders, {})
					},
					{
						v: "messaging",
						el: /* @__PURE__ */ jsx(MockMessaging, {})
					},
					{
						v: "workflow",
						el: /* @__PURE__ */ jsx(MockWorkflow, {})
					},
					{
						v: "analytics",
						el: /* @__PURE__ */ jsx(MockAnalytics, {})
					}
				].map((t) => /* @__PURE__ */ jsx(TabsContent, {
					value: t.v,
					className: "mt-8",
					children: /* @__PURE__ */ jsx("div", {
						className: "rounded-[2rem] border bg-card/70 p-2 shadow-glow",
						children: t.el
					})
				}, t.v))]
			})]
		})
	});
}
function Panel({ title, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "overflow-hidden rounded-[1.5rem] border bg-background p-6",
		children: [/* @__PURE__ */ jsx("div", {
			className: "mb-4 text-sm font-semibold",
			children: title
		}), children]
	});
}
function MockInvoices() {
	return /* @__PURE__ */ jsx(Panel, {
		title: "Invoices",
		children: /* @__PURE__ */ jsxs("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ jsx("thead", {
				className: "text-left text-xs text-muted-foreground",
				children: /* @__PURE__ */ jsxs("tr", { children: [
					/* @__PURE__ */ jsx("th", {
						className: "pb-3",
						children: "Number"
					}),
					/* @__PURE__ */ jsx("th", { children: "Client" }),
					/* @__PURE__ */ jsx("th", { children: "Amount" }),
					/* @__PURE__ */ jsx("th", { children: "Status" })
				] })
			}), /* @__PURE__ */ jsx("tbody", { children: [
				{
					n: "INV-2481",
					c: "Acme Co",
					a: "$4,820",
					s: "Paid",
					cls: "text-success bg-success/10"
				},
				{
					n: "INV-2480",
					c: "Northwind",
					a: "$2,150",
					s: "Pending",
					cls: "text-warning bg-warning/10"
				},
				{
					n: "INV-2479",
					c: "Ironworks",
					a: "$8,900",
					s: "Overdue",
					cls: "text-destructive bg-destructive/10"
				},
				{
					n: "INV-2478",
					c: "Meridian",
					a: "$1,240",
					s: "Paid",
					cls: "text-success bg-success/10"
				}
			].map((r) => /* @__PURE__ */ jsxs("tr", {
				className: "border-t",
				children: [
					/* @__PURE__ */ jsx("td", {
						className: "py-3 font-medium",
						children: r.n
					}),
					/* @__PURE__ */ jsx("td", { children: r.c }),
					/* @__PURE__ */ jsx("td", {
						className: "tabular-nums",
						children: r.a
					}),
					/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", {
						className: cn("rounded-full px-2 py-0.5 text-xs font-medium", r.cls),
						children: r.s
					}) })
				]
			}, r.n)) })]
		})
	});
}
function MockWorkOrders() {
	return /* @__PURE__ */ jsx(Panel, {
		title: "Work orders",
		children: /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-2 gap-3 md:grid-cols-4",
			children: [
				"Todo",
				"In progress",
				"Review",
				"Done"
			].map((c) => /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border bg-secondary/40 p-3",
				children: [/* @__PURE__ */ jsx("div", {
					className: "mb-2 text-xs font-semibold",
					children: c
				}), /* @__PURE__ */ jsx("div", {
					className: "space-y-2",
					children: [1, 2].map((i) => /* @__PURE__ */ jsxs("div", {
						className: "rounded-lg border bg-card p-3 text-xs shadow-card",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "font-medium",
								children: ["WO-", Math.floor(Math.random() * 900 + 100)]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-1 text-muted-foreground",
								children: ["HVAC install · Site ", i]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-2 flex items-center justify-between",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "rounded-full bg-primary/10 px-2 py-0.5 text-primary",
									children: ["P", i]
								}), /* @__PURE__ */ jsx("span", {
									className: "text-muted-foreground",
									children: "2d"
								})]
							})
						]
					}, i))
				})]
			}, c))
		})
	});
}
function MockMessaging() {
	return /* @__PURE__ */ jsx(Panel, {
		title: "Messaging",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid gap-4 md:grid-cols-[220px_1fr]",
			children: [/* @__PURE__ */ jsx("div", {
				className: "space-y-1 rounded-xl border p-2",
				children: [
					"#general",
					"#dispatch",
					"Sarah M.",
					"Ironworks",
					"Northwind"
				].map((c, i) => /* @__PURE__ */ jsx("div", {
					className: cn("rounded-md px-2 py-1.5 text-xs", i === 2 ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground"),
					children: c
				}, c))
			}), /* @__PURE__ */ jsx("div", {
				className: "space-y-3",
				children: [
					{
						u: "Sarah M.",
						t: "The scope looks good — sending the signed copy now.",
						me: false
					},
					{
						u: "You",
						t: "Great, I'll assign the work order for Tuesday.",
						me: true
					},
					{
						u: "Sarah M.",
						t: "Perfect. Uploading site photos to the portal.",
						me: false
					}
				].map((m, i) => /* @__PURE__ */ jsx("div", {
					className: cn("flex", m.me && "justify-end"),
					children: /* @__PURE__ */ jsxs("div", {
						className: cn("max-w-[75%] rounded-2xl px-3 py-2 text-sm", m.me ? "bg-brand-gradient text-primary-foreground" : "bg-secondary"),
						children: [!m.me && /* @__PURE__ */ jsx("div", {
							className: "mb-0.5 text-[10px] font-semibold opacity-70",
							children: m.u
						}), m.t]
					})
				}, i))
			})]
		})
	});
}
function MockWorkflow() {
	return /* @__PURE__ */ jsxs(Panel, {
		title: "Workflow builder",
		children: [/* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-5 items-center gap-3",
			children: [
				"Trigger: New job",
				"Verify contractor",
				"Send agreement",
				"Await signature",
				"Dispatch"
			].map((s, i) => /* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [/* @__PURE__ */ jsx("div", {
					className: "rounded-xl border bg-card p-3 text-center text-xs font-medium shadow-card",
					children: s
				}), i < 4 && /* @__PURE__ */ jsx("div", {
					className: "absolute -right-3 top-1/2 hidden -translate-y-1/2 text-muted-foreground md:block",
					children: "→"
				})]
			}, s))
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-4 grid grid-cols-3 gap-3",
			children: [
				"When document signed",
				"Create invoice",
				"Notify client"
			].map((s) => /* @__PURE__ */ jsx("div", {
				className: "rounded-lg border border-dashed p-3 text-center text-xs text-muted-foreground",
				children: s
			}, s))
		})]
	});
}
function MockAnalytics() {
	return /* @__PURE__ */ jsx(Panel, {
		title: "Analytics",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 gap-4 md:grid-cols-3",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "col-span-2 rounded-xl border p-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-2 flex items-center justify-between text-xs",
					children: [/* @__PURE__ */ jsx("span", {
						className: "font-semibold",
						children: "Revenue vs jobs"
					}), /* @__PURE__ */ jsx("span", {
						className: "text-muted-foreground",
						children: "Q1"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "relative h-40",
					children: /* @__PURE__ */ jsxs("svg", {
						viewBox: "0 0 400 160",
						className: "h-full w-full",
						children: [
							/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
								id: "g1",
								x1: "0",
								x2: "0",
								y1: "0",
								y2: "1",
								children: [/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "oklch(0.55 0.2 258)",
									stopOpacity: "0.4"
								}), /* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "oklch(0.55 0.2 258)",
									stopOpacity: "0"
								})]
							}) }),
							/* @__PURE__ */ jsx("path", {
								d: "M0,120 C60,80 120,100 180,60 C240,20 300,90 400,40 L400,160 L0,160 Z",
								fill: "url(#g1)"
							}),
							/* @__PURE__ */ jsx("path", {
								d: "M0,120 C60,80 120,100 180,60 C240,20 300,90 400,40",
								fill: "none",
								stroke: "oklch(0.55 0.2 258)",
								strokeWidth: "2.5"
							})
						]
					})
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border p-4",
				children: [/* @__PURE__ */ jsx("div", {
					className: "mb-3 text-xs font-semibold",
					children: "Top industries"
				}), /* @__PURE__ */ jsx("div", {
					className: "space-y-2 text-xs",
					children: [
						{
							n: "Construction",
							v: 62
						},
						{
							n: "HVAC",
							v: 48
						},
						{
							n: "Electrical",
							v: 33
						},
						{
							n: "Cleaning",
							v: 21
						}
					].map((r) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
						className: "flex justify-between",
						children: [/* @__PURE__ */ jsx("span", { children: r.n }), /* @__PURE__ */ jsxs("span", {
							className: "text-muted-foreground",
							children: [r.v, "%"]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-1 h-1.5 rounded-full bg-secondary",
						children: /* @__PURE__ */ jsx("div", {
							className: "h-full rounded-full bg-brand-gradient",
							style: { width: `${r.v}%` }
						})
					})] }, r.n))
				})]
			})]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsx(SectionHeader, {
				eyebrow: "Loved by operators",
				title: "What customers are saying"
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid gap-5 md:grid-cols-3",
				children: [
					{
						q: "We replaced five tools with Contractly and saved 20 hours a week. The workflow builder alone is a game-changer.",
						n: "Jordan Reyes",
						r: "COO, BlueRoof Services"
					},
					{
						q: "Our contractors love the portal. Onboarding used to take a week — now it's done in an afternoon.",
						n: "Priya Nair",
						r: "Ops Director, Ironworks"
					},
					{
						q: "The pricing calculator let us pay only for what we needed. Zero fluff, all impact.",
						n: "Marcus Lee",
						r: "Founder, Stellaris Field"
					}
				].map((t) => /* @__PURE__ */ jsxs("figure", {
					className: "flex flex-col rounded-3xl border bg-card p-6 shadow-card",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "flex text-warning",
							children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-current" }, i))
						}),
						/* @__PURE__ */ jsxs("blockquote", {
							className: "mt-4 flex-1 text-sm leading-relaxed",
							children: [
								"\"",
								t.q,
								"\""
							]
						}),
						/* @__PURE__ */ jsxs("figcaption", {
							className: "mt-6 flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("div", { className: "h-9 w-9 rounded-full bg-brand-gradient" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "text-sm font-semibold",
								children: t.n
							}), /* @__PURE__ */ jsx("div", {
								className: "text-xs text-muted-foreground",
								children: t.r
							})] })]
						})
					]
				}, t.n))
			})]
		})
	});
}
function IndustriesSection() {
	return /* @__PURE__ */ jsx("section", {
		id: "industries",
		className: "py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsx(SectionHeader, {
				eyebrow: "Solutions",
				title: "Purpose-built for contractor-driven industries"
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6",
				children: INDUSTRIES.map((i) => {
					return /* @__PURE__ */ jsxs("div", {
						className: "group flex flex-col items-center justify-center rounded-2xl border bg-card p-5 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-glow",
						children: [/* @__PURE__ */ jsx("div", {
							className: "mb-3 grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-primary-foreground",
							children: /* @__PURE__ */ jsx(iconMap[i.icon] ?? Sparkles, { className: "h-5 w-5" })
						}), /* @__PURE__ */ jsx("div", {
							className: "text-sm font-semibold",
							children: i.name
						})]
					}, i.name);
				})
			})]
		})
	});
}
function FaqSection() {
	return /* @__PURE__ */ jsx("section", {
		id: "faq",
		className: "py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsx(SectionHeader, {
				eyebrow: "FAQ",
				title: "Frequently asked questions"
			}), /* @__PURE__ */ jsx(Accordion, {
				type: "single",
				collapsible: true,
				className: "mt-10 rounded-2xl border bg-card px-2 shadow-card",
				children: [
					{
						q: "How does billing work?",
						a: "Pick a plan, add the modules you need, and pay securely with Stripe. You can cancel or change modules anytime."
					},
					{
						q: "Can I change modules after subscribing?",
						a: "Yes. You can add or remove modules at any time — pricing adjusts on the next billing cycle."
					},
					{
						q: "How does the annual discount work?",
						a: "Billing annually saves 20% across your plan and modules. You'll see the discount live in the calculator."
					},
					{
						q: "Is my data secure?",
						a: "We're SOC 2-ready with encryption at rest and in transit, RBAC, SSO, and full audit logs."
					},
					{
						q: "Do you offer white-label or SSO?",
						a: "Yes — both are available as modules on the Business plan and included on Enterprise."
					},
					{
						q: "How does payment work?",
						a: "We use Stripe. You can pay by card, ACH, or invoice on Business and Enterprise."
					}
				].map((f, i) => /* @__PURE__ */ jsxs(AccordionItem, {
					value: `item-${i}`,
					className: "px-3",
					children: [/* @__PURE__ */ jsx(AccordionTrigger, {
						className: "text-left text-base font-semibold",
						children: f.q
					}), /* @__PURE__ */ jsx(AccordionContent, {
						className: "text-sm text-muted-foreground",
						children: f.a
					})]
				}, i))
			})]
		})
	});
}
function CtaBand() {
	return /* @__PURE__ */ jsx("section", {
		id: "contact",
		className: "px-4 py-24 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl overflow-hidden rounded-[2rem] border bg-brand-gradient p-10 text-primary-foreground shadow-glow sm:p-16",
			children: [/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute" }), /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-3xl font-bold tracking-tight sm:text-5xl",
						children: "Ready to run your contractor business like a $100M company?"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-base opacity-90 sm:text-lg",
						children: "Choose your plan, pick your modules, and launch your workspace in under 10 minutes."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap items-center justify-center gap-3",
						children: [/* @__PURE__ */ jsx(Link, {
							to: "/register",
							children: /* @__PURE__ */ jsxs(Button, {
								size: "lg",
								variant: "secondary",
								className: "text-primary",
								children: ["Get started ", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1 h-4 w-4" })]
							})
						}), /* @__PURE__ */ jsx(Button, {
							size: "lg",
							variant: "outline",
							className: "border-white/40 bg-transparent text-primary-foreground hover:bg-white/10",
							children: "Talk to sales"
						})]
					})
				]
			})]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t bg-secondary/30",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid gap-10 lg:grid-cols-[1.4fr_repeat(5,1fr)]",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx("span", {
							className: "grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-primary-foreground shadow-glow",
							children: /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" })
						}), /* @__PURE__ */ jsx("span", {
							className: "text-base font-bold",
							children: "Contractly"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 max-w-xs text-sm text-muted-foreground",
						children: "The modern operating system for contractor-driven businesses."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-4 flex gap-2",
						children: [
							Twitter,
							Github,
							Linkedin,
							Youtube
						].map((I, i) => /* @__PURE__ */ jsx("a", {
							href: "#",
							"aria-label": "Social link",
							className: "grid h-9 w-9 place-items-center rounded-lg border bg-card text-muted-foreground transition-colors hover:text-foreground",
							children: /* @__PURE__ */ jsx(I, { className: "h-4 w-4" })
						}, i))
					})
				] }), [
					{
						t: "Product",
						l: [
							"Features",
							"Modules",
							"Pricing",
							"Changelog",
							"Roadmap"
						]
					},
					{
						t: "Solutions",
						l: [
							"Construction",
							"HVAC",
							"Field Service",
							"Real Estate",
							"Logistics"
						]
					},
					{
						t: "Resources",
						l: [
							"Docs",
							"API",
							"Guides",
							"Support",
							"Status"
						]
					},
					{
						t: "Company",
						l: [
							"About",
							"Customers",
							"Careers",
							"Press",
							"Contact"
						]
					},
					{
						t: "Legal",
						l: [
							"Privacy",
							"Terms",
							"Cookies",
							"DPA",
							"Security"
						]
					}
				].map((c) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "text-sm font-semibold",
					children: c.t
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: c.l.map((it) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: "#",
						className: "text-muted-foreground transition-colors hover:text-foreground",
						children: it
					}) }, it))
				})] }, c.t))]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-12 flex flex-col items-start justify-between gap-3 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Contractly, Inc. All rights reserved."
				] }), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "h-3.5 w-3.5" }), " SOC 2 · GDPR · Encrypted end-to-end"]
				})]
			})]
		})
	});
}
function SectionHeader({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-3xl text-center",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "mb-3 inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1 text-xs font-medium text-primary shadow-card",
				children: [
					/* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3" }),
					" ",
					eyebrow
				]
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "text-3xl font-bold tracking-tight sm:text-5xl",
				children: title
			}),
			subtitle && /* @__PURE__ */ jsx("p", {
				className: "mt-4 text-base text-muted-foreground sm:text-lg",
				children: subtitle
			})
		]
	});
}
//#endregion
//#region src/components/ui/switch.tsx
var Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SwitchPrimitives.Root, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ jsx(SwitchPrimitives.Thumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = SwitchPrimitives.Root.displayName;
//#endregion
//#region src/components/pricing-calculator.tsx
var currency = (n) => new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	maximumFractionDigits: 0
}).format(n);
function PricingCalculator() {
	const { plans, modules, coreModuleNames, isAllInclusive, isLoading, isError } = usePricing();
	const [planId, setPlanId] = useState("");
	const [yearly, setYearly] = useState(true);
	const [selected, setSelected] = useState(/* @__PURE__ */ new Set());
	useEffect(() => {
		if (!planId && plans.length > 0) setPlanId(plans.find((p) => p.highlight)?.id ?? plans[0].id);
	}, [plans, planId]);
	const plan = plans.find((p) => p.id === planId);
	const allInclusive = plan ? isAllInclusive(plan) : false;
	const isIncluded = (mid) => allInclusive || (plan?.includedModules.includes(mid) ?? false);
	const isOfferedAsAddon = (mid) => plan?.addonModules.includes(mid) ?? false;
	const toggle = (mid) => {
		if (isIncluded(mid) || !isOfferedAsAddon(mid)) return;
		setSelected((prev) => {
			const n = new Set(prev);
			n.has(mid) ? n.delete(mid) : n.add(mid);
			return n;
		});
	};
	const summary = useMemo(() => {
		if (!plan) return {
			addonModules: [],
			addonMonthly: 0,
			baseMonthly: 0,
			subMonthly: 0,
			monthlyBilled: 0,
			annualDiscount: 0,
			tax: 0,
			total: 0,
			preTax: 0
		};
		const addonModules = modules.filter((m) => selected.has(m.id) && !isIncluded(m.id));
		const addonMonthly = addonModules.reduce((s, m) => s + m.price, 0);
		const baseMonthly = plan.monthly;
		const subMonthly = baseMonthly + addonMonthly;
		const monthlyBilled = yearly ? subMonthly * (1 - ANNUAL_DISCOUNT) : subMonthly;
		const annualDiscount = yearly ? subMonthly * ANNUAL_DISCOUNT * 12 : 0;
		const yearlyTotal = monthlyBilled * 12;
		const preTax = yearly ? yearlyTotal : monthlyBilled;
		const tax = preTax * TAX_RATE;
		return {
			addonModules,
			addonMonthly,
			baseMonthly,
			subMonthly,
			monthlyBilled,
			annualDiscount,
			tax,
			total: preTax + tax,
			preTax
		};
	}, [
		plan,
		modules,
		selected,
		yearly
	]);
	const state = {
		planId,
		yearly,
		moduleIds: Array.from(selected)
	};
	if (isLoading) return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-center gap-2 rounded-3xl border bg-card p-16 text-muted-foreground shadow-card",
		children: [/* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin" }), " Loading live pricing…"]
	});
	if (isError || !plan) return /* @__PURE__ */ jsx("div", {
		className: "rounded-3xl border bg-card p-16 text-center text-muted-foreground shadow-card",
		children: "Pricing is temporarily unavailable. Please try again shortly."
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "grid gap-8 lg:grid-cols-[1fr_380px]",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "space-y-8",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-4 flex items-center justify-between",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "text-lg font-semibold",
						children: "1. Choose your base plan"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "Mandatory modules are always included."
					})] }), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 rounded-full border bg-card px-3 py-1.5 text-sm shadow-card",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: cn("font-medium", !yearly && "text-foreground", yearly && "text-muted-foreground"),
								children: "Monthly"
							}),
							/* @__PURE__ */ jsx(Switch, {
								checked: yearly,
								onCheckedChange: setYearly,
								"aria-label": "Toggle yearly billing"
							}),
							/* @__PURE__ */ jsxs("span", {
								className: cn("font-medium", yearly && "text-foreground", !yearly && "text-muted-foreground"),
								children: ["Yearly ", /* @__PURE__ */ jsx(Badge, {
									className: "ml-1 bg-success/15 text-success hover:bg-success/15",
									children: "-20%"
								})]
							})
						]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
					children: plans.map((p) => {
						return /* @__PURE__ */ jsxs("button", {
							type: "button",
							onClick: () => setPlanId(p.id),
							className: cn("relative rounded-2xl border bg-card p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-card", p.id === planId && "border-primary ring-2 ring-primary/30 shadow-glow"),
							children: [
								p.highlight && /* @__PURE__ */ jsx("span", {
									className: "absolute -top-2 right-3 rounded-full bg-brand-gradient px-2 py-0.5 text-[10px] font-semibold text-primary-foreground",
									children: "Popular"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "text-sm font-semibold",
									children: p.name
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-1 text-xs text-muted-foreground",
									children: p.tagline
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-3 text-2xl font-bold tracking-tight",
									children: [currency(p.monthly), /* @__PURE__ */ jsx("span", {
										className: "text-sm font-normal text-muted-foreground",
										children: "/mo"
									})]
								})
							]
						}, p.id);
					})
				})] }),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border bg-secondary/40 p-5",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-2 flex items-center gap-2 text-sm font-semibold",
						children: [/* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-primary" }), " Included in every plan"]
					}), /* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap gap-2",
						children: coreModuleNames.map((m) => /* @__PURE__ */ jsxs("span", {
							className: "inline-flex items-center gap-1.5 rounded-full border bg-card px-2.5 py-1 text-xs",
							children: [
								/* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-success" }),
								" ",
								m
							]
						}, m))
					})]
				}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
					className: "mb-4 text-lg font-semibold",
					children: "2. Add optional modules"
				}), /* @__PURE__ */ jsx("div", {
					className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
					children: modules.map((m) => {
						const included = isIncluded(m.id);
						const offered = allInclusive || isOfferedAsAddon(m.id);
						const checked = included || selected.has(m.id);
						if (!offered) return null;
						return /* @__PURE__ */ jsxs("label", {
							className: cn("group relative flex cursor-pointer flex-col rounded-2xl border bg-card p-4 shadow-card transition-all hover:-translate-y-0.5", checked && !included && "border-primary/60 ring-1 ring-primary/30", included && "opacity-90"),
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-start justify-between gap-2",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "text-sm font-semibold",
									children: m.name
								}), /* @__PURE__ */ jsx("div", {
									className: "mt-0.5 text-xs text-muted-foreground",
									children: m.description
								})] }), /* @__PURE__ */ jsx(Checkbox, {
									checked,
									disabled: included,
									onCheckedChange: () => toggle(m.id),
									"aria-label": m.name
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "mt-3 flex items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground",
									children: m.category
								}), /* @__PURE__ */ jsx("span", {
									className: "text-sm font-semibold",
									children: included ? /* @__PURE__ */ jsx("span", {
										className: "text-success",
										children: "Included"
									}) : /* @__PURE__ */ jsxs(Fragment, { children: [
										"+",
										currency(m.price),
										/* @__PURE__ */ jsx("span", {
											className: "text-xs font-normal text-muted-foreground",
											children: "/mo"
										})
									] })
								})]
							})]
						}, m.id);
					})
				})] })
			]
		}), /* @__PURE__ */ jsx("aside", {
			className: "lg:sticky lg:top-24 self-start",
			children: /* @__PURE__ */ jsxs("div", {
				className: "rounded-3xl border bg-card p-6 shadow-glow",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground",
						children: "Your subscription"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "text-2xl font-bold",
						children: plan.name
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-5 space-y-2 text-sm",
						children: [
							/* @__PURE__ */ jsx(Row, {
								label: "Base plan",
								value: `${currency(summary.baseMonthly)}/mo`
							}),
							/* @__PURE__ */ jsx(Row, {
								label: `Add-ons (${summary.addonModules.length})`,
								value: `${currency(summary.addonMonthly)}/mo`
							}),
							yearly && /* @__PURE__ */ jsx(Row, {
								label: "Annual discount",
								value: `− ${currency(summary.annualDiscount)}/yr`,
								accent: "success"
							}),
							/* @__PURE__ */ jsx(Row, {
								label: `Tax (${Math.round(TAX_RATE * 100)}%)`,
								value: currency(summary.tax)
							})
						]
					}),
					/* @__PURE__ */ jsx("div", { className: "my-5 h-px bg-border" }),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-baseline justify-between",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "text-sm text-muted-foreground",
							children: ["Billed ", yearly ? "annually" : "monthly"]
						}), /* @__PURE__ */ jsx("span", {
							className: "text-3xl font-bold tracking-tight",
							children: currency(summary.total)
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-1 text-right text-xs text-muted-foreground",
						children: yearly ? `${currency(summary.monthlyBilled)}/mo effective` : "per month, plus tax"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/register",
						search: {
							plan: state.planId,
							billing: state.yearly ? "yearly" : "monthly",
							modules: state.moduleIds.join(",")
						},
						className: "mt-6 block",
						children: /* @__PURE__ */ jsxs(Button, {
							size: "lg",
							className: "w-full bg-brand-gradient text-primary-foreground shadow-glow",
							children: ["Continue to registration", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1 h-4 w-4" })]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-4 space-y-1.5 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ jsxs("p", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-success" }), " Transparent pricing, no hidden fees"]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-success" }), " Cancel or change modules anytime"]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-success" }), " SOC 2 & GDPR-ready platform"]
							})
						]
					})
				]
			})
		})]
	});
}
function Row({ label, value, accent }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsx("span", {
			className: cn("font-medium tabular-nums", accent === "success" && "text-success"),
			children: value
		})]
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function HomePage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ jsx(SiteHeader, {}),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsx(Hero, {}),
				/* @__PURE__ */ jsx(TrustSection, {}),
				/* @__PURE__ */ jsx(FeaturesSection, {}),
				/* @__PURE__ */ jsx(HowItWorks, {}),
				/* @__PURE__ */ jsxs("section", {
					id: "pricing",
					className: "relative py-24",
					children: [/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 -z-10 bg-hero opacity-60" }), /* @__PURE__ */ jsxs("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "mx-auto max-w-3xl text-center",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "mb-3 inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1 text-xs font-medium text-primary shadow-card",
									children: "Pricing calculator"
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "text-3xl font-bold tracking-tight sm:text-5xl",
									children: "Build the plan that fits your business"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-base text-muted-foreground sm:text-lg",
									children: "Start with a base plan. Add only the modules you need. Pricing updates instantly."
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-12",
							children: /* @__PURE__ */ jsx(PricingCalculator, {})
						})]
					})]
				}),
				/* @__PURE__ */ jsx(ComparePlans, {}),
				/* @__PURE__ */ jsx(ProductPreview, {}),
				/* @__PURE__ */ jsx(Testimonials, {}),
				/* @__PURE__ */ jsx(IndustriesSection, {}),
				/* @__PURE__ */ jsx(FaqSection, {}),
				/* @__PURE__ */ jsx(CtaBand, {})
			] }),
			/* @__PURE__ */ jsx(SiteFooter, {})
		]
	});
}
//#endregion
export { HomePage as component };
