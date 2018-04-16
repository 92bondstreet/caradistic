const caradistic = require('../');

async function save () {
  try {
    const models = await caradistic.browse({'brands': ['CITROEN']});

    await caradistic.bulk(models);
  } catch (e) {
    console.error(e);
  }
}

save();
