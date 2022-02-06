import React, {Chindren} from 'react'
import {NavLink} from 'react-router-dom'
import './sidebar.css'

export const Sidebar =({children})=>{ {
    return (
  
        <div className='Sidebar-Container'>
          <div className="Title">
              <span>Dev</span>
              <strong>challenges.oi</strong>
           </div>
          <nav>
            <ul className='nav'> 
                <li><NavLink to={'/colors'} className={({ isActive }) => isActive?'ative':''}>Colors</NavLink></li>
                <li><NavLink to={'/typography'} className={({ isActive }) => isActive?'ative':''}>Typography</NavLink></li>
                <li><NavLink to={'/spaces'} className={({ isActive }) => isActive?'ative':''}>Spaces</NavLink></li>
                <li><NavLink to={'/buttons'} className={({ isActive }) => isActive?'ative':''}>Buttons</NavLink></li>
                <li><NavLink to={'/inputs'} className={({ isActive }) => isActive?'ative':''}>Inputs</NavLink></li>
                <li><NavLink to={'/grid'} className={({ isActive }) => isActive?'ative':''}>Grid</NavLink></li>
            </ul>
          </nav>
          <div className='container-item-content'>{children}</div>
        </div>
    );
 }
} 