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

## Api

### .browse([configuration])

Fetch models for a given list of brands

#### configuration

Type: `Object`

`configuration` is passed to the [node-car-api](https://github.com/92bondstreet/node-car-api#api) module.

##### brands

Type: `array`<br>

Brands whose models are fetched.

### .bulk(models)

Insert list of models -in bulk way - into ES  

#### models

Type: `array`

List of models
