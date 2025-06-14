"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";
import { getCrimesByType } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";

const COLORS = [
  "#3CB371",
  "#FFA500",
  "#1E90FF",
  "#FF6347",
  "#9370DB",
  "#FFD700",
  "#20B2AA",
];

export function CrimeTypeChart() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const data = getCrimesByType();

  const chartData = data.map((item) => ({
    ...item,
    name: t[item.name as keyof typeof t] || item.name,
  }));

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={chartData}
        margin={{ top: 20, right: 20, left: -25, bottom: 5 }}
      >
        <XAxis
          dataKey="name"
          stroke={theme === "dark" ? "#9CA3AF" : "#6B7280"}
          fontSize={12}
        />
        <YAxis
          stroke={theme === "dark" ? "#9CA3AF" : "#6B7280"}
          fontSize={12}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: theme === "dark" ? "#1F2937" : "#FFFFFF",
            border:
              theme === "dark" ? "1px solid #374151" : "1px solid #E5E7EB",
            borderRadius: "6px",
          }}
        />
        <Bar dataKey="value" fill="#3CB371" barSize={25}>
          {chartData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
