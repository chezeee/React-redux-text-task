import { createStore } from 'redux';

const initialState = {
  title: 'Content',
  content: [
    {
      type: 'panel',
      props: {
        width: 700,
        height: 400,
        visible: true,
      },
      content: [
        {
          type: 'panel',
          props: {
            width: 400,
            height: 200,
            visible: true,
          },
        },
        {
          type: 'button',
          props: {
            caption: 'Button',
            width: 100,
            height: 50,
            visible: true,
          },
        },
      ],
    },
    {
      type: 'label',
      props: {
        caption: 'test',
        visible: true,
      },
    },
    {
      type: 'button',
      props: {
        caption: 'Button',
        width: 100,
        height: 50,
        visible: true,
      },
    },
  ],
};

const UPDATE_CONTENT = 'UPDATE_CONTENT';

const parseNewValue = (strValue) => {
  const newStr = strValue
    .replace(/(['])?([a-zA-Z0-9_]+)(['])?:/g, '"$2":')
    .replace(/(?!^)'(?!$)/g, '"');
  return JSON.parse(newStr);
};

const getContentIndex = (value) => {
  return parseInt(value.match(/\[(\d+)\]/)[1]);
};

const updateContent = (path, newValue, handleApply) => ({
  type: UPDATE_CONTENT,
  payload: { path, newValue, handleApply },
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CONTENT:
      const newState = [...state.content];
      const keys = action.payload.path.split('.');
      const currentIndex = getContentIndex(keys[0]);

      if (newState[currentIndex]) {
        let current = newState[currentIndex];

        if (keys.length === 1) {
          state.content[currentIndex] = parseNewValue(action.payload.newValue);
        }

        for (let i = 1; i < keys.length; i++) {
          if (i === keys.length - 1) {
            if (keys[i].includes('[')) {
              const currentIndex = getContentIndex(keys[i]);
              current.content[currentIndex]
                ? (current.content[currentIndex] = parseNewValue(
                    action.payload.newValue
                  ))
                : (current.content = [
                    ...current.content,
                    parseNewValue(action.payload.newValue),
                  ]);
              current.content[currentIndex] = parseNewValue(
                action.payload.newValue
              );
            } else {
              current[keys[i]] = action.payload.newValue;
            }
          } else {
            if (keys[i].includes('[')) {
              current = current.content[getContentIndex(keys[i])];
            } else {
              current = current[keys[i]];
            }
          }
        }
      } else {
        state.content = [
          ...state.content,
          parseNewValue(action.payload.newValue),
        ];
        console.log(state.content);
      }
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log('subscribe', store.getState());
});

export { store, updateContent };
