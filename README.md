# country-data-finder

A lightweight package to get **country name**, **flag URL**, and **states/divisions** by providing a country code (e.g. `"US"`) or country name (e.g. `"United States"`).

- Full **TypeScript** support with built-in type definitions
- Works with **Node.js**, **React**, **Next.js**, or any JavaScript/TypeScript project
- Includes a **React Hook** (`useCountryInfo`) with memoization
- Covers **245 countries** with their states/divisions
- Zero dependencies (React is optional)

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

Returns a list of all 245 countries with name and code.

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
      <h2>{countryName} ({countryCode})</h2>
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

## TypeScript Types

The package exports the following types:

```ts
import type { CountryInfo, Country } from "country-data-finder";

// CountryInfo - returned by getCountryInfo() and useCountryInfo()
interface CountryInfo {
  countryName: string;
  countryCode: string;
  flagUrl: string | null;
  states: string[];
}

// Country - shape of each country in the data
interface Country {
  name: string;
  code: string;
  states: string[];
}
```

## Supported Input Formats

| Input           | Example         | Description                     |
| --------------- | --------------- | ------------------------------- |
| Country code    | `"US"`, `"GB"`  | ISO 3166-1 alpha-2 code         |
| Country name    | `"United States"` | Full country name              |
| Case-insensitive| `"united states"` | Works with any casing         |

## License

MIT
