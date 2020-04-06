import React from 'react';
import {Layout, Row, Col} from 'antd';
import {Link} from "react-router-dom";
import {CheckoutCard} from "./CheckoutCard/CheckoutCard";


const {Meta} = CheckoutCard;

const {Header, Footer, Content} = Layout;


const data = [
    {
        id: 1,
        name: "Iphone7",
        image: 'https://via.placeholder.com/300x420',
        price: 900,
        quantity: 0
    },
    {
        id: 2,
        name: "Nokia 8",
        image: 'https://via.placeholder.com/300x420',
        price: 450,
        quantity: 0
    },
    {
        id: 3,
        name: "Motorola m4",
        image: 'https://via.placeholder.com/300x420',
        price: 300,
        quantity: 0
    }
];


let renderCard = (e) => {
    return (
        <Col span={4}>
            <CheckoutCard e={e}/>
        </Col>
    )
};


export const Checkout = () => {
    return (
        <div className="App">
            <Layout style={styles.layoutStyle}>
                <Header><Link to='/'>Главная</Link></Header>
                <Content>
                    <Row justify='space-around'>
                        {data.map(e => (renderCard(e)))}
                    </Row>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </div>
    );
};

const styles = {
    layoutStyle: {
        minHeight: '100vh'
    }
}



