const doToday = (day) => {
  if (Number.isInteger(day) && 1 <= day && day <= 7) {
    if (day < 6) {
      return 'work';
    } else {
      return 'rest';
    }
  } else {
    return '???';
  }
};

module.exports = doToday;