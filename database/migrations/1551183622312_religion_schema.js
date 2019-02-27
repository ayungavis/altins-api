'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReligionSchema extends Schema {
  up () {
    this.create('religions', (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('religions')
  }
}

module.exports = ReligionSchema
