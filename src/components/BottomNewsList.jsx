import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./BottomNewsList.css";
import retroPcImg from "../assets/images/image-retro-pcs.jpg";
import topLaptopsImg from "../assets/images/image-top-laptops.jpg";
import gamingGrowthImg from "../assets/images/image-gaming-growth.jpg";
export default function BottomNewsList() {
	return (
		<div>
			<Container
				fluid="lg"
				className="mt-3"
			>
				<Row>
					<Col
						xs={12}
						md={4}
						className="column"
					>
						<figure>
							<img
								src={retroPcImg}
								alt="retro pc"
								className="img-thumbnail"
							/>
						</figure>
						<div>
							<h3>01</h3>
							<h4 className="fw-bold">Reviving Retro PCs</h4>
							<p>What happens when old PCs are given modern upgrades?</p>
						</div>
					</Col>
					<Col
						xs={12}
						md={4}
						className="column"
					>
						<figure>
							<img
								src={topLaptopsImg}
								alt="Top 10 Laptops"
								className="img-thumbnail"
							/>
						</figure>
						<div>
							<h3>02</h3>
							<h4 className="fw-bold">Top 10 Laptops of 2022</h4>
							<p>Our best picks for various needs and budgets</p>
						</div>
					</Col>
					<Col
						className="column"
						xs={12}
						md={4}
					>
						<figure>
							<img
								src={gamingGrowthImg}
								alt="The growth of gaming"
								className="img-thumbnail"
							/>
						</figure>
						<div>
							<h3>03</h3>
							<h4 className="fw-bold">The Growth of Gaming</h4>
							<p>How the pandemic has sparked fresh opportunites</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
