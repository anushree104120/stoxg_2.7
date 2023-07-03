import React from 'react'
import './Navbar.css'
// import AiOutlineSearch from 'react-icons/ai'
import imge1 from '../images/logo.png';
import man from '../images/man.png'
import Rectangle from '../images/Rectangle.png'
import Notification from '../images/notification.png'
// import SearchIcon from '../images/search.png'
// import VoiceIcon from '../images/voice.png'



function Navbar() {
    return (
        <div>
            <div className='nav'>

                <img className='first-image-nav' src={imge1} alt='logo-company' />

                <div className='search' >
                    {/* search bar hai */}
                    <div className='NewSearchIcon'>
                        {/* <img src={SearchIcon} alt='searchicon' className='searchIcon' /> */}



                        <input type="text" class="searchTerm" placeholder="Search here" />
                        {/* voice icon hai */}
                        {/* <img src={VoiceIcon} alt='VoiceIcon' className='VoiceIcon' /> */}
                    </div>

                </div>
                <div className='list-item'>
                    <p >Copy Trading</p>
                    <p >Buy & shell </p>
                    <p >Market</p>
                    <div className='style-trade'>
                        <p>Trade</p>
                        <button className='style-btn'></button>
                    </div>
                    <p >Earn</p>
                    <p >Future</p>
                    <p >NFT</p>

                </div>

                {/* circle images */}
                <div className='Rectangle'>
                    <img src={Rectangle} alt='rectangle' />
                    <img className='main-bell' src={Notification} alt='notification' />

                </div>



                <div className='man-div'>

                    <img className='man-image' src={man} alt='man' />
                </div>


            </div>
        </div >
    )
}

export default Navbar
