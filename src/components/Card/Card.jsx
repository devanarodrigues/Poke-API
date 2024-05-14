import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 300px;
    height: 400px;
    background-color: #FFDC76;
    border-radius: .5rem;
    transition: all .3s ease-in-out;
    cursor: pointer;
    border: 5px solid transparent;
    &:hover{
      border: 1px solid #0075BE;
}
    img{
        width: 90%;
        height: 70%;
        border-radius: .5rem;
        margin-top: .5rem;
    }
`
const Details = styled.h3`
    width: 80%;
    height: auto;
    background-color: #E4C144;
    display: flex;
    flex-direction: row;
    gap: .3rem;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-bottom: .5rem;
`
const Card = ({ nome, img, onclick }) => {

  return (
    <Box onClick={onclick}>
      <img src={img} alt="" />
      <Details>{nome}</Details>
    </Box>
  )
}

export default Card