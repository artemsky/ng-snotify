# Styling

> Note. I'am using `scss` syntax. And there is no default theme.

You should import one of this in your global style.scss like this `@import "~ng-snotify/styles/material";` or `@import "~ng-snotify/styles/material.css";` if you using css syntax.

> if you using css syntax and angular-cli. Import styles directly in `.angular-cli.json`
```json
{
  "styles": [
          "../node_modules/ng-snotify/styles/{STYLE_NAME}.css",
          "styles.css"
  ]
}
```
_________________

**Snotify** offers you 3 themes.

#### Material
`@import "~ng-snotify/styles/material";`

![Material Theme](https://artemsky.github.io/vue-snotify/static/material.png)

#### Simple
`@import "~ng-snotify/styles/simple";`

![Simple Theme](https://artemsky.github.io/vue-snotify/static/simple.png)

#### Dark
`@import "~ng-snotify/styles/dark";`

![Dark Theme](https://artemsky.github.io/vue-snotify/static/dark.png)

If you need something else you can easily create your own theme by duplicating one of this, and writing your own styles.

Theme sources - [here](https://github.com/artemsky/ng-snotify/tree/master/src/styles)




