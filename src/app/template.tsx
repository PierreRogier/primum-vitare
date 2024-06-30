import React, { FC } from "react";
import { Transition } from "@/components/Transition";

interface TemplateProps {
	children: React.ReactNode;
}

const Template: FC<TemplateProps> = ({ children }) => {
	return <Transition>{children}</Transition>;
};

export default Template;
