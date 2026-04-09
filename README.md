# Country Data Finder

A comprehensive, lightweight library to get **country name**, **country code**, **flag URL**, **postal code format**, and **states/divisions** by providing a country code or country name.

[![npm version](https://img.shields.io/npm/v/country-data-finder.svg)](https://www.npmjs.com/package/country-data-finder)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/country-data-finder.svg)](https://www.npmjs.com/package/country-data-finder)

**GitHub Repository:** [https://github.com/masudrana2779/country-data-finder](https://github.com/masudrana2779/country-data-finder)

---

## Features

- **Comprehensive Data** — 249 countries with states/divisions, postal code formats, and flag URLs
- **TypeScript Support** — Full built-in type definitions
- **React Hook** — `useCountryInfo()` with memoization for React 16.8+
- **Universal** — Works with Node.js, React, Next.js, or any JavaScript/TypeScript project
- **Zero Dependencies** — Lightweight and self-contained (React is optional peer dependency)
- **Flexible Search** — Look up by ISO 3166-1 alpha-2 code or country name (case-insensitive)
- **Postal Code Patterns** — Regex-based postal/zip code formats for validation

---

## Installation

```bash
npm install country-data-finder
```

```bash
yarn add country-data-finder
```

```bash
pnpm add country-data-finder
```

---

## Quick Start

```ts
import { getCountryInfo } from "country-data-finder";

// Search by country code
const info = getCountryInfo("US");
console.log(info);
// {
//   countryName: "United States",
//   countryCode: "US",
//   flagUrl: "https://flagcdn.com/w80/us.png",
//   states: ["Alabama", "Alaska", "Arizona", ... "Wyoming"]
// }

// Search by country name (case-insensitive)
const info2 = getCountryInfo("united states");
console.log(info2);
// {
//   countryName: "United States",
//   countryCode: "US",
//   flagUrl: "https://flagcdn.com/w80/us.png",
//   states: ["Alabama", "Alaska", "Arizona", ... "Wyoming"]
// }
```

---

## API Reference

### `getCountryInfo(input: string): CountryInfo`

Returns full country details for a given country code or name.

```ts
import { getCountryInfo } from "country-data-finder";

const result = getCountryInfo("US");
// result.countryName  → "United States"
// result.countryCode  → "US"
// result.flagUrl      → "https://flagcdn.com/w80/us.png"
// result.states       → ["Alabama", "Alaska", "Arizona", ... "Wyoming"]
```

If the input does not match any country:

```ts
const result = getCountryInfo("XYZ");
// { countryName: "XYZ", countryCode: "", flagUrl: null, states: [] }
```

---

### `getStates(input: string): string[]`

Returns only the states/divisions of a country.

```ts
import { getStates } from "country-data-finder";

const states = getStates("US");
// ["Alabama", "Alaska", "Arizona", ... "Wyoming"]

const states2 = getStates("United Kingdom");
// ["England", "Northern Ireland", "Scotland", "Wales"]
```

---

### `getAllCountries(): { name: string; code: string }[]`

Returns a list of all 249 countries with name and code.

```ts
import { getAllCountries } from "country-data-finder";

const countries = getAllCountries();
// [
//   { name: "Afghanistan", code: "AF" },
//   { name: "Albania", code: "AL" },
//   ...
// ]
```

---

### `useCountryInfo(input: string): CountryInfo` — React Hook

A React hook that returns memoized country info. Requires React 16.8+.

```tsx
import { useCountryInfo } from "country-data-finder";

function CountryCard({ code }: { code: string }) {
  const { countryName, countryCode, flagUrl, states } = useCountryInfo(code);

  return (
    <div>
      {flagUrl && <img src={flagUrl} alt={countryName} />}
      <h2>
        {countryName} ({countryCode})
      </h2>
      <p>{states.length} states/divisions</p>
      <ul>
        {states.map((state) => (
          <li key={state}>{state}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## Available Data

Each country entry includes:

| Field      | Type       | Description                                                                 |
| ---------- | ---------- | --------------------------------------------------------------------------- |
| `name`     | `string`   | English country name                                                        |
| `code`     | `string`   | [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code |
| `postCode` | `string`   | Postal/zip code regex pattern (empty if none)                               |
| `states`   | `string[]` | List of states, provinces, or divisions                                     |

---

## TypeScript Types

The package exports the following types:

```ts
import type { CountryInfo, Country } from "country-data-finder";

// CountryInfo — returned by getCountryInfo() and useCountryInfo()
interface CountryInfo {
  countryName: string;
  countryCode: string;
  flagUrl: string | null;
  states: string[];
}

// Country — shape of each country in the data
interface Country {
  name: string;
  code: string;
  postCode: string;
  states: string[];
}
```

---

## Supported Input Formats

| Input            | Example           | Description             |
| ---------------- | ----------------- | ----------------------- |
| Country code     | `"US"`, `"GB"`    | ISO 3166-1 alpha-2 code |
| Country name     | `"United States"` | Full country name       |
| Case-insensitive | `"united states"` | Works with any casing   |

---

## Contribute

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the [repository](https://github.com/masudrana2779/country-data-finder)
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](https://github.com/masudrana2779/country-data-finder/blob/main/LICENSE) file for details.
