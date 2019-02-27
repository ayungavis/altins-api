'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with provinces
 */

const Province = use('App/Models/Province')

class ProvinceController {
	/**
	 * Show a list of all provinces.
	 * GET provinces
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async index ({ request, response, view }) {
		try {
			const provinces = await Province.all()
			return response.json(provinces)	
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Render a form to be used for creating a new province.
	 * GET provinces/create
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async create ({ request, response, view }) {
	}

	/**
	 * Create/save a new province.
	 * POST provinces
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async store ({ request, response }) {
		const input = request.only([
			'name'
		])
		const province = new Province()

		try {
			province.name = input.name

			await province.save()
			return response.status(201).json(province)	
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Display a single province.
	 * GET provinces/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async show ({ params, request, response, view }) {
		try {
			const province = await Province.find(params.id)
			return response.json(province)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Render a form to update an existing province.
	 * GET provinces/:id/edit
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async edit ({ params, request, response, view }) {
	}

	/**
	 * Update province details.
	 * PUT or PATCH provinces/:id
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
			const province = await Province.find(params.id)

			if (!province) return response.status(404).json({ message: 'Data not found!' })

			province.name = input.name

			await province.save()
			return response.status(200).json(province)	
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Delete a province with id.
	 * DELETE provinces/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async destroy ({ params, request, response }) {
		try {
			const province = await Province.find(params.id)

			if (!province) return response.status(404).json({ message: 'Data not found!' })

			await province.delete()
			return response.status(204).json(null)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}
}

module.exports = ProvinceController
