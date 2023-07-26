import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 800px;
`

const Head = styled.div`
  width: 100px;
  height: 100px;
  border: 1px #000 solid;
  margin: 0 auto;
`

const Arms = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`

const Arm = styled.div`
  width: 150px;
  height: 40px;
  border: 1px #000 solid;
`

const Body = styled.div`
  width: 100px;
  height: 200px;
  border: 1px #000 solid;
`

const Legs = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin: 0 auto;
`

const Leg = styled.div`
  width: 40px;
  height: 100px;
  border: 1px #000 solid;
`

const Skin: React.FC = () => {
  return (
    <Container>
      <Head></Head>
      <Arms>
        <Arm></Arm>
        <Body></Body>
        <Arm></Arm>
      </Arms>
      <Legs>
        <Leg></Leg>
        <Leg></Leg>
      </Legs>
    </Container>
  )
}

export default Skin