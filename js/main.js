function main() {
  return {
    url: "https://rickandmortyapi.com/api/character",
    characters: [],
    numPages: 0,
    page: 1,
    init() {
      fetch(this.url)
        .then((response) => response.json())
        .then((json) => {
          this.characters = json.results;
          this.numPages = json.info.pages;
        });
    },
    changePage: async function (type) {
      if (type === "next") {
        this.page++;
      } else if (type === "prev") {
        this.page--;
      }

      const response = await fetch(`${this.url}?page=${this.page}`);
      this.characters = (await response.json()).results;
    },
  };
}
