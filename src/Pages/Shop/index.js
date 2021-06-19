import React, { useState, useEffect } from 'react';
import axios from 'axios';



const shop = () => {


    const [shop, setShop] = useState([]);

    useEffect(()=>{
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res)
            setShop(res.data)
            console.log(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, [])











    return(
        <>


        <section className="breadcrumb-section set-bg set-bg3">
            <div className="container">
                <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                    <h2>Checkout</h2>
                    <div className="breadcrumb__option">
                        <a href="./index.html">Home</a>
                        <span>Checkout</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section className="product spad">
            <div className="container">
                <div className="row">
                <div className="col-lg-3 col-md-5">
                    <div className="sidebar">
                    <div className="sidebar__item">
                        <h4>Department</h4>
                        <ul>
                        <li><a href="#">Fresh Meat</a></li>
                        <li><a href="#">Vegetables</a></li>
                        <li><a href="#">Fruit &amp; Nut Gifts</a></li>
                        <li><a href="#">Fresh Berries</a></li>
                        <li><a href="#">Ocean Foods</a></li>
                        <li><a href="#">Butter &amp; Eggs</a></li>
                        <li><a href="#">Fastfood</a></li>
                        <li><a href="#">Fresh Onion</a></li>
                        <li><a href="#">Papayaya &amp; Crisps</a></li>
                        <li><a href="#">Oatmeal</a></li>
                        </ul>
                    </div>
                    
                    <div className="sidebar__item sidebar__item__color--option">
                        <h4>Colors</h4>
                        <div className="sidebar__item__color sidebar__item__color--white">
                        <label htmlFor="white">
                            White
                            <input type="radio" id="white" />
                        </label>
                        </div>
                        <div className="sidebar__item__color sidebar__item__color--gray">
                        <label htmlFor="gray">
                            Gray
                            <input type="radio" id="gray" />
                        </label>
                        </div>
                        <div className="sidebar__item__color sidebar__item__color--red">
                        <label htmlFor="red">
                            Red
                            <input type="radio" id="red" />
                        </label>
                        </div>
                        <div className="sidebar__item__color sidebar__item__color--black">
                        <label htmlFor="black">
                            Black
                            <input type="radio" id="black" />
                        </label>
                        </div>
                        <div className="sidebar__item__color sidebar__item__color--blue">
                        <label htmlFor="blue">
                            Blue
                            <input type="radio" id="blue" />
                        </label>
                        </div>
                        <div className="sidebar__item__color sidebar__item__color--green">
                        <label htmlFor="green">
                            Green
                            <input type="radio" id="green" />
                        </label>
                        </div>
                    </div>
                    <div className="sidebar__item">
                        <h4>Popular Size</h4>
                        <div className="sidebar__item__size">
                        <label htmlFor="large">
                            Large
                            <input type="radio" id="large" />
                        </label>
                        </div>
                        <div className="sidebar__item__size">
                        <label htmlFor="medium">
                            Medium
                            <input type="radio" id="medium" />
                        </label>
                        </div>
                        <div className="sidebar__item__size">
                        <label htmlFor="small">
                            Small
                            <input type="radio" id="small" />
                        </label>
                        </div>
                        <div className="sidebar__item__size">
                        <label htmlFor="tiny">
                            Tiny
                            <input type="radio" id="tiny" />
                        </label>
                        </div>
                    </div>
                    <div className="sidebar__item">
                        <div className="latest-product__text">
                        <h4>Latest Products</h4>
                        <div className="latest-product__slider">
                            <div className="latest-prdouct__slider__item">
                            <a href="#" className="latest-product__item">
                                <div className="latest-product__item__pic">
                                <img src="img/latest-product/lp-1.jpg" alt />
                                </div>
                                <div className="latest-product__item__text">
                                <h6>Crab Pool Security</h6>
                                <span>$30.00</span>
                                </div>
                            </a>
                            <a href="#" className="latest-product__item">
                                <div className="latest-product__item__pic">
                                <img src="img/latest-product/lp-2.jpg" alt />
                                </div>
                                <div className="latest-product__item__text">
                                <h6>Crab Pool Security</h6>
                                <span>$30.00</span>
                                </div>
                            </a>
                            <a href="#" className="latest-product__item">
                                <div className="latest-product__item__pic">
                                <img src="img/latest-product/lp-3.jpg" alt />
                                </div>
                                <div className="latest-product__item__text">
                                <h6>Crab Pool Security</h6>
                                <span>$30.00</span>
                                </div>
                            </a>
                            </div>
                        
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-7">
                    <div className="product__discount pb-0">
                        <div className="section-title product__discount__title">
                            <h2>Sale Off</h2>
                        </div>
                    </div>
                    <div className="filter__item">
                    <div className="row">
                        <div className="col-lg-4 col-md-5">
                        <div className="filter__sort">
                            <span>Sort By</span>
                            <select>
                            <option value={0}>Default</option>
                            <option value={0}>Default</option>
                            </select>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                        <div className="filter__found">
                            <h6><span>16</span> Products found</h6>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">


                {
                    shop.map(shoppro => (
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item">
                            <div className="product__item__pic set-bg">
                                <img src="img/product/product-1.jpg" />
                                <ul className="product__item__pic__hover">
                                <li><a href="#"><i className="fa fa-heart" /></a></li>
                                <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">{shoppro.name}</a></h6>
                                <h5>$30.00</h5>
                            </div>
                            </div>
                        </div> 
                    ))
                }


                                       
                    </div>
                    <div className="product__pagination">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#"><i className="fa fa-long-arrow-right" /></a>
                    </div>
                </div>
                </div>
            </div>
            </section>

        </>
    )
}

export default shop;