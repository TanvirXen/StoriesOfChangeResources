import { Container, Row, Col } from "react-bootstrap";
import dummy from "../public/images/dummy.png";
import Image from "next/image";
import imageUrlFor from "../utils/imageUrlFor";
import Router from "next/router";
import BlockContent from '@sanity/block-content-to-react'
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function Card({ data, im }) {
  const [ndata, setndata] = useState({});
  async function fetchURl() {
    if (data.type == "impact" || data.type == "story") {
      const urlcheck = await fetch(
        `https://jsonlink.io/api/extract?url=${data.mtitle}`
      );
      const newData = await urlcheck.json();
      setndata(newData);
    }
  }
  useEffect(() => {
    fetchURl();
  }, []);

  return (
    <>
      {data?.type == "impact" || data?.type == "story" ? (
        <Col xl={4} lg={4} md={6} sm={12} xs={12} style={{cursor:'pointer'}} onClick={() => window.open(data.mtitle)}>
          <div className="card1 ">
            <div>
              {" "}
              <img
                src={ndata?.images ? ndata?.images[0] : ""}
                className="cardimg"
                alt="Card Image"
              />
            </div>
            <div>
              <h2 className="pt-2">{ndata.title}</h2>
              <p className="body text">{ndata.description}</p>
            </div>
          </div>
        </Col>
      ) : (
        <Col xl={4} lg={4} md={6} sm={12} xs={12} >
          <div className="card1 ">
            <div>
              {data.cardImage && (
                <img
                  src={imageUrlFor(data.cardImage)}
                  className="cardimg"
                  alt="Card Image"
                />
              )}
            </div>
            <div>
              <h2 className="pt-2">{ndata.title}</h2>
              <p className="body ">    <BlockContent blocks={data.desc}  /></p>
            </div>
            <div style={{paddingTop:'8px'}}>
            <Accordion>
        <AccordionSummary
        onClick={()=>window.open(data.wlink)}
        >
          <Typography>Website</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Funding Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <BlockContent blocks={data.fdesc}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Initiatives</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <BlockContent blocks={data.idesc}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
          </div>
        </Col>
      )}
    </>
  );
}
