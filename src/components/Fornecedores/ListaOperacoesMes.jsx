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
      <button onClick={voltar} style={linkBtn}>← Voltar</button>

      <h3 style={{ marginBottom: 16 }}>Fornecedores do mês</h3>

      {lista.length === 0 && <p>Nenhum fornecedor neste mês.</p>}

      {lista.map((o) => (
        <div key={o.id} style={card}>
          <strong style={{ fontSize: 16 }}>{o.nome}</strong>
          <div style={{ color: "#555" }}>{o.endereco}</div>

          <div style={{ marginTop: 8, fontSize: 13, color: "#666" }}>
            {formatarBR(o.data_inicio)} → {formatarBR(o.data_fim)}
          </div>
        </div>
      ))}
    </>
  );
}

const card = {
  background: "#fff",
  padding: 16,
  borderRadius: 14,
  marginBottom: 12,
  boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
};

const linkBtn = {
  background: "none",
  border: "none",
  color: "#1e6bd6",
  cursor: "pointer",
  marginBottom: 12,
};
