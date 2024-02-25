export default function Button({ caption, width, height, visible }) {
  return (
    <button
      style={{
        width: `${width}`,
        height: `${height}`,
        display: `${visible ? 'block' : 'none'}`,
      }}
    >
      {caption}
    </button>
  );
}
