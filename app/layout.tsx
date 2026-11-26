import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";
export const metadata: Metadata = { title: "Jaden Morales | Computer Science & Applied AI", description: "Jaden Morales builds full-stack systems, multi-agent pipelines, and computer vision tools." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><head><meta charSet="utf-8" /></head><body>{children}<Analytics /><SpeedInsights /></body></html>; }
