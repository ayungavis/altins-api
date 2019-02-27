'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AcademicSchema extends Schema {
  up () {
    this.create('academics', (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('generation').unsigned().notNullable()
      table.integer('year_in').unsigned().notNullable()
      table.integer('year_out').unsigned().notNullable()
      table.text('thesis').nullable()
      table.string('first_supervisor').nullable()
      table.string('second_supervisor').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('academics')
  }
}

module.exports = AcademicSchema
