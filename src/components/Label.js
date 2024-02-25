export default function Label({ caption, visible}) {
  return (
    <span style={{ display: `${visible ? 'block' : 'none'}` }}>{caption}</span>
  );
}
