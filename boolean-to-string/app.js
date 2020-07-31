function booleanToWord(bool) {
	if (typeof bool === 'boolean' && !!bool) {
		return 'Yes';
	} else if (typeof bool === 'boolean' && !bool) {
		return 'No';
	}
}
