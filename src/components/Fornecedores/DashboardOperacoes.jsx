import { useEffect, useState } from "react";

const meses = [
  "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
  "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro",
];

export default function DashboardOperacoes({ onVerMes }) {
  const [contagem, setContagem] = useState({});

  useEffect(() => {
    async function carregar() {
      const novo = {};

      for (let i = 1; i <= 12; i++) {
        const res = await fetch(
          `https://pousadapedrabrancas.onrender.com/operacoes?mes=${i}&ano=2026`
        );
        const data = await res.json();
        novo[i] = data.length;
      }

      setContagem(novo);
    }

    carregar();
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
      {meses.map((m, i) => (
        <div key={i} style={card}>
          <h4>{m}</h4>
          <p>{contagem[i + 1] || 0} fornecedores</p>
          <button style={btn} onClick={() => onVerMes(i + 1)}>
            Ver mais
          </button>
        </div>
      ))}
    </div>
  );
}

const card = {
  background: "#fff",
  padding: 16,
  borderRadius: 14,
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const btn = {
  background: "#1e6bd6",
  color: "#fff",
  border: "none",
  padding: "6px 12px",
  borderRadius: 8,
  cursor: "pointer",
};
