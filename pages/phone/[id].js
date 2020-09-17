import { useRouter } from 'next/router'
import Link from 'next/link'
import useSWR from 'swr'
import Phone from '../../components/Phone'
import { Container, Row, Col } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Index() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/phones/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md="8">
                    <h2>Telefones para contato</h2>
                    <ul>
                        {data.map((p, i) => (
                          <Phone key={i} phone={p} />
                        ))}
                    </ul>
                    <p><Link href="/">Voltar</Link></p>
                </Col>
            </Row>
        </Container>
    );
}