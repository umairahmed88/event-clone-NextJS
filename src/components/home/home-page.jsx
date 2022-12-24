import Image from "next/image";
import Link from "next/link";

export const HomePage = ({ data }) => (
	<div className='home_body'>
		{data?.map((ev) => (
			<Link key={ev.id} href={`/events/${ev.id}`} legacyBehavior>
				<a className='card' href={`/events/${ev.id}`}>
					<div className='image'>
						<Image src={ev.image} alt={ev.title} width={500} height={400} />
					</div>
					<div className='content'>
						<h2>{ev.title}</h2>
						<p>{ev.description}</p>
					</div>
				</a>
			</Link>
		))}
	</div>
);
