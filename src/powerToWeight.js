/**
 * 功率重量比计算器 — Power-to-Weight Ratio Calculator
 *
 * 衡量车辆性能的核心指标：每公斤车重分配到的马力数。
 * 比值越高，加速性能越强（在同等条件下）。
 */

/**
 * 计算功率重量比 (hp/kg)
 * @param {number} hp - 马力 (horsepower)
 * @param {number} weightKg - 车重 (kg)
 * @returns {number} 功率重量比，保留 4 位小数
 * @throws {Error} 如果参数非正数
 */
function calculatePWR(hp, weightKg) {
  if (hp <= 0 || weightKg <= 0) {
    throw new Error("马力和车重必须为正数");
  }
  return parseFloat((hp / weightKg).toFixed(4));
}

/**
 * 根据功率重量比返回性能等级
 * @param {number} ratio - 功率重量比 (hp/kg)
 * @returns {string} 性能等级: poor | average | good | excellent | supercar
 */
function classifyPWR(ratio) {
  if (ratio < 0.1) return "poor";
  if (ratio < 0.15) return "average";
  if (ratio < 0.25) return "good";
  if (ratio < 0.35) return "excellent";
  return "supercar";
}

/**
 * 计算每吨马力 (hp/tonne)，比 hp/kg 更直观
 * @param {number} hp - 马力
 * @param {number} weightKg - 车重 (kg)
 * @returns {number} 每吨马力
 */
function hpPerTonne(hp, weightKg) {
  return parseFloat((hp / (weightKg / 1000)).toFixed(1));
}

/**
 * 根据车重和功率估算 0-60 mph 时间 (粗略经验公式)
 * 注意：此公式仅供粗略估算，实际加速受传动系统、抓地力等多种因素影响
 * @param {number} hp - 马力
 * @param {number} weightKg - 车重 (kg)
 * @param {string} drivetrain - 驱动方式 (RWD/FWD/AWD)
 * @returns {number} 估算的 0-60 mph 秒数
 */
function estimateZeroTo60(hp, weightKg, drivetrain) {
  const weightLb = weightKg * 2.20462;
  // AWD 加成 5%, FWD 惩罚 5%
  const traction = drivetrain === "AWD" ? 1.05 : drivetrain === "FWD" ? 0.95 : 1.0;
  const raw = (weightLb / (hp * traction)) * 2.2;
  return parseFloat(raw.toFixed(1));
}

module.exports = { calculatePWR, classifyPWR, hpPerTonne, estimateZeroTo60 };
