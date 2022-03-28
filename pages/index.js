import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
const Heading = styled.h1`
  color: ${(props)=>(props.variant==="new"?"green":"red")};
`;
const Heading2 = styled(Heading)`
  background-color: aquamarine;
  &:hover{
  color: ${(props)=>(props.variant==="new"?"orange":"blue")};
  }
`;
const Heading3 = styled.h1`
  color: ${(props)=>props.theme.dark.primary};
`;
// Define what props.theme will look like
const theme = {
  dark: {
    primary:"purple",
  },
  light: {
    primary:"pink",
  },
};
const index = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <h1>Arnab</h1>
        <Heading >Arnab saha</Heading>
        <Heading as="a">Arnab saha</Heading>
        <Heading variant="new">Arnab saha</Heading>
        <Heading2>Arnab saha</Heading2>
        <Heading3>Arnab saha</Heading3>
      </ThemeProvider>
    </>
  );
}

export default index;