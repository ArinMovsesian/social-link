import React, { useState } from "react";
import Item from "../models/Item";

type ItemContextObj = {
  items: Item[];
  item: any;
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  findItem: (id: string) => void;
  changeItem: (item: Item) => void;
};
export const ItemContext = React.createContext<ItemContextObj>({
  items: [],
  item: null,
  addItem: () => {},
  removeItem: (id: string) => {},
  findItem: (id: string) => {},
  changeItem: (item: Item) => {},
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
  const findItemHandler = (id: string) => {
   
    let item = Items.find(
      (item) => {
        return item.id == id
      }
    )
    const newRef: any = {...item};
    setItem(newRef);
  }
  const changeItemHandler = (item: Item) => {
    // debugger;
    
    setItems((prevItems) => {
      const items = [...prevItems];
      const index = items.findIndex((ite) => ite.id == item.id);
      items[index] = {
        type: item.type,
        id: item.id,
        link: item.link
      }
      return items
    });

  }
  const contextValue: ItemContextObj = {
    items: Items,
    item: Item,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    findItem: findItemHandler,
    changeItem: changeItemHandler
  };
  return (
    <ItemContext.Provider value={contextValue}>
      {props.children}
    </ItemContext.Provider>
  );
};
export default ItemContextProvider