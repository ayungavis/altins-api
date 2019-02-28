'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with profiles
 */

const Profile = use('App/Models/Profile')
const DataGrid = use('DataGrid')

class ProfileController {
	/**
	 * Show a list of all profiles.
	 * GET profiles
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
					return Profile.query().with('user').with('religion').fetch()
				},

				sortable: {
					id: 'id',
					first_name: 'first_name',
					last_name: 'last_name',
					nickname: 'nickname',
					about_me: 'about_me',
					gender: 'gender',
					place_of_birth: 'place_of_birth',
					date_of_birth: 'date_of_birth',
					religion_id: 'religion_id',
					stats: 'stats',
					created_at: 'created_at'
				},

				searchable: [
					'first_name',
					'last_name',
					'nickname',
					'about_me',
					'gender',
					'place_of_birth',
					'date_of_birth',
					'religion_id',
					'stats'
				],

				filterable: {
					first_name: 'first_name',
					last_name: 'last_name',
					nickname: 'nickname',
					about_me: 'about_me',
					gender: 'gender',
					place_of_birth: 'place_of_birth',
					date_of_birth: 'date_of_birth',
					religion_id: 'religion_id',
					stats: 'stats'
				}
			}
			return DataGrid.paginate(config)
		} catch (err) {
			console.log(err)
		 	return response.send(err)
		}
	}

	/**
	 * Render a form to be used for creating a new profile.
	 * GET profiles/create
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async create ({ request, response, view }) {
	}

	/**
	 * Create/save a new profile.
	 * POST profiles
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async store ({ request, response }) {
		const input = request.only([
			'user_id',
			'first_name',
			'last_name',
			// 'nickname',
			// 'about_me',
			'gender',
			// 'place_of_birth',
			// 'date_of_birth',
			'religion_id',
			// 'photo',
			// 'cover_photo',
			// 'stats'
		])
		const profile = new Profile()

		try {
			profile.user_id = input.user_id
			profile.first_name = input.first_name
			profile.last_name = input.last_name
			// profile.nickname = input.nickname
			// profile.about_me = input.about_me
			profile.gender = input.gender
			// profile.place_of_birth = input.place_of_birth
			// profile.date_of_birth = input.date_of_birth
			profile.religion_id = input.religion_id
			// profile.photo = input.photo
			// profile.cover_photo = input.cover_photo
			// profile.stats = input.stats

			await profile.save()
			return response.status(201).json(profile)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Display a single profile.
	 * GET profiles/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async show ({ params, request, response, view }) {
		try {
			const profile = await Profile.find(params.id)
			return response.json(profile)	
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Render a form to update an existing profile.
	 * GET profiles/:id/edit
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async edit ({ params, request, response, view }) {
	}

	/**
	 * Update profile details.
	 * PUT or PATCH profiles/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async update ({ params, request, response }) {
		const input = request.only([
			'user_id',
			'first_name',
			'last_name',
			// 'nickname',
			// 'about_me',
			'gender',
			// 'place_of_birth',
			// 'date_of_birth',
			'religion_id',
			// 'photo',
			// 'cover_photo',
			// 'stats'
		])

		try {
			const profile = await Porfile.find(params.id)

			if (!user) return response.status(404).json({ message: 'Data not found!' })

			profile.user_id = input.user_id
			profile.first_name = input.first_name
			profile.last_name = input.last_name
			// profile.nickname = input.nickname
			// profile.about_me = input.about_me
			profile.gender = input.gender
			// profile.place_of_birth = input.place_of_birth
			// profile.date_of_birth = input.date_of_birth
			profile.religion_id = input.religion_id
			// profile.photo = input.photo
			// profile.cover_photo = input.cover_photo
			// profile.stats = input.stats

			await profile.save()
			return response.status(200).json(user)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Delete a profile with id.
	 * DELETE profiles/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async destroy ({ params, request, response }) {
		try {
			const profile = await Profile.find(params.id)	

			if (!profile) return response.status(404).json({ message: 'Data not found!' })

			await profile.delete()
			return response.status(204).json(null)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}
}

module.exports = ProfileController
