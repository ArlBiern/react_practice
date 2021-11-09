import React from "react";
// import Accordion from "./Accordion";
//import Search from "./Search";
//import Dropdown from "./Dropdown";
import Translate from "./Translate";

/* const items = [
  {
    title: "What is react",
    content: "React is a front edn js library",
  },
  {
    title: "Why use React",
    content: "React is one of the favorite JS library",
  },
  {
    title: "What do you use React",
    content: "You use Ract by creating components",
  },
]; */

/* const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
]; */

const App = () => {
  //const [selected, setSelected] = useState(options[0]);
  //const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null} */}
      <Translate />
    </div>
  );
};

export default App;
