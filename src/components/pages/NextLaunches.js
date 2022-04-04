import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Card from "../Card";

function NextLaunches() {
    const [proximosLancamentos, setProximosLancamentos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const proximos = await api.get("lancamentos/proximos");
            setProximosLancamentos(proximos.data);
        }
        fetchData();
    }, []);

    return (
        <div className="album py-5">
            <div className="container">
                <h1>Próximos Lançamentos</h1>
                <div className="row">
                    {proximosLancamentos?.map((proximo) => (
                        <div className="col-4" key={proximo?.id}>
                            <Card
                                src={proximo?.patch.large}
                                alt={proximo?.nome}
                                title={proximo?.nome}
                                details={proximo?.detalhes}
                                live={proximo?.transmissao}
                                date={proximo?.data_lancamento}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NextLaunches;
