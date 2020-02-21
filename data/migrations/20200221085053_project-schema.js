exports.up = function(knex) {
	return knex.schema
		.createTable('projects', tbl => {
			tbl.increments();
			tbl.text('name', 128).notNullable();
			tbl.text('description');
			tbl.boolean('completed').notNullable();
		})
		.createTable('resources', tbl => {
			tbl.increments();
			tbl.text('name', 128).notNullable();
			tbl.text('description');
			tbl.boolean('completed').notNullable();
		})
		.createTable('project_resources', tbl => {
			tbl.increments();
			tbl
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('projects.id');
			tbl
				.integer('resources_id')
				.unsigned()
				.notNullable()
				.references('resources.id');
		})
		.createTable('tasks', tbl => {
			tbl.increments();
			tbl
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('projects.id');
			tbl.text('description').notNullable();
			tbl.text('notes');
			tbl.boolean('completed').notNullable();
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('tasks')
		.dropTableIfExists('project_resources')
		.dropTableIfExists('resources')
		.dropTableIfExists('projects');
};
