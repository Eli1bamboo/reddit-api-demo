# reddit-api-demo
Javascript frontend test for DevIGet


This a CRA (Create React App) builded following the test requirements provided by DevIGet.

This app is consuming the public API of Reddit and it fetches it top 50 posts. This call is performed by an instance of Axios since I prefer to work with instead of native fetch method.

The UI is implementing Material UI because I think it solves the UI at it most, bringing me an excelent flexblox 12 col grid, styled and performant componentes with lots of customization. It's an awesome library.

You will note there is no consistency in components types. This is to demostate I can work with each type, from classes to statless / statefull functional.

The pagination logic and the persistant state feature are adaptations of code I found at stack overflow. Not much to say about this, I think the web sometimes has the needed.

Regarding to the core of the app, its a React app that uses Redux and implement Redux-Thunk.