
export interface Country {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  area: number;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  currencies?: Record<string, {
    name: string;
    symbol: string;
  }>;
  languages?: Record<string, string>;
  latlng: [number, number];
  borders?: string[];
  cca2: string; // Código de país de 2 letras
  cca3: string; // Código de país de 3 letras
}

