import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my learning project showcasing React, Next.js, and modern web development practices.",
};

export default function HomePage() {
  return (
    <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
  );
}
