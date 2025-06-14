"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: number;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function StatsCard({ title, value, className, style }: StatsCardProps) {
  return (
    <div
      className={cn("flex flex-col items-center justify-center", className)}
      style={style}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 pb-2">
        <CardTitle className="text-7xl font-bold text-[#3CB371]">
          {value * 15}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-lg text-center">{title}</CardContent>
    </div>
  );
}
