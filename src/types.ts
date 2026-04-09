export interface Country {
  name: string;
  code: string;
  postCode: string;
  states: string[];
}

export interface CountryInfo {
  countryName: string;
  countryCode: string;
  flagUrl: string | null;
  states: string[];
}
