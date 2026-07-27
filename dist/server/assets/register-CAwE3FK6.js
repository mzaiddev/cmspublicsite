import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
//#region src/routes/register.tsx
var $$splitComponentImporter = () => import("./register-BQRGOFG-.js");
var searchSchema = z.object({
	plan: z.string().default(""),
	billing: z.enum(["monthly", "yearly"]).default("yearly"),
	modules: z.string().default("")
});
var Route = createFileRoute("/register")({
	validateSearch: searchSchema,
	head: () => ({
		meta: [
			{ title: "Create your workspace — Contractly" },
			{
				name: "description",
				content: "Set up your Contractly workspace in minutes. Company details, plan, modules, and secure payment."
			},
			{
				property: "og:title",
				content: "Create your workspace — Contractly"
			},
			{
				property: "og:description",
				content: "Multi-step signup for your Contractly workspace."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/register"
			},
			{
				name: "robots",
				content: "noindex"
			}
		],
		links: [{
			rel: "canonical",
			href: "/register"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
/** Payment step when there's a real amount due — collects card details via Stripe Elements. */
/** Payment step when nothing is due (e.g. a 100%-off coupon) — no card needed. */
//#endregion
export { Route as t };
