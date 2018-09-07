const CleanWebpackPlugin = require("clean-webpack-plugin");

/**
 * @param {object} options
 * @param {string[]} options.pathsToClean
 * @param {object} options.cleanOptions
 * options detail click the link
 * https://github.com/johnagan/clean-webpack-plugin
 */

const rewireCleanWebpackPlugin = function(options) {
    return function rewire (config, env) {
        if (env == "production") {
            config.plugins = (config.plugins || []).concat(
                [new CleanWebpackPlugin(options.pathsToClean, options.cleanOptions)]
            );
        }
        return config
    }
}

module.exports = rewireCleanWebpackPlugin;