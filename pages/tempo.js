function Tempo(props) {
    console.log('LOG: Acessando Temoi()')

    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateString} (dinâmico)</div>
            <div>{props.dynamicDateString} (estatico)</div>
        </div>
    )

}

export function getStaticProps() {
    console.log('LOG: Acessando getStaticProps()')
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        }
    }

}

export default Tempo;