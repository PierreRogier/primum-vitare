"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";

interface TransitionProps {
	children: React.ReactNode;
}

export const Transition: FC<TransitionProps> = ({ children }) => {
	return (
		<main className="overflow-x-hidden text-gray-700 min-h-screen mt-16">
			<motion.div
				initial={{ opacity: 0, x: "-100%" }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ ease: "circOut", duration: 0.75 }}
			>
				{children}
			</motion.div>
		</main>
	);
};
