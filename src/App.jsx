import {Container} from './Components/Container';
import {Aside} from './Components/Aside';
import SearchInput from './Components/SearchInput';
import Main from './Components/Main';
import Typography from './Components/Typography';
import Card from './Components/Card';
import styles from './Components/Main/main.module.css';
import DailyBudget from './Components/DailyBudget';
import SavingsStatus from './Components/SavingsSatatus';
import CardBig  from './Components/CardBig';
import Transactions from './Components/Transactions';
import Banks from './Components/Banks';

function App() {

  return (
    <Container>
      <Aside/>
      <Main>
          <SearchInput/>
          <div>
            <Typography variant="h1" user="Rick">
              
            </Typography>
            <Typography variant="body">
              Veja como estão suas finanças hoje.
            </Typography>
          </div>
          <section className={styles.section}>
            <Card>
              <Card.Header>
                Orçamento diário disponiovel
              </Card.Header>
              <Card.Body>
                <DailyBudget value={200} />
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>
                Progresso do mês
              </Card.Header>
              <Card.Body>
                <SavingsStatus percent={50} />
              </Card.Body>

            </Card>

            <CardBig>
              <CardBig.Header>
                Movimentações financeiras
              </CardBig.Header>
              <CardBig.Body>
                <Transactions />
              </CardBig.Body>

            </CardBig>

            <CardBig>
              <CardBig.Header>
                Orçamento diário disponiovel
              </CardBig.Header>
              <CardBig.Body>
                <Banks nomeBanco="Nubank" Saldo={5000} />
                <Banks nomeBanco="Banco do Brasil" Saldo={3000} />
                <Banks nomeBanco="Caixa Econômica" Saldo={2000} />
                <Banks nomeBanco="Santander" Saldo={4000} />

              </CardBig.Body>

            </CardBig>
          </section>
      </Main>
      
    </Container>
    
  )


}

export default App
