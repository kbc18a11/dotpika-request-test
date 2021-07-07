export default () => {
  let pixelArt = new Array(32);

  for (let i = 0; i < pixelArt.length; i++) {
    pixelArt[i] = new Array(32);
  }

  let change = 0;

  pixelArt.forEach((dots, index) => {
    for (let i = 0; i < dots.length; i++) {
      let green = 1;

      if (change) {
        green = 0;
        change = 0;
      } else {
        change = 1;
      }

      dots[i] = {
        x: index,
        y: i,
        red: 1,
        green: green,
        blue: 0
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
