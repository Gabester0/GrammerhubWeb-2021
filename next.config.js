// next.config.js
const withCss = require("@zeit/next-css")
// const withSass = require("@zeit/next-sass")
const withTypescript = require('@zeit/next-typescript')
// const withPlugins = require("next-compose-plugins")

// module.exports = withPlugins([withTypescript, withCss, withSass])
module.exports = withTypescript( 
    withCss(
        // withSass({
        //     // cssModules: true,
        //     // exportPathMap: exportPathMap.bind(null, path.join(__dirname, 'pages')),
        // })
    )
)
