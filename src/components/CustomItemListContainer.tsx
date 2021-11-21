import React from "react";
import { ItemContext } from "../store/item-context";
import CustomItemList from "./CustomItemList";
const CustomItemListContainer: React.FC = (props) => {
  const itemCtx = React.useContext(ItemContext);
  console.log("CustomItemListContainer", itemCtx);
  const editItemHandler = (id: string) => {
    itemCtx.changeItem(id)
  }
  return (
    <div>
      {itemCtx.items.map((item, index) => {
        return <CustomItemList {...item} key={index} editItem={editItemHandler}/>;
      })}
    </div>
  );
};
export default CustomItemListContainer;
