# scaling-system

# Setting up the database

```bash
psql postgres
postrgres=# \du
```

## `CREATE ROLE`
```bash
CREATE ROLE johndoe WITH LOGIN PASSWORD 'supersecretpassword';
ALTER USER johndoe CREATEDB;
```

* `CREATEUSER`
* `CREATEDB`
* `DROPUSER`
* `DROPDB`
* `POSTGRES`
* `PG_DUMP`


## Creating a Database

`psql postgres -U johndoe`
`CREATE DATABASE databasename;`
`CREATE DATABASE super_awesome_application;`
`GRANT ALL PRIVILEGES ON DATABASE super_awesome_application TO johndoe;`

`postgres=> \connect super_awesome_application;`

```sql
CREATE TABLE IF NOT EXISTS Entity (
    entity_id serial PRIMARY KEY,
    name VARCHAR ( 255 ) unique not null
);

DROP TABLE IF EXISTS entity;
```

