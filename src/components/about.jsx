import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { 
          id: "Angular_skill", 
          content: "Angular",
          porcentage: "95%", 
          value: "95" 
        },
        {
          id: "Vue_skill",
          content: "Vue",
          porcentage: "95%",
          value: "95"
        },
        {
          id: "React_skill",
          content: "React",
          porcentage: "95%",
          value: "95"
        },
        {
          id: "React_skill",
          content: "Next",
          porcentage: "95%",
          value: "95"
        },
        {
          id: "React-Native_skill",
          content: "React-Native",
          porcentage: "95%",
          value: "95"
        },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "95%",
          value: "95"
        },
        {
          id: "TypeScript_skill",
          content: "TypeScript",
          porcentage: "95%",
          value: "95"
        },
        {
          id: "Java",
          content: "Java",
          porcentage: "90%",
          value: "90"
        },
        { 
          id: "HTML5_skill", 
          content: "HTML5", 
          porcentage: "90%", 
          value: "90" 
        },
        {
          id: "Materialize_skill",
          content: "Materialize",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "Bootstrap_skill",
          content: "Bootstrap",
          porcentage: "90%",
          value: "90"
        },
        { 
          id: "CSS_skill", 
          content: "CSS", 
          porcentage: "90%", 
          value: "90" 
        },
        {
          id: "Node_skill",
          content: "Node",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "C#_skill",
          content: "C#",
          porcentage: "50%",
          value: "50"
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "Photoshop_skill",
          content: "Photoshop",
          porcentage: "90%",
          value: "90"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Ingeniero en Informática apasionado por el desarrollo de software, con más de 6 años de experiencia en el desarrollo de aplicaciones web y móviles para sectores bancario, financiero y empresarial. Egresado de la Universidad Centroccidental Lisandro Alvarado (UCLA), especializado en soluciones escalables, integración de sistemas y optimización de rendimiento."
        },
        {
          id: "second-p-about",
          content:
            "Experto en desarrollo Full Stack con dominio de tecnologías como Angular, React, Vue.js, Next.js, React Native, TypeScript, Tailwind CSS, Material-UI en frontend, y Node.js, Express.js, Java, Spring Boot, Laravel, .NET, C# en backend. Amplia experiencia en bases de datos (PostgreSQL, MySQL, MariaDB, SQL Server, MongoDB) y DevOps (Docker, Git, CI/CD, Vercel), con especialización en frameworks MEAN, MERN y MEVN."
        },
        {
          id: "third-p-about",
          content:
            "Desarrollador innovador con experiencia en sistemas bancarios y financieros, implementación de arquitecturas escalables, liderazgo técnico en equipos ágiles y optimización de rendimiento. Destacado por su capacidad de resolución de problemas, adaptabilidad tecnológica y comunicación efectiva con equipos multidisciplinarios."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route" >
        <div className="container" style={{ borderRadius: '15px' }}>
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">SOBRE MI</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
