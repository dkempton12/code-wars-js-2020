const filter_list = (l) => l.filter((num) => typeof num == 'number');

filter_list(['a', 10, 8, 'b', 4, 'c']);
filter_list(['a', 'b', 'c', 2]);
