import { useEffect, useState } from "react";
import styles from './Formulario.module.css';

const Formulario = (props) => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    useEffect(() => {
        console.log('O componente iniciou');

        return () => {
            console.log('O componente finalizou');
        }
    }, [])

    useEffect(() => {
        console.log('O estado altura mudou para ' + altura);
        console.log('O estado peso mudou para ' + peso);
    }, [altura, peso])

    const renderResult = () => {
        const imc = peso / ( altura * altura );

        if(imc < 18.5){
            return <h2> Seu imc é {imc}. Você está abaixo do peso. </h2>
        } else if(imc >= 18.5 && imc < 25) {            
            return <h2> Seu imc é {imc}. Você está no peso ideal. </h2>
        } else if(imc >= 25 && imc < 30) {            
            return <h2> Seu imc é {imc}. Você está levemente acima do peso </h2>
        } else if(imc >= 30 && imc < 35) {
            return <h2> Seu imc é {imc}. Você tem obesidade grau I</h2>
        } else if(imc >= 35 && imc < 40) {
            return <h2> Seu imc é {imc}. Você tem obesidade grau II (severa)</h2>
        } else if(imc >= 40) {
                return <h2> Seu imc é {imc}. Você tem obesidade grau III (m)</h2>
        }
    }
    
    return (
        <form className={styles.container}>
            <h1>IMC Calculator <hr /> </h1>
            <input type="number" placeholder="Altura " onChange={({target}) => setAltura(parseFloat(target.value)) }/>
            <input type="number" placeholder="Peso " onChange={evento => setPeso(parseFloat(evento.target.value)) }/>
            {renderResult()}
        </form>
    )
}

export default Formulario;