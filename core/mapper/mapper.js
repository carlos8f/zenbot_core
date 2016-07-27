var parallel = require('run-parallel-limit')

module.exports = function container (get, set, clear) {
  var c = get('core.constants')
  return function mapper (options) {
    parallel(get('mappers'), c.parallel_limit, function (err) {
      if (err) throw err
    })
  }
}