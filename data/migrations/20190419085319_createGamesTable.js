exports.up = function(knex, Promise) {
return knex.schema.createTable('games', tbl => {
    tbl.increments();

    tbl.string('title', 255).notNullable();

    tbl.string('genre', 255).notNullable();

    tbl.timestamps(true,true)
  });
};

exports.down = function(knex, Promise) {
  // undo the operation in up
  return knex.schema.dropTableIfExists('games');
};
