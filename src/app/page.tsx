import { Benefits } from "@/components/Benefits";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
	return (
		<Container>
			<Hero />
			<SectionTitle
				preTitle="D'abord prévenir !"
				title={
					<p>
						Prendre soin des vôtres c’est aussi prendre soin de vous, <br />
						Prendre soin de vous, c’est aussi prendre soin des vôtres, <br />
						Réussissez en prenant soin de vous et des vôtres…
					</p>
				}
			>
				Trois salariés sur dix indiquent avoir eu un arrêt maladie en 2023, dans un cas sur
				cinq pour &quot;récupérer psychologiquement d’un travail trop intense&quot;, dans
				19% pour un &quot;motif psychologique&quot; et 17% &quot;pour démotivation&quot;.
			</SectionTitle>
			<Benefits data={benefitOne} />
			<Benefits imgPos="right" data={benefitTwo} />
			<SectionTitle
				preTitle="Primum Vitare"
				title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, laboriosam."
			>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt aliquam ad, deserunt
				est fugit, vitae quasi repudiandae aut voluptatibus repellendus veritatis,
				voluptatem corporis dignissimos ut ea? Ipsum reprehenderit velit quibusdam? Sequi
				eaque soluta eos neque suscipit aspernatur excepturi vel, delectus dignissimos.
			</SectionTitle>
		</Container>
	);
}
