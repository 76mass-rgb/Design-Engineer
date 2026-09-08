export type Language = 'en' | 'sk' | 'uk';
export type ThemeMode = 'dark' | 'light' | 'blueprint';

export type ProjectCategory = 
  | 'all'
  | 'industrial'
  | 'piping'
  | 'steel'
  | 'tanks'
  | 'equipment'
  | 'grain'
  | 'special';

export interface LocalizedString {
  uk: string;
  sk: string;
  en: string;
}

export interface LocalizedArray {
  uk: string[];
  sk: string[];
  en: string[];
}

export interface ProjectCaseStudy {
  problem?: LocalizedString;
  challenge?: LocalizedString;
  solution?: LocalizedString;
  designProcess?: LocalizedString;
  manufacturing?: LocalizedString;
  implementation?: LocalizedString;
  result?: LocalizedString;
}

export interface ProjectItem {
  id: string;
  year: number;
  title: LocalizedString;
  category: LocalizedString;
  categoryId: ProjectCategory;
  description?: LocalizedString;
  engineeringChallenge?: LocalizedString;
  workPerformed?: LocalizedString;
  implementation?: LocalizedString;
  result?: LocalizedString;
  caseStudy?: ProjectCaseStudy;
  specs?: LocalizedArray;
  coverImage: string;
  photos: string[];
  drawings: string[];
  images: string[]; // Combined photos + drawings for backwards compatibility
  gridSpan?: number; // 4, 5, 6, 7 for bento layout
  location?: LocalizedString;
  clientRole?: LocalizedString;
  badge?: LocalizedString;
  seoTitle?: LocalizedString;
  seoDescription?: LocalizedString;
  altText?: LocalizedString;
}

export interface SkillItem {
  id: string;
  icon: string;
  name: LocalizedString;
  desc: LocalizedString;
  tags?: string[];
  wide?: boolean;
}

export interface EducationItem {
  id: string;
  year: string;
  school: LocalizedString;
  spec: LocalizedString;
  degreeType: LocalizedString;
  details?: LocalizedString;
}

export interface CertificateItem {
  id: string;
  year: string;
  name: LocalizedString;
  institution: LocalizedString;
  badge: LocalizedString;
  description: LocalizedString;
}

export interface ContactInfo {
  phone: string;
  phoneRaw: string;
  email: string;
  location: string;
  locationDetails: LocalizedString;
  experienceYears: number;
  completedProjects: string;
  degreesCount: number;
}


export interface RealResultImage {
  id: string;
  projectId?: string;
  title: LocalizedString;
  category: LocalizedString;
  year: string;
  imageUrl: string;
  description: LocalizedString;
}
