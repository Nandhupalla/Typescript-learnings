import { useState } from "react";

function ListGroup() {
  let items = [
    "mumbai",
    "delhi",
    "hyderabad",
    "thiruvannamalai",
    "bengaluru",
    "chennai",
    "pune",
    "kochi",
  ];
  
  
  let [selectedIndex, setSelectedIndex] = useState(3);
  //event handler
  

  return (
    <>
      <h1> list items </h1>
        {items.length === 0 && <p>no items listed </p>}
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={selectedIndex===index ? 'list-group-item active' :'list-group-item'}
              key={item}
              onClick={()=>setSelectedIndex(index)}
            >
              {item}
            </li>
          ))}
        </ul>
    
    </>
  );
}
export default ListGroup;
