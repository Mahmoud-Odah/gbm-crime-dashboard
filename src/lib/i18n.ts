export type Language = 'en' | 'ar';
export type Direction = 'ltr' | 'rtl';

export interface TranslationKeys {
  dashboard: string;
  crimeDataDashboard: string;
  totalCrimes: string;
  highRiskAreas: string;
  averageResponseTime: string;
  clearanceRate: string;
  crimesByType: string;
  monthlyTrends: string;
  distributionByEmirate: string;
  severityOverview: string;
  crimeHeatmap: string;
  minutes: string;
  switchLanguage: string;
  toggleTheme: string;
  high: string;
  medium: string;
  low: string;
  critical: string;
  abudhabi: string;
  dubai: string;
  sharjah: string;
  ajman: string;
  umeralquwain: string;
  rasalkhaimah: string;
  fujairah: string;
  theft: string;
  assault: string;
  fraud: string;
  vandalism: string;
  burglary: string;
  cybercrime: string;
  jan: string;
  feb: string;
  mar: string;
  apr: string;
  may: string;
  jun: string;
  jul: string;
  aug: string;
  sep: string;
  oct: string;
  nov: string;
  dec: string;
  emirate: string;
  severity: string;
  date: string;
  responseTime: string;
  status: string;
  cleared: string;
  pending: string;
  morning: string;
  afternoon: string;
  evening: string;
  night: string;
  crimeTimeDistribution: string;
  responseTimeAnalysis: string;
  footerText: string;
  footerAllRightsReserved: string;
}

export const translations: Record<Language, TranslationKeys> = {
  en: {
    dashboard: 'Dashboard',
    crimeDataDashboard: 'UAE Crime Data Dashboard',
    totalCrimes: 'Total Crimes',
    highRiskAreas: 'High Risk Areas',
    averageResponseTime: 'Avg Response Time',
    clearanceRate: 'Clearance Rate',
    crimesByType: 'Crimes by Type',
    monthlyTrends: 'Monthly Trends',
    distributionByEmirate: 'Distribution by Emirate',
    severityOverview: 'Severity Overview',
    crimeHeatmap: 'Crime Heatmap',
    minutes: 'minutes',
    switchLanguage: 'Switch Language',
    toggleTheme: 'Toggle Theme',
    high: 'High',
    medium: 'Medium',
    low: 'Low',
    critical: 'Critical',
    abudhabi: 'Abu Dhabi',
    dubai: 'Dubai',
    sharjah: 'Sharjah',
    ajman: 'Ajman',
    umeralquwain: 'Umer Al Quwain',
    rasalkhaimah: 'Ras Al Khaimah',
    fujairah: 'Fujairah',
    theft: 'Theft',
    assault: 'Assault',
    fraud: 'Fraud',
    vandalism: 'Vandalism',
    burglary: 'Burglary',
    cybercrime: 'Cybercrime',
    jan: 'Jan',
    feb: 'Feb',
    mar: 'Mar',
    apr: 'Apr',
    may: 'May',
    jun: 'Jun',
    jul: 'Jul',
    aug: 'Aug',
    sep: 'Sep',
    oct: 'Oct',
    nov: 'Nov',
    dec: 'Dec',
    emirate: 'Emirate',
    severity: 'Severity',
    date: 'Date',
    responseTime: 'Response Time',
    status: 'Status',
    cleared: 'Cleared',
    pending: 'Pending',
    morning: 'Morning',
    afternoon: 'Afternoon',
    evening: 'Evening',
    night: 'Night',
    crimeTimeDistribution: 'Crime Time Distribution',
    responseTimeAnalysis: 'Response Time Analysis',
    footerText: 'GBM Crime Map',
    footerAllRightsReserved: 'All rights reserved',
  },
  ar: {
    dashboard: 'لوحة التحكم',
    crimeDataDashboard: 'لوحة بيانات الجريمة في دولة الإمارات',
    totalCrimes: 'إجمالي الجرائم',
    highRiskAreas: 'المناطق عالية الخطر',
    averageResponseTime: 'متوسط وقت الاستجابة',
    clearanceRate: 'معدل الحل',
    crimesByType: 'الجرائم حسب النوع',
    monthlyTrends: 'الاتجاهات الشهرية',
    distributionByEmirate: 'التوزيع حسب الإمارة',
    severityOverview: 'نظرة عامة على الخطورة',
    crimeHeatmap: 'خريطة الجريمة',
    minutes: 'دقيقة',
    switchLanguage: 'تغيير اللغة',
    toggleTheme: 'تغيير السمة',
    high: 'عالي',
    medium: 'متوسط',
    low: 'منخفض',
    critical: 'حرج',
    abudhabi: 'أبوظبي',
    dubai: 'دبي',
    sharjah: 'الشارقة',
    ajman: 'عجمان',
    umeralquwain: 'أم القيوين',
    rasalkhaimah: 'رأس الخيمة',
    fujairah: 'الفجيرة',
    theft: 'سرقة',
    assault: 'اعتداء',
    fraud: 'احتيال',
    vandalism: 'تخريب',
    burglary: 'سطو',
    cybercrime: 'جريمة إلكترونية',
    jan: 'يناير',
    feb: 'فبراير',
    mar: 'مارس',
    apr: 'أبريل',
    may: 'مايو',
    jun: 'يونيو',
    jul: 'يوليو',
    aug: 'أغسطس',
    sep: 'سبتمبر',
    oct: 'أكتوبر',
    nov: 'نوفمبر',
    dec: 'ديسمبر',
    emirate: 'الإمارة',
    severity: 'الخطورة',
    date: 'التاريخ',
    responseTime: 'وقت الاستجابة',
    status: 'الحالة',
    cleared: 'تم الحل',
    pending: 'قيد الانتظار',
    morning: 'صباحاً',
    afternoon: 'ظهراً',
    evening: 'مساءً',
    night: 'ليلاً',
    crimeTimeDistribution: 'توزيع الجرائم حسب الوقت',
    responseTimeAnalysis: 'تحليل وقت الاستجابة',
    footerText: 'GBM خريطة الجرائم',
    footerAllRightsReserved: 'جميع الحقوق محفوظة',
  },
};

export const getDirection = (language: Language): Direction => {
  return language === 'ar' ? 'rtl' : 'ltr';
};