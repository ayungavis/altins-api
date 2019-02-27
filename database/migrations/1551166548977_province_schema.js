'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProvinceSchema extends Schema {
  up () {
    this.create('provinces', (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('provinces')
  }
}

module.exports = ProvinceSchema
