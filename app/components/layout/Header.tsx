'use client'

import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
	}, []);

	const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
	};
	
	return (
		<header className={`${styles.header} ${isScrolled ? styles.scroll : ''}`}>
			<div className={`${styles.header__inner} full`}>
				<h1 className={styles.logo}>
					<Link href="/"></Link>
				</h1>
				<nav className={`${styles.gnb} show-pc`}>
					<ul className={styles.gnb__depth1}>
						<li>
							<Link href="/intro">소개</Link>
						</li>
						<li className={styles.depth2}>
							<Link href="/about">ACAMS 프로그램</Link>
							<ul className={styles.gnb__depth2}>
								<li>
									<Image src="/images/common/ACAMS-logo-sm.svg" width={20} height={20} alt='ACAMS logo' />
								</li>
								<li>
									<Link href='/about'>About ACAMS</Link>
								</li>
								<li>
									<Link href='/program/CKYCA'>초급 자격증</Link>
								</li>
								<li>
									<Link href='/program/CAMS'>중급 자격증</Link>
								</li>
								<li>
									<Link href='/program/CAMS-Audit'>고급 자격증</Link>
								</li>
								<li>
									<Link href='/membership'>멤버십</Link>
								</li>
								<li>
									<Link href='/apply'>프로그램 신청</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link href="/faq">FAQ</Link>
						</li>
					</ul>
				</nav>

				<button className={`${styles.gnb__btn} show-mo`} onClick={toggleMenu}><span className="blind">menu 열기</span></button>
				<nav className={`${styles.gnb} show-mo ${isOpen ? styles.isOpen : ''}`}>
					<ul className={styles.gnb__mobile}>
						<li>
							<Image src="/images/common/ACAMS-logo-sm.svg" width={20} height={20} alt='ACAMS logo' />
						</li>
						<li>
							<Link href="/intro">소개</Link>
						</li>
						<li>
							<Link href='/about'>About ACAMS</Link>
						</li>
						<li>
							<Link href='/program/CKYCA'>초급 자격증</Link>
						</li>
						<li>
							<Link href='/program/CAMS'>중급 자격증</Link>
						</li>
						<li>
							<Link href='/program/CAMS-Audit'>고급 자격증</Link>
						</li>
						<li>
							<Link href='/membership'>멤버십</Link>
						</li>
						<li>
							<Link href='/apply'>프로그램 신청</Link>
						</li>
						<li>
							<Link href="/faq">FAQ</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
