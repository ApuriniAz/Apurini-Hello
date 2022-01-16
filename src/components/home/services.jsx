import React from "react";

function Services(props) {
  const { t } = props;

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{t("services.ourServices")}</h2>
          <p>{t("services.ourServiceText")}</p>
        </div>
        <div className="row">
          {t("services.contents", { returnObjects: true })
            ? t("services.contents", { returnObjects: true }).map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
}

export default Services;
