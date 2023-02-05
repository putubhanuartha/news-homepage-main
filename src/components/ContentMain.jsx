import React from "react";
import "./ContentMain.css";
import { Col, Row, Container } from "react-bootstrap";
import imageBanner from "../assets/images/image-web-3-desktop.jpg";
export default function ContentMain() {
	return (
		<div>
			<Container fluid="lg">
				<Row className="justify-content-between">
					<Col
						className="overflow-hidden"
						md={8}
						sm={8}
						xs={12}
					>
						<div className="image-banner">
							<img
								src={imageBanner}
								alt=""
							/>
						</div>
						<div className="text row pt-4 justify-content-between">
							<div className="big-text col-xxl-5 col-md-6 col-12 pe-xxl-5 pe-3 ">
								<h2 className="h2">The Bright Future of Web 3.0</h2>
							</div>
							<div className="paragraph-container col-md-6 col-12 pe-xxl-5 pe-3 ">
								<p>
									We dive into the next evolution of the web that claims to put
									the power of the platforms back into the hands of the people.
									But is it really fulfilling it's promise?
								</p>
								<button className="btn-readmore d-block">READ MORE</button>
							</div>
						</div>
					</Col>
					<Col
						className="px-2 m-0 mt-4 mt-sm-0"
						xs={12}
						sm={4}
						md={4}
					>
						<div className="side-news pt-4 px-3 pb-2">
							<div className="title-side-news">
								<h2>New</h2>
							</div>
							{[
								{
									title: "Hydrogen VS Electric Cars",
									text: "Will hydrogen fueled cars ever catch up to EVs",
								},
								{
									title: "The Downsides of AI Artistry",
									text: "What are the possible adverse effects of on-demand-ai image generation",
								},
								{
									title: "Is VC Funding Drying Up?",
									text: "Private funding by VC firms is down 50% YOY. We take a look at what that means",
								},
							].map((el, index, arr) => {
								return (
									<div
										key={index}
										className="single-side-news mt-4"
									>
										<a href="">
											<h5>{el.title}</h5>
										</a>
										<p>{el.text}</p>
										<div
											className={
												!(index === arr.length - 1) && "underline mt-4"
											}
										></div>
									</div>
								);
							})}
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
