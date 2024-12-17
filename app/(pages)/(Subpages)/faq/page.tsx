import { Metadata } from "next";
import styles from "./faq.module.scss";
import SubTab from "../program/component/SubTab";
import Accordion from "@/components/util/Accordion";
import Subpage from "../Subpage";

export const metadata: Metadata = {
	title: "FAQ"
};

export default function FAQ() {
	const tabData = [
		{ name: "시험 준비 및 정보" },
		{ name: "시험 규정 및 진행" },
		{ name: "신분증 및 개인정보 관리" },
		{ name: "결과 및 자격 유지" },
		{ name: "Credit 및 학습자료" },
		{ name: "멤버십 및 기타지원" },
	];

	const faq_data = [
		{
			title: "CAMS 시험 시간과 합격 기준은 어떻게 되나요?",
			content: "시험 시간은 210분이며, 총 120문제 중 75문제 이상을 맞추면 합격입니다. CAMS 외 기타 시험의 시간은 시험마다 상이합니다.시험 시간은 210분이며, 총 120문제 중 75문제 이상을 맞추면 합격입니다. CAMS 외 기타 시험의 시간은 시험마다 상이합니다.시험 시간은 210분이며, 총 120문제 중 75문제 이상을 맞추면 합격입니다. CAMS 외 기타 시험의 시간은 시험마다 상이합니다.시험 시간은 210분이며, 총 120문제 중 75문제 이상을 맞추면 합격입니다. CAMS 외 기타 시험의 시간은 시험마다 상이합니다.시험 시간은 210분이며, 총 120문제 중 75문제 이상을 맞추면 합격입니다. CAMS 외 기타 시험의 시간은 시험마다 상이합니다.시험 시간은 210분이며, 총 120문제 중 75문제 이상을 맞추면 합격입니다. CAMS 외 기타 시험의 시간은 시험마다 상이합니다.시험 시간은 210분이며, 총 120문제 중 75문제 이상을 맞추면 합격입니다. CAMS 외 기타 시험의 시간은 시험마다 상이합니다.시험 시간은 210분이며, 총 120문제 중 75문제 이상을 맞추면 합격입니다. CAMS 외 기타 시험의 시간은 시험마다 상이합니다.시험 시간은 210분이며, 총 120문제 중 75문제 이상을 맞추면 합격입니다. CAMS 외 기타 시험의 시간은 시험마다 상이합니다."
		},
		{
			title: "시험 링크는 언제 제공되며, 어떻게 확인하나요?",
			content: "시험 시간은 210분이며, 총 120문제 중 75문제 이상을 맞추면 합격입니다. CAMS 외 기타 시험의 시간은 시험마다 상이합니다."
		},
		{
			title: "시험에 추천되는 브라우저는 무엇인가요?",
			content: "시험 시간은 210분이며, 총 120문제 중 75문제 이상을 맞추면 합격입니다. CAMS 외 기타 시험의 시간은 시험마다 상이합니다."
		},
		{
			title: "시험을 위한 장비 요건은 무엇인가요?",
			content: "시험 시간은 210분이며, 총 120문제 중 75문제 이상을 맞추면 합격입니다. CAMS 외 기타 시험의 시간은 시험마다 상이합니다."
		},
		{
			title: "감독관과 시험 중 의사소통은 어떻게 이루어지나요?감독관과 시험 중 의사소통은 어떻게 이루어지나요?감독관과 시험 중 의사소통은 어떻게 이루어지나요?감독관과 시험 중 의사소통은 어떻게 이루어지나요?",
			content: "시험 시간은 210분이며, 총 120문제 중 75문제 이상을 맞추면 합격입니다. CAMS 외 기타 시험의 시간은 시험마다 상이합니다."
		},
	]
	
	return (
		<Subpage title="FAQ">
			<div className={styles.faq}>
				<SubTab type="filter" tabs={tabData} />
				
				<Accordion Data={faq_data} />
			</div>
		</Subpage>
	)
}