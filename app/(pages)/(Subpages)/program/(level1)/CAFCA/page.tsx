import { Metadata } from "next";
import SubTab from "../../component/SubTab"

export const metadata: Metadata = {
  title: "CAFCA"
};
export default function CAFCA() {
	const tabData = [
		{ name: 'CKYCA', url: '/program/CKYCA', active: false },
		{ name: 'CTMA', url: '/program/CTMA', active: false },
		{ name: 'CAFCA', url: '/program/CAFCA', active: true },
	];

	return (
		<>
			<SubTab tabs={tabData} />
			<div>
				<div>CAFCA</div>
			</div>
		</>
	);
}