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
	
	return (
		<header className={`${styles.header} ${isScrolled ? styles.scroll : ''}`}>
			<div className={`${styles.header__inner} full`}>
				<h1 className={styles.logo}>
					<Link href="/">
						<Image src="/images/common/logo-white.svg" width={172} height={32} alt='ACAMS logo'/>
					</Link>
				</h1>
				<nav className={styles.gnb}>
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
									<Link href='/'>멤버십</Link>
								</li>
								<li>
									<Link href='/'>프로그램 신청</Link>
								</li>
							</ul>
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

