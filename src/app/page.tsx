import { Benefits } from "@/components/Benefits";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Video } from "@/components/Video";
import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
	return (
		<Container>
			<Hero />
			<SectionTitle
				preTitle="Primum Vitare"
				title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, laboriosam."
			>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt aliquam ad, deserunt
				est fugit, vitae quasi repudiandae aut voluptatibus repellendus veritatis,
				voluptatem corporis dignissimos ut ea? Ipsum reprehenderit velit quibusdam? Sequi
				eaque soluta eos neque suscipit aspernatur excepturi vel, delectus dignissimos.
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
			<Video videoId="jE3FLPqGlmA" />
		</Container>
	);
}
