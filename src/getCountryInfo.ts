import { countryList } from "./data/countryList";
import { CountryInfo } from "./types";

/**
 * Returns country name, flag URL, and states for a given country code or name.
 * Works in any JS/TS environment (no React needed).
 */
export function getCountryInfo(input: string): CountryInfo {
  if (!input) {
    return { countryName: "", countryCode: "", flagUrl: null, states: [] };
  }

  const lower = input.toLowerCase();

  const country = countryList.find(
    (c) =>
      c.code.toLowerCase() === lower || c.name.toLowerCase() === lower
  );

  if (!country) {
    return { countryName: input, countryCode: "", flagUrl: null, states: [] };
  }

  return {
    countryName: country.name,
    countryCode: country.code,
    flagUrl: `https://flagcdn.com/w80/${country.code.toLowerCase()}.png`,
    states: country.states,
  };
}

/**
 * Returns all countries in the list.
 */
export function getAllCountries() {
  return countryList.map((c) => ({
    name: c.name,
    code: c.code,
  }));
}

/**
 * Returns the states/divisions of a country by code or name.
 */
export function getStates(input: string): string[] {
  if (!input) return [];
  const lower = input.toLowerCase();
  const country = countryList.find(
    (c) =>
      c.code.toLowerCase() === lower || c.name.toLowerCase() === lower
  );
  return country ? country.states : [];
}
