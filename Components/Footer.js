import { Container, Row, Col } from "react-bootstrap";
export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        minHeight: "550px",
        paddingTop: "80px",
      }}
    >
      <div className="customContainer">
        <Row>
          <Col lg={6} style={{ marginTop: "80px" }} xs={12}>
            <p className="title1l" style={{ color: "#ffffff" }}>
              Amplifying voices of resilience
            </p>
            <div
              className="SbuttonBlack"
              style={{ marginTop: "30px", width: "222px", height: "52px",cursor:"pointer" }}
              onClick={()=>window.open("https://storiesofchange.co/")}
            >
              <p className="link2 " style={{ color: "#ffffff" }}>
                Learn More
              </p>
            </div>
          </Col>
          <Col lg={6} className="foot" xs={12}>
            <div style={{ padding: "0px 80px 0px 0px" }}>
              <p className="overline" style={{ color: "#ffffff" }}>
                Social
              </p>
              <p className="link1" style={{ color: "#fff",cursor:"pointer" }} onClick={()=>window.open("https://www.facebook.com/ourstoriesofchange","_blank")}>
                Facebook
              </p>
              <p className="link1" style={{ color: "#fff",cursor:"pointer" }} onClick={()=>window.open("https://www.instagram.com/change_stories/","_blank")}>
                Instagram
              </p>
              <p className="link1" style={{ color: "#fff",cursor:"pointer" }} onClick={()=>window.open("https://twitter.com/change_stories","_blank")}>
                Twitter
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="bar"></div>
        </Row>
        <Row>
          <Col lg={6}>
            <p className="link1 padding1" style={{ color: "#fff" }}>
              © Copyright 2023 - Stories Of Change{" "}
            </p>
          </Col>
          <Col lg={6} style={{ display: "flex", justifyContent: "flex-end" }}>
            <p className="link1 padding1" style={{ color: "#fff" }}>
             Powered By
            </p>
            <img src='/images/holoLogo.svg' style={{cursor:'pointer'}} onClick={()=>window.open("https://theholostudio.com/")} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
