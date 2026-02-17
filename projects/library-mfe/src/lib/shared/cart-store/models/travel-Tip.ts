export interface TravelTip {
  id: string;
  countryCode: string;
  countryName: string;
  countryFlag: string;
  title: string;
  description: string;
  category: 'cultura' | 'gastronomía' | 'seguridad' | 'transporte' | 'alojamiento' | 'clima';
  author: string;
  date: string;
  likes: number;
  image?: string;
  isFavorite?: boolean;
}
