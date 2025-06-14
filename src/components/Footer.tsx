"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="w-fullborder-border bg-background px-4 py-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/footer-logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="h-auto"
          />
        </div>

        <div
          className="text-sm text-muted-foreground text-center"
        >
          {t.footerText}
          <br />© {new Date().getFullYear()} {t.footerAllRightsReserved}
        </div>
      </div>
    </footer>
  );
}
