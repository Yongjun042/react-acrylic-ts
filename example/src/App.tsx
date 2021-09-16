import React from 'react'

 import  Acrylic  from 'react-acrylic-ts'
import 'react-acrylic-ts/dist/index.css'

import mt from './mt.jpg'

// Acrylic: typeof React.Component
const App = () => {
  return (
    <div>
      <img src={mt} alt="background"/>

    <Acrylic
    position = 'fixed'
    opacity = {0.5}
    top = '100px'
    left = '100px'
    width = '700px'
    height = '500px' />
     asdf</div>
  )
}

export default App
