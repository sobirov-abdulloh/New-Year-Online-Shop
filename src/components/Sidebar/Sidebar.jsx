import React from 'react'
import "./Sidebar.css"
function Sidebar() {
  return (
    <aside>
   <h1> Katalog </h1> 
    <div className="select">
        <div className="select_1">
           <p>Название</p>
           <p> <input name='radio' type="radio" />А-Я</p>
           <p><input name='radio' type="radio" />А-Я</p>
        </div>
        <div className="select_2">
           <p>Высота</p>
           <p> <input name='box' type="checkbox" />1000</p>
           <p><input name='box' type="checkbox" />20</p>
        </div>
        <div className="select_3">
           <p>Ширина</p>
        </div>
    </div>
    </aside>
  )
}

export default Sidebar