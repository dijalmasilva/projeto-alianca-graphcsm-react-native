module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            ["module:react-native-dotenv", {
                "moduleName": "@env",
                "path": ".env",
                "blacklist": null,
                "whitelist": null,
                "safe": false,
                "allowUndefined": true
            }],
            [
                "module-resolver",
                {
                    alias: {
                        components: "./components",
                        layouts: "./layouts",
                        models: "./models",
                        screens: "./screens",
                        themes: "./themes",
                        utils: "./utils",
                        services: "./services",
                        graphql: "./graphql",
                    }
                }
            ]
        ]
    };
};
