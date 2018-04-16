const elasticsearch = require('elasticsearch');
const {ELK_URI} = require('./constants');

const esClient = new elasticsearch.Client({
  'host': ELK_URI,
  'log': 'error'
});

/**
 * Index results from stockx api params
 * @param  {Object} configuration
 */
module.exports = async models => {
  const bulks = models.map(model => {
    return [{
      'index': {
        '_index': 'caradisiac',
        '_type': 'car',
        '_id': model.uuid
      }
    }, model];
  });
  const indexes = [].concat(...bulks);

  try {
    const response = await esClient.bulk({'body': indexes});
    const errors = response.items.filter(item => item.index && item.index.error)
      .map(value => JSON.stringify(value, null, 2));

    console.error(errors.join('\n'));
    console.log(`Successfully indexed ${response.items.length - errors.length} out of ${models.length} items`);
  } catch (e) {
    console.error(e);
  }
};
