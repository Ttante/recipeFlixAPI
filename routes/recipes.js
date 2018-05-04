const models = require('../models/')


exports = module.exports = (router, Recipe) => {
	router.get('/recipes', (req, res) => {
		// console.log('Recipe: ', Recipe)
	  Recipe.findAll().then((recipes) => {
	    res.json(recipes)
	  })
	})

	router.get('/recipes/:recipe_id', (req, res) => {
	  Recipe.findAll({
	    where: {
	      id: req.params.recipe_id
	    }
	  }).then((recipe) => {
	    console.log('destroyed recipe with recipe_id: ', req.params.recipe_id)
	    res.json(recipe)
	  })
	})

	// recipe create
	router.post('/recipes/create/:name/', (req, res) => {

		console.log('req.params: ', req.params)

	  Recipe.create({
	    name: req.params.name,
	  }).then(() => {
	    console.log('created recipe!')
	    res.json({message: 'successfully created recipe!'})
	  })
	})

	// recipe destroy
	router.get('/recipes/delete/:recipe_id', (req, res) => {
	  Recipe.destroy({
	    where: {
	      id: req.params.recipe_id
	    }
	  }).then((recipe) => {
	    console.log('destroyed recipe with recipe_id: ', req.params.recipe_id)
	    res.json(recipe)
	  })
	})
}