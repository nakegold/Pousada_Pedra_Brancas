import { useEffect, useState } from "react";

function formatarBR(data) {
  if (!data) return "";
  return new Date(data).toLocaleDateString("pt-BR");
}

export default function ListaOperacoesMes({ mes, voltar }) {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetch(
      `https://pousadapedrabrancas.onrender.com/operacoes?mes=${mes}&ano=2026`
    )
      .then((r) => r.json())
      .then(setLista);
  }, [mes]);

  return (
    <>
      <button onClick={voltar} style={{ marginBottom: 12 }}>
        ← Voltar
      </button>

      {lista.map((o) => (
        <div key={o.id} style={card}>
          <strong>{o.nome}</strong>
          <div>{o.endereco}</div>
          <div>
            {formatarBR(o.data_inicio)} → {formatarBR(o.data_fim)}
          </div>
        </div>
      ))}
    </>
  );
}

const card = {
  background: "#fff",
  padding: 14,
  borderRadius: 12,
  marginBottom: 12,
  boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
};
