'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NewsSchema extends Schema {
  up () {
    this.create('news', (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('title').notNullable()
      table.text('content').notNullable()
      table.integer('category_id').unsigned()
      table.text('image').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('news')
  }
}

module.exports = NewsSchema
