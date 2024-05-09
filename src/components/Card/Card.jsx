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

    img{
        width: 90%;
        height: 70%;
        /* border: 1px solid black; */
        border-radius: .5rem;
        margin-top: .5rem;
    }
`
const Card = ({ nome, img }) => {

  return (
    <Box>
      <img src={img} alt="" />
      <h3>{nome}</h3>
    </Box>
  )
}

export default Card