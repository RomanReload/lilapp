import React, {useState} from 'react';
import styled from 'styled-components';
import './index.css';


const StyledInputSearc = styled.input
    `
      color: white;
      background-color: black;
      border: none;
      border-bottom: 2px solid white;
      height: 25px;
      width: 200px;
      font-size: 15px;
      :focus {
        outline: 0;
        outline-offset: 0;
        border-bottom: 2px solid cornflowerblue;
      }

    `


const SearcherPosts: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    return (
        <div>
            <StyledInputSearc/>
        </div>
    )
}
export default SearcherPosts;