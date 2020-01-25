import React from "react";
import { DividerBrown } from "../../components/static";
import MenuList from "./menu-list";


export default function Menu() {
  return (
    <section className="menu">
      <div className="container">
        <div className="menu__wrap">
  
          <MenuList />
          
        </div>
      </div>
    </section>
  )
}
