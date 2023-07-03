import React from 'react'
import "./LeftBanner.css"
import cross from '../images/bx_cross.png';
import ClimateChange from "../images/Climate_Change.png"
import Hide from "../images/Hide.png"
import Mesh from "../images/Mesh.png"
import Padlock from '../images/Padlock.png'
import Polyline from '../images/Polyline.png'
import Ruler from "../images/Ruler.png"
import ShockerEmogi from "../images/ShockerEmogi.png"
import Text from "../images/Text.png"
import TrashCan from "../images/Trash_Can.png"
import Unit from "../images/Unit.png"
import Zoom from "../images/Zoom.png"
import GraphImage from '../images/GraphImage.jpeg'
import Elipse16 from '../images/Elipsediff.png'
import Elipse18 from '../images/Elipse18.png'
import range from '../images/range.png'

function LeftBanner() {
    return (
        <div>
            <div className='left-banner'>
                <div className='fixed-banner'>
                    <div className='all-png'>
                        <img src={cross} alt="Cross" />
                        <img src={Unit} alt="Unit" />
                        <img src={Hide} alt="Cross" />
                        <img src={Polyline} alt="Polyline" />
                        <img src={Text} alt="Text" />
                        <img src={Mesh} alt="Mesh" />

                        <img src={ClimateChange} alt="ClimateChange" />
                        <img src={ShockerEmogi} alt="ShockerEmogi" />
                        <img src={Ruler} alt="Ruler" />
                        <img src={Zoom} alt="Zoom" />
                        <img src={Hide} alt="Hide" />
                        <img src={Padlock} alt="Padlock" />
                        <img src={TrashCan} alt="TrashCan" />


                    </div>

                </div>



            </div>

            <div className='graph-image'>
                <img src={GraphImage} alt='images' className='main-graph-images' />
            </div> 
            
            <div className='range'>
                <img src={range} alt='images' className='main-range' />
            </div>



            {/* box-table */}
            <div className="mainmain">


                <div className="mainDiv">
                    <div className="div1">
                        <p>Limit</p>
                        <p>Market</p>
                        <p>Trigger</p>

                    </div>

                    <div className="shift">
                        <div className="availabe">
                            Available -- USDT
                        </div>
                        <div className="price">
                            <div className="price1">
                                <div className="value">Price</div>
                                <div className="amt">27736.51</div>
                            </div>

                            <div className="currency">USDT</div>
                        </div>

                        <div className="price">
                            <div className="price1">
                                <div className="value">Amount</div>
                                <div className="amt"> >=0.00001 BTC.51</div>
                            </div>

                            <div className="currency">BTC</div>
                        </div>

                        <div className="circle">
                            <img src={Elipse16} alt="" srcset="" className="circle" />
                        </div>

                    </div>


                    <div className="buy">
                        <p className="btc">BUY BTC</p>
                    </div>

                </div>


                <div className="mainDiv">
                    <div className="div1">
                        <p>Limit</p>
                        <p>Market</p>
                        <p>Trigger</p>

                    </div>

                    <div className="shift">
                        <div className="availabe">
                            Available -- USDT
                        </div>
                        <div className="price2">
                            <div className="price1">
                                <div className="value">Price</div>
                                <div className="amt">The best market price</div>
                            </div>

                            <div className="currency">USDT</div>
                        </div>

                        <div className="price2">
                            <div className="price1">
                                <div className="value">Amount</div>
                                <div className="amt">  >=0.00001 BTC.51</div>
                            </div>

                            <div className="currency">BTC</div>
                        </div>

                        <div className="circle">
                            <img src={Elipse18} alt="" srcset="" className="circle" />
                        </div>

                    </div>


                    <div className="buy">
                        <p className="btc">BUY BTC</p>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default LeftBanner
