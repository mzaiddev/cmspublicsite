import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
//#region src/routes/success.tsx
var $$splitComponentImporter = () => import("./success-C1y59N7r.js");
var Route = createFileRoute("/success")({
	validateSearch: z.object({
		plan: z.string().optional(),
		subdomain: z.string().optional()
	}),
	head: () => ({
		meta: [
			{ title: "Workspace created — Contractly" },
			{
				name: "description",
				content: "Your Contractly workspace is ready. Verify your email and jump in."
			},
			{
				name: "robots",
				content: "noindex"
			}
		],
		links: [{
			rel: "canonical",
			href: "/success"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
