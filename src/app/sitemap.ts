import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/basePath";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/portfolio",
    "/contact",
    "/services",
    "/services/mobile",
    "/services/mobile/flutter",
    "/services/mobile/android",
    "/services/mobile/ios",
    "/services/mobile/react-native",
    "/services/web",
    "/services/web/java",
    "/services/web/php",
    "/services/web/python",
    "/services/web/angular",
    "/services/web/vuejs",
    "/services/web/nodejs",
    "/services/web/reactjs",
    "/services/ai",
    "/services/ai/consulting",
    "/services/ai/generative-ai",
    "/services/ai/ai-agents",
    "/services/ai/chatbots",
    "/services/enterprise",
    "/services/design",
    "/llms.txt",
  ];

  const currentDate = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.8 : 0.7,
  }));
}
