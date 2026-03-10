"use client";

import { useState, useEffect } from "react";
import { Youtube, Twitter, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SocialBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("social-banner-dismissed")) {
      setDismissed(true);
      return;
    }

    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (dismissed || !visible) return null;

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("social-banner-dismissed", "true");
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 hidden lg:flex items-center gap-2 bg-card border border-border rounded-xl shadow-lg px-4 py-3">
      <div className="flex items-center gap-2">
        <a
          href="https://www.youtube.com/@meydeey"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="p-2 rounded-lg hover:bg-muted transition-colors"
        >
          <Youtube className="h-5 w-5 text-red-600" />
        </a>
        <a
          href="https://x.com/meydeey"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="p-2 rounded-lg hover:bg-muted transition-colors"
        >
          <Twitter className="h-5 w-5" />
        </a>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-6 w-6 ml-1"
        onClick={handleDismiss}
        aria-label="Fermer"
      >
        <X className="h-3 w-3" />
      </Button>
    </div>
  );
}
