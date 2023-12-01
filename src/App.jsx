import GlobalStyles from "./components/GlobalStyles";
import Routes from "./routes";

import styled from "styled-components";

const AppContainer = styled.div`
  width: 1900px;
  margin: 0 auto;
  max-width: 100%;
`;

function App() {
  return (
    <main>
      <GlobalStyles />
      <AppContainer />
      <Routes />
    </main>
  );
}

export default App;
