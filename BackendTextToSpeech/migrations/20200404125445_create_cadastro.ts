exports.up = function(knex) {
    return knex.schema.createTable('cadastro', function (tables){
        tables.string('id').primary();
        tables.string('comentario').nullable();
        tables.string('nome_audio').nullable();
    });
}


exports.down = function(knex) { 
    return knex.schema.dropTable('cadastro');
}