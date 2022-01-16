import React from "react";

function Team(props) {
  const { t } = props;

  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>{t("team.meetTheTeam")}</h2>
          <p>{t("team.description")}</p>
        </div>
        <div id='row'>
          {t("services.contents", { returnObjects: true })
            ? t("team.team", { returnObjects: true }).map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                  <div className='thumbnail'>
                    {" "}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
}

export default Team;
