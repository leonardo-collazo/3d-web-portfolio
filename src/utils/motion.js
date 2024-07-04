const getPositionForFadeIn = direction => {
  let x = 0;
  let y = 0;

  switch (direction) {
    case "left":
      x = 100;
      break;

    case "right":
      x = -100;
      break;

    case "up":
      y = 100;
      break;

    case "down":
      y = -100;
      break;
  }

  return { x, y };
};

const getPositionForSlideIn = direction => {
  let x = 0;
  let y = 0;

  switch (direction) {
    case "left":
      x = "-100%";
      break;

    case "right":
      x = "100%";
      break;

    case "up":
      y = "100%";
      break;

    case "down":
      y = "100%";
      break;
  }

  return { x, y };
};

export const textVariant = delay => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  const position = getPositionForFadeIn(direction);

  return {
    hidden: {
      ...position,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  const position = getPositionForSlideIn(direction);

  return {
    hidden: {
      ...position,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
