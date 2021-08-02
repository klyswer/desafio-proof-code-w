import ReactDOM from "react-dom";
import Index from '../src/index';

jest.mock('react-dom');
Index;

test('Render root de la app', () => {
  expect(ReactDOM.render).toBeCalled();
});
