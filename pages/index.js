import { useState } from 'react';

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <Contador />
        </div>
    )
}

function Contador() {
    const [Contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(Contador + 1);
    }

    return (
        <div>
            <div>{Contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home