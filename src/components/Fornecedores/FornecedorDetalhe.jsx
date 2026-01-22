export default function FornecedorDetalhe({ fornecedor, onVoltar }) {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px" }}>
      {/* VOLTAR */}
      <button
        onClick={onVoltar}
        style={{
          background: "none",
          border: "none",
          color: "#1e6bd6",
          cursor: "pointer",
          marginBottom: 16,
        }}
      >
        ← Voltar
      </button>

      {/* TÍTULO */}
      <h1 style={{ marginBottom: 4 }}>{fornecedor.nome_fornecedor}</h1>
      <p style={{ color: "#666", marginBottom: 24 }}>
        Tipo de serviço: <strong>{fornecedor.tipo_servico}</strong>
      </p>

      {/* DADOS PRINCIPAIS */}
      <Section title="Informações Gerais">
        <Grid>
          <Info label="Município" value={fornecedor.municipio} />
          <Info label="Email" value={fornecedor.email} />
          <Info label="Telefone" value={fornecedor.telefone} />
          <Info label="Condição de Pagamento" value={fornecedor.condicao_pagamento} />
        </Grid>
      </Section>

      {/* VALORES */}
      <Section title="Valores / Serviços">
        <Grid>
          <Info label="Single" value={fornecedor.valor_single} />
          <Info label="Duplo" value={fornecedor.valor_duplo} />
          <Info label="Triplo" value={fornecedor.valor_triplo} />
          <Info label="Água" value={fornecedor.valor_agua} />
          <Info label="Lavanderia" value={fornecedor.valor_lavanderia} />
          <Info label="Marmita" value={fornecedor.valor_marmita} />
          <Info label="Self-service" value={fornecedor.valor_self_service} />
          <Info label="Prato Executivo" value={fornecedor.valor_prato_exec} />
        </Grid>
      </Section>

      {/* DADOS BANCÁRIOS */}
      <Section title="Dados Bancários">
        <Grid>
          <Info label="Tipo de Conta" value={fornecedor.tipo_conta} />
          <Info label="Beneficiário" value={fornecedor.beneficiario} />
          <Info label="CPF / CNPJ" value={fornecedor.cpf_cnpj} />
          <Info label="Banco" value={fornecedor.banco_nome} />
          <Info label="Agência" value={fornecedor.agencia} />
          <Info label="Conta" value={fornecedor.conta} />
          <Info label="Chave Pix" value={fornecedor.chave_pix || fornecedor.pix} />
        </Grid>
      </Section>

      {/* FATURAMENTO */}
      {fornecedor.faturamento && (
        <Section title="Observações de Faturamento">
          <p style={{ margin: 0 }}>{fornecedor.faturamento}</p>
        </Section>
      )}
    </div>
  );
}

/* ================= UI ================= */

function Section({ title, children }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 14,
        marginBottom: 24,
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ color: "#1e6bd6", marginBottom: 16 }}>{title}</h3>
      {children}
    </div>
  );
}

function Grid({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 12,
      }}
    >
      {children}
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 2 }}>{label}</p>
      <p style={{ margin: 0, fontWeight: 500 }}>
        {value && value !== "" ? value : "—"}
      </p>
    </div>
  );
}
