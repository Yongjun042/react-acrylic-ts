# react-acrylic-ts

> typescript version of [react-acrylic](https://github.com/damaera/react-acrylic) by [Damaera](https://github.com/damaera)

[![NPM](https://img.shields.io/npm/v/react-acrylic-ts.svg)](https://www.npmjs.com/package/react-acrylic-ts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Frost glass effect, Acrylic Material react component

Inspired by [Fluent Design's Acrylic Material](https://docs.microsoft.com/en-us/windows/uwp/style/acrylic)

[Sample page](https://yongjun042.github.io/react-acrylic-ts/)

[npm](https://www.npmjs.com/package/react-acrylic-ts)

## Install

```bash
npm install --save react-acrylic-ts
```

## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from 'react-acrylic-ts'
import 'react-acrylic-ts/dist/index.css'

class Example extends Component {
  render() {
    return(
      <Acrylic
      position = 'fixed'
      opacity = {0.5}
      top = '250px'
      left = '450px'
      width = '300px'
      height = '200px'
      borderRadius = '10px'
      boxShadow='10px 5px 5px blue'
      colorOverlay='#0000FF'>
      </Acrylic>
    )     
    
  }
}
```

## Default Value

| Props | Default value |
| --------------|---------------|
| `position` | `'fixed'`,
| `left` | `0`,
| `top` | `0`,
| `width` | `0`,
| `height` | `0`,
| `colorOverlay` | `'#fff'` |
| `opacity` | `0.5` |
| `borderRadius` | `0` |
| `boxShadow` | `null` |
| `blur` | `30` |

## License

MIT © [Yongjun042](https://github.com/Yongjun042)
