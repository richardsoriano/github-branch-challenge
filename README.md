# DevmentorLive Create React App Starter Template

## Getting Started

To create an app using this starter

```bash
npx create-react-app horizontal-menu --template cra-template-dml-tailwind
```

## This template uses [TailwindCSS](https://tailwindcss.com/)!

## To run your server (development)

```
cd your-app-name
yarn start
```

## Folder structure

```bash
src
├── app
├── features
├── pages
│   └── index.jsx
├── ui
└── index.jsx
```

This app uses a modified/simplified version of [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), better suited for modern web development.

### /app

I use /app to house my router and somethimes, a layout. To create a navigable component, create one in /pages, import it in /app/index.jsx and add a route.

### /ui

This folder is for your "lego blocks", single purpose React components that can be combined together to make more complicated components, known as Features

### /features

This folder is for more complex components, or features. Features are created by composing many UI components and usually, state

### /pages

This folder is for navigable components. A router automagically creates urls for anything in this folder. To create a page, combine features and ui components and put them in a component in this page. Typically state is managed in the feature, and any props that come from the server are passed through pages via the return object from getServerSideProps. Those props are then passed down into features as props, or put into a context.
