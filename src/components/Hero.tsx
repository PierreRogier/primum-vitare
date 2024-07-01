import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero2.png";
import Link from "next/link";

export const Hero = () => {
	return (
		<>
			<Container className="flex flex-wrap">
				<div className="flex items-center w-full lg:w-1/2">
					<div className="max-w-2xl mb-8">
						<h1 className="text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight italic">
							Primum vitare !
						</h1>
						<p className="py-5 text-xl leading-normal lg:text-xl xl:text-2xl">
							Réussissez en prenant soin de vous et des vôtres… en prévenant les
							risques psychosociaux et ses conséquences grâce à nos compétences en{" "}
							<strong>prévention des risques</strong> professionnels et en <strong>accompagnement individuel</strong> puisées
							aux avancées les plus récentes des sciences, associées à une solide
							expérience managériale.
						</p>
						<div className="mt-6 flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
							<Link
								href={"/contact"}
								className="px-8 py-4 text-lg font-medium text-center text-white transition-all duration-500 bg-gradient-to-tl from-green-600 via-green-400 to-green-600 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-md"
							>
								Nous contacter
							</Link>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center w-full lg:w-1/2">
					<div className="">
						<Image
							src={heroImg}
							// width="616"
							height="700"
							className={"object-cover w-auto"}
							alt="Hero Illustration"
							loading="eager"
							placeholder="blur"
						/>
					</div>
				</div>
			</Container>
		</>
	);
};
