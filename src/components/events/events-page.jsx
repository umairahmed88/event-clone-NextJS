import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllEvents = ({ data }) => {
	return (
		<div className='events_page'>
			{data?.map((ev) => (
				<Link key={ev.id} href={`/events/${ev.id}`} legacyBehavior>
					<a className='card'>
						<Image src={ev.image} alt={ev.title} width={400} height={500} />
						<h2>{ev.title}</h2>
					</a>
				</Link>
			))}
		</div>
	);
};

export default AllEvents;
