import { useRouter } from 'next/router'
import Link from 'next/link'
import useSWR from 'swr'
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
    () => query.id && `/api/people/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md="8">
                    <h2>Telefones para contato de <strong>{data.name}</strong></h2>
                    <p>[Em breve...]</p>
                    <p><Link href="/">Voltar</Link></p>
                </Col>
            </Row>
        </Container>
    );
}