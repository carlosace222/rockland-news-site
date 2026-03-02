type DataTableProps = {
  headers: string[];
  rows: string[][];
  caption?: string;
  alignRight?: number[]; // column indices to right-align
};

export default function DataTable({ headers, rows, caption, alignRight = [] }: DataTableProps) {
  return (
    <div className="my-6 overflow-x-auto -mx-4 px-4">
      <table className="w-full text-sm border-collapse">
        {caption && (
          <caption className="text-left text-xs text-gray-light font-semibold tracking-wide uppercase mb-2">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="border-b-2 border-ink">
            {headers.map((h, i) => (
              <th
                key={i}
                className={`py-2 pr-4 text-xs font-semibold tracking-wide uppercase text-ink whitespace-nowrap ${
                  alignRight.includes(i) ? "text-right" : "text-left"
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-rule hover:bg-paper-dark transition-colors">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`py-2.5 pr-4 text-gray whitespace-nowrap ${
                    ci === 0 ? "text-ink font-medium" : ""
                  } ${alignRight.includes(ci) ? "text-right tabular-nums" : "text-left"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
