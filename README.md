# FH6 Wiki

🗺️ Interactive game map with all collectibles locations. Free online tool — no registration required.

## 🌐 Website

**[fh6wiki.com](https://fh6wiki.com)**

## 📋 Features

- 🗺️ [Interactive game map](https://fh6wiki.com/map) with all collectibles locations
- 🏎️ [Car tuning calculator](https://fh6wiki.com/tuning-calculator) with 24 presets
- 📊 [Car performance comparison tool](https://fh6wiki.com/compare-cars)
- 📚 [60+ game guides](https://fh6wiki.com/guides) — tuning, drifting, auction house, seasons
- 🚗 [800+ car database](https://fh6wiki.com/cars) with stats by brand and class

## 📖 Popular Guides

- [Beginner's Guide to FH6](https://fh6wiki.com/beginner-guide) — everything new players need
- [Best Cars Tier List](https://fh6wiki.com/cars) — top picks for every class
- [Car Comparison](https://fh6wiki.com/compare) — side-by-side performance stats
- [Tuning Guide](https://fh6wiki.com/tuning-guide) — basics of ride height, damping, gearing
- [Hidden & Rare Cars](https://fh6wiki.com/guides/hidden-cars) — where to find them
- [Seasonal Playlist](https://fh6wiki.com/seasonal-playlist) — current rewards and challenges

## 📂 About This Repository

This repository hosts the open-source landing page and documentation for [fh6wiki.com](https://fh6wiki.com). The actual web application is deployed on Cloudflare Pages.

## 🔧 For Developers

A JavaScript library for car performance comparison and power-to-weight ratio calculation, backed by a dataset of 33 real production vehicles.

### Installation

```bash
npm install fh6-wiki
```

Or clone directly:

```bash
git clone https://github.com/dayu2333-jinyul/fh6-wiki.git
```

### API

#### `searchCars(query)`
Fuzzy search by car name (case-insensitive).
```js
const wiki = require("fh6-wiki");
wiki.searchCars("GT3");
// [{ name: "Porsche 911 GT3 RS", horsepower: 518, ... }]
```

#### `compareCars(nameA, nameB)`
Detailed performance comparison between two cars.
```js
const result = wiki.compareCars("GT3 RS", "GT-R Nismo");
// { carA: {...}, carB: {...}, comparison: { pwr, hpPerTonne, horsepower, weight, zeroTo60, topSpeed }, summary: "..." }
```

#### `filterByCategory(category)`
Get all cars in a category: `track` | `sports` | `muscle` | `hypercar` | `jdm` | `rally`
```js
wiki.filterByCategory("hypercar");
// 6 hypercars
```

#### `calculatePWR(hp, weightKg)`
Power-to-weight ratio (hp/kg).
```js
wiki.calculatePWR(500, 1500); // 0.3333
```

#### `classifyPWR(ratio)`
Performance tier: `poor` | `average` | `good` | `excellent` | `supercar`
```js
wiki.classifyPWR(0.3); // "excellent"
```

#### `hpPerTonne(hp, weightKg)`
Horsepower per metric tonne.
```js
wiki.hpPerTonne(500, 1500); // 333.3
```

#### `estimateZeroTo60(hp, weightKg, drivetrain)`
Rough 0-60 mph estimate.
```js
wiki.estimateZeroTo60(500, 1500, "AWD"); // ~3.7
```

#### `getCategories()`
List all available categories.
```js
wiki.getCategories(); // ["track", "sports", "muscle", "hypercar", "jdm", "rally"]
```

### Requirements
- Node.js >= 14
- Zero external dependencies

### Data
`data/cars.json` contains 33 real production vehicles (2022-2025) with verified specs across 6 categories.

---

*Free online tool — no registration required*
