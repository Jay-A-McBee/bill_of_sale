const types = [
  'Bulls', 'Cows', 'Cow & Calf Pairs', 'Bred Heifers', 'Open Replacement Heifers',
  'Yearling Feeder Cattle', 'Stocker Calves', 'Other Classes of Cattle', 'Show Cattle', 'Cattle Wanted',
  'Cattle Lease', 'Embryos and Semen', 'Classified Ad', 'Ranch Real Estate'
];

const anchorRefs = [
  '/bulls', '/cows', '/pairs', '/bred', '/open', '/yearling', '/stocker', '/other', '/show', 
  '/cattlewanted', '/cattlelease', '/reproduction', '/classified', '/ranch'
];

export const formTypes = types.map( (title, idx) => ({
  title,
  url:anchorRefs[idx]
}))