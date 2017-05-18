/* eslint consistent-return: 0 */

import apiBenchmark from 'api-benchmark';
import fs from 'fs';

const service = {
  'EFCore Server': 'http://localhost:5000/api/v1/',
  'Dapper Server': 'http://localhost:5001/api/v1/',
  'NodeJS Server': 'http://localhost:5002/api/v1/',
};

const routes = {
  'EFCore GET /ef-core/users': {
    method: 'get', route: '/ef-core/users', expectedStatusCode: 200,
  },
  'Dapper GET /dapper/users': {
    method: 'get', route: '/dapper/users', expectedStatusCode: 200,
  },
  'NodeJS GET /node/users': {
    method: 'get', route: '/node/users', expectedStatusCode: 200,
  },
  'EFCore GET /ef-core/users/{id}': {
    method: 'get', route: '/ef-core/users/1', expectedStatusCode: 200,
  },
  'Dapper GET /dapper/users/{id}': {
    method: 'get', route: '/dapper/users/2', expectedStatusCode: 200,
  },
  'NodeJS GET /node/users/{id}': {
    method: 'get', route: '/node/users/3', expectedStatusCode: 200,
  },
  'EFCore POST /ef-core/users': {
    method: 'post', route: '/ef-core/users',
    data: {
      firstName: 'Steven', lastName: 'Spann', service: 'EFCore',
    },
  },
  'Dapper POST /dapper/users': {
    method: 'post', route: '/dapper/users',
    data: {
      firstName: 'Steven', lastName: 'Spann', service: 'Dapper',
    },
  },
  'NodeJS POST /node/users': {
    method: 'post', route: '/node/users',
    data: {
      firstName: 'Steven', lastName: 'Spann', service: 'NodeJS',
    },
  },
  'EFCore PUT /ef-core/users/{id}': {
    method: 'put', route: '/ef-core/users/1',
    data: {
      firstName: 'Steven Modified', lastName: 'Spann', service: 'EFCore',
    },
  },
  'Dapper PUT /dapper/users/{id}': {
    method: 'put', route: '/dapper/users/2',
    data: {
      firstName: 'Steven', lastName: 'Spann Modified', service: 'Dapper',
    },
  },
  'EFCore PUT /node/users/{id}': {
    method: 'put', route: '/node/users/3',
    data: {
      firstName: 'Steven', lastName: 'Spann', service: 'NodeJS Modified',
    },
  },
};

apiBenchmark.measure(service, routes, { minSamples: 100 }, (error, results) => {
  apiBenchmark.getHtml(results, (err, html) => {
    if (err) console.error('There was an error generating the html: ', err);
    fs.writeFile('benchmark.html', html, (e) => {
      if (e) console.error('There was an error saving benchmark.html: ', e);
      console.log('benchmark.html saved successfully!');
    });
  });
});
