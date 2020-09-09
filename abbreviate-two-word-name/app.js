const abbreviateName = (name) => {
  name
    .split(' ')
    .map((letter) => letter[0].toUpperCase())
    .join('.');
};

const name = 'Danny Kempton';

abbreviateName(name);
