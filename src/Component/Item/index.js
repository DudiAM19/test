import React, {useState} from 'react';
import { Container, Jumbotron, button } from 'react-bootstrap';
import { BsFillTrashFill, BsFillHeartFill } from "react-icons/bs";

const Item = (props) => {
    const [count, setCount] = useState(0);
    return (
        <Jumbotron className="blueDenimSection">
            <div className="imgSection">
                <img src={props.img} width="80px" height="150px" />
            </div>
            <div className="detail">
                <h6 className="clothName">{props.clothName}</h6>
                <p className="type">{props.clothType}</p>
                <p className="color">{props.clothColor}</p>
                <p className="color">{props.clothSize}</p>
                <div className="btn">
                    <button type="button" class="btn btn-outline-secondary"><BsFillTrashFill className="BsFillTrashFill" /><p className="rmvTxt">REMOVE</p></button>
                    <button type="button" class="btn btn-outline-secondary"><BsFillHeartFill className="BsFillTrashFill" /><p className="rmvTxt">MOVE TO WISH LIST</p></button>
                </div>
            </div>
            <div className="add">
                <div className="btnbtn">
                    <button type="button" class="btn btn-outline-secondary" onClick={() => setCount(count - 1)}><p className="btnCount">-</p></button>
                    <button type="button" class="btn btn-outline-secondary"><p className="btnCount">{count}</p></button>
                    <button type="button" class="btn btn-outline-secondary" onClick={() => setCount(count + 1)}><p className="btnCount">+</p></button>
                </div>
                <p className="noteText">(Note {count} place)</p>
                <p className="price">${count * props.price}</p>
            </div>
            
        </Jumbotron>
    )
}

export default Item