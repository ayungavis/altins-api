'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with categories
 */

const Category = use('App/Models/Category')

class CategoryController {
	/**
	 * Show a list of all categories.
	 * GET categories
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async index ({ request, response, view }) {
		try {
			let categories = await Category.all()
			return response.json(categories)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Render a form to be used for creating a new category.
	 * GET categories/create
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async create ({ request, response, view }) {
	}

	/**
	 * Create/save a new category.
	 * POST categories
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async store ({ request, response }) {
		const input = request.only([
			'name',
			'slug'
		])
		const category = new Category()

		try {
			category.name = input.name
			category.slug = input.slug

			await category.save()
			return response.status(201).json(category)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Display a single category.
	 * GET categories/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async show ({ params, request, response, view }) {
		try {
			const category = await Category.find(params.id)
			return response.json(category)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Render a form to update an existing category.
	 * GET categories/:id/edit
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async edit ({ params, request, response, view }) {
	}

	/**
	 * Update category details.
	 * PUT or PATCH categories/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async update ({ params, request, response }) {
		const input = request.only([
			'name',
			'slug'
		])

		try {
			const category = await Category.find(params.id)

			if (!category) return response.status(404).json({ message: 'Data not found!' })

			category.name = input.name
			category.slug = input.slug

			await category.save()
			return response.status(200).json(category)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Delete a category with id.
	 * DELETE categories/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async destroy ({ params, request, response }) {
		try {
			const category = await Category.find(params.id)	

			if (!category) return response.status(404).json({ message: 'Data not found!' })

			await category.delete()
			return response.status(204).json(null)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}
}

module.exports = CategoryController
