import React, { useState } from 'react';
import head from '../store/head';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import navbar from '../store/navbar';

const Button = styled.button`
  width: 50px;
  height: 50px;
  cursor: pointer;
`

const Navbar: React.FC = observer(() => {
  const [active, setActive] = useState('head');

  function changeColor(color: string) {
    head.changeColor(color);
  }

  return (
    <>
      <Button onClick={() => changeColor('red')} style={{background: 'red'}}></Button>
      <Button onClick={() => changeColor('blue')} style={{background: 'blue'}}></Button>
      <Button onClick={() => changeColor('green')} style={{background: 'green'}}></Button>
      <Button onClick={() => changeColor('pink')} style={{background: 'pink'}}></Button>
      <Button onClick={() => changeColor('orange')} style={{background: 'orange'}}></Button>
    </>
  )
})

export default Navbar;
