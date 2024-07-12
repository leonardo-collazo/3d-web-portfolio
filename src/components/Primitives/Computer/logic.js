const scales = [
  [1024, 1],
  [768, 0.768],
  [640, 0.64],
  [560, 0.56],
  [489, 0.489],
  [450, 0.45],
  [425, 0.425],
  [375, 0.375],
  [0, 0.32],
];

const positions = [
  [1024, [0, -4.2, -1.4]],
  [768, [0, -3.75, -1.25]],
  [640, [0, -3.5, -1.1]],
  [560, [0, -2.75, -0.95]],
  [489, [0, -2.75, -0.78]],
  [450, [0, -2.75, -0.75]],
  [425, [0, -2.25, -0.725]],
  [375, [0, -2.25, -0.6]],
  [0, [0, -2.25, -0.45]],
];

const getComputerScale = () => scales.find(pair => window.innerWidth >= pair[0])[1];
const getComputerPosition = () => positions.find(pair => window.innerWidth >= pair[0])[1];

export { getComputerScale, getComputerPosition };
