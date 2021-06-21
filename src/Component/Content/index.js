import React, { useState } from 'react';
import { Container, Jumbotron, button } from 'react-bootstrap';
import { BsFillTrashFill, BsFillHeartFill } from "react-icons/bs";
import Item from '../Item';
import './styles.css';
import baju1 from '../../asset/baju1.png';
import baju2 from '../../asset/baju2.png';



const Content = () => {

    return (
        <Container className="box">
            <div className="basket">
                <h4 className="h4Cart">Cart (2 items)</h4>
                <Item
                    img={baju1}
                    clothName="Blue denim shirt"
                    clothType="SHIRT - BLUE"
                    clothColor="COLOR: BLUE"
                    clothSize="SIZE: M"
                    price="17.99"
                />
                <hr/>
                <Item
                    img={baju2}
                    clothName="Red hoodie"
                    clothType="HOODIE - RED"
                    clothColor="COLOR: RED"
                    clothSize="SIZE: M"
                    price="35.99"
                />
                {/* <Jumbotron className="blueDenimSection">

                    <img src="../../public/baju1.png" alt="..." class="img-thumbnail" />

                </Jumbotron> */}

            </div>
            <div className="cekout">
                <div className="section">
                    <h6>The total amount of</h6>
                    <div className="temporarySection">
                        <p className="temporaryAmount">Temporary amount</p>
                        <p className="temporaryAmount">$17.99</p>
                    </div>
                    <div className="shippingSection">
                        <p className="textShipping">Shipping</p>
                        <p className="textShipping">Gratis</p>
                    </div>
                    <hr />
                    <div className="totalSection">
                        <p class="textTotal">The total amount of <br /> (including VAT)</p>
                        <p class="textTotal">$53.98</p>
                    </div>
                    <button type="button" class="btn btn-primary btn-lg btn-block"><p className="btnLg">GO TO CHECKOUT</p></button>
                </div>
            </div>
        </Container>
    )
}

export default Content;