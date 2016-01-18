/**
 * SampleController
 * GET     /api/sample               ->  index
 */

const _ = require('lodash');

exports.index = (req, res) => {
    const data = {
        name: 'Fujimoto',
        age: 26
    };
    res.json(data);
};
