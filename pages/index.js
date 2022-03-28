import styled from 'styled-components';
const Heading = styled.h1`
  color: ${(props)=>(props.variant==="new"?"green":"red")};
`;
const Heading2 = styled(Heading)`
  background-color: aquamarine;
  &:hover{
  color: ${(props)=>(props.variant==="new"?"orange":"blue")};
  }
`;
const index = () => {
  return (
    <>
      <h1>Arnab</h1>
      <Heading >Arnab saha</Heading>
      <Heading as="a">Arnab saha</Heading>
      <Heading variant="new">Arnab saha</Heading>
      <Heading2>Arnab saha</Heading2>
    </>
  );
}

export default index;