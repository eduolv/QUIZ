import React, { useState } from "react";
import './styles.css';

import { Perguntas } from '../../data/perguntas'

import quizEdu from '../../imgs/quizdu.png'

export default function Quiz() {

    const questions = Perguntas ?? []
    const [perguntaAtual, setPerguntaAtual] = useState(0);
    const [showPontuacao, setShowPontuacao] = useState(false);
    const [pontos, setPontos] = useState(0);

    function proximaPergunta(correta) {
        const nextQuestion = perguntaAtual + 1;

        if (correta) {
            setPontos(pontos + 1);
        }

        if (nextQuestion < questions.length) {
            setPerguntaAtual(nextQuestion);
        } else {
            setShowPontuacao(true);
        }
    }
    return (
        <>

            <div className="container">

                <img className="img-quizEdu" src={quizEdu} />

                {showPontuacao ? (
                    <div className="pontuacao">
                        <span>Sua pontuacao é {pontos} de {questions.length} </span>
                    </div>) : (
                    <>
                        <div className="infoPerguntas">
                            <div className="contagemPerguntas">
                                <span> {perguntaAtual + 1}/{questions.length}</span>
                            </div>
                            <div className="pergunta">{questions[perguntaAtual].pergunta}</div>
                        </div>

                        <div className="resposta">
                            {questions[perguntaAtual].opcoesRespostas.map((opcoesRespostas) =>
                                <div className="grupoResposta">
                                    <span>{opcoesRespostas.alternativa}</span>
                                    <button onClick={() => proximaPergunta(opcoesRespostas.correta)}>{opcoesRespostas.resposta}</button>
                                </div>
                            )}
                        </div>
                    </>

                )}
            </div>

            <div className="divAutor">
                <p className="autor">feito por Eduardo Oliveira.</p>
            </div>

        </>
    );
}
