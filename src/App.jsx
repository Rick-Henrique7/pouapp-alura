import {Container} from './Components/Container';
import {Aside} from './Components/Aside';
import SearchInput from './Components/SearchInput';
import Main from './Components/Main';
import Typography from './Components/Typography';
import Card from './Components/Card';

function App() {

  return (
    <Container>
      <Aside/>
      <Main>
          <SearchInput/>
          <div>
            <Typography variant="h1">
              Olá, Rick
            </Typography>
            <Typography variant="body">
              Veja como estão suas finanças hoje.
            </Typography>
          </div>
          <section>
            <Card>
              <Card.Header>
                Orçamento diário disponiovelç
              </Card.Header>
              <Card.Body>
                R$ 200
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>
                Orçamento diário disponiovelç
              </Card.Header>
              <Card.Body>
                R$ 200
              </Card.Body>

            </Card>

            <Card>
              <Card.Header>
                Orçamento diário disponiovelç
              </Card.Header>
              <Card.Body>
                R$ 200
              </Card.Body>

            </Card>

            <Card>
              <Card.Header>
                Orçamento diário disponiovelç
              </Card.Header>
              <Card.Body>
                R$ 200
              </Card.Body>

            </Card>
          </section>
      </Main>
      
    </Container>
    
  )


}

export default App
