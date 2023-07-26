import React from 'react';
import styled from 'styled-components';

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
  return (
    <Container>
      <Button>головы</Button>
      <Button>ноги</Button>
      <Button>руки</Button>
      <Button>тело</Button>
    </Container>
  )
}

export default Header;
