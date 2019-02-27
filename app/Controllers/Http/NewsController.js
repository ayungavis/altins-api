'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with news
 */

const News = use('App/Models/News')

class NewsController {
	/**
	 * Show a list of all news.
	 * GET news
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async index ({ request, response, view }) {
		try {
			let news = await News.all()
			return response.json(news)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Render a form to be used for creating a new news.
	 * GET news/create
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async create ({ request, response, view }) {
	}

	/**
	 * Create/save a new news.
	 * POST news
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async store ({ request, response }) {
		const input = request.only([
			'user_id',
			'title',
			'content',
			'category_id',
			'image'
		])
		const news = new News()

		try {
			news.user_id = input.user_id
			news.title = input.title
			news.content = input.content
			news.category_id = input.category_id
			news.image = input.image

			await news.save()
			return response.status(201).json(news)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Display a single news.
	 * GET news/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async show ({ params, request, response, view }) {
		try {
			const news = await News.find(params.id)
			return response.json(news)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Render a form to update an existing news.
	 * GET news/:id/edit
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async edit ({ params, request, response, view }) {
	}

	/**
	 * Update news details.
	 * PUT or PATCH news/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async update ({ params, request, response }) {
		const input = request.only([
			'user_id',
			'title',
			'content',
			'category_id',
			'image'
		])

		try {
			const news = await News.find(params.id)

			if (!news) return response.status(404).json({ message: 'Data not found!' })

			news.user_id = input.user_id
			news.title = input.title
			news.content = input.content
			news.category_id = input.category_id
			news.image = input.image

			await news.save()
			return response.status(200).json(news)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Delete a news with id.
	 * DELETE news/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async destroy ({ params, request, response }) {
		try {
			const news = await News.find(params.id)	

			if (!news) return response.status(404).json({ message: 'Data not found!' })

			await news.delete()
			return response.status(204).json(null)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}
}

module.exports = NewsController
