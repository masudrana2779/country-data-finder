import { useMemo } from "react";
import { countryList } from "./data/countryList";
import { CountryInfo } from "./types";

/**
 * React hook: returns country name, flag URL, and states for a given country code or name.
 */
export function useCountryInfo(input: string): CountryInfo {
  return useMemo(() => {
    if (!input) {
      return { countryName: "", countryCode: "", flagUrl: null, states: [] };
    }

    const lower = input.toLowerCase();

    const country = countryList.find(
      (c) =>
        c.code.toLowerCase() === lower || c.name.toLowerCase() === lower
    );

    if (!country) {
      return {
        countryName: input,
        countryCode: "",
        flagUrl: null,
        states: [],
      };
    }

    return {
      countryName: country.name,
      countryCode: country.code,
      flagUrl: `https://flagcdn.com/w80/${country.code.toLowerCase()}.png`,
      states: country.states,
    };
  }, [input]);
}
