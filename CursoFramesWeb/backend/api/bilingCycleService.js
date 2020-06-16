const BilingCycle = require('./bilingCycle')

BilingCycle.methods(['get', 'post', 'put', 'delete'])
BilingCycle.updateOptions({ new: true, runValidators: true })

BilingCycle.route('count', function (req, res, next) {
    BilingCycle.count(function (error, value) {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})
module.exports = BilingCycle