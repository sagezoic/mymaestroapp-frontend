import { useState } from "react";
import "../../css/filter.css";

const Filter = ({
  setFilteredJobs,
  handleJobFilter,
  handleExperienceFilter,
  searchEvent,
  experience
}) => {
  const [checkedState, setCheckedState] = useState(
    new Array(experience.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    handleExperienceFilter(updatedCheckedState);
  };
  return (
    <>
      <div className="filter-page">
        <div className="search-box">
          <div className="search">
            <h3>Search Services</h3>
            <div className="job-search">
              <input
                type="text"
                className="search-term"
                placeholder="Search Here"
                onChange={searchEvent}
              />
            </div>
          </div>
          <div className="filter">
            <div className="job-category">
              <h4>Categories</h4>
              <ul>
                <li onClick={handleJobFilter}>Software Engineers</li>
                <li onClick={handleJobFilter}>Designers</li>
                <li onClick={handleJobFilter}>Mentors</li>
                <li onClick={handleJobFilter}>Creators</li>
                <li onClick={handleJobFilter}>Mental Health Experts</li>
              </ul>
            </div>

            <div className="job-category">
              <h4>Ratings</h4>
              <ul className="checkbox">
                <li>
                  <input
                    name="0-1"
                    type="checkbox"
                    checked={checkedState[0]}
                    onChange={() => handleOnChange(0)}
                  />
                  0-1 star
                </li>
                <li>
                  <input
                    name="2-3"
                    type="checkbox"
                    checked={checkedState[1]}
                    onChange={() => handleOnChange(1)}
                  />
                  2-3 star
                </li>
                <li>
                  <input
                    name="4-5"
                    type="checkbox"
                    checked={checkedState[2]}
                    onChange={() => handleOnChange(2)}
                  />
                  4+ star
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
