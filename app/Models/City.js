'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class City extends Model {
	static get table() {
		return 'cities'
	}

	static get primaryKey() {
		return 'id'
	}

	province () {
		return this.belongsTo('App/Models/Province')
	}

	contact () {
		return this.hasMany('App/Models/Contact')
	}
}

module.exports = City
