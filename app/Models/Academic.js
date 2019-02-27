'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Academic extends Model {
	static get table() {
		return 'academics'
	}

	static get primaryKey() {
		return 'id'
	}

	user () {
		return this.belongsTo('App/Models/User')
	}
}

module.exports = Academic
