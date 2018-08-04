const myModule = (function() {
  const data = [1, 2,3];

  const test = () => {};

  const getData = function() {
    return data;
  }
  return {
    getData: getData,
  };
})();
