import React from 'react';
import head from '../store/head';
import styled from 'styled-components';

const Button = styled.button`
  width: 50px;
  height: 50px;
  cursor: pointer;
`

const Navbar: React.FC = () => {
  function changeColor() {
    head.changeColor('red');
  }

  return (
    <>
      <Button onClick={changeColor} style={{background: 'red'}}></Button>
      <Button style={{background: 'blue'}}></Button>
      <Button style={{background: 'green'}}></Button>
      <Button style={{background: 'pink'}}></Button>
      <Button style={{background: 'orange'}}></Button>
    </>
  )
}

export default Navbar;
