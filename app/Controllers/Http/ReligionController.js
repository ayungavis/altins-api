'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with religions
 */

const Religion = use('App/Models/Religion')

class ReligionController {
	/**
	 * Show a list of all religions.
	 * GET religions
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async index ({ request, response, view }) {
		try {
			let religions = await Religion.all()
			return response.json(religions)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}		
	}

	/**
	 * Render a form to be used for creating a new religion.
	 * GET religions/create
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async create ({ request, response, view }) {
	}

	/**
	 * Create/save a new religion.
	 * POST religions
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async store ({ request, response }) {
		const input = request.only([
			'name'
		])
		const religion = new Religion()

		try {
			religion.name = input.name

			await religion.save()
			return response.status(201).json(religion)		
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Display a single religion.
	 * GET religions/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async show ({ params, request, response, view }) {
		try {
			const religion = await Religion.find(params.id)	
			return response.json(religion)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Render a form to update an existing religion.
	 * GET religions/:id/edit
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async edit ({ params, request, response, view }) {
	}

	/**
	 * Update religion details.
	 * PUT or PATCH religions/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async update ({ params, request, response }) {
		const input = request.only([
			'name'
		])

		try {
			const religion = await User.find(params.id)

			if (!religion) return response.status(404).json({ message: 'Data not found!' })

			religion.name = input.name

			await religion.save()
			return response.status(200).json(religion)	
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Delete a religion with id.
	 * DELETE religions/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async destroy ({ params, request, response }) {
		try {
			const religion = await Religion.find(params.id)	

			if (!religion) return response.status(404).json({ message: 'Data not found!' })

			await religion.delete()
			return response.status(204).json(null)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}
}

module.exports = ReligionController
