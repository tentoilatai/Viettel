export interface Package {
  id: number;
  name: string;
  code: string;
  price: number;
  category: 'mobile' | 'data' | 'combo';
  features: string[];
  description: string;
  period: string;
  registrationMethod: string[];
  termsAndConditions: string[];
}