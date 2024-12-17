import SubVisual from '@/components/layout/SubVisual';
import Breadcrumb from '@/components/layout/Breadcrumb';

interface SubpageProps {
	children: React.ReactNode;
	title: string;
	category?: string;
}
export default function Subpage({ children, title, category }: SubpageProps) {
	const breadcrumbs = [
		...(category ? [{ depth: category }] : []),
		{ depth: title },
	];
	
	return (
		<div className='page__sub'>
			<SubVisual title={title} />
			<Breadcrumb breadcrumbs={breadcrumbs} />
			<section className='sub__section'>
				<div className='sub__inner'>{children}</div>
			</section>
		</div>
	);
}
