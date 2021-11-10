const router = require('express').Router();
const { Mural } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newMural = await Mural.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newMural);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const muralData = await Mural.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!muralData) {
      res.status(404).json({ message: 'There is no mural found with this id! Please try again.' });
      return;
    }

    res.status(200).json(muralData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
