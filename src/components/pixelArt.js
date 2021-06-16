export default () => {
  let pixelArt = new Array(32);

  for (let i = 0; i < pixelArt.length; i++) {
    pixelArt[i] = new Array(32);
  }

  pixelArt.forEach((dots, index) => {
    for (let i = 0; i < dots.length; i++) {
      dots[i] = {
        x: index,
        y: i,
        color: {
          red: 1,
          green: 0,
          bule: 0
        }
      };
    }
    return dots;
  });

  /*
  for (let i = 0; i < 32; i++) {
    for (let j = 0; j < 32; j++) {
      pixelArt[i][j] = {
        x: i,
        y: j,
        color: {
          red: 1,
          green: 0,
          bule: 0
        }
      };
    }
  }
  */

  return pixelArt;
};
