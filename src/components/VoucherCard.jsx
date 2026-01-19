export default function VoucherCard({ voucher, onDelete, onVer, onEditar }) {
  const pdfUrl = `https://pousadapedrabrancas.onrender.com/vouchers/${voucher.id}/pdf`;

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 14,
        padding: 18,
        marginBottom: 18,
        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
      }}
    >
      {/* TOPO */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <strong>{voucher.empresa || "Empresa não informada"}</strong>

        <button
          onClick={() => onDelete(voucher.id)}
          title="Excluir"
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            color: "#999",
            fontSize: 16,
          }}
        >
          🗑
        </button>
      </div>

      {/* INFO */}
      <div style={{ marginTop: 8 }}>
        🏨 {voucher.hotel_nome || "Hotel não informado"}
      </div>

      <div style={{ marginTop: 4 }}>
        📅 {voucher.checkin || "--"} → {voucher.checkout || "--"}
      </div>

      {/* AÇÕES */}
      <div
        style={{
          marginTop: 14,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          onClick={onVer}
          style={{
            background: "none",
            border: "none",
            color: "#1e6bd6",
            cursor: "pointer",
            padding: 0,
          }}
        >
          Ver detalhes →
        </button>

        <div style={{ display: "flex", gap: 8 }}>
          {/* PDF — LINK DIRETO (FUNCIONA NO CELULAR) */}
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#1e6bd6",
              color: "#fff",
              padding: "6px 12px",
              borderRadius: 8,
              textDecoration: "none",
              fontSize: 14,
            }}
          >
            PDF
          </a>

          <button
            onClick={onEditar}
            style={{
              background: "#eee",
              border: "none",
              padding: "6px 12px",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
}
