import React from "react";
import Card from "./UI/Card";
import Collapse from "./components/Collapse";
import ItemContextProvider, { ItemContext } from "./store/item-context";
import CustomItemList from "./components/CustomItemList";
import CustomItemListContainer from "./components/CustomItemListContainer";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  typography: {
    fontFamily: [
      'tahoma',
      'cursive',
    ].join(','),
  }
});
function App() {
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <ItemContextProvider>
        <Card>
          <Collapse />
          <CustomItemListContainer />
        </Card>
      </ItemContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
