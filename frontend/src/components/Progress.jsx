// src/pages/Register/Progress.jsx
import React from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div`
  width: 100%;
  max-width: 250px;
  margin: 10px 10px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
`;

const ProgressBar = styled.div`
  height: 18px;
  width: 90%;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  font-size: 15px;
  font-weight: bold;
`;

const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.percent}%;
  background-color: #FFCC01;
  border-radius: 10px 0 0 10px;
  text-align: center;
  color: #fff;
`;

const ProgressText = styled.div`
  margin: 10px 10px;
  text-align: left;
  font-family: Passthrough, pass-through, serif;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const ProgressComponent = () => {
  return (
    <ProgressContainer>
      <ProgressText>COMP9900</ProgressText>
      <ProgressBar>
        <Progress percent={60}>60%</Progress>
      </ProgressBar>
      <ProgressText>COMP3900</ProgressText>
      <ProgressBar>
        <Progress percent={66}>66%</Progress>
      </ProgressBar>
    </ProgressContainer>
  );
};

export default ProgressComponent;
