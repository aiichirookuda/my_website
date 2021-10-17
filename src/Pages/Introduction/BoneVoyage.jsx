import React from 'react';
import { Layout } from '../../components/Templates/Layout/Layout';
import { CloseBtn } from '../../components/CloseBtn/CloseBtn';
import { MainVisual } from '../../components/MainVisual/MainVisual';

import top from '../../img/bv_top.jpg';
import photoGallery from '../../img/bv_photo-gallery.jpg';

import Style from './Introduction.module.scss';

export const BoneVoyage = ({ topImage, title }) => {
  return (
    <Layout>
      <div className={Style.Introduction}>
        <CloseBtn />
        <MainVisual topImage={topImage} title={title} />

        <section className={Style.overview}>
          <h2>overview</h2>
          <p>
            スクールのグループ制作課題。クライアントからの要望に沿って制作を進めました。自身はトップページと、フォトギャラリーページを担当。
            <br />
            （完成：2021年9月8日、制作時間：60時間）
          </p>
        </section>

        <section className={Style.general}>
          <h3>制作の経緯</h3>
          <p>
            スクールのグループ制作課題により作成。
            <br />
            <br />
            クライアント依頼→デザインカンプ作成→クライアントチェック→修正→コーディング→納品
          </p>
        </section>

        <section className={Style.general}>
          <h3>要件（クライアント要望）</h3>
          <ul>
            <li>
              目的
              <ul>
                <li>若者に終活を認知してもらう。</li>
                <li>
                  終活をネガティブなイメージからポジティブなものに変えてもらう。
                </li>
                <li>若いうちから自分のお葬式などのデザインをしてもらう。</li>
              </ul>
            </li>
            <li>
              ターゲット
              <ul>
                <li>20代〜30代</li>
              </ul>
            </li>
            <li>
              トンマナ
              <ul>
                <li>
                  一般的な葬儀屋とは異なる、終活をイメージさせないデザイン。
                </li>
                <li>写真ではなくイラストを多めに。</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className={Style.general}>
          <h3>制作サイト</h3>
          <figure>
            <figcaption>TOPページ</figcaption>
            <img src={top} alt="top" />
          </figure>
          <figure>
            <figcaption>PHOTO GALLERYページ</figcaption>
            <img src={photoGallery} alt="photogallery" />
          </figure>
        </section>

        <section className={Style.general}>
          <h3>振り返り</h3>
          <p>
            初めてチーム開発でした。反省点としては、デザイン作成、コーディングの前段階として、見出しの幅、ボタンのサイズなど細かな部分まで打ち合わせで決めておくべきでした。そうすればページごとにデザインをする人が違っても、サイト全体を通してみたときに一貫性が保てましたし、デザイン修正の作業時間も短縮できたはずです。
          </p>
          <p>コミュニケーションの重要性を実感できました。</p>
          <p>
            また、他人が書いたコードを読み、修正を実際に手伝うのも初めてでしたので非常に良い勉強になりました。
          </p>
        </section>
      </div>
    </Layout>
  );
};
