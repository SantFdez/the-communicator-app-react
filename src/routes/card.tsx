import React from "react";
import { NotFound } from "../components/NotFound";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

export function Card() {
  let navigate = useNavigate();
  let location = useLocation();

  const params = useParams<{ invoiceId: string }>();
  if (!params.invoiceId) return <NotFound />;

  const invoice = getInvoice(parseInt(params.invoiceId, 10));
  if (!invoice) return <NotFound />;

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices" + location.search);
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
