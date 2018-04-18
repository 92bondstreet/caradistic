const caradistic = require('../');

async function save () {
  try {
    const models = await caradistic.browse();

    await caradistic.bulk(models);
  } catch (e) {
    console.error(e);
  }
}

save();
