/**
 * fh6-wiki — Vehicle Performance Database & Calculator
 *
 * 使用:
 *   const wiki = require("fh6-wiki");
 *   wiki.searchCars("911")  // 搜索
 *   wiki.compareCars("GT3 RS", "GT-R")  // 对比
 */
const { calculatePWR, classifyPWR, hpPerTonne, estimateZeroTo60 } = require("./src/powerToWeight");
const { compareCars, filterByCategory, searchCars, getCategories } = require("./src/compare");

module.exports = {
  calculatePWR,
  classifyPWR,
  hpPerTonne,
  estimateZeroTo60,
  compareCars,
  filterByCategory,
  searchCars,
  getCategories
};
