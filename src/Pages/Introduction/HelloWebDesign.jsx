import React from 'react';
import { Layout } from '../../components/Templates/Layout/Layout';
import { CloseBtn } from '../../components/CloseBtn/CloseBtn';
import { MainVisual } from '../../components/MainVisual/MainVisual';

import top from '../../img/hwd_top.png';

import Style from './Introduction.module.scss';

export const HelloWebDesign = ({ topImage, title }) => {
  return (
    <Layout>
      <div className={Style.Introduction}>
        <CloseBtn />
        <MainVisual topImage={topImage} title={title} />

        <section className={Style.overview}>
          <h2>overview</h2>
          <p>
            スクールの制作課題。何でも良いのでWEBデザインをするということでしたので、WEBデザイン初学者に向け、WEBデザインが楽しいものだと伝えられるように作成しました。レスポンシブ対応。
            <br />
            （2021年8月15日、制作時間：30時間）
          </p>
        </section>

        <section className={Style.general}>
          <h3>制作の経緯</h3>
          <p>
            スクールの中間課題により作成。制作物はこれから入校する生徒が見る可能性があるとのこと。
          </p>
        </section>

        <section className={Style.general}>
          <h3>要件</h3>
          <ul>
            <li>
              目的
              <ul>
                <li>WEBデザインは楽しいものだと感じてもらう。</li>
                <li>これから勉強することを楽しみに思ってもらう。</li>
              </ul>
            </li>
            <li>
              ターゲット
              <ul>
                <li>WEBデザイン初学者。</li>
                <li>WEBデザインの勉強ついていけるか不安を感じている人。</li>
              </ul>
            </li>
            <li>
              トンマナ
              <ul>
                <li>
                  楽しい、ワクワクを連想させる。→ゲームのような明るい色使いを採用。
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className={Style.general}>
          <h3>作成ページ</h3>
          <figure>
            <img src={top} alt="top" />
          </figure>
        </section>

        <section className={Style.general}>
          <h3>工夫した点</h3>
          <ul>
            <li>
              ファーストビューのメッセージはRPGゲーム冒頭のよくある文章をオマージュ。訪問者の目を引くようにjQueryで徐々に表示されるように制御しました。
            </li>
            <li>
              道具屋のセクションにはデザインの勉強に役立つツールや心がけをイラストで表示。ページの雰囲気に合うようにIllustratorで作成。
            </li>
          </ul>
        </section>

        <section className={Style.general}>
          <h3>振り返り</h3>
          <p>
            はじめてデザインカンプの作成からページ制作を行いました。ターゲットや目的を明確にする作業はデザインを円滑に進めることにも直結すると感じました。
          </p>
          <p>
            反省点としてはレスポンシブ対応に時間を要してしまったこと。デザイン、コーディングの段階でレスポンシブ対応に向けて構造を考えておく必要があると思いました。
          </p>
        </section>
      </div>
    </Layout>
  );
};
