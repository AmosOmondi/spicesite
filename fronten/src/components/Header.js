import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Header = () => {
return (
<header className='header'>
<div className='logo'>
<Link to='/'>Home</Link>
</div>
<ul>
<li>
<Link to='/login'>
<FaSignInAlt /> Login
</Link>
</li>
<li>
<Link to='/register'>
<FaUser /> Register
</Link>
</li>

<li>
<Link to='/about'>
About Us
</Link>
</li>



</ul>

</header>
)
}
export default Header