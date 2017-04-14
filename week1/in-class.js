function wordCount(str) {
  str = str.split(' ');

  return str.reduce((acc,curr) => {
    if(!acc[curr]) acc[curr] = 0;
    acc[curr]++;
    return acc;
  }, {});
}