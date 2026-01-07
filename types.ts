
// Update SectionId enum to include all required keys for navigation and page routing
export enum SectionId {
  HOME = 'home',
  GUIDE = 'guide',
  PRINCIPLES = 'principles',
  ASSETS = 'assets',
  AI = 'ai',
  SHOWCASE = 'showcase',
  HERO = 'hero',
  MONOLITH = 'monolith',
  GRID = 'grid',
  LOGO = 'logo',
  COLORS = 'colors'
}

export interface NavItem {
  id: SectionId;
  label: string;
}

// Add missing BrandAttribute interface used in constants.tsx for brand attributes definitions
export interface BrandAttribute {
  title: string;
  manifesto: string;
  associated: string[];
  antagonistic: string[];
  verbs: string[];
  note: string;
}
