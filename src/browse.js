const {getBrands, getModels} = require('node-car-api');

 /**
 * [browse description]
 * @param  {Object} configuration
 * @return {Array}
 */
module.exports = async function browse (configuration = {}) {
  let {brands} = configuration;
  let models = [];

  if (! brands || brands.length === 0) {
    brands = await getBrands();
  }

  // concurrency doesn't matter
  // we can make calls in serie
  for (let brand of brands) {
    console.log(`fetching models for ${brand}...`);
    const results = await getModels(brand);

    models = models.concat(results);
  }

  return models;
};
