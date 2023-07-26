import React, { useState } from 'react';
import styled from 'styled-components';
import navbar from '../store/navbar';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  padding: 10px 0;
`

const Button = styled.button`
  background: none;
  border: 1px solid #000;
  padding: 10px 100px;
  border-radius: 10px;
  transition: .3s;
  cursor: pointer;
  &:hover {
    background: #000;
    color: #fff;
  } 
`

const Header: React.FC = () => {
  const [active, setActive] = useState('head');

  function changeNavbar(part: string) {
    setActive(part);
    navbar.changePart(part);
  }

  return (
    <Container>
      <Button onClick={() => changeNavbar('head')} style={active === 'head' ? {background: '#000', color: '#fff'} : {}}>головы</Button>
      <Button onClick={() => changeNavbar('legs')} style={active === 'legs' ? {background: '#000', color: '#fff'} : {}}>ноги</Button>
      <Button onClick={() => changeNavbar('arms')} style={active === 'arms' ? {background: '#000', color: '#fff'} : {}}>руки</Button>
      <Button onClick={() => changeNavbar('body')} style={active === 'body' ? {background: '#000', color: '#fff'} : {}}>тело</Button>
    </Container>
  )
}

export default Header;
