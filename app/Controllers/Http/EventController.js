'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with events
 */

const Event = use('App/Models/Event')

class EventController {
	/**
	 * Show a list of all events.
	 * GET events
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async index ({ request, response, view }) {
		try {
			let event = await Event.all()
			return response.json(event)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Render a form to be used for creating a new event.
	 * GET events/create
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async create ({ request, response, view }) {
	}

	/**
	 * Create/save a new event.
	 * POST events
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async store ({ request, response }) {
		const input = request.only([
			'user_id',
			'title',
			'description',
			'tos',
			'price',
			'venue',
			'location',
			// 'latitude',
			// 'longitude',
			'start_date',
			'end_date',
			// 'image',
			// 'venue_image'
		])
		const event = new Event()

		try {
			event.user_id = input.user_id
			event.title = input.title
			event.description = input.description
			event.tos = input.tos
			event.price = input.price
			event.venue = input.venue
			event.location = input.location
			// event.latitude = input.latitude
			// event.longitude = input.longitude
			event.start_date = input.start_date
			event.end_date = input.end_date
			// event.image = input.image
			// event.venue_image = input.venue_image

			await event.save()
			return response.status(201).json(event)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Display a single event.
	 * GET events/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async show ({ params, request, response, view }) {
		try {
			const event = await Event.find(params.id)
			return response.json(event)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Render a form to update an existing event.
	 * GET events/:id/edit
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async edit ({ params, request, response, view }) {
	}

	/**
	 * Update event details.
	 * PUT or PATCH events/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async update ({ params, request, response }) {
		const input = request.only([
			'user_id',
			'title',
			'description',
			'tos',
			'price',
			'venue',
			'location',
			// 'latitude',
			// 'longitude',
			'start_date',
			'end_date',
			// 'image',
			// 'venue_image'
		])

		try {
			const event = await Event.find(params.id)

			if (!event) return response.status(404).json({ message: 'Data not found!' })

			event.user_id = input.user_id
			event.title = input.title
			event.description = input.description
			event.tos = input.tos
			event.price = input.price
			event.venue = input.venue
			event.location = input.location
			// event.latitude = input.latitude
			// event.longitude = input.longitude
			event.start_date = input.start_date
			event.end_date = input.end_date
			// event.image = input.image
			// event.venue_image = input.venue_image

			await event.save()
			return response.status(200).json(event)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Delete a event with id.
	 * DELETE events/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async destroy ({ params, request, response }) {
		try {
			const event = await Event.find(params.id)	

			if (!event) return response.status(404).json({ message: 'Data not found!' })

			await event.delete()
			return response.status(204).json(null)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}
}

module.exports = EventController
