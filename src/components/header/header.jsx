import Image from "next/image";
import Link from "next/link";

export const Header = () => (
	<header>
		<div>
			<div className='topNav'>
				<Image src={"/image/logo.png"} alt='logo' width={50} height={50} />
				<nav>
					<ul>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							<Link href='/events' legacyBehavior>
								<a>Events</a>
							</Link>
						</li>
						<li>
							<Link href='/about-us'>About</Link>
						</li>
					</ul>
				</nav>
			</div>
			<p className='title'>
				This world is very beautiful <br /> come and enjoy with us
			</p>
		</div>
	</header>
);
