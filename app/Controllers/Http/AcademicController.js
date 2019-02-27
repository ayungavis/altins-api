'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with academics
 */

const Academic = use('App/Models/Academic')

class AcademicController {
	/**
	 * Show a list of all academics.
	 * GET academics
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async index ({ request, response, view }) {
		try {
			let academics = await Academic.all()
			return response.json(academics)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Render a form to be used for creating a new academic.
	 * GET academics/create
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async create ({ request, response, view }) {
	}

	/**
	 * Create/save a new academic.
	 * POST academics
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async store ({ request, response }) {
		const input = request.only([
			'user_id',
			'generation',
			'year_in',
			'year_out',
			// 'thesis',
			// 'first_supervisor',
			// 'second_supervisor',
		])
		const academic = new Academic()

		try {
			academic.user_id = input.user_id
			academic.generation = input.generation
			academic.year_in = input.year_in
			academic.year_out = input.year_out
			// academic.thesis = input.thesis
			// academic.first_supervisor = input.first_supervisor
			// academic.second_supervisor = input.second_supervisor

			await academic.save()
			return response.status(201).json(academic)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Display a single academic.
	 * GET academics/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async show ({ params, request, response, view }) {
		try {
			const academic = await Academic.find(params.id)
			return response.json(academic)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Render a form to update an existing academic.
	 * GET academics/:id/edit
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async edit ({ params, request, response, view }) {
	}

	/**
	 * Update academic details.
	 * PUT or PATCH academics/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async update ({ params, request, response }) {
		const input = request.only([
			'user_id',
			'generation',
			'year_in',
			'year_out',
			// 'thesis',
			// 'first_supervisor',
			// 'second_supervisor',
		])

		try {
			const academic = await Academic.find(params.id)

			if (!academic) return response.status(404).json({ message: 'Data not found!' })

			academic.user_id = input.user_id
			academic.generation = input.generation
			academic.year_in = input.year_in
			academic.year_out = input.year_out
			// academic.thesis = input.thesis
			// academic.first_supervisor = input.first_supervisor
			// academic.second_supervisor = input.second_supervisor

			await academic.save()
			return response.status(200).json(academic)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Delete a academic with id.
	 * DELETE academics/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async destroy ({ params, request, response }) {
		try {
			const academic = await Academic.find(params.id)	

			if (!academic) return response.status(404).json({ message: 'Data not found!' })

			await academic.delete()
			return response.status(204).json(null)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}
}

module.exports = AcademicController
