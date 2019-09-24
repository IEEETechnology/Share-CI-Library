# Share-CI-Library

This repository is for libraries sharing from any researchers worldwide involving with Computational Intelligence.
Hope this helps.

## Contribution

In the case that you want to contribute to this website, please see [Contribution Guidelines](docs/CONTRIBUTING.md).

## Requirements

- [NodeJS 10.x.x LTS](https://nodejs.org/en/)

## Commands

```sh
# download the package dependencies
npm install

# working locally
npm run dev

# generate build
npm run build

# format code
npm run format

# lint code
npm run lint

# Generate generate post preview images (npm run dev need to run before)
npm run generatePostPreviewImages
```

## Deployment

`gh-pages` package is required to deploy the built website to GitHub Pages. So type this to install the package globally:

```sh
npm install -g gh-pages
```

Everytime you want to deploy the new version of the website to GitHub Pages, run this:

```sh
npm run deploy
```
