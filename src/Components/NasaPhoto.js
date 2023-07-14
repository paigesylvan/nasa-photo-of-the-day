import React from 'react'
import styled from 'styled-components';

const WrapperDiv = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: lavender;
`;

const BigH3 = styled.h3`
    font-size: 90px;
    color: purple;
    margin-bottom: 1px;
`;

const PhotoP = styled.p`
    font-size: 35px;
    color: purple;
`;


const ExplanationP = styled.p`
font-family: sans-serif;
font-size: 33px;
color: purple;
padding-top: 30px;
line-height: 45px;

`;

const NasaPhoto = (props) => {
    return (
        <WrapperDiv> 
            <BigH3>{props.photo.title}</BigH3>
            <PhotoP>{props.photo.date}</PhotoP>
            <img src={props.photo.hdurl} alt='nasa' />
            <ExplanationP>{props.photo.explanation}</ExplanationP>
        </WrapperDiv>
    )
}

export default NasaPhoto;