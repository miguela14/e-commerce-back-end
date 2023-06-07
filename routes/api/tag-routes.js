const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tags = await Tag.findAll({
      include: Product
    });
    if (tags) {
      res.json(tags)
    }
    else {
      res.status(404).json({error: 'error loading'});
    }
  } catch (error) {
    res.status(500).json({error: 'error occured on the server'})
  }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tags = await Tag.findByPk(req.params.id, {
      include: Product
    })
    if (tags) {
      res.json(tags)
    } else {
      res.status(404).json({error: 'error loading page'})
    }
  } catch (error) {
    res.status(500).json({error: 'error occured on the server'})
  }
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tags = Tag.create(req.body);
    if (tags) {
    res.status(200).json(Category)
    } else {
      res.status(404).json({error: 'error loading page'})
    }
  } catch (error) {
    res.status(500).json({error: 'error occured on the server'})
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tags = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!tags[0]) {
      req.status(404).json({message: 'No tag with this id!'})
      return;
    }
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json({error: 'error occured on the server'})
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tags = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tags) {
      res.status(404).json({message: 'No tag with this id!'})
      return;
    }
    res.status(200).json(tags)
  } catch (error) {
    res.status(500).json({error: 'error occured on the server'})
  }
});

module.exports = router;