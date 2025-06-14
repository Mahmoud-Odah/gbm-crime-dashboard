"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { crimeData } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#800080"];

export function CrimeTimeDistributionChart() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const getTimeDistribution = () => {
    const timeSlots = {
      morning: 0,
      afternoon: 0,
      evening: 0,
      night: 0,
    };

    crimeData.forEach((crime) => {
      const hour = new Date(crime.date).getHours();
      if (hour >= 6 && hour < 12) timeSlots.morning++;
      else if (hour >= 12 && hour < 18) timeSlots.afternoon++;
      else if (hour >= 18 && hour < 24) timeSlots.evening++;
      else timeSlots.night++;
    });

    return [
      { name: t.morning || "Morning", value: timeSlots.morning },
      { name: t.afternoon || "Afternoon", value: timeSlots.afternoon },
      { name: t.evening || "Evening", value: timeSlots.evening },
      { name: t.night || "Night", value: timeSlots.night },
    ];
  };

  const data = getTimeDistribution();

  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={120}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: theme === "dark" ? "#1F2937" : "#FFFFFF",
            border:
              theme === "dark" ? "1px solid #374151" : "1px solid #E5E7EB",
            borderRadius: "6px",
          }}
          labelStyle={{
            color: theme === "dark" ? "#FFFFFF" : "#111827",
          }}
          itemStyle={{
            color: theme === "dark" ? "#FFFFFF" : "#111827",
          }}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
