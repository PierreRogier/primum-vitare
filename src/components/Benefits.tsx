import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import Link from "next/link";

interface BenefitsProps {
	imgPos?: "left" | "right";
	data: {
		imgPos?: "left" | "right";
		title: string;
		desc: string;
		image: any;
		bullets: {
			title: string;
			desc: string;
			icon: React.ReactNode;
		}[];
	};
}
export const Benefits = (props: Readonly<BenefitsProps>) => {
	const { data } = props;
	return (
		<Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
			<div
				className={`flex items-center justify-center w-full lg:w-1/2 ${
					props.imgPos === "right" ? "lg:order-1" : ""
				}`}
			>
				<div>
					<Image
						src={data.image}
						width={521}
						// height={521}
						alt="Benefits"
						className={"object-cover h-auto"}
						placeholder="blur"
						blurDataURL={data.image.src}
					/>
				</div>
			</div>

			<div
				className={`flex flex-wrap items-center w-full lg:w-1/2 ${
					data.imgPos === "right" ? "lg:justify-end" : ""
				}`}
			>
				<div>
					<div className="flex flex-col w-full mt-4">
						<h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-4xl">
							{data.title}
						</h3>

						<p className="max-w-2xl py-4 text-lg leading-normal lg:text-xl xl:text-xl">
							{data.desc}
						</p>
					</div>

					<div className="w-full mt-5">
						{data.bullets.map((item, index) => (
							<Benefit key={index} title={item.title} icon={item.icon}>
								{item.desc}
							</Benefit>
						))}
					</div>
					<div className="flex justify-center mt-6 space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
						<Link
							href={"/entreprise"}
							className="px-8 py-3 text-lg font-medium text-center text-white transition-all duration-500 bg-gradient-to-tl from-green-600 via-green-400 to-green-600 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-md"
						>
							Nos services
						</Link>
					</div>
				</div>
			</div>
		</Container>
	);
};

function Benefit(props: any) {
	return (
		<div className="flex items-start mt-8 space-x-3">
			<div className="flex items-center justify-center flex-shrink-0 mt-1 bg-green-600 rounded-md w-11 h-11 ">
				{React.cloneElement(props.icon, {
					className: "w-7 h-7 text-green-100",
				})}
			</div>
			<div>
				<h4 className="text-xl font-medium">{props.title}</h4>
				<p className="mt-1">{props.children}</p>
			</div>
		</div>
	);
}
