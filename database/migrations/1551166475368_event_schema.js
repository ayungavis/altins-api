'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventSchema extends Schema {
  up () {
    this.create('events', (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('title').notNullable()
      table.text('description').notNullable()
      table.text('tos').notNullable()
      table.double('price').notNullable()
      table.string('venue').notNullable()
      table.text('location').notNullable()
      table.double('latitude').notNullable()
      table.double('longitude').notNullable()
      table.datetime('start_date').notNullable()
      table.datetime('end_date').nullable()
      table.text('image').notNullable()
      table.text('venue_image').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('events')
  }
}

module.exports = EventSchema
