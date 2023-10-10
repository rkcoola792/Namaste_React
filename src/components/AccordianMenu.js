import React, { useState } from 'react'
import { ItemList } from './itemList';

const AccordianMenu = ({menuList,showList,setShowIndex}) => {
// console.log("MENUUUUUU" , menuList)
const handleClick=()=>{
  setShowIndex();
}
    return (
      <div className="m-auto shadow-lg my-2 p-4 bg-slate-100 w-6/12  ">
        <div
          className="flex justify-between cursor-pointer "
          onClick={handleClick}
        >
          <span className="font-bold">
            {menuList.title} ({menuList.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div> {showList && <ItemList data={menuList}></ItemList>}</div>
      </div>
    );
}

export default AccordianMenu
