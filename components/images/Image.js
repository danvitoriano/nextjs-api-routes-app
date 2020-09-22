import 'bootstrap/dist/css/bootstrap.min.css';

import Link from 'next/link'

export default function Image({ image }) {
    return (
        <Link href="/image/[id]" as={`/image/${image.id}`}>
            <a class="list-group-item">{image.name}</a>
        </Link>    
    )
}
 