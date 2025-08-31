import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import LoginStatus from '../components/LoginStatus';

const HomeContainer = styled.div`
    text-align: center;
    padding: 2rem;
`;

const WelcomeCard = styled.div`
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 12px;
    margin-top: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;


const CTAButton = styled(Link)`
    background-color: #007bff;    
    color: white;
    padding: 12px 24px;
    text-decoration: none;
    border-radius: 8px;
    display: inline-block;
    margin: 1rem;
    transition: background-color 0.2s;

    &:hover {
    background-color: #0056b3;

`;

const FeatureGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem 0;
`;

const FeatureCard = styled.div`
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    border-left: 4px solid #007bff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;


function Home() {
    return (
    <HomeContainer>
      <LoginStatus />
      
      <WelcomeCard>
        <h2>🚀 Welcome to Task Manager</h2>
        <p>Organize your tasks efficiently and boost your productivity!</p>
        <CTAButton to="/tasks">
          📋 View My Tasks
        </CTAButton>
      </WelcomeCard>

      <FeatureGrid>
        <FeatureCard>
          <h3>✅ Track Progress</h3>
          <p>Mark tasks as complete and track your productivity over time.</p>
        </FeatureCard>
        
        <FeatureCard>
          <h3>🎯 Stay Organized</h3>
          <p>Keep all your tasks in one place with our clean, intuitive interface.</p>
        </FeatureCard>
        
        <FeatureCard>
          <h3>🌙 Theme Support</h3>
          <p>Switch between light and dark modes for comfortable viewing.</p>
        </FeatureCard>
      </FeatureGrid>
    </HomeContainer>

    );
}

export default Home