import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <Header title="My Debug App" />
      <Content count={count} increment={increment} decrement={decrement} />
      <Footer />
    </div>
  );
}

export default App;
