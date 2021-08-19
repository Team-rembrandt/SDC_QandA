
`npm init -y`
  - this command allows us to initialize our node project.
  - this creates a `package.json` in directory which contains all the dependencies for your project

`npm i express`
  - this command installs Express.js as our dependency
  - `i` flag means 'install', and it's telling npm to install Express as project dependency.

`npm i sequelize pg pg-hstore`
  - this command install sequelize & pg
  - pg stands for postgresql
  - pg-hstore is a PostgreSQL extension that implements the `hstore` data type (a key-value data type for PostgreSQL).
    - it supports `GIN` and `GiST` indexing so lookup is fast and memory efficient
    - can be used WITH, rather than replacement of JSON and JSONB data types
    - (use if you have data that doesn't fit into your relational columns, isn't frequently looked up, or doesn't have a nested structure).
  (https://www.ibm.com/cloud/blog/an-introduction-to-postgresqls-hstore#:~:text=Exploring%20hstore%2C%20PostgreSQL's%20simple%20key%2Dvalue%20store&text=hstore%20is%20a%20PostgreSQL%20extension,JSONB%20data%20types%20were%20added.)

Figuring out how to set up postgresql is now the issue
  - i have all dependencies installed, it's a matter of connecting my database correctly, and writing the correct code to load data in

  - Connected node and postgres using pg-promise

  - I have to create a schema for my database
    - [x] created `sdc_qa` database via psql in terminal
    - [x] create tables in my schema.sql file
    - [x] load the schema file into my database via command `sudo psql -U jinhoobong sdc_qa < schema.sql`
    - [x] load in data files via command `sudo psql -U jinhoobong sdc_qa < loadData.sql`
      - for rapid ETL and seeding iterations
      - [x] `mkdir small
         head products.csv > small/products.csv
         ...
         head photos.csv > small/photos.csv`
      - [x] figure out how to store the date format (use function when returning data)
      - [x] data has been loaded in

  - [x] My data has been loaded, and boilerplate code for API endpoints has been set up
  - [x] set up MVC model
  - [x] set up router
  - [x] set up actual functionalities

- `npm i compression` to download compression
- `npm i body-parser` to download body parser to parse http requests with parameters
- `npm i supertest` to download supertest which is an API framework testing library
- `npm i jest` to download jest as testing framework
- `npx jest /servers/server.test.js --watch`





NEW RELIC - 'run the command on your host to install the integration'
curl -Ls https://raw.githubusercontent.com/newrelic/newrelic-cli/master/scripts/install.sh | bash && sudo NEW_RELIC_API_KEY=NRAK-X84APA80EUASNXW06J9OGNZ6H6T NEW_RELIC_ACCOUNT_ID=3263407 /usr/local/bin/newrelic install -n node-agent-installer

Using the command will automatically stop and attempt to restart all instrumentable applications, with all the same context, during the installation process. Once instrumented, redeploying any application(s) will require you to re-run the command. If you would like to manually install, please see our Node standard installation.


INSTALLING NEW RELIC NODE JS AGENT

`npm install newrelic -- save`
from `node_modules/newrelic` copy `newrelic.js` into root directory
configure `newrelic.js` file - insert license key and give app name
add `require('newrelic');` as first line in app's main module
- generate traffic and then wait for data to appear
(https://docs.newrelic.com/docs/agents/nodejs-agent/installation-configuration/install-nodejs-agent/)



