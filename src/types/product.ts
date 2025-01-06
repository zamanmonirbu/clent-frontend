export interface Product {
  id: string;
  name: string;
  storage: string;
  price: number;
  originalPrice?: number;
  condition: string;
  batteryHealth: string;
  colors: string[];
  image: string;
  rating: number;
  reviews: number;
  discount?: boolean;
  warranty: boolean;
  releaseDate: Date;
}