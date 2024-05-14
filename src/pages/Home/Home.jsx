import { useContext, useState } from "react"
import Card from "../../components/Card/Card"
import Container from "../../components/Container/Container"
import DataContext from "../../context/DataContext"
import Pokemon from "../Pokemon/Pokemon"
import { JackInTheBox } from "react-awesome-reveal"

const Home = () => {
  const { pokeData, setPokemon, renderizar, setRenderizar } = useContext(DataContext)
  const [dados, setDados] = useState({
    front: '',
    back: '',
    abilitie: '',
    url: '',
    effect: '',
    short_effect: '',
    name: '',
    audio: '',
    height: '',
    weight: '',
  })

  async function sendData(data) {
    setPokemon(await data)
    setRenderizar(true)
    console.log(data)
    dados.name = data.name
    dados.height = data.height
    dados.weight = data.weight
    dados.audio = data.cries.latest
    dados.front = data.sprites.other.showdown.front_default
    dados.back = data.sprites.other.showdown.back_default
    dados.url = data.abilities[0].ability.url

    const response = await fetch(dados.url)
    const json = await response.json()
    setTimeout(() => {
      setDados(prevState => {
        return {
          ...prevState,
          effect: json.effect_entries[0].effect,
          short_effect: json.effect_entries[0].short_effect,
          abilitie: data.abilities[0].ability.name
        }
      })
    }, 1000)

    console.log(dados.url)
  }

  return (
    <Container>
      <JackInTheBox cascade={true} duration={700} triggerOnce={true}>
        {
          pokeData.map((e, index) => {
            return (
              <Card
                key={index}
                nome={e.name}
                img={e.sprites.other["official-artwork"].front_shiny}
                onclick={() => sendData(e)} />
            )
          })
        }
          </JackInTheBox>
        {
          renderizar
            ? <Pokemon
              audio={dados.audio}
              weight={dados.weight}
              height={dados.height}
              name={dados.name}
              front={dados.front}
              back={dados.back}
              abilitie={dados.abilitie}
              effect={dados.effect}
              short_effect={dados.short_effect} /> : ""
        }
    </Container>
  )
}

export default Home