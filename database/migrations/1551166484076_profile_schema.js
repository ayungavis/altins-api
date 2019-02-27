'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    this.create('profiles', (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('fist_name').notNullable()
      table.string('last_name').notNullable()
      table.string('nickname').nullable()
      table.text('about_me').nullable()
      table.boolean('gender').notNullable()
      table.string('place_of_birth').notNullable()
      table.datetime('date_of_birth').notNullable()
      table.integer('religion_id').notNullable()
      table.text('photo').notNullable()
      table.text('cover_photo').notNullable()
      table.boolean('stats').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('profiles')
  }
}

module.exports = ProfileSchema
