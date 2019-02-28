'use strict'

const User = use('App/Models/User')

class AuthController {
	async register ({ request, auth, response }) {
		const input = request.only(['username', 'email', 'password'])

		try {
			const user = await User.create(input)
			const accessToken = await auth.withRefreshToken().generate(user)
			return response.json({
				"user": user,
				"accessToken": accessToken
			})
		} catch(error) {
			return response.status(401).send({
				message: "Something wrong cuk!"
			})
		}
	}

	async login ({ request, auth, response }) {
		const email = request.input('email')
		const password = request.input('password')

		try {
			if (await auth.attempt(email, password)) {
				let user = await User.findBy('email', email)
				let accessToken = await auth.withRefreshToken().generate(user)
				return response.json({
					"user": user,
					"accessToken": accessToken
				})
			}
		} catch (error) {
			return response.status(403).json({
				"message": "Something wrong cuk!"
			})
		}
	}

	async check ({ auth, response }) {
		try {
			let account = await auth.getUser()
			return response.status(200).json(account)
			/*await auth.check()
			return response.json({
				message: 'Token is valid!'
			})*/
		} catch (err) {
			return response.status(401).send({ message: 'Missing or invalid token' })
		}
	} 

	async refreshToken ({ request, auth }) {
		const refreshToken = request.input('refresh_token')
		return await auth
			.newRefreshToken()
			.generateForRefreshToken(refreshToken)
	}

	async logout ({ auth, response }) {
		const apiToken = auth.getAuthHeader()
		await auth.revokeTokens([apiToken])
		return response.send({ message: 'Logout successfully!' })
	}
}

module.exports = AuthController
