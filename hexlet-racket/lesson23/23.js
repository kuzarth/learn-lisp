const lookup = (key, pairs) => pairs.reduce((foundPair, pair) => {
  const [k, v] = pair;
  if(typeof foundPair !== 'boolean' && key in foundPair) {
    return foundPair;
  }
  if (key === k) {
    return { [k]: v };
  } else {
    return false;
  }
}, {});

module.exports = lookup;
