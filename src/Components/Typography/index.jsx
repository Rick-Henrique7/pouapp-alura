import styles from './typography.module.css';

const TAGS = {
    h1: 'h1',
    h2: 'h2',
    body: 'p'
}

const Typography = ({children, variant}) => {
    const Component = TAGS[variant] || 'p';
    const VarianteClass = styles[variant] || styles.p;
    return (
        <Component clasName={VarianteClass}>
            {children}
        </Component>
    )
}
export default Typography;
