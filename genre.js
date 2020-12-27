const genres = [
  { id: 1, name: "horror" },
  { id: 2, name: "action" },
  { id: 3, name: "comedy" },
];

class Genre {
  static getGenres() {
    return genres;
  }
  static addGenre(name) {
    const genre = { id: genres.length + 1, name };
    genres.push(genre);
    return genre;
  }
  static getGenre(id) {
    return genres.find((genre) => genre.id === id);
  }
}
module.exports = Genre;
