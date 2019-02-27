'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Factory = use('Factory')

class News extends Model {
	static get table() {
		return 'news'
	}

	static get primaryKey() {
		return 'id'
	}

	user () {
		return this.belogsTo('App/Models/User')
	}

	category () {
		return this.belongsTo('App/Models/Category')
	}
}

module.exports = News
