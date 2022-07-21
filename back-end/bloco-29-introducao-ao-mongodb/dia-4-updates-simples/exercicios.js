use filminhos;
db.movies.drop();
db.movies.find();

db.movies.insertMany(
  [{
    "_id": 1,
  "title": "Batman",
  "category": [ "action", "adventure" ],
  "imdbRating": 7.6,
  "budget": 35
},
{

    "_id": 2,
  "title": "Godzilla",
  "category": [ "action", "adventure", "sci-fi" ],
  "imdbRating": 6.6
},
{

    "_id": 3,
  "title": "Home Alone",
  "category": [ "family", "comedy" ],
  "imdbRating": 7.4
}]);