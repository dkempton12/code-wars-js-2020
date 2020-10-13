const distinct = a => [...new Set(a)];

distinct([1, 1, 2, 2,  2, 3]);

distinct([100, 200, 300, 500, 1000, 1001, 1001, 1001, 1001]);
