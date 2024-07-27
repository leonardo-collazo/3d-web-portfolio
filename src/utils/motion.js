const toLeft = "left";
const toRight = "right";
const toUp = "up";
const toDown = "down";

const springAnimation = "spring";
const tweenAnimation = "tween";

const animationDelay = 0.5;
const animationDuration = 0.75;

const aspectRatio = 9 / 16;

const getPositionForFadeIn = direction => {
  let x = 0;
  let y = 0;

  switch (direction) {
    case toLeft:
      x = 100;
      break;

    case toRight:
      x = -100;
      break;

    case toUp:
      y = 100;
      break;

    case toDown:
      y = -100;
      break;
  }

  return { x, y };
};

const getPositionForSlideIn = direction => {
  let x = 0;
  let y = 0;

  switch (direction) {
    case toLeft:
      x = "-100%";
      break;

    case toRight:
      x = "100%";
      break;

    case toUp:
      y = "100%";
      break;

    case toDown:
      y = "100%";
      break;
  }

  return { x, y };
};

const textVariant = delay => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: springAnimation,
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

const fadeIn = (direction, type, delay, duration) => {
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

const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: tweenAnimation,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const slideIn = (direction, type, delay, duration) => {
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

const staggerContainer = (staggerChildren, delayChildren) => {
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

export {
  toLeft,
  toRight,
  toUp,
  toDown,
  springAnimation,
  tweenAnimation,
  animationDelay,
  animationDuration,
  aspectRatio,
  textVariant,
  fadeIn,
  zoomIn,
  slideIn,
  staggerContainer,
};
