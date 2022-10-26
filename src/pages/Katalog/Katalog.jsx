import React from 'react'

import "./Katalog.css"
import { Data } from "../../data/data"
import Sidebar from '../../components/Sidebar/Sidebar'
import Katalig_map from '../../components/Katalig_map/Katalig_map';

function Katalog() {


  return (
    <div className='PAGE_CATOLIG'>
      <div className="aside">
        <Sidebar />
      </div>
      <div className="sale_list">
        {Data.map((item) => (
          <Katalig_map key={item.id} {...item} />
        ))}
      </div>
    </div>

  )
}

export default Katalog