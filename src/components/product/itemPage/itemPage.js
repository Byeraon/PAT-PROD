import React from "react";
import { useParams } from "react-router";

export const ItemPage = ({ allItems }) => {
  let { itemId } = useParams();
  const currentItem = allItems.find((item) => {
    return item.id === parseInt(itemId);
  });

  return <div>{currentItem && currentItem.name}</div>;
};
