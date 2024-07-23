import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import { useState } from 'react';

const Formulario = (props) => {

    const nive= ['Bom', 'Medio' ,'Ruim'];

    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');
    const [pos, setPos] = useState('');
    const [nivel, setNivel] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            imagem,
            pos,
            nivel
        });
        setNome('');
        setImagem('');
        setPos('');
        setNivel('');
    };

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para entrar no time</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    required={true}
                    label="Posição no Campo"
                    itens={props.posi}
                    valor={pos}
                    aoAlterado={valor => setPos(valor)}
                />
                <ListaSuspensa
                    required={true}
                    label="Nivel"
                    itens={nive}
                    valor={nivel}
                    aoAlterado={valor => setNivel(valor)}
                />
                <Botao texto="Criar Card" />
            </form>
        </section>
    );
};

export default Formulario;

