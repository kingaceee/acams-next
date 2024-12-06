import { Metadata } from "next";
import SubTab from "../../component/SubTab"

export const metadata: Metadata = {
  title: "CKYCA"
};
export default function CKYCA() {
	const tabData = [
		{ name: 'CKYCA', url: '/program/CKYCA', active: true },
		{ name: 'CTMA', url: '/program/CTMA', active: false },
		{ name: 'CAFCA', url: '/program/CAFCA', active: false },
	];

	return (
		<>
			<SubTab tabs={tabData} />
			<div>
				<div>CKYCA</div>
			</div>
		</>
	);
}