import React from 'react'
import './Banner.css';
// import bitcoin from "../images/Bitcoin(1).png"
import vector from "../images/Vector (7).png"
// /import icon_loop from "../images/ icon _loop_.png"
// import bitcoin from "../images/Bitcoin1.png"
// import icon_loop from "../images/icon _loop_.png"

function Banner() {
    return (
        <div className='all-box'>

            <div className="upper_btn">
                <div className="cnt">
                    <p className="cnt_wallet">Connect Wallet</p>
                    <div className='vector'>
                        <img src={vector}></img>
                    </div>
                </div>

                <div className="cnt1">

                    {/* <img src={icon_loop}></img> */}
                    <p className="cnt_wallet1">BTC/USDT</p>
                    {/* image */}
                    
                </div>
            </div>

            {/* <div className="cnt">
                <p className="cnt_wallet">Connect Wallet</p>
            </div>

            <div className="cnt">
                <p className="cnt_wallet">BTC/USDT</p>
            </div> */}

            <div className="border-side">
                <h1 className="side-heading">Order Book</h1>

                <table className='table-row'>
                    <tr className='all-head'>
                        <th className="first-way">Price(USDT)</th>
                        <th className="second-way">Qty(BTC)</th>
                        <th className="third-way">Total(BTC)</th>
                    </tr>

                    <tr>
                        <td className="item-price">26,376.5</td>

                        <td className="item-qty-1" id='item-1-qty'>5.825</td>
                        <td className="data-item-1">33600</td>

                    </tr>
                    <tr>
                        <td className="item-price">26,376.5</td>
                        <td className="item-qty-2">5.825</td>
                        <td className="data-item-2">33600</td>
                    </tr>
                    <tr>
                        <td className="item-price">26,376.5</td>
                        <td className="item-qty-3">5.825</td>
                        <td className="data-item-3">33600</td>
                    </tr>
                    <tr>
                        <td className="item-price">26,376.5</td>
                        <td className="item-qty-4">5.825</td>
                        <td className="data-item-4">33600</td>
                    </tr>
                    <tr>
                        <td className="item-price">26,376.5</td>
                        <td className="item-qty-5">5.825</td>
                        <td className="data-item-5">33600</td>
                    </tr>


                </table>

                <div className='second-heading-number'>
                    <h1 className='text-number'>26,376.5</h1>
                </div>
                <table className='second-way-table'>
                    <tr className='first-fill-data'>
                        <td className='first-data-1'>26,376.5</td>

                        <td >5.825</td>
                        <td >33600</td>

                    </tr>
                    <tr className='first-fill-data'>
                        <td className='first-data-1'>26,376.5</td>

                        <td >5.825</td>
                        <td >33600</td>

                    </tr>
                    <tr className='first-fill-data'>
                        <td className='first-data-1'>26,376.5</td>

                        <td >5.825</td>
                        <td >33600</td>

                    </tr>
                    <tr className='first-fill-data'>
                        <td className='first-data-1'>26,376.5</td>

                        <td >5.825</td>
                        <td >33600</td>

                    </tr>
                    <tr className='first-fill-data'>
                        <td className='first-data-1'>26,376.5</td>

                        <td>5.825</td>
                        <td >33600</td>

                    </tr>

                </table>

                <div className='Market-time'>
                    <p className='market-text'>Market Trades</p>
                </div>


                {/* third table */}



                <table className='table-row' id='third-table'>
                    <tr className='all-head'>
                        <th className="first-way">Price(USDT)</th>
                        <th className="second-way">Qty(BTC)</th>
                        <th className="third-way">Total(BTC)</th>
                    </tr>

                    <tr>
                        <td className="item-price-same">26,376.5</td>

                        <td className="item-qty-1" id='third-qty-1'>1.078</td>
                        <td className="data-item-1" id='third-total-1'>22,049</td>

                    </tr>
                    <tr>
                        <td className="item-price">26,376.5</td>
                        <td className="item-qty-2">5.825</td>
                        <td className="data-item-2">33600</td>
                    </tr>
                    <tr>
                        <td className="item-price-same">26,376.5</td>
                        <td className="item-qty-3" id='third-qty-3'>1.078</td>
                        <td className="data-item-3" id='third-total-3'>33600</td>
                    </tr>
                    <tr>
                        <td className="item-price">26,376.5</td>
                        <td className="item-qty-4" id='third-qty-4'>5.825</td>
                        <td className="data-item-4">33600</td>
                    </tr>
                    <tr>
                        <td className="item-price">26,376.5</td>
                        <td className="item-qty-5" id='third-qty-5'>5.825</td>
                        <td className="data-item-5">33600</td>
                    </tr>


                </table>





            </div>
        </div>
    )
}

export default Banner
