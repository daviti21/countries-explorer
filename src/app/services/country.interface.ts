export interface Country {
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital?: string;
  topLevelDomain: string[];
  currencies?: {
    name: string;
  }[];
  languages: {
    name: string;
  }[];
  borders?: string[];
  flags: {
    svg: string;
    png: string;
  };
  alpha3Code: string;
}
