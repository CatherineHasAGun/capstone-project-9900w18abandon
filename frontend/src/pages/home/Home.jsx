// src/pages/Home.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import homepageImage from '../../assets/HomePage.jpg';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #FFCC01;
    color: #000;
    padding: 20px;
`;

const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px;
    background-color: #FFCC01;
`;

const Title = styled.h1`
    font-size: 24px;
    margin-left: 20px;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const Button = styled(Link)`
    padding: 10px 20px;
    height: 14px;
    width: 50px;
    text-decoration: none;
    color: #fff;
    background-color: ${(props) => (props.primary ? '#555' : '#9e00ff')};
    border-radius: 5px;
    font-weight: bold;
    font-size: 10px;
`;

const ContentContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const HomeImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HomeImage = styled.img`
    max-width: 80%;
    height: auto;
    margin-left: 0px;
`;

const TextContainer = styled.div`
    flex: 1;
    padding: 20px;
    font-size: 16px;
    line-height: 1.5;
    font-family: 'PT Serif', serif;
`;

const Home = () => {
    return (
        <HomeContainer>
            <Header>
                <Title>COURSE INSIGHT AND SKILLS ALIGNMENT PLATFORM</Title>
                <ButtonContainer>
                    <Button to="/register" primary>SIGN UP</Button>
                    <Button to="/login">LOGIN</Button>
                </ButtonContainer>
            </Header>
            <ContentContainer>
                <HomeImage src={homepageImage} alt="Home Page" />
                <TextContainer>
                    <p>Enhance your academic journey with our platform.</p>
                    <p>Aggregate course information, get AI-driven summaries, and assess your skill alignment with project requirements.</p>
                    <p>Streamline communication and save time for the whole class.</p>
                    <p>Optimize your learning experience right now!</p> 
                </TextContainer>
            </ContentContainer>
        </HomeContainer>
    );
};

                export default Home;
