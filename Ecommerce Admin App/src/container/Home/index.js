import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Layout from '../../components/Layout';
import './style.css';

const Home = () => {
    return (
        <div>
            <Layout sidebar>
                {/* <Jumbotron style={{margin:"5rem", backgroundColor:"#fff"}} className="text-center">
                    <h1>Welcome to Admin Dashboard</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, cumque. Esse aliquid perspiciatis quos quas cum, blanditiis hic ex! Amet assumenda officia in labore sint sunt nihil natus possimus deserunt corporis. Dolor, facilis beatae ipsam quas accusamus neque nesciunt, placeat animi ab maxime quae, veritatis maiores quos eos! Maxime deserunt quae laudantium perferendis provident commodi nostrum ipsa necessitatibus cumque nesciunt.</p>
                </Jumbotron> */}
            </Layout>
        </div>
    )
}

export default Home
