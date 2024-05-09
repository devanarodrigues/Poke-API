import styled from 'styled-components'

const Box = styled.header`
    width: 65vw;
    height: 60vh;
    background-color: #4A2C2C;
    border-radius: .5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2.5rem 1rem;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    overflow-x: scroll;

    &::-webkit-scrollbar{
        width: 0;
    }
`

const Container = ({children}) => {
  return (
    <Box>
        {children}
    </Box>
  )
}

export default Container