import React, { useEffect, useState } from "react";
import Card from "../Card";
import "./Home.css";

import api from '../../services/api';

function Home() {
    const [allValues, setAllValues] = useState({
        proximo: null,
        ultimo: null,
     });

    useEffect(() => {
        async function fetchData() {
            const proximo = await api.get('lancamentos/proximo');
            const ultimo = await api.get('lancamentos/ultimo');
            setAllValues({proximo: proximo.data, ultimo: ultimo.data});
        }
        fetchData();
    }, []);

    return (
        <>
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">Confira os Lançamentos da SpaceX</h1>
                    <br />
                    <br />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Último Lançamento</h3>
                                <Card
                                    src={allValues.ultimo?.patch.large}
                                    alt={allValues.ultimo?.nome}
                                    title={allValues.ultimo?.nome}
                                    details={allValues.ultimo?.detalhes}
                                    live={allValues.ultimo?.transmissao}
                                    date={allValues.ultimo?.data_lancamento}
                                />
                            </div>
                            <div className="col-md-6">
                                <h3>Próximo Lançamento</h3>
                                <Card
                                    src={allValues.proximo?.patch.large}
                                    alt={allValues.proximo?.nome}
                                    title={allValues.proximo?.nome}
                                    details={allValues.proximo?.detalhes}
                                    live={allValues.proximo?.transmissao}
                                    date={allValues.proximo?.data_lancamento}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
