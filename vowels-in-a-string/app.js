const getCount = (str) => {
	const vowels = 'a, e, i, o, u';
	const count = Array.from(str).filter((letter) => vowels.includes(letter)).length;
	return count;
};
