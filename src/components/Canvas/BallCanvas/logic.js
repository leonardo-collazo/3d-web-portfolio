const getBallXYPosition = (index, width, height) => {
  let x = 0;
  let y = 0;

  if (width > 0) {
    const ballsPerRow = Math.floor(width / 160);
    const row = Math.floor(index / ballsPerRow);
    const col = index % ballsPerRow;

    if (width < 320) {
      x = col * 8 - width / 250;
      y = row * -8 + height / 44;
    } else if (width < 480) {
      x = col * 8 - width / 80;
      y = row * -8 + height / 48;
    } else if (width < 640) {
      x = col * 8 - width / 60;
      y = row * -8 + height / 52;
    } else if (width < 960) {
      x = col * 8 - width / 52;
      y = row * -8 + height / 64;
    } else {
      x = col * 8 - width / 48;
      y = row * -8 + height / 85;
    }
  }

  return { x, y };
};

export { getBallXYPosition };
