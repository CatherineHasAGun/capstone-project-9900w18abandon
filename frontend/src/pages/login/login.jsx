import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import PasswordLogo from '../../assets/PasswordLogo.png';
import EmailLogo from '../../assets/EmailLogo.png';
import VisibleLogo from '../../assets/VisibleLogo.png';
import InvisibleLogo from '../../assets/InvisibleLogo.png';
import Calendar from '../../components/Calendar';
import ProgressComponent from '../../components/Progress';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const LoginFormContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  height: 700px;
  max-width: 1200px;
  border-radius: 8px;
  width: 100%;
  background-color: #ffffff;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormSection = styled.div`
  padding: 60px;
  background-color: #ffffff;
  flex: 1;

`;

const InfoSection = styled.div`
  padding: 10px;
  background-color: #ffffff;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  margin-bottom: 24px;
`;

const InputIcon = styled.img`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;

const InfoSectionTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  font-family: Yeseva One, yesevaone, serif;
  margin-right: 150px;
  margin-top: 50px;
`;

const InfoSectionEnd = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: right;
  font-family: Yeseva One, yesevaone, serif;
  margin-left: 150px;
  margin-bottom: 50px;
`;

const Input = styled.input`
  width: 100%;
  max-width: 350px;
  padding: 12px 12px 12px 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  margin-bottom: 24px;
`;

const PasswordInput = styled(Input).attrs({ type: 'password' })``;

const TogglePasswordButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
  }
`;

const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const RememberMeCheckbox = styled.input`
  margin-right: 8px;
`;

const Button = styled.button`
  width: 100%;
  max-width: 400px;
  padding: 12px;
  text-decoration: none;
  background-color: #FFCC01;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #e0a800;
  }
`;

const Footer = styled.p`
  margin-top: 16px;
  margin-right: 0px;
  font-size: 14px;
  text-align: right;
`;

const LogoContainer = styled.div`
  margin-top: 0px;
  display: flex;
  height: 80px;
  width: 200px;
  align-items: left;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  float: left;
`;

const Title = styled.h1`
  margin-top: 12px;
  font-size: 11px;
  text-align: left;
  justify-content: center;
`;

const SubTitle = styled.h2`
  margin-left: 50px;
  font-size: 16px;
  color: #333;
  float: left;
  font-family: Arial, sans-serif;
  font-weight: bold;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const CalendarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
`;

const ProgressContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (Array.isArray(users)) {
      const user = users.find((user) => user.email === email && user.password === password);

      if (user) {
        alert('Login successful!');
      } else {
        alert('Invalid email or password!');
      }
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <LoginContainer>
      <LoginFormContainer>
        <FormSection>
          <LogoContainer>
            <Logo src={logo} alt="logo" />
            <Title>COURSE INSIGHT AND SKILLS ALIGNMENT PLATFORM</Title>
          </LogoContainer>
          <SubTitle>Hi! Welcome back! Login to your account!</SubTitle>
          <InputContainer>
            <InputIcon src={EmailLogo} alt="Email Icon" />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </InputContainer>
          <PasswordContainer>
            <InputIcon src={PasswordLogo} alt="Password Icon" />
            <PasswordInput
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <TogglePasswordButton onClick={togglePasswordVisibility}>
              <img src={passwordVisible ? InvisibleLogo : VisibleLogo} alt="Toggle Password Visibility" />
            </TogglePasswordButton>
          </PasswordContainer>
          <RememberMeContainer>
            <RememberMeCheckbox type="checkbox" />
            Remember Me
            <Link href="/forget-password" style={{ marginLeft: 'auto' }}>Forget Password?</Link>
          </RememberMeContainer>
          <Button onClick={handleLogin}>Login</Button>
          <Footer>
            New account? <Link href="/register">Sign Up</Link>
          </Footer>
        </FormSection>
        <InfoSection>
          <InfoSectionTitle>Unlock Your Potential with Course Insights and Skill Alignment!</InfoSectionTitle>
          <CalendarContainer>
            <Calendar />
          </CalendarContainer>
          <ProgressContainer>
            <ProgressComponent />
          </ProgressContainer>
          <InfoSectionEnd>Join us and explore the possibilities with Course Insights and Skill Alignment!</InfoSectionEnd>
        </InfoSection>
      </LoginFormContainer>
    </LoginContainer>
  );
};

export default LoginForm;