function dateConfig(stringDate) {
  const date = new Date(parseInt(stringDate, 10));
  return date.toDateString();
}

module.exports = {
  dateConfig
}