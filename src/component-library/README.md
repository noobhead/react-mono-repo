# React Component Library

Library made using React containing multiple components having localization and theme customizations. All the components within this library as both left-to-right(LTR) and right-to-left(RTL) handling for languages such as Arabic. This Component Library is made as a part of mono-repo.

## Installation

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
## Documentation

You can find the source of this package on [Github](https://github.com/noobhead/react-mono-repo.git).

Documentation and demo links to be updated soon.
