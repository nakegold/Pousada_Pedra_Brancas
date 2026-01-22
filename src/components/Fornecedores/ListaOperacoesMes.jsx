import { useEffect, useState } from "react";

function formatarBR(data) {
  if (!data) return "";
  return new Date(data).toLocaleDateString("pt-BR");
}

const meses = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

export default function ListaOperacoesMes({ mes, voltar }) {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetch(
      `https://pousadapedrabrancas.onrender.com/operacoes?mes=${mes}&ano=2026`
    )
      .then((r) => r.json())
      .then(setLista)
      .catch(console.error);
  }, [mes]);

  return (
    <div>
      <button onClick={voltar} style={btnLink}>
        ← Voltar
      </button>

      <h2 style={{ marginTop: 10 }}>
        Fornecedores de Operação — {meses[mes - 1]} / 2026
      </h2>

      {lista.length === 0 && (
        <p style={{ color: "#666", marginTop: 20 }}>
          Nenhum fornecedor cadastrado para este mês.
        </p>
      )}

      <div style={{ marginTop: 20 }}>
        {lista.map((o) => (
          <div key={o.id} style={card}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <strong style={{ fontSize: 16 }}>{o.nome}</strong>
            </div>

            <div style={{ marginTop: 6, color: "#555" }}>
              📍 {o.endereco}
            </div>

            <div style={{ marginTop: 8, fontSize: 14 }}>
              📅 {formatarBR(o.data_inicio)} → {formatarBR(o.data_fim)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===== ESTILO ===== */

const card = {
  background: "#fff",
  padding: 18,
  borderRadius: 14,
  marginBottom: 14,
  boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
};

const btnLink = {
  background: "none",
  border: "none",
  color: "#1e6bd6",
  cursor: "pointer",
  fontSize: 14,
};
