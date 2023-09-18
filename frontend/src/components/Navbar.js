import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div id='navbar'>
            <header>
                <div>
                    <Link to='/'>
                        Meals
                    </Link>
                    <Link to='/cart'>
                        My Basket
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar