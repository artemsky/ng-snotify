###### This is the fast guide how to run development

- `npm link ./src`
- Run example app `ng serve --open`
- open `localhost:4200` in your browser
- go to `./src`
- Start developing!

In the end you should re-link lib to the `dist` folder, and test

- `npm run build`
- `npm link ./dist`
- Test with compiled version of lib `ng serve --open`
- Be sure you pass `npm run lint`
- Make a pull request
