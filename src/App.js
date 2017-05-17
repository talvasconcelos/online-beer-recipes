import React, { Component } from 'react';
import logo from './logo.svg';

import Hero from './components/Hero'
import Feature from './components/Features'


class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <div className='wrapper'>
          <h1>Hello world!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quas quae dolores iure incidunt, repudiandae dolorum quasi neque, quod nobis voluptas, labore possimus, vel libero assumenda atque eveniet. Eum, omnis!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quas quae dolores iure incidunt, repudiandae dolorum quasi neque, quod nobis voluptas, labore possimus, vel libero assumenda atque eveniet. Eum, omnis!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quas quae dolores iure incidunt, repudiandae dolorum quasi neque, quod nobis voluptas, labore possimus, vel libero assumenda atque eveniet. Eum, omnis!</p>
          <sub>rere</sub>
          <sup>grgrgr</sup>
        </div>
      </div>
    );
  }
}

export default App;
