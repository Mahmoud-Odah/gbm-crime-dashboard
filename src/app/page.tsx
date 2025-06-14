"use client";
import { StatsCard } from "@/components/ui/stats-card";
import dynamic from "next/dynamic";
import Image from "next/image";
import { CrimeTypeChart } from "@/components/charts/CrimeTypeChart";
import { EmirateDistributionChart } from "@/components/charts/EmirateDistributionChart";
import { SeverityChart } from "@/components/charts/SeverityChart";
import { ResponseTimeChart } from "@/components/charts/ResponseTimeChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { getStatistics } from "@/lib/data";
import {
  AlertTriangle,
  TrendingUp,
  MapPin,
  BarChart3,
  PieChart,
  Timer,
} from "lucide-react";
import { useEffect, useState } from "react";
import StatisticsList from "@/components/StatisticsList";
import { CrimeTimeDistributionChart } from "@/components/charts/CrimeTimeDistributionChart";
import { useTheme } from "next-themes";

const CrimeMap = dynamic(
  () => import("@/components/CrimeMap").then((mod) => mod.CrimeMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] bg-muted rounded-lg flex items-center justify-center">
        <div className="text-muted-foreground">Loading map...</div>
      </div>
    ),
  }
);

export default function Home() {
  const { t, direction } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const stats = getStatistics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`min-h-screen bg-background transition-all duration-300 ${
        direction === "rtl" ? "rtl" : "ltr"
      }`}
    >
      <main className="container mx-auto px-4 py-4 space-y-8 md:space-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-center">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col sm:flex-row items-center gap-4">
            <Image
              src={
                theme === "dark" ? "/header-logo.png" : "/header-logo-dark.png"
              }
              alt="App Logo"
              width={350}
              height={150}
              priority
            />
          </div>

          <StatsCard
            title={t.totalCrimes}
            value={stats.totalCrimes}
            className="col-span-1 animate-fade-in"
          />
          <StatsCard
            title={t.highRiskAreas}
            value={stats.highRiskAreas}
            className="col-span-1 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          />
          <StatsCard
            title={t.averageResponseTime}
            value={stats.avgResponseTime}
            className="col-span-1 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          />
          <StatsCard
            title={t.clearanceRate}
            value={stats.clearanceRate}
            className="col-span-1 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
          <Card
            className="animate-slide-up col-span-1 sm:col-span-2 lg:col-span-3"
            style={{ animationDelay: "0.4s" }}
          >
            <CardHeader className="flex flex-row items-center space-y-0 pb-2ˆ">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-muted-foreground" />
                <CardTitle className="text-lg font-semibold">
                  {t.severityOverview}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <StatisticsList />
            </CardContent>
          </Card>

          <Card
            className="animate-slide-up col-span-1 sm:col-span-2 lg:col-span-4"
            style={{ animationDelay: "0.4s" }}
          >
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-muted-foreground" />
                <CardTitle className="text-lg font-semibold">
                  {t.severityOverview}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <SeverityChart />
            </CardContent>
          </Card>

          {/* Crime Map */}
          <Card className="col-span-1 sm:col-span-2 lg:col-span-5 animate-slide-up">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <CardTitle className="text-lg font-semibold">
                  {t.crimeHeatmap}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CrimeMap />
            </CardContent>
          </Card>

          <Card
            className="animate-slide-up col-span-1 sm:col-span-2 lg:col-span-4"
            style={{ animationDelay: "0.6s" }}
          >
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <div className="flex items-center gap-2">
                <Timer className="h-5 w-5 text-muted-foreground" />
                <CardTitle className="text-lg font-semibold">
                  {t.responseTimeAnalysis}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ResponseTimeChart />
            </CardContent>
          </Card>
          <Card
            className="animate-slide-up col-span-1 sm:col-span-2 lg:col-span-3"
            style={{ animationDelay: "0.1s" }}
          >
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-muted-foreground" />
                <CardTitle className="text-lg font-semibold">
                  {t.crimesByType}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CrimeTypeChart />
            </CardContent>
          </Card>
          <Card
            className="animate-slide-up col-span-1 sm:col-span-2 lg:col-span-2"
            style={{ animationDelay: "0.3s" }}
          >
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <div className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-muted-foreground" />
                <CardTitle className="text-lg font-semibold">
                  {t.distributionByEmirate}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <EmirateDistributionChart />
            </CardContent>
          </Card>
          <Card
            className="animate-slide-up col-span-1 sm:col-span-2 lg:col-span-3"
            style={{ animationDelay: "0.1s" }}
          >
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-muted-foreground" />
                <CardTitle className="text-lg font-semibold">
                  {t.crimeTimeDistribution}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CrimeTimeDistributionChart />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
