exports.up = function(knex)  {
    return knex.schema.createTable('dashboard', function (table) {
    table.increments();
    table.string('title').notNullable();

    table.string('image').notNullable();

    table.string('valor').notNullable();

    table.string('id_cadastro').notNullable();

    table.foreign('id_cadastro').references('id').inTable('cadastro');
});
}


exports.down = function(knex)  {
return knex.schema.dropTable('dashboard');
}