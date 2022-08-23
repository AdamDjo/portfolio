import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

import SectionTitle from '../components/SectionTitle.js';
import ProjectItem from '../components/ProjectItem.js';
import ProjectInfo from '../assets/data/projects';

const ProjectsStyles = styled.div`
  padding: 10rem;
  .projects_allitems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
    overflow: hidden;
  }
  .projects__searchBar .searchIcon path {
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar .projects__searchBar form,
    .projects__searchBar input {
      width: 100;
    }
  }
`;
export default function Projects() {
  const [searchText, SetSearchText] = useState('');
  const [ProjectData, SetProjectData] = useState(ProjectInfo);
  useEffect(() => {
    if (searchText === '') return;
    SetProjectData(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  function handleChange(e) {
    e.preventDefault();
    SetSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      SetProjectData(ProjectInfo);
    }
  }
  return (
    <ProjectsStyles>
      <div className="container">
        <SectionTitle heading="Projects" subheading="some of my recent works" />
        <div className="projects__searchBar">
          <form>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="ProjectName"
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="projects_allitems">
          {ProjectData.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </ProjectsStyles>
  );
}
