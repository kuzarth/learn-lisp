const nextChar = c => String.fromCharCode(c.charCodeAt(0) + 1);

const nextChars = s => [...s].map(nextChar).join('');

module.exports = nextChars;
