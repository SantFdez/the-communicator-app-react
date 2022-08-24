import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { Invoice } from "../data";
import { getInvoices } from "../data";
import QueryNavLink from "./queryNavLink";

export default function Cards() {
  const invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  let [filterStr, setFilterStr] = useState("");
  let [filteredInvoices, setFilteredInvoices] = useState<Invoice[]>([]);
  
  useEffect(() => {
    setFilteredInvoices(
      invoices.filter((invoice) => {
        let filter = searchParams.get("filter");
        if (!filter) return true;
        let name = invoice.name.toLowerCase();
        return name.startsWith(filter.toLowerCase());
      })
    );
  }, [searchParams]);

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={filterStr || ""}
          onChange={(event) => {
            let filter = event.target.value;
            setFilterStr(filter);
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {filteredInvoices.map((invoice) => (
          <QueryNavLink to={`/invoices/${invoice.number}`} key={invoice.number}>
            {invoice.name}
          </QueryNavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
