export interface CrimeData {
  id: string;
  type: string;
  severity: "low" | "medium" | "high" | "critical";
  emirate: string;
  lat: number;
  lng: number;
  date: string;
  responseTime: number;
  cleared: boolean;
}

export interface ChartData {
  name: string;
  value: number;
  color?: string;
}

export interface MonthlyData {
  month: string;
  crimes: number;
  cleared: number;
}

export const emiratesCoordinates = {
  "Abu Dhabi": { lat: 24.4539, lng: 54.3773 },
  Dubai: { lat: 25.2048, lng: 55.2708 },
  Sharjah: { lat: 25.3573, lng: 55.4033 },
  Ajman: { lat: 25.4052, lng: 55.5136 },
  "Umer Al Quwain": { lat: 25.5641, lng: 55.6552 },
  "Ras Al Khaimah": { lat: 25.7889, lng: 55.9598 },
  Fujairah: { lat: 25.1288, lng: 56.3259 },
};

export const generateCrimeData = (): CrimeData[] => {
  const emirates = Object.keys(emiratesCoordinates);
  const crimeTypes = [
    "theft",
    "assault",
    "fraud",
    "vandalism",
    "burglary",
    "cybercrime",
  ];
  const severities: ("low" | "medium" | "high" | "critical")[] = [
    "low",
    "medium",
    "high",
    "critical",
  ];

  const data: CrimeData[] = [];

  emirates.forEach((emirate) => {
    const baseCoord =
      emiratesCoordinates[emirate as keyof typeof emiratesCoordinates];
    const crimeCount = Math.floor(Math.random() * 50) + 20;

    for (let i = 0; i < crimeCount; i++) {
      data.push({
        id: `${emirate}-${i}`,
        type: crimeTypes[Math.floor(Math.random() * crimeTypes.length)],
        severity: severities[Math.floor(Math.random() * severities.length)],
        emirate,
        lat: baseCoord.lat + (Math.random() - 0.5) * 0.5,
        lng: baseCoord.lng + (Math.random() - 0.5) * 0.5,
        date: new Date(
          2024,
          Math.floor(Math.random() * 12),
          Math.floor(Math.random() * 28) + 1,
          Math.floor(Math.random() * 24),
          Math.floor(Math.random() * 60),
          Math.floor(Math.random() * 60)
        ).toISOString(),
        responseTime: Math.floor(Math.random() * 60) + 5,
        cleared: Math.random() > 0.3,
      });
    }
  });

  return data;
};

export const crimeData = generateCrimeData();

export const getCrimesByType = (): ChartData[] => {
  const typeCount: Record<string, number> = {};

  crimeData.forEach((crime) => {
    typeCount[crime.type] = (typeCount[crime.type] || 0) + 1;
  });

  return Object.entries(typeCount).map(([name, value]) => ({ name, value }));
};

export const getCrimesByEmirate = (): ChartData[] => {
  const emirateCount: Record<string, number> = {};

  crimeData.forEach((crime) => {
    emirateCount[crime.emirate] = (emirateCount[crime.emirate] || 0) + 1;
  });

  return Object.entries(emirateCount).map(([name, value]) => ({ name, value }));
};

export const getSeverityData = (): ChartData[] => {
  const severityCount: Record<string, number> = {};

  crimeData.forEach((crime) => {
    severityCount[crime.severity] = (severityCount[crime.severity] || 0) + 1;
  });

  const colors = {
    low: "#10B981",
    medium: "#F59E0B",
    high: "#EF4444",
    critical: "#7C2D12",
  };

  return Object.entries(severityCount).map(([name, value]) => ({
    name,
    value,
    color: colors[name as keyof typeof colors],
  }));
};

export const getMonthlyTrends = (): MonthlyData[] => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return months.map((month, index) => {
    const monthCrimes = crimeData.filter((crime) => {
      const crimeMonth = new Date(crime.date).getMonth();
      return crimeMonth === index;
    });

    const cleared = monthCrimes.filter((crime) => crime.cleared).length;

    return {
      month,
      crimes: monthCrimes.length,
      cleared,
    };
  });
};

export const getStatistics = () => {
  const totalCrimes = crimeData.length;
  const highRiskAreas = Object.keys(emiratesCoordinates).filter((emirate) => {
    const emirateCrimes = crimeData.filter(
      (crime) => crime.emirate === emirate
    );
    return emirateCrimes.length > 40;
  }).length;

  const avgResponseTime = Math.round(
    crimeData.reduce((sum, crime) => sum + crime.responseTime, 0) /
      crimeData.length
  );

  const clearanceRate = Math.round(
    (crimeData.filter((crime) => crime.cleared).length / crimeData.length) * 100
  );

  return {
    totalCrimes,
    highRiskAreas,
    avgResponseTime,
    clearanceRate,
  };
};
