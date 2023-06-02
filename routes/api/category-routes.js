const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  const categories = await Category.findAll({
    include: Product
  });
  if (categories) {
    res.json(categories)
  } else {
    res.status(404).json({error: 'error loading'});
  }
  // be sure to include its associated Products
});

// the '/api/categoties/id
// id meaning actual number of the id

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  const categories = await Category.findByPk(req.params.id, {
    includes: Product
  });
  if (categories) {
    res.json(categories)
  } else {
    res.status(404).json({error: 'error loading'});
  }
  // be sure to include its associated Products
});

router.post('/', async(req, res) => {
  // create a new category
  try {
    const categories = await Category.create(req.body);
    res.status(200).json(categories);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try {
    const categories = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categories[0]) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try {
    const categories = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categories) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;