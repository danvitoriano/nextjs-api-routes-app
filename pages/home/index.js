
import Link from 'next/link';
import { Container, Col, Image, Row } from 'react-bootstrap';

import Carousel from './Carousel';
import { posts } from './../../data';

const home = () => {
    return (
        <>
            <Carousel posts={posts}/>
            <Container style={{ marginTop: '30px' }}>
                <Row>

                    {posts.map(post => {
                        return (
                            <Col key={post.id} xs={12} md={4}>
                                <Link href="/post/[id]" as={`/post/${post.id}`}>
                                    <a style={{ textDecoration: 'none', color: '#000' }}>
                                        <Image style={{ width: '278px', height: '171px' }} src={post.image} rounded />
                                        <h2>{post.title}</h2>
                                        <p>{post.resume}</p>
                                    </a>
                                </Link>
                            </Col>
                        )
                    })}

                </Row>
            </Container>
        </>
    )
}

export default home;