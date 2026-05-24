"use client";

import { useMemo, useState } from "react";
import {
  concernChips,
  outcomeChips,
  timeChips,
  type Service,
  type ConcernTag,
  type OutcomeTag,
  type TimeBucket,
} from "@/content/services";
import { ServiceRow } from "./ServiceRow";

type Filters = {
  concern: ConcernTag | "All";
  outcome: OutcomeTag | null;
  time: TimeBucket | null;
};

const DEFAULT_FILTERS: Filters = { concern: "All", outcome: null, time: null };

function matches(service: Service, f: Filters): boolean {
  if (f.concern !== "All" && !service.concerns.includes(f.concern)) return false;
  if (f.outcome && !service.outcomes.includes(f.outcome)) return false;
  if (f.time && service.time !== f.time) return false;
  return true;
}

function activeLabel(f: Filters): string {
  const parts: string[] = [];
  if (f.concern !== "All") parts.push(f.concern);
  if (f.outcome) parts.push(f.outcome);
  if (f.time) parts.push(timeChips.find((c) => c.value === f.time)!.label);
  return parts.length ? parts.join(" · ") : "All";
}

export function ServiceFinder({ services }: { services: Service[] }) {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const filtered = useMemo(() => services.filter((s) => matches(s, filters)), [services, filters]);

  return (
    <div className="finder">
      <aside className="finder__filters">
        <h4>By concern</h4>
        <div className="chip-list">
          <Chip
            pressed={filters.concern === "All"}
            onClick={() => setFilters((f) => ({ ...f, concern: "All" }))}
          >
            All
          </Chip>
          {concernChips.map((c) => (
            <Chip
              key={c}
              pressed={filters.concern === c}
              onClick={() => setFilters((f) => ({ ...f, concern: f.concern === c ? "All" : c }))}
            >
              {c}
            </Chip>
          ))}
        </div>

        <h4>By outcome</h4>
        <div className="chip-list">
          {outcomeChips.map((o) => (
            <Chip
              key={o}
              pressed={filters.outcome === o}
              onClick={() => setFilters((f) => ({ ...f, outcome: f.outcome === o ? null : o }))}
            >
              {o}
            </Chip>
          ))}
        </div>

        <h4>By time</h4>
        <div className="chip-list">
          {timeChips.map((t) => (
            <Chip
              key={t.value}
              pressed={filters.time === t.value}
              onClick={() => setFilters((f) => ({ ...f, time: f.time === t.value ? null : t.value }))}
            >
              {t.label}
            </Chip>
          ))}
        </div>

        <div className="finder__count">
          <strong>
            {filtered.length} treatment{filtered.length === 1 ? "" : "s"}
          </strong>{" "}
          matching “{activeLabel(filters)}”
        </div>
      </aside>

      <div className="finder__rows">
        {filtered.length > 0 ? (
          filtered.map((s) => <ServiceRow key={s.slug} service={s} />)
        ) : (
          <p className="lead" style={{ padding: "80px 0", textAlign: "center" }}>
            No treatments match those filters yet. Try fewer.
          </p>
        )}
      </div>
    </div>
  );
}

function Chip({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className="chip"
      aria-pressed={pressed}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
