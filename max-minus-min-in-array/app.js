const list = [ 8, 3, 2, 7, 6, 10, 2, 6 ];

const maxDiff = (list) => (list.length ? Math.max(...list) - Math.min(...list) : 0);
