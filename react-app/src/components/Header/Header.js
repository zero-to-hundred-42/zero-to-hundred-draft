import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => (
	<>
		<Link to='/'>
			<div className="Header">
				코로나OUT
			</div>
		</Link>
	</>
)

export default Header;
