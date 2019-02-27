'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Prefix = 'api/v1';

Route.on('/').render('welcome')

Route.group(() => {
	Route.get('/', 'AcademicController.index').middleware('auth')
	Route.get(':id', 'AcademicController.show').middleware('auth')
	Route.post('/', 'AcademicController.store').middleware('auth')
	Route.patch(':id', 'AcademicController.update').middleware('auth')
	Route.delete(':id', 'AcademicController.destroy').middleware('auth')
}).prefix(Prefix + '/academics');

Route.group(() => {
	Route.get('/', 'CategoryController.index').middleware('auth')
	Route.get(':id', 'CategoryController.show').middleware('auth')
	Route.post('/', 'CategoryController.store').middleware('auth')
	Route.patch(':id', 'CategoryController.update').middleware('auth')
	Route.delete(':id', 'CategoryController.destroy').middleware('auth')
}).prefix(Prefix + '/categories');

Route.group(() => {
	Route.get('/', 'CityController.index').middleware('auth')
	Route.get(':id', 'CityController.show').middleware('auth')
	Route.post('/', 'CityController.store').middleware('auth')
	Route.patch(':id', 'CityController.update').middleware('auth')
	Route.delete(':id', 'CityController.destroy').middleware('auth')
}).prefix(Prefix + '/cities');

Route.group(() => {
	Route.get('/', 'ContactController.index').middleware('auth')
	Route.get(':id', 'ContactController.show').middleware('auth')
	Route.post('/', 'ContactController.store').middleware('auth')
	Route.patch(':id', 'ContactController.update').middleware('auth')
	Route.delete(':id', 'ContactController.destroy').middleware('auth')
}).prefix(Prefix + '/contacts');

Route.group(() => {
	Route.get('/', 'EventController.index').middleware('auth')
	Route.get(':id', 'EventController.show').middleware('auth')
	Route.post('/', 'EventController.store').middleware('auth')
	Route.patch(':id', 'EventController.update').middleware('auth')
	Route.delete(':id', 'EventController.destroy').middleware('auth')
}).prefix(Prefix + '/events');

Route.group(() => {
	Route.get('/', 'JobController.index').middleware('auth')
	Route.get(':id', 'JobController.show').middleware('auth')
	Route.post('/', 'JobController.store').middleware('auth')
	Route.patch(':id', 'JobController.update').middleware('auth')
	Route.delete(':id', 'JobController.destroy').middleware('auth')
}).prefix(Prefix + '/jobs');

Route.group(() => {
	Route.get('/', 'NewsController.index').middleware('auth')
	Route.get(':id', 'NewsController.show').middleware('auth')
	Route.post('/', 'NewsController.store').middleware('auth')
	Route.patch(':id', 'NewsController.update').middleware('auth')
	Route.delete(':id', 'NewsController.destroy').middleware('auth')
}).prefix(Prefix + '/news');

Route.group(() => {
	Route.get('/', 'ProfileController.index').middleware('auth')
	Route.get(':id', 'ProfileController.show').middleware('auth')
	Route.post('/', 'ProfileController.store').middleware('auth')
	Route.patch(':id', 'ProfileController.update').middleware('auth')
	Route.delete(':id', 'ProfileController.destroy').middleware('auth')
}).prefix(Prefix + '/profiles');

Route.group(() => {
	Route.get('/', 'ProvinceController.index').middleware('auth')
	Route.get(':id', 'ProvinceController.show').middleware('auth')
	Route.post('/', 'ProvinceController.store').middleware('auth')
	Route.patch(':id', 'ProvinceController.update').middleware('auth')
	Route.delete(':id', 'ProvinceController.destroy').middleware('auth')
}).prefix(Prefix + '/provinces');

Route.group(() => {
	Route.get('/', 'ReligionController.index').middleware('auth')
	Route.get(':id', 'ReligionController.show').middleware('auth')
	Route.post('/', 'ReligionController.store').middleware('auth')
	Route.patch(':id', 'ReligionController.update').middleware('auth')
	Route.delete(':id', 'ReligionController.destroy').middleware('auth')
}).prefix(Prefix + '/religions');

Route.group(() => {
	Route.get('/', 'UserController.index').middleware('auth')
	Route.get(':id', 'UserController.show').middleware('auth')
	Route.post('/', 'UserController.store').middleware('auth')
	Route.patch(':id', 'UserController.update').middleware('auth')
	Route.delete(':id', 'UserController.destroy').middleware('auth')
}).prefix(Prefix + '/users');

Route.group(() => {
	Route.post('register', 'AuthController.register');
	Route.post('login', 'AuthController.login');
	Route.post('check', 'AuthController.check').middleware('auth')
	Route.post('refresh', 'AuthController.refreshToken').middleware('auth')
	Route.post('logout', 'AuthController.logout').middleware('auth')
}).prefix(Prefix + '/auth');