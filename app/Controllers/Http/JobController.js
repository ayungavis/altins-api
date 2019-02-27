'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with jobs
 */

const Job = use('App/Models/Job')

class JobController {
	/**
	 * Show a list of all jobs.
	 * GET jobs
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async index ({ request, response, view }) {
		try {
			let jobs = await Job.all()
			return response.json(jobs)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Render a form to be used for creating a new job.
	 * GET jobs/create
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async create ({ request, response, view }) {
	}

	/**
	 * Create/save a new job.
	 * POST jobs
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async store ({ request, response }) {
		const input = request.only([
			'user_id',
			'company',
			'position',
			'year_in',
			'year_out'
		])
		const job = new Job()

		try {
			job.user_id = input.user_id
			job.company = input.company
			job.position = input.position
			job.year_in = input.year_in
			job.year_out = input.year_out

			await job.save()
			return response.status(201).json(job)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Display a single job.
	 * GET jobs/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async show ({ params, request, response, view }) {
		try {
			const job = await Job.find(params.id)
			return response.json(job)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}

	}

	/**
	 * Render a form to update an existing job.
	 * GET jobs/:id/edit
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async edit ({ params, request, response, view }) {
	}

	/**
	 * Update job details.
	 * PUT or PATCH jobs/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async update ({ params, request, response }) {
		const input = request.only([
			'user_id',
			'company',
			'position',
			'year_in',
			'year_out'
		])

		try {
			const job = await Job.find(params.id)

			if (!job) return response.status(404).json({ message: 'Data not found!' })

			job.user_id = input.user_id
			job.company = input.company
			job.position = input.position
			job.year_in = input.year_in
			job.year_out = input.year_out

			await job.save()
			return response.status(200).json(job)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}

	/**
	 * Delete a job with id.
	 * DELETE jobs/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async destroy ({ params, request, response }) {
		try {
			const job = await Job.find(params.id)	

			if (!job) return response.status(404).json({ message: 'Data not found!' })

			await job.delete()
			return response.status(204).json(null)
		} catch (err) {
			console.log(err)
			return response.send(err)
		}
	}
}

module.exports = JobController
