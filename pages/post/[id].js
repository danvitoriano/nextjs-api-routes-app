
import { Container, Image, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { posts } from './../../data';

const post = () => {

    const { query } = useRouter();
    const post = posts.filter(post => post.id == query.id)[0];

    return (
        <Container>
            <div style={{ marginTop: '30px', fontSize: '19px' }}>
                <Link href="/home"><a>Voltar para Home</a></Link>
                <Image style={{ height: '400px', width: '100%'  }} src={post?.image}></Image>
            </div>
            <div style={{ marginTop: '10px', marginBottom: '20px' }}>
                <h1> {post?.title} </h1>
                <p> {post?.resume} </p>
            </div>

            <p dangerouslySetInnerHTML={{ __html: post?.content }}></p>
            
        </Container>
    )
}

export default post