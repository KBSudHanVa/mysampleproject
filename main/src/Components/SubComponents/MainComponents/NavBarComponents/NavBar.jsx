// NavBar.jsx
import React, { useState } from 'react';
import './NavBar.css'; // Import CSS file

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCollapsible = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="sidebar">
      {[1, 2].map(index => (
        <div key={index}>
          <button className="collapsible" onClick={() => toggleCollapsible(index)}>Open Section {index}</button>
          <div className={activeIndex === index ? "content active" : "content"}>
            {/* Section 1 */}
            {index === 1 && (
              <>
                <button>Home</button>
                <button>Dashboard</button>
              </>
            )}

            {/* Section 2 */}
            {index === 2 && (
              <>
                <button>Sales</button>
                <button>Reports</button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NavBar;
