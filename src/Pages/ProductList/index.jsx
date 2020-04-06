import React from 'react';
import {Layout, Row, Col} from 'antd';
import {Card} from "./Cards/cards";
import {Link} from "react-router-dom";


const {Meta} = Card;

const {Header, Footer, Content} = Layout;


const data = [
    {
        id: 1,
        name: "Витя",
        image: 'https://via.placeholder.com/300x420'
    },
    {
        id: 2,
        name: "Вася",
        image: 'https://via.placeholder.com/300x420'
    },
    {
        id: 3,
        name: "Петя",
        image: 'https://via.placeholder.com/300x420'
    }
];


let renderCard = (e) => {
    return (
        <Col span={4}>
            <Card e={e}/>
        </Col>
    )
};


export const Product = () => {
    return (
        <div className="App">
            <Layout style={styles.layoutStyle}>
                <Header><Link to='/checkout'>Корзина</Link></Header>
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



