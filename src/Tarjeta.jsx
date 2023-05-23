import './Tarjeta.css';

function Tarjeta(props) {
    return <div className="tarjeta">
        <h2>{props.titulo}</h2>
        <p>{props.descripcion}</p>
    </div>;
}

export default Tarjeta;