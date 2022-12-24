import React from "react";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

const MainLayout = ({ children }) => {
	return (
		<div className='home_body'>
			<Header />
			<main> {children}</main>

			<Footer />
		</div>
	);
};

export default MainLayout;
