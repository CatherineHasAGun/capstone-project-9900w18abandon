import React from "react";
import Search from '../search.png'

const SearchBox = (props) => {
  // props: placeholder, searchFunc
  const [focus, setFocus] = React.useState(false);

  const containerStyle = {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    width: '100%',
    margin: '10px'
  }
  
  const searchStyle = {
    width: '50%',
    height: '50px',
    border: focus ? '3px solid rgb(255, 196, 65)' : '3px solid rgb(255, 224, 102)',
    borderRadius: '10px 0 0 10px',
    outline: 'none',
    padding: '0 15px'
  }

  const btnstyle = {
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px',
    backgroundColor: 'rgb(255, 224, 102)',
    color: 'black',
    fontSize: '20px',
    border: 'none',
    borderRadius: '0 5px 5px 0',
    cursor: 'pointer',
  }
  return (
    <div style={containerStyle}>
      <input 
        type='text' 
        style={searchStyle}
        placeholder={props.placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}></input>
      <button 
        style={btnstyle} 
        // onClick={props.searchFunc}
        >Search
        <img style={{marginLeft: '10px'}}src={Search} alt='search' />
      </button>
    </div>
  )
}

export default SearchBox;