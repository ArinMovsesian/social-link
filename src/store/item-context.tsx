import React, { useState } from "react";
import Item from "../models/Item";

type ItemContextObj = {
  items: Item[];
  item: any;
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  changeItem: (id: string) => void;
};
export const ItemContext = React.createContext<ItemContextObj>({
  items: [],
  item: null,
  addItem: () => {},
  removeItem: (id: string) => {},
  changeItem: (id: string) => {},
});

const ItemContextProvider: React.FC = (props) => {
  const [Items, setItems] = useState<Item[]>([]);
  const [Item, setItem] = useState<any>(null);

  const addItemHandler = (item: Item) => {
    console.log(item);

    setItems((prevItems) => {
      return prevItems.concat(item); // return new Array
    });
  };
  const removeItemHandler = (id: string) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };
  const changeItemHandler = (id: string) => {
   
    let item = Items.find(
      (item) => {
        return item.id == id
      }
    )
    const newRef: any = {...item};
    setItem(newRef);
  }
  const contextValue: ItemContextObj = {
    items: Items,
    item: Item,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    changeItem: changeItemHandler
  };
  return (
    <ItemContext.Provider value={contextValue}>
      {props.children}
    </ItemContext.Provider>
  );
};
export default ItemContextProvider