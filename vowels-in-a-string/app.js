const getCount = (str) => {
	const vowels = 'a, e, i, o, u';
	// filter the letters in the string, and check if each letter is a vowel
	const count = Array.from(str).filter((letter) => vowels.includes(letter)).length;
	return count;
};
