import React from 'react';
import { CloseBtn } from '../../components/CloseBtn/CloseBtn';
import { MainVisual } from '../../components/MainVisual/MainVisual';
import { Layout } from '../../components/Templates/Layout/Layout';

import Style from './Introduction.module.scss';

export const Lizarran = ({ topImage, title }) => {
  return (
    <Layout>
      <div className={Style.Introduction}>
        <CloseBtn />
        <MainVisual topImage={topImage} title={title} />

        <section className={Style.overview}>
          <h2>overview</h2>
          <p>
            ロゴデザイン、Illustratorの練習の一環として作成。既存のスペイン料理店「LIZARRAN」のロゴを自分がデザインするならという想定。
            <br />
            （完成：2021年9月14日、制作時間：2時間）
          </p>
        </section>

        <section className={Style.general}>
          <h3>制作の経緯</h3>
          <p>
            訓練校の友人グループでもっとデザイン力を磨き合いたいということで、毎週末に何かひとつ作って週明けに発表するという、なんちゃってもくもく会のようなものを企画。
          </p>
          <p>
            その中のひとつめのテーマが昼休憩によく利用していたスペイン料理店「LIZARRAN」のロゴデザインでした。
          </p>
        </section>

        <section className={Style.general}>
          <h3>LIZARRANの概要</h3>
          <ul>
            <li>ピンチョスがメインのスペインバル</li>
            <li>家にいる時のようなくつろぎ</li>
            <li>気軽に利用できるお店</li>
            <li>日替わりで様々なピンチョスを用意</li>
          </ul>
        </section>

        <section className={Style.general}>
          <h3>工夫した点</h3>
          <ul>
            <li>
              お店として推しているピンチョス（串で刺した一口サイズのおつまみ料理）をロゴのモチーフとして採用。
            </li>
            <li>
              飲食店かつ、スペインを想像しやすいように、スペイン国旗と同じカラーで構成。
            </li>
          </ul>
        </section>

        <section className={Style.general}>
          <h3>振り返り</h3>
          <p>友人グループに発表した結果は、右側の丸いデザインが好評。</p>
          <p>うまくピンチョスとスペイン感を表現できたと思います。</p>
          <br />
          <p>
            しかし、振り返ってみると家にいる時のようなくつろぎといったお店のコンセプトが伝わりにくいデザインになってしまいました。
          </p>
          <br />
          <p>
            白基調、角丸なデザインなどやわらかいデザインも参考に、次回の反省にしようと思います。
          </p>
        </section>
      </div>
    </Layout>
  );
};
