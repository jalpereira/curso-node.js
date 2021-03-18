import { useState } from 'react';
import Link from 'next/link';

function Home() {
    return (
        <div>
            <h2>Home Page</h2>
            <Link href="/sobre">
                <a>Sobre</a>
            </Link>
        </div>
    )
}

export default Home