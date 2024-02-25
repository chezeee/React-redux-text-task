import Button from './Button.js';
import Label from './Label.js';
import Panel from './Panel.js';
import { nanoid } from 'nanoid';

export default function ContentComponent({ content }) {
  return (
    <>
      {content.map((item) => {
        if (item.type === 'panel') {
          if (item.content) {
            return (
              <Panel
                width={item.props.width}
                height={item.props.height}
                visible={item.props.visible}
                content={item.content}
                key={nanoid()}
              />
            );
          }
          return (
            <Panel
              width={item.props.width}
              height={item.props.height}
              visible={item.props.visible}
              content={null}
              key={nanoid()}
            />
          );
        } else if (item.type === 'label') {
          return (
            <Label
              caption={item.props.caption}
              visible={item.props.visible}
              key={nanoid()}
            />
          );
        } else if (item.type === 'button') {
          return (
            <Button
              caption={item.props.caption}
              width={item.props.width}
              height={item.props.height}
              visible={item.props.visible}
              key={nanoid()}
            />
          );
        }
      })}
    </>
  );
}
