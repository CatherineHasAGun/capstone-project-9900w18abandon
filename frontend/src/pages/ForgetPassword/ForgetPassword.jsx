import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import EmailLogo from '../../assets/EmailLogo.png';
import Calendar from '../../components/Calendar';
import ProgressComponent from '../../components/Progress';

const ForgetPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const FormContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  height: 700px;
  max-width: 1200px;
  border-radius: 8px;
  width: 100%;

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

const Footer = styled.div`
  margin-top: 16px;
  font-size: 14px;
  text-align: center;
`;

const LogoContainer = styled.div`
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

const ForgetPasswordForm = () => {
  return (
    <ForgetPasswordContainer>
      <FormContainer>
        <FormSection>
          <LogoContainer>
            <Logo src={logo} alt="logo" />
            <Title>COURSE INSIGHT AND SKILLS ALIGNMENT PLATFORM</Title>
          </LogoContainer>
          <SubTitle>Forget password?</SubTitle>
          <p>Please enter your email address and we will send you a verification code.</p>
          <InputContainer>
            <InputIcon src={EmailLogo} alt="Email Icon" />
            <Input type="email" placeholder="Email" />
          </InputContainer>
          <Button>Send Verification Code</Button>
          <Footer>
            <Link href="/login">Return to Login</Link> &nbsp; | &nbsp; <Link href="/register">New User Registration</Link>
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
      </FormContainer>
    </ForgetPasswordContainer>
  );
};

export default ForgetPasswordForm;
