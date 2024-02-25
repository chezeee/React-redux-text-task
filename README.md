## Description

In the "Path" field, enter a line in which we specify the path inside the content. For example:
'content[2].props.caption'
in the "New value" field, specify the new value of this property. For example: 'test2'

Clicking on the "apply" button should change the object and the new content should be displayed on the screen

In the "New value" field, you can enter the following value: {type: 'label', props: {caption: 'test', visible: false}}. In this case, if the path exists, the object will be replaced, otherwise it will be added to the end of the content array.
In the example described above:
If the path is: content[0].content[0], the object will be replaced with a new one.
If the path is: content[0].content[1], the object will be added.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
