import styled from 'styled-components'

export const FormElement = styled.div`
  display:flex;
  flex-direction:column;
justify-content:space-between;
align-items:flex-start;
font-family:'Open Sans';
width:30vw;
min-height:80vh;
padding:20px;

`

export const Heading = styled.h1`
    color:${props => (props.positonText ? '#ffffff' : '#35469c')};
`

export const MainDiv = styled.form`
    display:flex;
    height:100vh;
    width:100vw;
    justify-content:space-around;
    align-items:center;
`

export const LabelELement = styled.label`
    color:#7e858e;
    font-size:16px;
`
export const InputElement = styled.input`
    width:250px;
    height:5vh;
    border:1px solid  #5a7184;
    border-radius:5px;
    color:#5a7184; 
    outline:none;
    font-weight:200;
`

export const CustomButton = styled.button`
    width:150px;
    background-color:#0b69ff;
    border-radius:10px;
    color:#ffffff;
    height:40px;
    border-style:none;
`

export const CustomMenu = styled.select`
    width:250px;
    height:30px;
    text-align:left;
    color: #1e293b;

`

export const DisplayImage = styled.div`
    background-image:url(${props => props.url});
    background-size:cover;
    min-width:40vw;
    min-height:60vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`
export const Paragraph = styled.p`
    color:#fffff;
    font-size:${props => props.fontSize}px
`
/*
https://assets.ccbp.in/frontend/react-js/nature-img.png
*/
