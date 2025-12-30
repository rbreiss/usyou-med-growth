
export interface DiagnosticRequest {
  name: string;
  email: string;
  revenue: string;
}

export interface CaseStudyData {
  doctor: string;
  growth: string;
  increase: string;
  city: string;
}

// BrandSettings interface used for application-wide branding and target audience personalization.
export interface BrandSettings {
  productName: string;
  targetAudience: string;
  logoUrl: string | null;
}
