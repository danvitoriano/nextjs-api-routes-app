import Link from 'next/link'

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

export default function Person({ person }) {
    return (
        <Link href="/person/[id]" as={`/person/${person.id}`}>
            <a class="list-group-item tabelaImagens">{person.name}</a>
        </Link>     
    )
}
 