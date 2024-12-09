"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Main.module.scss";
import Title from "./component/Title/Title";
import CardBox from "./component/Card/CardBox";
import BannerBox from "./component/Banner/Banner";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

export default function Main() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const elements = document.querySelectorAll(".scrollCard");
      gsap.to(elements, {
        scrollTrigger: {
          trigger: ".scrollA",
          start: "top 50%",
        },
        // duration: 2,
        y: 0,
        opacity: 1,
        stagger: 0.3,
      });
    }
  }, []);

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
          금융 시스템의 건전성 향상을 위한 플랫폼
					<Title />
        </div>
      </section>

      <section className={`${styles.main__section} ${styles.section4}`}>
        <div className={styles.main__inner}>
          <Image
            src="/images/common/logo.svg"
            width={268}
            height={50}
            alt="ACAMS logo"
          />
          <div className={styles.text}>
            <p>Finger AML Hub는 핀테크 전문기업 (주)핑거의 자금세탁방지(AML) 전문 플랫폼입니다.</p>
						<p>ACAMS와의 제휴를 통해 AML 국제공인 자격증 신청을 지원하며,</p>
						<p>혁신적 금융범죄 예방 솔루션 개발과 전문가 네트워크를 구축해 나가고 있습니다.</p>
          </div>
        </div>
			</section>

      <section className={`${styles.main__section} ${styles.section1} scrollA`}>
        <div className={styles.main__inner}>
          <Image
            src="/images/common/ACAMS-logo.svg"
            width={214}
            height={36}
            alt="ACAMS logo"
          />
          <div className={styles.text}>
            <p>글로벌 AML 표준에 한 걸음 더 가까이</p>
            <p> Finger AML Hub에서 ACAMS 프로그램을 할인된 가격으로 신청하세요</p>
          </div>
          <Link href="/apply" className={styles.button}>
            프로그램 신청하기
          </Link>
        </div>
      </section>

      <section className={`${styles.main__section} ${styles.section2}`}>
        <div className={styles.main__inner}>
          <div className={styles.card}>
            <div className={styles.card__row}>
              <CardBox
                path="/program/CKYCA"
                imgUrl="/images/main/img_main_card02.svg"
                imgAlt="CKYCA"
                titleLine1="Know Your Customer"
                titleLine2="Associate"
              />
              <CardBox
                path="/program/CTMA"
                imgUrl="/images/main/img_main_card03.svg"
                imgAlt="CTMA"
                titleLine1="Transaction Monitoring"
                titleLine2="Associate"
              />
              <CardBox
                path="/program/CAFCA"
                imgUrl="/images/main/img_main_card01.svg"
                imgAlt="CAFCA"
                titleLine1="AML Fintech Compliance"
                titleLine2="Associate"
              />
            </div>
            <div className={styles.card__row}>
              <CardBox
                path="/program/CAMS"
                imgUrl="/images/main/img_main_card04.svg"
                imgAlt="CAMS"
                titleLine1="Certified Anti-Money"
                titleLine2="Laundering Specialist"
              />
              <CardBox
                path="/program/CGSS"
                imgUrl="/images/main/img_main_card05.svg"
                imgAlt="CGSS"
                titleLine1="Certified Global "
                titleLine2="Sanctions Specialist"
              />
              <CardBox
                path="/program/CCAS"
                imgUrl="/images/main/img_main_card06.svg"
                imgAlt="CCAS"
                titleLine1="Certified Cryptoasset"
                titleLine2="Anti-Financial Crime Specialist"
                addClass="font16"
              />
              <CardBox
                path="/program/CAFS"
                imgUrl="/images/main/img_main_card07.svg"
                imgAlt="CAFS"
                titleLine1="Certified Anti-Fraud"
                titleLine2="Specialist"
              />
            </div>
            <div className={styles.card__row}>
              <CardBox
                path="/program/CAMS-Audit"
                imgUrl="/images/main/img_main_card09.svg"
                imgAlt="CKYCA"
                titleLine1="Audit"
                titleLine2=""
              />
              <CardBox
                path="/program/CAMS-FCI"
                imgUrl="/images/main/img_main_card10.svg"
                imgAlt="CTMA"
                titleLine1="Financial Crimes"
                titleLine2="Investigations"
              />
              <CardBox
                path="/program/CAMS-RM"
                imgUrl="/images/main/img_main_card08.svg"
                imgAlt="CAFCA"
                titleLine1="Risk"
                titleLine2="Management"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.main__section} ${styles.section3}`}>
        <div className={styles.main__inner}>
          <div className={styles.banner}>
            <BannerBox
              addClass={styles.ico1}
              desc1=" 자격증을 통해 업무 인력의 금융범죄"
              desc2="예방지식, 기술 및 전문 지식을 향상시키세요."
            />
            <BannerBox
              addClass={styles.ico2}
              desc1="는 전문가의 경력 단계 및 경험에"
              desc2="적합한 다양한 자격증 레벨을 제공합니다."
            />
          </div>
        </div>
      </section>

      <section className={`${styles.main__section} ${styles.faq}`}>
        <div className={styles.main__inner}>
          <div className={styles.faq}>
            <div className={styles.title}>
              <span className={styles.desc}>Finger AML Hub</span>
              FAQ
            </div>

            {/*
						todo : accordian component 만들어야함
						<Faq />
					*/}
          </div>
        </div>
      </section>
    </div>
  );
}
