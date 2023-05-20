import React from 'react'

import { Link } from 'react-router-dom'
import { navItems } from '../../static/data'
import styles from '../../styles/styles'

const Navbar = ({active}) => {
  return (
    <div className={`block md:${styles.noramlFlex}`}>
         {
            navItems && navItems.map((i,index) => (
                <div className="flex  ">
                    <Link to={i.url}
                    className={`${active === index + 1 ? "text-[#17dd1f]" : "text-[#2C1654] "} pb-[30px] md:pb-0 text-sm font-bold  ms-8 cursor-pointer}`}
                    >
                    {i.title}
                    </Link>
                </div>
            ))
         }
    </div>
  )
}

export default Navbar