import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 800px;
`

const Head = styled.div`
  width: 100px;
  height: 100px;
  border: 1px #000 solid;
`

const Arms = styled.div``

const Body = styled.div``

const Legs = styled.div``

const Skin: React.FC = () => {
  return (
    <Container>
      <Head></Head>
      <Arms>
        <Body></Body>
      </Arms>
      <Legs></Legs>
    </Container>
  )
}

export default Skin