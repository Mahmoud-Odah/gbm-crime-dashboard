import { useLanguage } from "@/contexts/LanguageContext";
import { getStatistics } from "@/lib/data";

const StatisticsList = () => {
  const { t } = useLanguage();
  const stats = getStatistics();

  const statistics = [
    { key: t.totalCrimes, value: stats.totalCrimes.toLocaleString() },
    { key: t.highRiskAreas, value: stats.highRiskAreas },
    { key: t.averageResponseTime, value: `${stats.avgResponseTime} ${t.minutes}` },
    { key: t.clearanceRate, value: `${stats.clearanceRate}%` },
  ];

  return (
    <div className="space-y-4 max-h-[450px] overflow-y-auto custom-scrollbar">
      {statistics.map((stat, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
        >
          <span className="text-muted-foreground">{stat.key}</span>
          <span className="font-semibold">{stat.value}</span>
        </div>
      ))}
      {statistics.map((stat, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
        >
          <span className="text-muted-foreground">{stat.key}</span>
          <span className="font-semibold">{stat.value}</span>
        </div>
      ))}
    </div>
  );
};

export default StatisticsList;