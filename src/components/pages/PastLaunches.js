import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Card from "../Card";

function PastLaunches() {
    const [ultimosLancamentos, setUltimosLancamentos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const ultimos = await api.get("lancamentos/passados");
            setUltimosLancamentos(ultimos.data);
        }
        fetchData();
    }, []);

    return (
        <div className="album py-5">
            <div className="container">
                <h1>Lançamentos Passados</h1>
                <div className="row">
                    {ultimosLancamentos?.map((ultimo) => (
                        <div className="col-4" key={ultimo?.id}>
                            <Card
                                src={ultimo?.patch.large}
                                alt={ultimo?.nome}
                                title={ultimo?.nome}
                                details={ultimo?.detalhes}
                                live={ultimo?.transmissao}
                                date={ultimo?.data_lancamento}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PastLaunches;
