import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

import Link from "next/link";
import { Typography } from "@mui/material";
export default function NavbarPC({selected,setselected}) {
	return (
		<div>
		<div className="customContainer">
				<Row style={{paddingBottom:'20px'}}>
					<Col xl={6} lg={6} md={6}
					sm={6}
					xs={6}>
						<div className="pdinT-20">
							<img
								src="/images/logo.svg"
								alt="Logo"
							className="tlogo"
							/>
						</div>
					</Col>
					<Col
						xl={6}
						lg={6}
						md={6}
						sm={6}
						xs={6}
						style={{ display: "flex", justifyContent: "flex-end" }}
					>
						<div className="ttext">
						<h3>Climate Atlas <br/> Resources BETA 1.1</h3>
						</div>
					</Col>
				</Row>
				<Row style={{width:'100%',border:"1px solid",color:'#A0A0A0',opacity:'0.20'}}>

				</Row>
				<div style={{paddingTop:'20px',paddingBottom:'20px'}}></div>
				<div style={{paddingBottom:'20px',display:'flex'}}>
					<div className={`pcard ${selected === "impact"?"sel":""}`} onClick={()=> setselected("impact")}>
						<p className="ps">Impact Stories</p>
					</div>
					<div className={`pcard ${ selected === "story"?"sel":""}`} onClick={()=>setselected("story")}>
						<p className="ps">Resilience Stories</p>
					</div>
					<div className={`pcard ${selected === "org"?"sel":""}`}  onClick={()=>setselected("org")}>
						<p className="ps">Organizations</p>
					</div>
				</div>
				</div>
		</div>
	);
}
