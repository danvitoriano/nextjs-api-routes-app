
import Link from 'next/link';
import { Carousel } from 'react-bootstrap';

const HomeCarousel = ({ posts }) => {

    return (
        <Carousel>

            {
                posts.map((post) => {
                    return (
                        <Carousel.Item key={post.id} style={{ height: '58vh' }}>
                            <Link href="/post/[id]" as={`/post/${post.id}`}>
                                <a>
                                    <img
                                    className="d-block w-100"
                                    src={post.image}
                                    alt="First slide"
                                    style={{ width: '40%', margin: 'auto', height: "58vh" }}
                                    />
                                    <Carousel.Caption>
                                        <h3>{post.title}</h3>
                                        <p>{post.resume}</p>
                                    </Carousel.Caption>
                                </a>
                            </Link>
                        </Carousel.Item>
                    )
                })
            }

        </Carousel>
    )

}

export default HomeCarousel;