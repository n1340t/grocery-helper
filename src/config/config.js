const scaleEnum = Object.freeze({
  LB: 'LB',
  KG: 'KG',
});
const weight = {
  LB: 1 / 2.205, // centralize to kg
  KG: 1,
};
const eqSides = {
  LEFT: 'LHS',
  RIGHT: 'RHS',
};
const scaleNames = {
  LB: '$ per lb',
  KG: '$ per kg',
};
export { scaleEnum, weight, eqSides, scaleNames };
