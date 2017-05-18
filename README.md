# `demo-api-benchmark`

`demo-api-benchmark` is a comparison script to compare performance between `efcore-api`, `dapper-api` and `node-api`.

## Installation

* Run `npm i` 

## Usage

Run the following in a `Terminal` after running all three API servers: 

```sh
npm i # first time or dependency change only
EFCORE_SERVER=http://localhost:5000/api/v1/
DAPPER_SERVER=http://localhost:5001/api/v1/
NODE_SERVER=http://localhost:5002/api/v1/
npm run benchmark
```

## Contributors

* Steven Spann <sspann21@gmail.com> - Software Developer
