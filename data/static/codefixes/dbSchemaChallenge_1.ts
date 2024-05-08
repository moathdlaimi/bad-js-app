module.exports = function searchProducts() {
  return function(req, res, next) {
    let criteria = req.query.q === 'undefined' ? '' : req.query.q || '';
    criteria = criteria.length <= 200 ? criteria : criteria.substring(0, 200);

    models.Products.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.like]: `%${criteria}%` } },
          { description: { [Op.like]: `%${criteria}%` }
        ],
        deletedAt: null
      },
      order: [['name', 'ASC']]
    })
    .then(products => {
      const localProducts = products.map(product => ({
        name: req.__(product.name),
        description: req.__(product.description)
      }));
      
      res.json(localProducts);
    })
    .catch(error => {
      next(error);
    });
  };
};