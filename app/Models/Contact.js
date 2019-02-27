'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Contact extends Model {
	static get table() {
		return 'contacts'
	}

	static get primaryKey() {
		return 'id'
	}

	user () {
		return this.belongsTo('App/Models/User')
	}

	province () {
		return this.belongsTo('App/Models/Province')
	}

	city () {
		return this.belongsTo('App/Models/City')
	}
}

module.exports = Contact
