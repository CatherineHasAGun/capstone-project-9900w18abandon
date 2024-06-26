import React from "react";
import { useNavigate } from 'react-router-dom';
import SearchBox from "../components/SearchBox";
import Link from '@mui/material/Link';

const Dashboard = () => {
  const navigate = useNavigate();

  const contentStyle = {
    width: '400px',
    height: '80%',
    border: '1px solid #C5C5C5',
    borderRadius: '20px',
    padding: '25px',
    boxShadow: '-6px 6px 17px 0px #00000040',
    margin: '10px'

  }
  const courseStyle = {
    width: '300px',
    height: '80%',
    border: '1px solid #C5C5C5',
    borderRadius: '20px',
    padding: '25px',
    boxShadow: '-6px 6px 17px 0px #00000040',
    margin: '10px'
  }

  const titleStyle = {
    display: 'flex', 
    flexDirection:'row', 
    justifyContent:'space-between',
    borderBottom: '1px solid #C5C5C582',
    paddingBottom: '10px',
    alignItems: 'center'
  }

  const clickCourse = () => {navigate('/courses');}
  const clickProject = () => {navigate('/projects');}
  const clickJob = () => {navigate('/jobs');}
  
  return (
    <>
      <h1
        style={{
          fontFamily: 'monospace',
          lineHeight: '56px',
          margin: '30px 0',
          textAlign: 'center',
          fontSize: '36px',
        }}>
        Course Insight and Skills Alignment Platform</h1>
      <SearchBox placeholder='Enter Course/Project/Job Keywords' />
      <div 
        style={{ 
          height: '60vh', 
          display: 'flex',
          flexWrap: 'wrap',
          overflowY: 'scroll',
          justifyContent: 'space-evenly',
          margin: '30px',
          alignItems: 'center'}}>
        <div style={courseStyle}>
          <div style={titleStyle}>
            <h3>Your Courses:</h3>
            <Link href="#" component="button" variant="body2" onClick={clickCourse}>More courses</Link>
          </div>
        </div>
        <div style={contentStyle}>
          <div style={titleStyle}>
            <h3>New Releasd Project:</h3>
            <Link href="#" component="button" variant="body2" onClick={clickProject}>More projects</Link>
          </div>
        </div>
        <div style={contentStyle}>
          <div style={titleStyle}>
            <h3>New Releasd job:</h3>
            <Link href="#" component="button" variant="body2" onClick={clickJob}>More jobs</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;