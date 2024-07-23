import Colaborador from '../Colaborador'
import './Posicao.css'

const Posicao = (props) => {
    const css = { backgroundColor: props.corSecundaria }
    const css1 = { borderColor: props.corPrimaria }
    return (

        props.colaboradores.length > 0 &&
        <section className="posicao" style={css}>
            <h3 style={css1}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador =>
                    <Colaborador
                        corDeFundo={props.corPrimaria}
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        nivel={colaborador.nivel}
                        imagem={colaborador.imagem}
                    />)}
            </div>
        </section >
    )
}

export default Posicao