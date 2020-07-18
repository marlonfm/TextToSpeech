exports.up = function(knex) {
    return knex.schema.createTable('cadastro', function (tables){
        tables.string('id').primary();
        tables.string('nome').notNullable();
        tables.string('email').notNullable();
        tables.string('rg').notNullable();
        tables.string('cpf').notNullable();
    });
}


exports.down = function(knex) { 
    return knex.schema.dropTable('cadastro');
}