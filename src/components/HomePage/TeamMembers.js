import React, { useEffect, useState } from 'react';

const TeamMembers = () => {

  const [teamtext, setTeamText] = useState([]);

  const [teamitems, setsetTeammember] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/teamstext`)
      .then((res) => res.json())
      .then((info) => setTeamText(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/teamitems`)
      .then((res) => res.json())
      .then((info) => setsetTeammember(info));
  }, []);



  return (
   

    <>

    
   <section className="mentor_section section_space_lg">
  <div className="container">
    <div className="row">
      {
        teamitems.map(m=><div className="col col-lg-4 col-md-6">
        <div className="mentor_item">
          <div className="mentor_image">
            <a href="/">
              <img src={m.teamMemberImg} alt="Collab  Online Learning Platform" />
            </a>
          </div>
          <div className="mentor_content">
            <h3 className="mentor_name">
              <a href="/">{m.teamMemberName}</a>
            </h3>
            <p className="mentor_designation">{m.teamMemberTitle}</p>
           
          </div>
        </div>
      </div> )
      }
      
     
    </div>
  </div>
</section>

    
    </>
  );
};

export default TeamMembers;