import { useContext } from "react"
import Card from "../../components/Card/Card"
import Container from "../../components/Container/Container"
import DataContext from "../../context/DataContext"

const Home = () => {
  let { pokeData } = useContext(DataContext)

  return (
    <Container>
      {

        pokeData.map((e) => {
          // console.log(e)
          return (
            <>
              <Card key={e.id} nome={e.name} img={e.sprites.other.showdown.front_default} />
            </>
          )
        })
      }

    </Container>
  )
}

export default Home