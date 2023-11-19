import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to='/Home'>
                <img
                    className='header_logo'
                    src='https://imgs.search.brave.com/aajLEh72FOn4OyveF6SgE7wNdHeCizFAQpbBttENyuw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTUvQW1h/em9uLUxvZ28tV2hp/dGUtVHJhbnNwYXJl/bnQucG5n'
                    alt='logo'
                />
            </Link>
            <div className='header_search'>
                <input
                    className='header_searchInput'
                    type='text'
                    placeholder='Search Your Product'
                />
                <SearchIcon className='header_searchIcon' />
            </div>
            <Link to='/checkout'>
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon className='basket' />
                    <span className='header_optionLineTwo header_basketCount'>
                        {basket?.length}
                    </span>
                </div>
            </Link>
            <div className='header_nav'>
                <Link to='/Home'>
                    <div className='header_option'>
                        <span className='header_optionLineOne'>
                            Home
                        </span>
                        <span className='header_optionLineTwo'>
                            Page
                        </span>
                    </div>
                </Link>
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthenticaton} className='header_option'>
                        <span className='header_optionLineOne'>
                            Hello {!user ? 'Guest' : user.email}
                        </span>
                        <span className='header_optionLineTwo'>
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                {/* <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Returns
                    </span>
                    <span className='header_optionLineTwo'>
                        & Orders
                    </span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Your
                    </span>
                    <span className='header_optionLineTwo'>
                        Prime
                    </span>
                </div> */}
            </div>
        </div>
    )
}

export default Header