import { useState } from "react";

const modelo = {
  nome: "",
  endereco: "",
  data_inicio: "",
  data_fim: "",
  mes: "",
  ano: 2026,
};

export default function OperacaoForm({
  onSalvar,
  onCancelar,
  operacaoInicial,
}) {
  const [form, setForm] = useState(operacaoInicial || modelo);

  function setCampo(campo, valor) {
    setForm((f) => ({ ...f, [campo]: valor }));
  }

  function salvar() {
    if (!form.nome || !form.data_inicio || !form.data_fim) {
      alert("Preencha nome e período");
      return;
    }

    const dataInicio = new Date(form.data_inicio);
    const mes = dataInicio.getMonth() + 1;

    onSalvar({
      ...form,
      mes,
      ano: 2026,
    });
  }

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <button
        onClick={onCancelar}
        style={{ background: "none", border: "none", color: "#1e6bd6" }}
      >
        ← Voltar
      </button>

      <h1 style={{ color: "#1e6bd6" }}>
        Fornecedor de Operação
      </h1>

      <Section title="Dados do Fornecedor">
        <Input
          label="Nome"
          value={form.nome}
          onChange={(v) => setCampo("nome", v)}
        />

        <Input
          label="Endereço"
          value={form.endereco}
          onChange={(v) => setCampo("endereco", v)}
        />
      </Section>

      <Section title="Período da Relação">
        <Input
          type="date"
          label="Data de Início"
          value={form.data_inicio}
          onChange={(v) => setCampo("data_inicio", v)}
        />

        <Input
          type="date"
          label="Data de Fim"
          value={form.data_fim}
          onChange={(v) => setCampo("data_fim", v)}
        />
      </Section>

      <div style={{ textAlign: "right", marginBottom: 40 }}>
        <button
          onClick={salvar}
          style={{
            background: "#1e6bd6",
            color: "#fff",
            border: "none",
            padding: "12px 24px",
            borderRadius: 12,
            cursor: "pointer",
            fontSize: 15,
          }}
        >
          Salvar
        </button>
      </div>
    </div>
  );
}

/* ===== COMPONENTES ===== */

function Section({ title, children }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 14,
        marginBottom: 20,
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ color: "#1e6bd6", marginBottom: 14 }}>
        {title}
      </h3>
      <div style={{ display: "grid", gap: 12 }}>
        {children}
      </div>
    </div>
  );
}

function Input({ label, value, onChange, type = "text" }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={{ fontSize: 13, marginBottom: 4 }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: 10,
          borderRadius: 8,
          border: "1px solid #ccc",
          fontSize: 14,
        }}
      />
    </div>
  );
}
