export default function DashboardOperacoes({ onVerMes, onNovo }) {
  const meses = [
    "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
    "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
  ];

  return (
    <>
      {/* ✅ BOTÃO EXCEL (VERDE) */}
      <button
        onClick={() =>
          window.open(
            "https://pousadapedrabrancas.onrender.com/excel/operacoes",
            "_blank"
          )
        }
        style={{ ...btnExcel, marginBottom: 16 }}
      >
        📥 Exportar Excel — Operações 2026
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1>Fornecedores de Operações</h1>
          <p style={{ color: "#666" }}>
            Organização mensal dos fornecedores de operação — 2026
          </p>
        </div>

        <button style={btnPrimary} onClick={onNovo}>
          + Novo Fornecedor de Operação
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr))",
          gap: 16,
          marginTop: 20,
        }}
      >
        {meses.map((mes, index) => (
          <div
            key={mes}
            style={card}
            onClick={() => onVerMes(index + 1)}
          >
            <h3 style={{ margin: 0 }}>{mes}</h3>
            <p style={{ fontSize: 13, color: "#666" }}>
              Ver fornecedores
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

const card = {
  background: "#fff",
  padding: 20,
  borderRadius: 14,
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  cursor: "pointer",
};

const btnPrimary = {
  background: "#1e6bd6",
  color: "#fff",
  border: "none",
  padding: "10px 18px",
  borderRadius: 10,
  cursor: "pointer",
};

const btnExcel = {
  background: "#2ecc71", // ✅ verde
  color: "#fff",
  border: "none",
  padding: "10px 18px",
  borderRadius: 10,
  cursor: "pointer",
};
