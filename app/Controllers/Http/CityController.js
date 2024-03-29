'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with cities
 */

const City = use('App/Models/City')
const DataGrid = use('DataGrid')

class CityController {
	/**
	 * Show a list of all cities.
	 * GET cities
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
					return City.query()
				},

				sortable: {
					id: 'id',
					province_id: 'province_id',
					name: 'name',
					created_at: 'created_at'
				},

				searchable: ['province_id', 'name'],

				filterable: {
					province_id: 'province_id',
					name: 'name',
				}
			}
			return DataGrid.paginate(config)
		} catch (err) {
			console.log(err)
		 	return response.send(err)
		}
		// let cities = await City.query().with('province').fetch()
		// return response.json(cities)
	}

	/**
	 * Render a form to be used for creating a new city.
	 * GET cities/create
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async create ({ request, response, view }) {
	}

	/**
	 * Create/save a new city.
	 * POST cities
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async store ({ request, response }) {
		const input = request.only([
			'province_id',
			'name'
		])
		const city = new City()

		try {
			city.province_id = input.province_id
			city.name = input.name

			await city.save()
			return response.status(201).json(city)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Display a single city.
	 * GET cities/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async show ({ params, request, response, view }) {
		try {
			const city = await City.find(params.id)
			return response.json(city)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Render a form to update an existing city.
	 * GET cities/:id/edit
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async edit ({ params, request, response, view }) {
	}

	/**
	 * Update city details.
	 * PUT or PATCH cities/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async update ({ params, request, response }) {
		const input = request.only([
			'province_id',
			'name'
		])

		try {
			const city = await City.find(params.id)

			if (!city) return response.status(404).json({ message: 'Data not found!' })

			city.province_id = input.province_id
			city.name = input.name

			await city.save()
			return response.status(200).json(city)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Delete a city with id.
	 * DELETE cities/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async destroy ({ params, request, response }) {
		try {
			const city = await City.find(params.id)	

			if (!city) return response.status(404).json({ message: 'Data not found!' })

			await city.delete()
			return response.status(204).json(null)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}
}

module.exports = CityController
