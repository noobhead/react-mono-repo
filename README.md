# react-mono-repo

This repository serves as an example for learning, bundling and publishing a React component library as a part of mono-repo. It is part of the article about [**"Bundling React NPM packages in monorepo using Rollup"**](https://medium.com/@noobhead/bundling-react-npm-packages-in-monorepo-using-rollup-91d897c013d2)

This mono-repo contains two workspaces and uses [lerna](https://lerna.js.org/) to manage them.

* webapp : contains the front-end source code of the entire application
* component-library : contains reusable and exportable components

You can clone the repo and follow the blog [here](https://medium.com/@noobhead/bundling-react-npm-packages-in-monorepo-using-rollup-91d897c013d2) to know about creating and bundling the component library.

The component library is published to a public NPM Registry [here](https://www.npmjs.com/package/@noobhead/react-component-library) which can be used as and when required.

Package link: [@noobhead/react-component-library](@noobhead/react-component-library)

The components present in the library have theming and localization support already in place.

In order to use the components in the library, simply add the package as a dependency in your project using the below command

```shell
npm install @noobhead/react-component-library  # using npm
yarn add @noobhead/react-component-library     # using yarn
```

## Example

```tsx
import React from 'react';
import { NotFoundComponent } from "@noobhead/react-component-library";

export default function Example() {

  return (
    <NotFoundComponent
      language={"en"}
      primaryThemeColor={"#FF0074"}
      secondaryThemeColor={"#15B1B0"}
      primaryFontColor={"#727272"}
      secondaryFontColor={"#000000"}
    />
  );
}

```




