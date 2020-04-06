import React , {useState} from 'react';
import {Card as CardComponent} from 'antd';
import ReactCardFlip from "react-card-flip";
import {Link} from "react-router-dom";

const {Meta} = CardComponent;


export const CheckoutCard = ({e}) => {
    const [count, changeCount] = useState(0)
    const [price, changePrice] = useState(e.price)
    const onchangeAdd = () => {
        changeCount(count + 1)

    };
    return (
            <CardComponent
                hoverable
                style={{width: 240}}
                // onClick={onchangeFlipped}

                cover={<img alt="example" src={e.image}/>}>
               <Meta title={e.name}/>
                    <div>Цена: {price}</div>
                    <div>Количетсво: {count}</div>
                        <button onClick={onchangeAdd}>Добавить</button>


            </CardComponent>
    );
};




