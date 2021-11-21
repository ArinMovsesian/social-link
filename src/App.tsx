import React from "react";
import Card from "./UI/Card";
import Collapse from "./components/Collapse";
import ItemContextProvider, { ItemContext } from "./store/item-context";
import CustomItemList from "./components/CustomItemList";
import CustomItemListContainer from "./components/CustomItemListContainer";


function App() {
 
  return (
    <>
      <ItemContextProvider>
        <Card>
          <Collapse />
          <CustomItemListContainer />
        </Card>
      </ItemContextProvider>
    </>
  );
}

export default App;
