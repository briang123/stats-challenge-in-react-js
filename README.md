# ReactJS Coding Challenge

![Preview of challenge](statistics-challenge.gif)

## Objective

Develop a Single Page App (SPA) that shows a simple dashboard that displays four tiles, each displaying a single statistic for a dataset that is retrieved via a REST API call. The user should be able to request new data to be loaded and to see the statistics in the tiles update to reflect the new dataset.

[Details about the Coding Challenge](src/docs/TandemReactJSChallenge.pdf 'Coding Challenge')

## Requirements

<ol>
  <li>The app shallbe implemented using ReactJS components and developed using either JavaScript or TypeScript, with the latter preferred.</li>
  <li>
  The app shall display four statistics tiles: Mean, Median,Standard Deviation and Mode.
  </li>
  <li>
  The app shall present a button which, when clicked, will cause a new dataset to be loaded(replacing the current dataset)and the dashboard display to be updated to reflect the newly loaded data.
  </li>
  <li>
  The app shall present an inputfield that will accept a number and a submit button which, when clicked, will cause the number to be addedto the currently loaded datasetand the dashboard tiles to update to reflect the new dataset state.
  </li>
</ol>

## Dashboard Tiles

1. Mean - [https://en.wikipedia.org/wiki/Arithmetic_mean](https://en.wikipedia.org/wiki/Arithmetic_mean 'Mean')
2. Median – [https://en.wikipedia.org/wiki/Median](https://en.wikipedia.org/wiki/Median 'Median')
3. Standard Deviation – [https://en.wikipedia.org/wiki/Standard_deviation](https://en.wikipedia.org/wiki/Standard_deviation 'Standard Deviation')
4. Mode – [https://en.wikipedia.org/wiki/Mode\_(statistics)](<https://en.wikipedia.org/wiki/Mode_(statistics)> 'Mode')

## Expected Results

### data-1234.json

| Tile       |  Default  | After adding 42 |
| :--------- | :-------: | --------------: |
| **Mean**   | 49.457050 |       49.451012 |
| **Median** | 49.000000 |       49.000000 |
| **StdDev** | 28.810315 |       28.799421 |
| **Mode**   | 77.000000 |       77.000000 |

### data-4321.json

| Tile       |  Default  | After adding 42 |
| :--------- | :-------: | --------------: |
| **Mean**   | 50.346679 |       50.344748 |
| **Median** | 51.000000 |       51.000000 |
| **StdDev** | 29.191159 |       29.188057 |
| **Mode**   | 82.000000 |       82.000000 |

## Tech Stack

### Client Stack

<ul>
  <li>ReactJS (Javascript)</li>
  <li>React Hooks</li>
  <li>Custom React Hooks</li>
  <li>Styled Components</li>
  <li>Framer Motion</li>
  <li>Unit Tests
    <ul>
      <li>Jest</li>
      <li>Jest (styled components)</li>
      <li>React Testing Library</li>
    </ul>
  </li>
  <li>End to End Tests
    <ul>
      <li>Cypress</li>
    </ul>
  </li>
</ul>

### Server Stack (For Rest API Calls)

<ul>
  <li>Node</li>
  <li>Express</li>
  <li>Javascript</li>
  <li>Unit Tests
    <ul>
      <li>Jasmine</li>
    </ul>
  </li>
</ul>

## Scripts

### `npm run dev`

Runs both the server and the client concurrently in development mode.<br />
Server is listening on [http://localhost:3001](http://localhost:3001) (You will not be able to pull this up in a web browser directly)<br/>
React app runs on [http://localhost:3000](http://localhost:3000)

### `npm run server`

Open [http://localhost:3001](http://localhost:3001) in a web browser to test your Rest API. The root path (http://localhost:3001/) will show you some brief documentation and version information.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run cypress`

Launches the Cypress test runner in the interactive mode.<br />

### `npm run cypress:e2e`

Ensure that the React app is runng on [http://localhost:3000](http://localhost:3000) before running this command as Cypress will attempt to access it to do its thing. This command will run the test I created this and output to the terminal.<br/>
