import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import HeadLogo from '../../assets/HeadLogo.png';
import PasswordLogo from '../../assets/PasswordLogo.png';
import EmailLogo from '../../assets/EmailLogo.png';
import VisibleLogo from '../../assets/VisibleLogo.png';
import InvisibleLogo from '../../assets/InvisibleLogo.png';
import Calendar from '../../components/Calendar';
import ProgressComponent from '../../components/Progress';

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const RegisterFormContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  overflow: hidden;
  height: 700px;
  max-width: 1200px;
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
  padding: 40px;
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

const Input = styled.input`
  width: 100%;
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

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  margin-bottom: 16px;
  font-size: 14px;
  color: #73778b;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const Button = styled.button`
  width: 100%;
  max-width: 378px;
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
`;

const Footer = styled.div`
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
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

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (!Array.isArray(users)) {
      users = [];
    }
    const user = { username, email, password };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('You have successfully registered!');
  };

  return (
    <RegisterContainer>
      <RegisterFormContainer>
        <FormSection>
          <LogoContainer>
            <Logo src={logo} alt="logo" />
            <Title>COURSE INSIGHT AND SKILLS ALIGNMENT PLATFORM</Title>
          </LogoContainer>
          <SubTitle>Create an Account and enjoy your journey!</SubTitle>
          <InputContainer>
            <InputIcon src={HeadLogo} alt="Head Logo" />
            <Input
              type="text"
              placeholder="User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)} />
          </InputContainer>
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
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </PasswordContainer>
          <PasswordContainer>
            <InputIcon src={PasswordLogo} alt="Password Icon" />
            <Input
              type="password"
              placeholder="Please confirm your password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} />
          </PasswordContainer>
          <CheckboxContainer>
            <Checkbox type="checkbox" />
            <label>I agree to the Terms and Conditions.</label>
          </CheckboxContainer>
          <Button onClick={handleRegister}><Link href='/Dashboard'>SIGN UP</Link></Button>
          <Footer>
            Already have an account? <Link href="/login">Log In</Link>
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
      </RegisterFormContainer>
    </RegisterContainer>
  );
};

export default RegisterForm;
