import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setCategory, category, name, auth }) => {
  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="sidebar">
      <div className="header">
        <h1>{name}</h1>
      </div>
      <div className="categories">
        <button
          className={`category ${category === 'All' ? 'selected' : ''}`}
          value="All"
          onClick={categoryHandler}
        >
          <i className="fa fa-list-ul"></i> All
        </button>
        <button
          className={`category ${category === 'Completed' ? 'selected' : ''}`}
          value="Completed"
          onClick={categoryHandler}
        >
          <i className="fa fa-check"></i> Completed
        </button>
        <button
          className={`category ${category === 'Uncompleted' ? 'selected' : ''}`}
          value="Uncompleted"
          onClick={categoryHandler}
        >
          <i className="fa fa-times"></i> Uncompleted
        </button>
      </div>
      <hr className="divider" />
    </div>
  );
};

export default Sidebar;
