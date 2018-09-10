const customConfig = require("./config");
const rewireLess = require("react-app-rewire-less");
const {injectBabelPlugin} = require("react-app-rewired");

const assetsPath = "/app/build/"

process.env.PUBLIC_URL = assetsPath

module.exports = function override(config, env) {
    // 插入babel配置
    config = injectBabelPlugin(
        ["import", { libraryName: "antd", libraryDirectory: "es", style: true}],
        config,
    );

    // 插入clean-webpack-plugin
    config = customConfig.rewireCleanWebpackPlugin({
        pathsToClean: ["build"],
        cleanOptions: {
            root: __dirname
        }
    })(config, env)

    // 配置less，修改全局less变量
    config = rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": "#1DA57A" },
        javascriptEnabled: true
    })(config, env)

    // 配置webpack output
    config = customConfig.rewireWebpackMerge({
        env: "production",
        output: {
            publicPath: assetsPath
        }
    })(config, env)

    return config
}