export function Prose({ value, inline = false }) {
  if (value == null || value === "") return null;
  const Tag = inline ? "span" : "p";
  if (typeof value === "object") {
    return (
      <Tag className={value.pending ? "pending" : undefined}>
        {value.pending ? <span className="pending-label">To add</span> : null}
        {value.text}
      </Tag>
    );
  }
  return <Tag>{value}</Tag>;
}
