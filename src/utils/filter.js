const searchHandler = (arr, term) => {
  if (term === 0) {
    return arr;
  }

  return arr.filter((item) => item.title.toLowerCase().indexOf(term) > -1);
};

const filterHandler = (arr, filter) => {
  switch (filter) {
    case "ascending":
      return arr.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    case "descending":
      return arr.sort((a, b) => {
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return -1;
        }
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    default:
      return arr;
  }
};

export { searchHandler, filterHandler };
