import styles from './typography.module.css';

const TAGS = {
    h1: 'h1',
    h2: 'h2',
    body: 'p'
}

const Typography = ({children, variant, user}) => {
    //recebe o parametro usuario e aplica dentro do
    //componente exibindo ele e por default usa user
    const Component = TAGS[variant] || 'p';
    const VarianteClass = styles[variant] || styles.p;
    return (
        <Component className={VarianteClass}>
            {children} {user ? `Olá, ${user}` : 'Olá, desconhecido'}
            {/*como funciona esse operador ternario ?
                O operador ternário é uma forma concisa de escrever uma instrução condicional.
                Ele funciona da seguinte maneira:
                condição ? valor_se_verdadeiro : valor_se_falso
                No nosso caso, se 'user' existir, exibimos `Olá, ${user}`, caso contrário, exibimos 'Olá, desconhecido'.
            */}
        </Component>
    )
}
export default Typography;
