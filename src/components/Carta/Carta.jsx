import styled from 'styled-components'

const Box = styled.div`
    width: 18vw;
    height: 50vh;
    background-color: #F7EC77;
    border-radius: .5rem;
    padding: 1rem;
    border: 1rem solid #E4C144;
    /* background-color: #F7EC77; */
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;


    &::-webkit-scrollbar{
        width: 0;
    }

    img{
        border: .5rem solid #E4C144;
        width: 70%;
        background-color: #F7EC77;
        padding: 1rem 2.5rem;
        box-shadow: 5px 5px 15px #0000004a;
        margin-bottom: .5rem;
    }
    .ability{
        width: 95%;
        border-bottom: 2px solid #0000004a;
        text-align: center;
        padding-bottom: .5rem;
        margin-bottom: .5rem;
    }
    .effect{
        font-size: small;
    }
`
const Nome = styled.p`
    align-self: flex-start;
    font-weight: bold;
    margin-bottom: .5rem;
`
const Details = styled.p`
    width: 80%;
    height: 1rem;
    background-color: #E4C144;
    font-size: smaller;
    display: flex;
    flex-direction: row;
    gap: .3rem;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-bottom: .5rem;
`

const Carta = ({ children, name,  abilitie, effect, height, weight }) => {
    return (
        <Box>
            <Nome>{name}</Nome>
            {children}
            {
                weight ?
            <Details>
                <p>height: {height}</p>
                <p>weight: {weight}</p>
            </Details>
            : ''
            }
            <p className='ability'>{abilitie}</p>
            <p className='effect'>{effect}</p>
        </Box>
    )
}

export default Carta