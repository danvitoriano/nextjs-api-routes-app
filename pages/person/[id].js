import { useRouter } from 'next/router'
import Link from 'next/link'
import useSWR from 'swr'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Person() {
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
          <h1>Editando o cadastro de <strong>{data.name}</strong></h1>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" defaultValue={data.name}></Form.Control>
            </Form.Group>
            <Form.Group controlId="height">
              <Form.Label>Altura</Form.Label>
              <Form.Control type="text" defaultValue={data.height}></Form.Control>
            </Form.Group>
            <Form.Group controlId="mass">
              <Form.Label>Peso</Form.Label>
              <Form.Control type="text" defaultValue={data.mass}></Form.Control>
            </Form.Group>
            <Form.Group controlId="hair_color">
              <Form.Label>Cor do cabelo</Form.Label>
              <Form.Control type="text" defaultValue={data.hair_color}></Form.Control>
            </Form.Group>
            <Form.Group controlId="skin_color">
              <Form.Label>Cor de pele</Form.Label>
              <Form.Control type="text" defaultValue={data.skin_color}></Form.Control>
            </Form.Group>
            <Form.Group controlId="eye_color">
              <Form.Label>Cor dos olhos</Form.Label>
              <Form.Control type="text" defaultValue={data.eye_color}></Form.Control>
            </Form.Group>
            <Form.Group controlId="gender">
              <Form.Label>Gênero</Form.Label>
              <Form.Control type="text" defaultValue={data.gender}></Form.Control>
            </Form.Group>
            <p>
            <Button variant="primary" type="submit">
              Gravar
            </Button>
            &nbsp; &nbsp;
            <Link href="/">Cancelar</Link>
            </p>
            
          </Form>
      </Col></Row></Container>
  )
}
