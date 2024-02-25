import ContentComponent from './ContentComponent';

export default function Panel({ width, height, visible, content }) {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        display: `${visible ? 'block' : 'none'}`,
        border: `1px solid black`,
      }}
    >
      {content && <ContentComponent content={content} />}
    </div>
  );
}
