"use client";

import Link from "next/link";
import styles from "./Main.module.scss";
import Title from "./component/Title/Title";
import CardBox from "./component/Card/CardBox";
import BannerBox from "./component/Banner/Banner";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Accordion from "@/components/util/Accordion";
import { useEffect } from "react";

export default function Main() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const response = gsap.matchMedia();

      response.add("(min-width: 768px)", () => {
        const boxes = gsap.utils.toArray('.scrollCard');
        gsap.set(boxes, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
        });

        const trigger = document.querySelector('.scrollBox');
        ScrollTrigger.create({
          trigger: trigger,
          start: 'top 60%',
          end: 'bottom',
          onEnter: () => gsap.to(boxes, {
            y: 0,
            opacity: 1,
            stagger: 0.3,
          }),
        });
      });

      return () => {
        response.revert();
        ScrollTrigger.killAll();
      };
    }
  }, []);

	const faq_data = [
		{
			title: "CAMS 시험 시간과 합격 기준은 어떻게 되나요?",
			content: "시험 시간은 210분이며, 총 120문제 중 75문제 이상을 맞추면 합격입니다. CAMS 외 다른 시험의 시간과 합격 기준은 시험마다 상이합니다."
		},
		{
			title: "시험 결제 후 시험 응시는 언제까지 가능한가요?",
			content: "시험 결제 후 6개월 이내에 시험을 응시해야 합니다."
		},
		{
			title: "신청 후 안내받은 처리 기간이 지나도 ACAMS로부터 이메일이 오지 않아요.",
			content: "해당 이메일이 스팸 메일로 분류되었을 가능성이 높습니다. 스팸 메일함을 확인해 주시기 바랍니다."
		}
	]

  return (
    <div className="page__main">
      <section className={`${styles.main__section} ${styles.visual}`}>
        <Swiper
          className={styles.main__swiper}
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
						delay: 1500,
						disableOnInteraction: false,
					}}
					allowTouchMove
        >
          <SwiperSlide
            className={`${styles.main__KV} ${styles.visual1}`}
          ></SwiperSlide>
          <SwiperSlide
            className={`${styles.main__KV} ${styles.visual2}`}
          ></SwiperSlide>
          <SwiperSlide
            className={`${styles.main__KV} ${styles.visual3}`}
          ></SwiperSlide>
          <SwiperSlide
            className={`${styles.main__KV} ${styles.visual4}`}
          ></SwiperSlide>
          <SwiperSlide
            className={`${styles.main__KV} ${styles.visual5}`}
          ></SwiperSlide>
        </Swiper>
        <div className={styles.main__inner}>
          금융 시스템의 건전성 <br className="show-mo"/>향상을 위한 플랫폼
					<Title />
        </div>
      </section>

      <section className={`${styles.main__section} ${styles.section4}`}>
        <div className={styles.main__inner}>
          <div className={styles.logo}></div>
          <div className={styles.text}>
            <p>Finger AML Hub는 핀테크 전문기업 <br className="show-mo" />(주)핑거의 자금세탁방지(AML) <br className="show-mo" />전문 플랫폼입니다.</p>
            <br className="show-mo"/>
						<p>ACAMS와의 제휴를 통해 <br className="show-mo"/>AML 국제공인 자격증 신청을 지원하며,</p>
						<p>혁신적 금융범죄 예방 솔루션 개발과 <br className="show-mo"/>전문가 네트워크를 구축해 나가고 있습니다.</p>
          </div>
        </div>
			</section>

      <section className={`${styles.main__section} ${styles.section1}`}>
        <div className={styles.main__inner}>
          <div className={styles.logo}></div>
          <div className={styles.text}>
            <p>글로벌 AML 표준에 한 걸음 더 가까이</p>
            <p> Finger AML Hub에서 <br className="show-mo"/>ACAMS 프로그램을 할인된 가격으로 <br className="show-mo"/>신청하세요!</p>
          </div>
          <Link href="/apply" className={styles.button}>
            프로그램 신청하기
          </Link>
        </div>
      </section>

      <section className={`${styles.main__section} ${styles.section2} scrollBox`}>
        <div className={styles.main__inner}>
          <div className={`${styles.card} show-pc`}>
            <div className={styles.card__row}>
              <CardBox
                path="/program/CKYCA"
                className="card2"
                imgAlt="CKYCA"
                titleLine1="Know Your Customer"
                titleLine2="Associate"
              />
              <CardBox
                path="/program/CTMA"
                className="card3"
                imgAlt="CTMA"
                titleLine1="Transaction Monitoring"
                titleLine2="Associate"
              />
              <CardBox
                path="/program/CAFCA"
                className="card1"
                imgAlt="CAFCA"
                titleLine1="AML Fintech Compliance"
                titleLine2="Associate"
              />
            </div>
            <div className={styles.card__row}>
              <CardBox
                path="/program/CAMS"
                className="card4"
                imgAlt="CAMS"
                titleLine1="Certified Anti-Money"
                titleLine2="Laundering Specialist"
              />
              <CardBox
                path="/program/CGSS"
                className="card5"
                imgAlt="CGSS"
                titleLine1="Certified Global "
                titleLine2="Sanctions Specialist"
              />
              <CardBox
                path="/program/CCAS"
                className="card6"
                imgAlt="CCAS"
                titleLine1="Certified Cryptoasset"
                titleLine2="Anti-Financial Crime Specialist"
                addClass="font16"
              />
              <CardBox
                path="/program/CAFS"
                className="card7"
                imgAlt="CAFS"
                titleLine1="Certified Anti-Fraud"
                titleLine2="Specialist"
              />
            </div>
            <div className={styles.card__row}>
              <CardBox
                path="/program/CAMS-Audit"
                className="card9"
                imgAlt="CKYCA"
                titleLine1="Audit"
                titleLine2=""
              />
              <CardBox
                path="/program/CAMS-FCI"
                className="card10"
                imgAlt="CTMA"
                titleLine1="Financial Crimes"
                titleLine2="Investigations"
              />
              <CardBox
                path="/program/CAMS-RM"
                className="card8"
                imgAlt="CAFCA"
                titleLine1="Risk"
                titleLine2="Management"
              />
            </div>
          </div>
          
          <div className={`${styles.card} show-mo`}>
            <CardBox
              path="/program/CKYCA"
              className="card2"
              imgAlt="CKYCA"
              titleLine1="Know Your Customer"
              titleLine2="Associate"
            />
            <CardBox
              path="/program/CTMA"
              className="card3"
              imgAlt="CTMA"
              titleLine1="Transaction Monitoring"
              titleLine2="Associate"
            />
            <CardBox
              path="/program/CAFCA"
              className="card1"
              imgAlt="CAFCA"
              titleLine1="AML Fintech Compliance"
              titleLine2="Associate"
            />
            <CardBox
              path="/program/CAMS"
              className="card4"
              imgAlt="CAMS"
              titleLine1="Certified Anti-Money"
              titleLine2="Laundering Specialist"
            />
            <CardBox
              path="/program/CGSS"
              className="card5"
              imgAlt="CGSS"
              titleLine1="Certified Global "
              titleLine2="Sanctions Specialist"
            />
            <CardBox
              path="/program/CCAS"
              className="card6"
              imgAlt="CCAS"
              titleLine1="Certified Cryptoasset"
              titleLine2="Anti-Financial Crime Specialist"
              addClass="font16"
            />
            <CardBox
              path="/program/CAFS"
              className="card7"
              imgAlt="CAFS"
              titleLine1="Certified Anti-Fraud"
              titleLine2="Specialist"
            />
            <CardBox
              path="/program/CAMS-Audit"
              className="card9"
              imgAlt="CKYCA"
              titleLine1="Audit"
              titleLine2=""
            />
            <CardBox
              path="/program/CAMS-FCI"
              className="card10"
              imgAlt="CTMA"
              titleLine1="Financial Crimes"
              titleLine2="Investigations"
            />
            <CardBox
              path="/program/CAMS-RM"
              className="card8"
              imgAlt="CAFCA"
              titleLine1="Risk"
              titleLine2="Management"
            />
          </div>
        </div>
      </section>

      <section className={`${styles.main__section} ${styles.section3}`}>
        <div className={styles.main__inner}>
          <div className={styles.banner}>
            <BannerBox
              addClass={styles.ico1}
              desc={<><span className="color-point1 font-exbold">ACAMS</span> 자격증을 통해 <br className="show-mo"/>업무 인력의 금융범죄 <br className="show-pc"/>예방지식, <br className="show-mo"/>기술 및 전문 지식을 향상시키세요.</>}
            />
            <BannerBox
              addClass={styles.ico2}
              desc={<><span className="color-point1 font-exbold">ACAMS</span>는 전문가의 경력 단계 및 <br className="show-mo"/>경험에 <br className="show-pc"/>적합한 다양한 자격증 레벨을 <br className="show-mo"/>제공합니다.</>}
            />
          </div>
        </div>
      </section>

      <section className={`${styles.main__section} ${styles.faq}`}>
        <div className={styles.main__inner}>
          <div className={styles.faq__inner}>
            <div className={styles.title}>
              <span className={styles.desc}>Finger AML Hub</span>
              <Link href="/faq" className={styles.faq__link}>FAQ</Link>
            </div>

            <Accordion Data={faq_data} maxRow={3}/>
          </div>
        </div>
      </section>
    </div>
  );
}
