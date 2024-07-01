import Image from "next/image";
import benefitOneImg from "../../../public/img/profile.jpg";

export default function About() {
	return (
		<div className="mx-auto w-full lg:max-w-screen-xl">
			<section className="px-2">
				<h1 className="text-4xl font-bold lg:text-4xl xl:text-6xl mb-8">
					Qui sommes nous ?
				</h1>
				<div className="flex flex-col lg:flex-row justify-between gap-24">
					<div className="w-full">
						<p className="mb-2">
							J'ai toujours voulu devenir médecin, par altruisme, pour le bien du plus
							grand nombre. Initialement il s'agissait de devenir « chirurgien en
							Afrique » à l'image d'un Albert Schweitzer. Je suis pour cela devenu
							médecin militaire. Le hasard des rencontres a fait de moi un médecin à
							la fois chercheur (&gt; 300 publications scientifiques) et engagé pour
							la santé des collectivités, sur plusieurs continents… jusqu'à œuvrer
							pour « arrêter de gaspiller les ressources humaines » dans mon pays.
						</p>
						<p className="mb-2">
							Médecin généraliste et tropicaliste, je me suis spécialisé en
							épidémiologie et santé-publique en soutenant une thèse de sciences. Je
							me suis rendu compte au travers de mes observations et recherches que
							les comportements étaient déterminants pour la santé, celle de chaque
							personne et de celles qui en dépendent (famille, employés, concitoyens).
						</p>
						<p className="mb-2">
							Pendant 30 ans, de 1989 à 2019, j'ai assuré des responsabilités
							managériales et de direction, celle d'équipes, d'unités puis département
							de recherche jusqu'à celle d'un établissement privé, à l'international,
							comme{" "}
							<strong>
								directeur général et directeur scientifique de l'institut Pasteur de
								Madagascar
							</strong>{" "}
							(2011-2015 ; 8 M€ de CA annuel, &gt; 500 collaborateurs, 5
							nationalités). J'ai ensuite fait partie du top 6 de la{" "}
							<strong>Direction centrale du service de santé des armées</strong>{" "}
							(2015-2019), comme <strong>Médecin général</strong>, en charge de
							l'expertise et de la
							<strong>stratégie de santé</strong> de défense. J'ai ainsi acquis{" "}
							<strong>
								une longue et solide expérience managériale et de dirigeant dans des
								cadres et contextes très différents
							</strong>
							. Le <strong>Centre des jeunes dirigeants</strong> (CJD) m'a permis
							depuis 2014 d'améliorer ma posture et mes pratiques, notamment pendant
							les trois ans du parcours Copernic 2 de dirigeant-entrepreneur.
						</p>
						<p className="mb-2">
							Transmettre et permettre à chacun de tracer sa propre voie est
							fondamental. Tout au long de ma carrière j'ai été{" "}
							<strong>
								formateur pour adultes dans le champ de la santé et de la prévention
							</strong>
							, à la fois sur le plan professionnel et académique. Je suis{" "}
							<strong>Professeur agrégé du Val de Grâce</strong>.
						</p>
						<p className="mb-2">
							Depuis 1990, j'ai constamment eu une{" "}
							<strong>
								activité de conseil en santé de dirigeants civils et militaires,
								d'organismes publics ou d'entreprises privées, d'accompagnement
								individuel ou collectif
							</strong>
							. Parce que l'espérance de vie en bonne santé des adultes en âge de
							travailler en France est en retard par rapport à beaucoup d'autres pays
							de l'OCDE, et parce que la médecine du travail avait mauvaise
							réputation, j'ai décidé en 2019 de m'investir à nouveau pour une
							meilleure santé au travail, de me former et de poursuivre mes recherches
							pour améliorer les pratiques de prévention. Retour à l'Université pour
							devenir <strong>Médecin du travail</strong>, formation à l'
							<strong>Entretien motivationnel</strong> pour être plus efficace en face
							à face ou en groupe,{" "}
							<strong>Approche Neurocognitive et Comportementale</strong> (Accrédité{" "}
							<strong>Praticien en ANC</strong>), dans le courant des thérapies
							cognitives comportementales (TCC), enrichie de l'apport des sciences du
							cerveau et du comportement. Il s'agissait pour moi de rassembler et
							consolider des compétences issues de multiples disciplines scientifiques
							pour les appliquer concrètement en santé au travail, dans la perspective
							d'un{" "}
							<strong>développement durable des personnes et des entreprises</strong>.
						</p>
						<p className="mb-2">
							Actuellement, je pratique comme <strong>médecin du travail</strong> de
							l'<strong>ACMS</strong>, le plus grand{" "}
							<strong>service de prévention et de santé au travail</strong> de France,
							personnellement en charge de milliers de salariés et de plusieurs
							centaines d'entreprises aux secteurs d'activités très divers. Ma mission
							est, par mes conseils, de contribuer à ce que le travail n'altère pas la
							santé et que l'état de santé n'empêche pas de travailler. Je trouve à
							l'ACMS un cadre favorable à la pratique de la médecine du travail, aux
							échanges avec mes pairs et un{" "}
							<strong>
								terrain d'observation, de recherche et d'expérimentation
							</strong>{" "}
							pour tenter d'
							<strong>améliorer les pratiques en santé au travail</strong>.
						</p>
						<p className="mb-2">
							En marge de cette activité, j'ai développé une{" "}
							<strong>
								activité indépendante de conseil pour les salariés, les dirigeants
								et les entreprises
							</strong>{" "}
							qui ne dépendent pas de l'ACMS (pas de conflit d'intérêt !).
							J'interviens soit au nom de l'entité que j'ai créée en 2019{" "}
							<strong>Primum vitare ! D'abord prévenir !</strong> soit dans le cadre
							de cabinets de conseil ou de startup qui font appel à moi.
						</p>
					</div>
					<div className="flex flex-col items-center w-full lg:w-max">
						<Image
							src={benefitOneImg}
							width={521}
							alt="Christophe Rogier - Fondateur de Primum vitare !"
							className={"object-cover h-auto rounded-lg"}
							placeholder="blur"
						/>
						<p className="text-center">
							Christophe Rogier - Fondateur de Primum vitare!
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
