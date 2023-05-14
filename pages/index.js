import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import dummy from "../public/images/dummy.png";
import Card from "../Components/Card";
import sanity from "../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";
import Layout from "../Components/Layout";
import { useState } from "react";
import { useEffect } from "react";
import NavbarPC from "../Components/NavbarPc";
import Topbar from "../Components/Topbar";
import Footer from '../Components/Footer'
const workQuery = `*[_type=="product"]`;

const Start = ({ works }) => {
  const [work, setwork] = useState([]);
  const [selected, setselected] = useState("impact");
  useEffect(() => {
    let newArray = works.filter(function (el) {
      return el.type == selected;
    });
    setwork(newArray);
  }, [selected]);

  return (
    <>
      <Topbar />
      <NavbarPC selected={selected} setselected={setselected} />
      <div>
        <Head>
          <title>Stories Of Change - Resources</title>
          <meta name="description" content="Putting marginalized and youth voices at the forefront of climate movement." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main style={{ backgroundColor: "#F0F0F0" }}>
          <div
            className="customContainer pdinT-80M"
            style={{ minHeight: "600px" }}
          >
            <Row>
              {work.map((e) => {
                return <Card data={e} key={e._id} im={e?.cardImage} />;
              })}
            </Row>
          </div>
        </main>
      </div>
	  <Footer/>
    </>
  );
};
export const getStaticProps = async () => {
  const works = await sanity.fetch(workQuery);

  return {
    props: { works },
  };
};
export default Start;
