'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with users
 */

const User = use('App/Models/User')
const DataGrid = use('DataGrid')

class UserController {
	/**
	 * Show a list of all users.
	 * GET users
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async index ({ request, response, view }) {
		try {
			const config = {
				query () {
					return User.query()
				},

				sortable: {
					id: 'id',
					username: 'username',
					email: 'email',
					created_at: 'created_at'
				},

				searchable: ['username', 'email'],

				filterable: {
					username: 'username',
					email: 'email'
				}
			}
			return DataGrid.paginate(config)
		} catch (err) {
			console.log(err)
		 	return response.send(err)
		}
	}

	/**
	 * Render a form to be used for creating a new user.
	 * GET users/create
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async create ({ request, response, view }) {
	}

	/**
	 * Create/save a new user.
	 * POST users
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async store ({ request, response }) {
		const input = request.only([
			'username',
			'email',
			'password'
		])
		const user = new User()

		try {
			user.username = input.username
			user.email = input.email
			user.password = input.password

			await user.save()
			return response.status(201).json(user)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Display a single user.
	 * GET users/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async show ({ params, request, response, view }) {
		try {
			const user = await User.find(params.id)
			return response.json(user)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Render a form to update an existing user.
	 * GET users/:id/edit
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async edit ({ params, request, response, view }) {
	}

	/**
	 * Update user details.
	 * PUT or PATCH users/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async update ({ params, request, response }) {
		const input = request.only([
			'username',
			'email',
			'password'
		])

		try {
			const user = await User.find(params.id)

			if (!user) return response.status(404).json({ message: 'Data not found!' })

			user.username = input.username
			user.email = input.email
			user.password = input.password

			await user.save()
			return response.status(200).json(user)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Delete a user with id.
	 * DELETE users/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async destroy ({ params, request, response }) {
		try {
			const user = await User.find(params.id)	

			if (!user) return response.status(404).json({ message: 'Data not found!' })

			await user.delete()
			return response.status(204).json(null)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}
}

module.exports = UserController
