import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const Icon = () => {
	return (
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
		/>
	);
};

const benefitOne = {
	title: "A destination des professionnels de la santé au travail",
	desc: "Conseils et formations pour mieux maitriser les RPS à destination des entreprises (dirigeants, managers, RH & salariés) et professionnels de la santé au travail.",
	image: benefitOneImg,
	bullets: [
		{
			title: "Améliorer la formation initiale et continue",
			desc: "notamment sur la manière d'interagir avec les employeurs et les salariés ;",
			icon: <Icon />,
		},
		{
			title: "Faire évoluer les postures",
			desc: "être conseiller plutôt que « préconisateur du haut de sa science » dans un rapport de force implicite (se mettre à côté et non pas en face)",
			icon: <Icon />,
		},
		{
			title: "Promouvoir l'expérimentation",
			desc: "ainsi que l'évaluation des pratiques",
			icon: <Icon />,
		},
	],
};

const benefitTwo = {
	title: "A destination des dirigeants d'entreprise",
	desc: "Diffuser des exemples d'interventions et d'améliorations de pratiques en entreprises",
	image: benefitTwoImg,
	bullets: [
		{
			title: "Se conformer à la lettre du code du travail ne suffit pas",
			desc: "pour s'assurer de la bonne santé au travail des salariés… et pouvoir compter sur eux durablement",
			icon: <Icon />,
		},
		{
			title: "Faire porter sur les salariés la responsabilité de la prévention des risques et de la prise en charge de leurs conséquences",
			desc: "ne suffit pas (ex. accès à un nombre de consultation de psychologues)",
			icon: <Icon />,
		},
		{
			title: "Adapter le management et l'organisation et former le personnel sur les modalités d'interactions",
			desc: "pour les rendre moins délétères est plus coût-efficace pour contrôler les RPS, améliorer la santé des salariés, limiter l'absentéisme ou le présentéisme, et fluidifier les relations interpersonnelles.",
			icon: <Icon />,
		},
	],
};

export { benefitOne, benefitTwo };
