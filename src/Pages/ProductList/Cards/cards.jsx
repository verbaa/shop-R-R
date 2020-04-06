import React , {useState} from 'react';
import {Card as CardComponent} from 'antd';
import ReactCardFlip from "react-card-flip";
import {Link} from "react-router-dom";

const {Meta} = CardComponent;


export const Card = ({e}) => {
    const [isFlipped, changeFlipped] = useState(false)
    const onchangeFlipped = () =>{
        changeFlipped(!isFlipped)

    };
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <CardComponent
                hoverable
                style={{width: 240}}
                onClick={onchangeFlipped}
                cover={<img alt="example" src={e.image}/>}>
                <Link to='/detail'>  <Meta title={e.name}/></Link>


            </CardComponent>

            <CardComponent
                hoverable
                style={{width: 240}}
                onClick={onchangeFlipped}
                cover={<img alt="example" src={e.image}/>}>
                <Link to='/detail'>  <Meta title={e.name}/></Link>
            </CardComponent>
        </ReactCardFlip>


    );
};




