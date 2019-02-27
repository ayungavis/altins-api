'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with contacts
 */

const Contact = use('App/Models/Contact')

class ContactController {
	/**
	 * Show a list of all contacts.
	 * GET contacts
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async index ({ request, response, view }) {
		try {
			let contact = await Contact.all()
			return response.json(contact)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Render a form to be used for creating a new contact.
	 * GET contacts/create
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async create ({ request, response, view }) {
	}

	/**
	 * Create/save a new contact.
	 * POST contacts
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async store ({ request, response }) {
		const input = request.only([
			'user_id',
			'origin_addres',
			'origin_city_id',
			'origin_province_id',
			'current_address',
			'current_city_id',
			'current_province_id',
			'phone_number',
			// 'whatsapp',
			// 'facebook',
			// 'twitter',
			// 'linkedin',
			// 'instagram',
			// 'line_id',
			// 'website',
		])
		const contact = new Contact()

		try {
			contact.user_id = input.user_id
			contact.origin_addres = input.origin_addres
			contact.origin_city_id = input.origin_city_id
			contact.origin_province_id = input.origin_province_id
			contact.current_address = input.current_address
			contact.current_city_id = input.current_city_id
			contact.current_province_id = input.current_province_id
			contact.phone_number = input.phone_number
			// contact.whatsapp = input.whatsapp
			// contact.facebook = input.facebook
			// contact.twitter = input.twitter
			// contact.linkedin = input.linkedin
			// contact.instagram = input.instagram
			// contact.line_id = input.line_id
			// contact.website = input.website

			await contact.save()
			return response.status(201).json(contact)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Display a single contact.
	 * GET contacts/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async show ({ params, request, response, view }) {
		try {
			const contact = await Contact.find(params.id)
			return response.json(contact)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Render a form to update an existing contact.
	 * GET contacts/:id/edit
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async edit ({ params, request, response, view }) {
	}

	/**
	 * Update contact details.
	 * PUT or PATCH contacts/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async update ({ params, request, response }) {
		const input = request.only([
			'user_id',
			'origin_addres',
			'origin_city_id',
			'origin_province_id',
			'current_address',
			'current_city_id',
			'current_province_id',
			'phone_number',
			// 'whatsapp',
			// 'facebook',
			// 'twitter',
			// 'linkedin',
			// 'instagram',
			// 'line_id',
			// 'website',
		])

		try {
			const contact = await Contact.find(params.id)

			if (!contact) return response.status(404).json({ message: 'Data not found!' })

			contact.user_id = input.user_id
			contact.origin_addres = input.origin_addres
			contact.origin_city_id = input.origin_city_id
			contact.origin_province_id = input.origin_province_id
			contact.current_address = input.current_address
			contact.current_city_id = input.current_city_id
			contact.current_province_id = input.current_province_id
			contact.phone_number = input.phone_number
			// contact.whatsapp = input.whatsapp
			// contact.facebook = input.facebook
			// contact.twitter = input.twitter
			// contact.linkedin = input.linkedin
			// contact.instagram = input.instagram
			// contact.line_id = input.line_id
			// contact.website = input.website

			await contact.save()
			return response.status(200).json(contact)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Delete a contact with id.
	 * DELETE contacts/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async destroy ({ params, request, response }) {
		try {
			const contact = await Contact.find(params.id)	

			if (!contact) return response.status(404).json({ message: 'Data not found!' })

			await contact.delete()
			return response.status(204).json(null)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}
}

module.exports = ContactController
