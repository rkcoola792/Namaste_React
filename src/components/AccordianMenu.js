import React from 'react'

const AccordianMenu = ({menuList}) => {
console.log("MENUUUUUU" , menuList)
    return (
      <div className="m-auto shadow-lg my-2 p-4 bg-slate-100 flex justify-between w-6/12">
        <span className="font-bold">
          {menuList.title} ({menuList.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
    );
}

export default AccordianMenu
