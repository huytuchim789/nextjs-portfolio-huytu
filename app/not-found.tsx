import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist. Navigate back to Tran Huy Tu's portfolio.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="h-full flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <h1 className="text-8xl font-bold text-accent">404</h1>
          <h2 className="text-4xl font-bold">Page Not Found</h2>
          <p className="text-white/60 max-w-md">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link href="/">
            <Button size="lg" variant="outline">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}