import "./Navbar.css";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo.svg";
import humBtn from "../assets/images/icon-menu.svg";
import { GrClose } from "react-icons/gr";
export default function Navbar() {
	const [isSidebarActive, setIsSidebarActive] = useState(false);
	useEffect(() => {
		const resize = window.addEventListener("resize", (e) => {
			if (window.innerWidth > 768) {
				setIsSidebarActive(false);
			}
		});
		return () => {
			removeEventListener("resize", resize);
		};
	});
	return (
		<nav>
			<Container
				fluid="lg"
				className="py-3"
			>
				<Row className="justify-content-center align-items-center">
					<Col className="">
						<div className="nav-logo">
							<img
								src={logo}
								alt=""
							/>
						</div>
					</Col>
					<Col className="">
						<div
							className={`nav-link-container bg-light mt-lg-2 mt-0 ${
								isSidebarActive && "active"
							}`}
						>
							<div
								onClick={() => {
									setIsSidebarActive(false);
								}}
								className="close-btn"
							>
								<GrClose
									className="ms-auto d-block mt-4 me-4 d-lg-none"
									style={{ width: "40px", height: "40px" }}
								/>
							</div>
							<ul className="ms-auto p-0 ">
								{["Home", "New", "Popular", "Trending", "Categories"].map(
									(el, index) => {
										return (
											<li
												key={index}
												className="px-4"
											>
												<a href="">{el}</a>
											</li>
										);
									}
								)}
							</ul>
						</div>
						<div
							onClick={() => {
								setIsSidebarActive(true);
							}}
							className="hum-btn d-block d-lg-none"
						>
							<img
								className="ms-auto d-block"
								src={humBtn}
								alt=""
							/>
						</div>
					</Col>
				</Row>
			</Container>
			<div className={`overlay ${!isSidebarActive && "d-none"}`}></div>
		</nav>
	);
}
