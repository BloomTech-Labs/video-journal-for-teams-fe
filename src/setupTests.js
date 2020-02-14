import "@testing-library/jest-dom/extend-expect";

//Bring in enzyme & adapter to work with React
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

//Setup adapter
configure({ adapter: new Adapter() });