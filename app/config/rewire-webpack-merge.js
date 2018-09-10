const merge = require("webpack-merge");

const rewireWebpackMerge = function(options) {
    let _env = options.env;
    delete options.env;
    return function rewire(config, env) {
        if (!_env) {
            return merge(config, options)
        }
        if (env == _env) {
            return merge(config, options)
        } 
        return config
    }
}

module.exports = rewireWebpackMerge