import styled from "styled-components"
import Carta from "../../components/Carta/Carta"
import ReactPlayer from "react-player";
import { TbArrowBack } from "react-icons/tb";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import { Flip, JackInTheBox, Zoom } from "react-awesome-reveal";

const Box = styled.header`
    width: 65vw;
    height: 63vh;
    background-color: #4A2C2C;
    border-radius: .5rem;
    display: flex;
    gap: 0rem 1rem;
    align-items: center;
    padding: 1rem;
    overflow-y: hidden;
    z-index: 999;
    position: absolute;
    flex-direction: column;
    .row{
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    &::-webkit-scrollbar{
        width: 0;
    }
`
const Back = styled.button`
    padding: .3rem 1rem;
    border: none;
    outline: none;
    border-radius: .2rem;
    border: 1px solid #0075BE;
    background-color: #0075BE;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: all .3s ease-in-out;
    align-self: flex-end;

    &:hover{
        background-color: transparent;
    }
`


const Pokemon = ({ front, back, abilitie, effect, short_effect, name, audio, weight, height }) => {
    const { renderizar, setRenderizar } = useContext(DataContext)

    return (
        <>
            <Box>
                    <Back onClick={() => setRenderizar(!renderizar)} ><TbArrowBack size='1.2rem' /></Back>

                    <div className="row">
                <JackInTheBox cascade={true} duration={700} triggerOnce={true}>
                        <Carta name={name}
                            abilitie={abilitie}
                            effect={effect}>
                            <img src={front} alt="" />
                        </Carta>
                        <Carta
                            name={name}
                            abilitie='Short effect'
                            effect={short_effect}
                            height={height}
                            weight={weight}>
                            <img src={back} alt="" />
                        </Carta>
                    </JackInTheBox>
                    </div>

                    <ReactPlayer
                        width={'0px'}
                        height={'0'}
                        url={audio}
                        playing={true}
                        loop={false}
                        controls={true} />
            </Box>

        </>
    )
}

export default Pokemon