const abbreviateName = (name) => {
  name
    .split(' ')
    .map((letter) => letter[0].toUpperCase())
    .join('.');
};
