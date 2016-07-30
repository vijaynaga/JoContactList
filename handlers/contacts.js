'use strict';

var repository = require('../lib/api/contactRepository');

module.exports = {
    get: function contacts_get(req, res) {
        res.json(repository.all())
    }
};
