# Vue.js XLS to JSON converter

Convert .xlsx file to JSON.

## Installation

* composer install
* yarn install
* yarn dev/prod/watch
* create .env file: ```cp .env.example .env```
* php artisan key:generate

## Usage / Demo
* Visit http://xls-json-converter.rf.gd
* Download example .xlsx file
* Select .xlsx file to convert

## Possible Errors

### cache: No such file or directory
```mkdir bootstrap/cache```

Win: ```mkdir bootstrap\cache```
g
### Permission denied on storage folder
```mkdir storage/framework storage/framework/cache storage/framework/cache/data storage/framework/sessions storage/framework/views```

Win: ```mkdir storage\framework storage\framework\cache storage\framework\cache\data storage\framework\sessions storage\framework\views```
