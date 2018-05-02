const models = require('../models/')


exports = module.exports = (router, User) => {
	router.get('/users', (req, res) => {
		// console.log('User: ', User)
	  User.findAll().then((users) => {
	    res.json(users)
	  })
	})

	router.get('/users/:user_id', (req, res) => {
	  User.findAll({
	    where: {
	      id: req.params.user_id
	    }
	  }).then((user) => {
	    console.log('destroyed user with user_id: ', req.params.user_id)
	    res.json(user)
	  })
	})

	// user create
	router.post('/users/create/:username', (req, res) => {

		console.log('req.params: ', req.params)

		// let user = new User()
		// console.log('user: ', user)
		// user.username = req.params.username

		// user.save((err) => {
		// 	if (err) {res.send(err)}
		// 	res.json({message: 'new user successfully created'})
		// })

	  User.create({
	    username: req.params.username
	  }).then(() => {
	    console.log('created user!')
	    res.json({message: 'successfully created user!'})
	  })
	})

	// user destroy
	router.get('/users/delete/:user_id', (req, res) => {
	  User.destroy({
	    where: {
	      id: req.params.user_id
	    }
	  }).then((user) => {
	    console.log('destroyed user with user_id: ', req.params.user_id)
	    res.json(user)
	  })
	})
}