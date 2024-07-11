const searchHandler = (arr, term) => {
  const lang = JSON.parse(localStorage.getItem("lang"));
  if (term === 0) {
    return arr;
  }
  return arr.filter((item) => {
    if (lang == "ru") {
      return item.title
        ? item.title.toLowerCase().indexOf(term.toLowerCase()) > -1
        : item.title;
    } else {
      return item.title_en
        ? item.title_en.toLowerCase().indexOf(term.toLowerCase()) > -1
        : item.title;
    }
  });
};

const filterHandler = (arr, filter) => {
  const lang = JSON.parse(localStorage.getItem("lang"));
  switch (filter) {
    case "ascending":
      return arr.sort((a, b) => {
        if (lang == "ru") {
          return a.title_ru.localeCompare(b.title_ru, "ru", {
            sensitivity: "base",
          });
        } else {
          return a.title_en.localeCompare(b.title_en, "en", {
            sensitivity: "base",
          });
        }
      });
    case "descending":
      return arr.sort((a, b) => {
        if (lang == "ru") {
          return b.title_ru.localeCompare(a.title_ru, "ru", {
            sensitivity: "base",
          });
        } else {
          return b.title_en.localeCompare(a.title_en, "en", {
            sensitivity: "base",
          });
        }
      });
    case "ascending_price":
      return arr.sort((a, b) => {
        return a.price - b.price;
      });
    case "descending_price":
      return arr.sort((a, b) => {
        return b.price - a.price;
      });
    default:
      return arr;
  }
};

export { searchHandler, filterHandler };
