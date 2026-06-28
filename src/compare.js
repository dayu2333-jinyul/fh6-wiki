/**
 * 车辆对比工具 — Car Comparison Utilities
 *
 * 提供车辆之间的详细对比、按类别筛选、模糊搜索功能。
 * 数据源: ./data/cars.json
 */

const cars = require("../data/cars.json");
const { calculatePWR, classifyPWR, hpPerTonne } = require("./powerToWeight");

/**
 * 对比两辆车的详细性能差异
 * @param {string} nameA - 第一辆车的名称（模糊匹配）
 * @param {string} nameB - 第二辆车的名称（模糊匹配）
 * @returns {Object|null} 对比结果，包含各项差异和优胜标记；找不到时返回 null
 */
function compareCars(nameA, nameB) {
  const carA = findCar(nameA);
  const carB = findCar(nameB);

  if (!carA || !carB) return null;

  const pwrA = calculatePWR(carA.horsepower, carA.weight_kg);
  const pwrB = calculatePWR(carB.horsepower, carB.weight_kg);
  const hptA = hpPerTonne(carA.horsepower, carA.weight_kg);
  const hptB = hpPerTonne(carB.horsepower, carB.weight_kg);

  const zeroTo60Diff = Math.abs(carA.zero_to_60_mph - carB.zero_to_60_mph);

  return {
    carA: { name: carA.name, year: carA.year, hp: carA.horsepower, weight: carA.weight_kg, pwr: pwrA, hpt: hptA, zeroTo60: carA.zero_to_60_mph, topSpeed: carA.top_speed_kph, drivetrain: carA.drivetrain },
    carB: { name: carB.name, year: carB.year, hp: carB.horsepower, weight: carB.weight_kg, pwr: pwrB, hpt: hptB, zeroTo60: carB.zero_to_60_mph, topSpeed: carB.top_speed_kph, drivetrain: carB.drivetrain },
    comparison: {
      pwr: { difference: parseFloat((pwrA - pwrB).toFixed(4)), winner: pwrA > pwrB ? carA.name : carB.name },
      hpPerTonne: { difference: parseFloat((hptA - hptB).toFixed(1)), winner: hptA > hptB ? carA.name : carB.name },
      horsepower: { difference: carA.horsepower - carB.horsepower, winner: carA.horsepower > carB.horsepower ? carA.name : carB.name },
      weight: { difference: carA.weight_kg - carB.weight_kg, winner: carA.weight_kg < carB.weight_kg ? carA.name : carB.name },
      zeroTo60: { difference: parseFloat(zeroTo60Diff.toFixed(1)), winner: carA.zero_to_60_mph < carB.zero_to_60_mph ? carA.name : carB.name },
      topSpeed: { difference: carA.top_speed_kph - carB.top_speed_kph, winner: carA.top_speed_kph > carB.top_speed_kph ? carA.name : carB.name }
    },
    summary: `[${carA.name}]: PWR ${pwrA} (${classifyPWR(pwrA)}), 0-60 ${carA.zero_to_60_mph}s / [${carB.name}]: PWR ${pwrB} (${classifyPWR(pwrB)}), 0-60 ${carB.zero_to_60_mph}s`
  };
}

/**
 * 按类别筛选车辆
 * @param {string} category - 类别名称 (track/sports/muscle/hypercar/jdm/rally)
 * @returns {Array} 匹配类别的车辆数组
 */
function filterByCategory(category) {
  return cars.filter((c) => c.category.toLowerCase() === category.toLowerCase());
}

/**
 * 模糊搜索车名
 * @param {string} query - 搜索关键词（大小写不敏感）
 * @returns {Array} 匹配的车辆数组，按名称长度排序
 */
function searchCars(query) {
  const q = query.toLowerCase();
  return cars
    .filter((c) => c.name.toLowerCase().includes(q))
    .sort((a, b) => a.name.length - b.name.length);
}

/**
 * 获取所有可用类别
 * @returns {string[]} 去重后的类别列表
 */
function getCategories() {
  return [...new Set(cars.map((c) => c.category))];
}

/** 内部：按名称模糊查找单车 */
function findCar(name) {
  const q = name.toLowerCase();
  return cars.find((c) => c.name.toLowerCase().includes(q)) || null;
}

module.exports = { compareCars, filterByCategory, searchCars, getCategories };
