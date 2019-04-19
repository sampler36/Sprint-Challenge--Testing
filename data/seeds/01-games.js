
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        { id:1, title: 'Raw dogg',  genre: 'adventure'},
        { id:2, title: 'Crouching tiger',  genre: 'action'},
        { id:3, title: 'Shanghai noon',  genre: 'action'},
        { id:4, title: 'Zulu on my stoope',  genre: 'adventure'}
  
      ]);
    });
};
