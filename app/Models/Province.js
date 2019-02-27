'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Province extends Model {
	static get table() {
		return 'provinces'
	}

	static get primaryKey() {
		return 'id'
	}

	city () {
		return this.hasMany('App/Models/City')
	}

	contact () {
		return this.hasMany('App/Models/Contact')
	}
}

module.exports = Province
