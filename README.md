<div align="center">
  <img src="https://github.com/leophant/leophant/raw/master/resources/logo.png" width="250" height="250">
  <br>
  <br>
  <a href="https://travis-ci.org/leophant/leophant"><img src="https://img.shields.io/travis/leophant/leophant.svg"></a>
  <a href="https://lgtm.com/projects/g/leophant/leophant/context:javascript"><img src="https://img.shields.io/lgtm/grade/javascript/g/leophant/leophant.svg"></a>
  <a href="https://codecov.io/gh/leophant/leophant"><img src="https://img.shields.io/codecov/c/gh/leophant/leophant.svg"></a>
  <a href="https://david-dm.org/leophant/leophant"><img src="https://img.shields.io/david/leophant/leophant.svg"></a>
  <a href="https://david-dm.org/leophant/leophant?type=dev"><img src="https://img.shields.io/david/dev/leophant/leophant.svg"></a>
  <br>
  <br>
</div>

Leophant is an ORM for Node.js.

**Note**: Leophant is under active development and there is no working version of it available yet.

[Example](https://github.com/leophant/leophant-example) &mdash;
[PostgreSQL connector](https://github.com/leophant/leophant-postgresql) &mdash;
[MySQL connector](https://github.com/leophant/leophant-mysql) &mdash;
[Questions](https://stackoverflow.com/questions/tagged/leophant)

## Install

```bash
$ npm i leophant

# Then install at least one connector:
$ npm i leophant-postgresql
$ npm i leophant-mysql
```

## Features on the roadmap

- [x] Zero dependencies
- [x] Core written using async/await
- [ ] Discover models automatically
- [ ] PostgreSQL connector
- [ ] MySQL connector
- [ ] Cross-database queries
- [ ] JSON schema definition
- [ ] Autoupdate/automigrate schemas
- [ ] 1:1, 1:N and M:N relations
- [ ] Through models
- [ ] Transactions
- [ ] Migrations
- [ ] Lifecycle events
- [ ] Web-based model management tool
- [ ] CLI
