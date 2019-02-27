'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactSchema extends Schema {
  up () {
    this.create('contacts', (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.text('origin_address').notNullable()
      table.integer('origin_city_id').unsigned()
      table.integer('origin_province_id').unsigned()
      table.text('current_address').nullable()
      table.integer('current_city_id').unsigned()
      table.integer('current_province_id').unsigned()
      table.string('phone_number').notNullable()
      table.string('whatsapp').nullable()
      table.string('facebbok').nullable()
      table.string('twitter').nullable()
      table.string('linkedin').nullable()
      table.string('instagram').nullable()
      table.string('line_id').nullable()
      table.string('website').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('contacts')
  }
}

module.exports = ContactSchema
