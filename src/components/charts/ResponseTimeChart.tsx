"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { crimeData } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";

export function ResponseTimeChart() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const getResponseTimeData = () => {
    const timeRanges = {
      "0-10": 0,
      "11-20": 0,
      "21-30": 0,
      "31-45": 0,
      "46-60": 0,
      "60+": 0,
    };

    crimeData.forEach((crime) => {
      const time = crime.responseTime;
      if (time <= 10) timeRanges["0-10"]++;
      else if (time <= 20) timeRanges["11-20"]++;
      else if (time <= 30) timeRanges["21-30"]++;
      else if (time <= 45) timeRanges["31-45"]++;
      else if (time <= 60) timeRanges["46-60"]++;
      else timeRanges["60+"]++;
    });

    return Object.entries(timeRanges).map(([range, count]) => ({
      range,
      count,
      percentage: Math.round((count / crimeData.length) * 100),
    }));
  };

  const data = getResponseTimeData();

  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 20, left: -25, bottom: 5 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke={theme === "dark" ? "#374151" : "#E5E7EB"}
        />
        <XAxis
          dataKey="range"
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
          formatter={(value, name) => [
            `${value} cases (${
              data.find((d) => d.count === value)?.percentage
            }%)`,
            t.responseTime || "Response Time",
          ]}
        />
        <Area
          type="monotone"
          dataKey="count"
          stroke={theme === "dark" ? "#8B5CF6" : "#7C3AED"}
          fill={theme === "dark" ? "#8B5CF6" : "#7C3AED"}
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
