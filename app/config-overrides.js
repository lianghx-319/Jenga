const customConfig = require("./config");
const rewireLess = require("react-app-rewire-less");
const {injectBabelPlugin} = require("react-app-rewired");

module.exports = function override(config, env) {
    config = injectBabelPlugin(
        ["import", {libraryName: "antd", libraryDriectory: "es", style: "true"}],
        config,
    );

    config = customConfig.rewireCleanWebpackPlugin({
        pathsToClean: ["build"],
        cleanOptions: {
            root: __dirname
        }
    })(config, env)

    config = rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": "#1DA57A" },
        javascriptEnabled: true
    })(config, env)

    return config
}