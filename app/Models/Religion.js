'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Religion extends Model {
	static get table() {
		return 'religions'
	}

	static get primaryKey() {
		return 'id'
	}

	profile () {
		return this.hasMany('App/Models/Profile')
	}
}

module.exports = Religion
