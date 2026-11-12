import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SearchableSelect({
  id,
  label,
  placeholder,
  value,
  options,
  onChange,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false),
    [query, setQuery] = useState("");
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    function close(event: MouseEvent) {
      if (event.target instanceof Node && !container.current?.contains(event.target))
        setOpen(false);
    }
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);
  const results = options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()));
  return (
    <div
      className="searchable-select"
      ref={container}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <Button
        id={id}
        type="button"
        variant="ghost"
        className="select-trigger"
        role="combobox"
        aria-label={label}
        aria-controls={`${id}-options`}
        aria-expanded={open}
        onClick={() => {
          setOpen(!open);
          setQuery("");
        }}
      >
        {options.find((o) => o.value === value)?.label || placeholder}
        <ChevronDown />
      </Button>
      {open && (
        <div className="select-options" id={`${id}-options`}>
          <div className="select-search">
            <Search className="size-4" />
            <input
              autoFocus
              aria-label={`Search ${label.toLowerCase()}`}
              placeholder="Search…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div role="listbox" aria-label={label}>
            <Button
              type="button"
              variant="ghost"
              role="option"
              aria-selected={!value}
              className="select-option"
              onClick={() => {
                onChange("");
                setOpen(false);
              }}
            >
              {placeholder}
            </Button>
            {results.map((o) => (
              <Button
                type="button"
                variant="ghost"
                role="option"
                aria-selected={value === o.value}
                className="select-option"
                key={o.value}
                onClick={() => {
                  onChange(o.value);
                  setOpen(false);
                }}
              >
                {o.label}
                {value === o.value && <Check className="size-3" />}
              </Button>
            ))}
            {!results.length && <p className="small-label p-3">No matching options.</p>}
          </div>
        </div>
      )}
    </div>
  );
}
