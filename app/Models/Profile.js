'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Profile extends Model {
	static get table() {
		return 'profiles'
	}

	static get primaryKey() {
		return 'id'
	}

	religion () {
		return this.belongsTo('App/Models/Religion')
	}

	user () {
		return this.belongsTo('App/Models/User')
	}
}

module.exports = Profile
