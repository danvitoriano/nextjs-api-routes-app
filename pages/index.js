import useSWR from 'swr'
import Person from '../components/Person'
import { Container, Row, Col, Table } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/people', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="8">
          <h1>Cadastro de Pessoas</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th colspan="2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {data.map((p, i) => (
                <Person key={i} person={p} />
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}
