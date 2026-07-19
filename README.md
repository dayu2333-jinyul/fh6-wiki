# FH6 Wiki — The Complete Forza Horizon 6 Reference

[![Website](https://img.shields.io/badge/🌐-fh6wiki.com-ff6b35)](https://fh6wiki.com)
[![npm](https://img.shields.io/npm/v/fh6-wiki)](https://www.npmjs.com/package/fh6-wiki)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> The unofficial Forza Horizon 6 wiki — interactive map with all 119 locations, car tuning calculator, 800+ car database, and 60+ in-depth guides. Built by FH6 players for FH6 players.

**⭐ Star this repo if you find it useful — it helps other FH6 players discover the wiki!**

## 🌐 Website

**[fh6wiki.com](https://fh6wiki.com)** — Free online tool, no registration required.

## 📋 Core Tools

| Tool | Description |
|------|-------------|
| 🗺️ [Interactive Game Map](https://fh6wiki.com/map) | All 119 locations — Speed Zones, Danger Signs, Drift Zones, Barn Finds, XP Boards, Fast Travel Boards, and player houses with verified coordinates and 3-star targets |
| 🏎️ [Car Tuning Calculator](https://fh6wiki.com/tuning-calculator) | 60 cars with 6 presets — adjust gear ratios, tire pressure, camber, and suspension with live PI preview |
| 📊 [Car Comparison Tool](https://fh6wiki.com/compare-cars) | Compare up to 3 cars side by side — speed, acceleration, handling, and class ratings |
| 🚗 [800+ Car Database](https://fh6wiki.com/cars) | Full specs for every confirmed FH6 car across 27 manufacturers — speed, acceleration, handling, class, PI, and drivetrain |
| 🔍 [Search](https://fh6wiki.com/search) | Search across every page, guide, and car in the wiki |

## 📖 Popular Guides

- [Beginner's Guide](https://fh6wiki.com/beginner-guide) — everything a new Forza Horizon 6 player needs: starter car pick, credits, tuning basics
- [Best Cars Tier List](https://fh6wiki.com/cars) — every car ranked S2 through D class based on lap times
- [Best Starter Cars](https://fh6wiki.com/guides/best-starter-cars) — what to buy first with a limited budget (270K CR plan)
- [Tuning Guide](https://fh6wiki.com/tuning-guide) — tire pressure, gearing, camber, ARB, damping, aero, differential explained
- [Money Farming Guide](https://fh6wiki.com/guides/money-farming) — Goliath circuit, auction house flipping, wheelspin strategy ranked by CR/hour
- [FH5 vs FH6 Comparison](https://fh6wiki.com/compare) — what's new, what's changed, what carries over
- [Hidden & Rare Cars](https://fh6wiki.com/guides/hidden-cars) — where to find them and how to unlock
- [Seasonal Playlist](https://fh6wiki.com/seasonal-playlist) — current weekly rewards, challenges, and Forzathon points
- [Drag Racing Masterclass](https://fh6wiki.com/guides/drag-racing-tips) — best drag cars, launch techniques, AWD vs RWD
- [Credit Farming](https://fh6wiki.com/guides/money-farming) — every FH6 money-making method tested with real CR/hour numbers
- [Best Drift Cars](https://fh6wiki.com/fh6-best-drift-cars) — top drift builds for every budget
- [Fastest Cars in FH6](https://fh6wiki.com/fh6-fastest-cars) — top speed rankings, acceleration stats, and class meta analysis
- [Crash Landing Guide](https://fh6wiki.com/crash-landing-guide) — how to recover from bad situations and lost races
- [Festival Playlist Guide](https://fh6wiki.com/guides/festival-playlist) — never miss a seasonal reward car
- [Fast Travel Guide](https://fh6wiki.com/guides/fast-travel) — all board locations, house unlocks, free fast travel

## ⭐ Why Star This Project?

- **Helps the wiki grow** — more stars = better GitHub search ranking = more FH6 players discover it
- **Shows Google the site has community support** — GitHub stars are a proven EEAT signal for game wiki sites
- **Motivates more updates** — the more people star it, the more guides and tools we build

If FH6 Wiki saved you time finding a Barn Find, nailing a tune, or picking the right starter car — **star the repo ⭐**

## 🔧 npm Library: fh6-wiki

A JavaScript library for car performance comparison and power-to-weight ratio calculation, backed by a dataset of 33 real production vehicles (2022-2025). Zero external dependencies.

```bash
npm install fh6-wiki
```

### Quick start

```js
const wiki = require("fh6-wiki");

// Fuzzy search by car name
wiki.searchCars("GT3");

// Compare two cars head-to-head
wiki.compareCars("GT3 RS", "GT-R Nismo");

// Filter by category: track | sports | muscle | hypercar | jdm | rally
wiki.filterByCategory("hypercar");

// Performance math helpers
wiki.calculatePWR(500, 1500);            // 0.3333 hp/kg
wiki.classifyPWR(0.3);                   // "excellent"
wiki.hpPerTonne(500, 1500);              // 333.3
wiki.estimateZeroTo60(500, 1500, "AWD");  // ~3.7 seconds
wiki.getCategories();                     // ["track", "sports", ...]
```

### Requirements
- Node.js >= 14
- Zero external dependencies

### Data source
`data/cars.json` contains 33 real production vehicles (2022-2025) with verified specs across 6 categories: track monsters, sports cars, muscle cars, hypercars, JDM legends, and rally icons.

## 📂 About This Repository

This repository hosts the open-source documentation and npm package for [fh6wiki.com](https://fh6wiki.com). The web application is deployed on Cloudflare Pages.

---

⭐ **Star this repo to support FH6 Wiki — it's free, and it helps more players find the guides they need.**

*Not affiliated with Microsoft, Playground Games, or Turn 10 Studios. Forza Horizon is a trademark of Microsoft Corporation.*
