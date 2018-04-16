# caradistic

> index caradisiac.com into Elasticsearch

## Installation

```sh
❯ yarn add git+ssh://git@github.com/92bondstreet/caradistic.git
```

## Usage

```js
const caradistic = require('caradistic');

const configuration = {
  'brands': ['AUDI', 'PEUGEOT'],
  'proxy': 'localhost:8118'
};

async function save () {
  try {
    const models = await caradistic.browse(configuration);

    await caradistic.bulk(models);
  } catch (e) {
    console.error(e);
  }
}

save();
```
