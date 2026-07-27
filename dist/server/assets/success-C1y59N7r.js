import { t as Route } from "./success-De9-T2Tw.js";
import { t as Button } from "./button-DRsC1qZi.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Building2, Check, KeyRound, Mail, Sparkles } from "lucide-react";
//#region src/routes/success.tsx?tsr-split=component
function SuccessPage() {
	const { subdomain } = Route.useSearch();
	return /* @__PURE__ */ jsx("div", {
		className: "grid min-h-screen place-items-center bg-hero px-4 py-16",
		children: /* @__PURE__ */ jsxs("div", {
			className: "w-full max-w-2xl overflow-hidden rounded-[2rem] border bg-card p-8 shadow-glow sm:p-12",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-primary-foreground shadow-glow",
					children: /* @__PURE__ */ jsx(Sparkles, { className: "h-6 w-6" })
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-6 text-center text-3xl font-bold tracking-tight sm:text-4xl",
					children: "Your workspace is ready 🎉"
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mx-auto mt-3 max-w-lg text-center text-sm text-muted-foreground",
					children: ["Welcome to Contractly. Everything's set up — you can jump right into your workspace.", subdomain && /* @__PURE__ */ jsxs(Fragment, { children: [
						" ",
						"Your workspace subdomain: ",
						/* @__PURE__ */ jsx("span", {
							className: "font-medium text-foreground",
							children: subdomain
						})
					] })]
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "mt-8 grid gap-3 sm:grid-cols-2",
					children: [
						{
							icon: Check,
							t: "Subscription activated",
							d: "Your plan is live and ready to use."
						},
						{
							icon: Building2,
							t: "Workspace created",
							d: "We provisioned a dedicated workspace for your company."
						},
						{
							icon: KeyRound,
							t: "Admin account created",
							d: "You're the owner — invite teammates anytime."
						},
						{
							icon: Mail,
							t: "Verification email sent",
							d: "Check your inbox to confirm your email address."
						}
					].map((i) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-start gap-3 rounded-2xl border bg-secondary/40 p-4",
						children: [/* @__PURE__ */ jsx("span", {
							className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-success/15 text-success",
							children: /* @__PURE__ */ jsx(i.icon, { className: "h-4 w-4" })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "text-sm font-semibold",
							children: i.t
						}), /* @__PURE__ */ jsx("div", {
							className: "text-xs text-muted-foreground",
							children: i.d
						})] })]
					}, i.t))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row",
					children: [/* @__PURE__ */ jsxs(Button, {
						size: "lg",
						className: "bg-brand-gradient text-primary-foreground shadow-glow",
						children: ["Go to workspace ", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1 h-4 w-4" })]
					}), /* @__PURE__ */ jsx(Link, {
						to: "/",
						children: /* @__PURE__ */ jsx(Button, {
							size: "lg",
							variant: "outline",
							children: "Back to home"
						})
					})]
				})
			]
		})
	});
}
//#endregion
export { SuccessPage as component };
