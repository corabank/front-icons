## Install

To install the Icon Library use NPM or Yarn:

```shell
npm install @corabank/icons
```

```shell
yarn add @corabank/icons
```

## Usage

```tsx
import * as React from "react";

import MyComponent from "@corabank/icons";

class Example extends React.Component {
  render() {
    return <MyComponent />;
  }
}
```

## Props

| name       | type    | default | description                                                  |
| ---------- | ------- | ------- | ------------------------------------------------------------ |
| size       | string  | small   | Define size of the icon, values permited: small, medium, big |
| color      | string  | #3B3B3B | Define color of the icon, use hexadecimal color              |
| background | boolean | false   | sets background for the icon                                 |
