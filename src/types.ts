export interface MembershipPlan {
  id: string;
  name: string;
  category: 'standard' | 'couple' | 'pt' | 'addons';
  subCategory?: string;
  duration: string;
  regularPrice?: number;
  salePrice: number;
  monthlyEquivalent?: number;
  savings?: number;
  popular?: boolean;
  tag?: string;
  features: string[];
  note?: string;
}

export interface RegistrationFormData {
  fullName: string;
  phone: string;
  email: string;
  planId: string;
  startDate: string;
  fitnessGoals: string;
  experienceLevel?: string;
}

export interface RegistrationSubmission extends RegistrationFormData {
  id: string;
  planName: string;
  price: number;
  submittedAt: string;
  status: 'confirmed' | 'pending';
}

export interface Facility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export interface GymService {
  id: string;
  title: string;
  category: 'rehab' | 'specialized' | 'performance' | 'personal' | 'wellness';
  categoryLabel: string;
  tag: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  idealFor: string;
  iconName: string;
  recommendedPlanId?: string;
}

export interface GoogleReview {
  id: string;
  author: string;
  avatarColor?: string;
  badge?: string;
  isLocalGuide?: boolean;
  rating: number;
  timeAgo: string;
  text: string;
  trainerMentioned?: string;
  category: 'trainers' | 'rehab' | 'women_safety' | 'transformations' | 'general';
  ownerResponse?: {
    timeAgo: string;
    text: string;
  };
}

