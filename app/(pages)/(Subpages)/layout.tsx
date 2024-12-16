
import SubVisual from "@/components/layout/SubVisual";
import Breadcrumb from "@/components/layout/Breadcrumb";

export default function Layout({ children, title }: { children: React.ReactNode; title: string;}) {
  return (
		<div className="page__sub">
      <SubVisual title={title} />
			<Breadcrumb />
			<section className="sub__section">
				<div className="sub__inner">
					{children}
				</div>
			</section>
		</div>
  );
}
