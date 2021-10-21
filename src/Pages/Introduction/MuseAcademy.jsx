import React from 'react';
import { CloseBtn } from '../../components/CloseBtn/CloseBtn';
import { MainVisual } from '../../components/MainVisual/MainVisual';
import { Layout } from '../../components/Templates/Layout/Layout';

import Style from './Introduction.module.scss';

export const MuseAcademy = ({ topImage, title }) => {
  return (
    <Layout>
      <div className={Style.Introduction}>
        <CloseBtn />
        <MainVisual topImage={topImage} title={title} />

        <section className={Style.overview}>
          <h2>overview</h2>
          <p>
            「PLUS
            REVIEW」と「MuseAcademy」のコラボデザインイベント「できるかもデザイン」の、第11回配信＃できるかもバナーの作成課題にて提出。運営賞をいただきました。
            <br />
            （完成：2021年9月21日、制作時間：2時間）
          </p>
        </section>

        <section className={Style.general}>
          <h3>制作の経緯</h3>
          <p>
            上記記載の、オンライン生配信イベント「できるかもデザイン」の作成課題にて作成。
          </p>
          <p>
            提出すると、放送内で添削してもらえる可能性があるとのことでしたので提出させていただきました。
          </p>
        </section>

        <section className={Style.general}>
          <h3>要件</h3>
          <ul>
            <li>
              目的
              <ul>
                <li>MuseAcademyの存在を知ってもらう</li>
                <li>子育てママに特化したスクールと認知してもらう</li>
                <li>
                  興味を持ってくれた人を、公式LINEに登録してもらうためのLPに誘導する
                </li>
              </ul>
              <br />
            </li>
            <li>
              バナーが表示される想定の場所
              <ul>
                <li>Webメディアの広告バナー</li>
                <li>Facebook広告</li>
                <li>Instagram広告</li>
              </ul>
              <br />
            </li>
            <li>
              ターゲット
              <ul>
                <li>自宅で仕事ができるスキルを身につけたいママ</li>
                <li>これから勉強をはじめたい</li>
                <li>短期ではなく、自分のペースでじっくり学びたい</li>
                <li>「子育てをしている」前提の働き方を模索中</li>
                <li>同じように頑張るママたちと繋がりたい</li>
              </ul>
              <br />
            </li>
            <li>
              バナーサイズ
              <ul>
                <li>サイズ：横1,080px × 縦1,080px（1:1）</li>
              </ul>
              <br />
            </li>
            <li>
              文言について
              <ul>
                <li>メインコピー１：自宅で働きたいママへ</li>
                <li>
                  メインコピー２：現役ママ講師とプロのWebデザイナーになろう
                </li>
                <li>※オリジナルのメインコピーも大歓迎</li>
                <li>コンバージョンのラベル：今ならキャリア相談無料</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className={Style.general}>
          <h3>工夫した点</h3>
          <ul>
            <li>
              オリオジナルのメインコピーを作成しました。
              <ul>
                <li>
                  未経験業界に飛び込むことを考えると迷いがあると思うので、第三者からの後押しのようなコピー。
                </li>
                <li>自分の子どもが母親を自慢しているようなセリフ。</li>
                <li>やわらかい手書き風フォントを採用。</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className={Style.general}>
          <h3>振り返り</h3>
          <p>
            提出した結果、オリジナルのメインコピーをが好評で運営賞をいただきました。自分が作ったものに対して賞をいただくことが初めてでしたので素直に嬉しかったです。
          </p>
          <br />
          <p>
            ただ、ロゴのレギュレーション、読みやすい文字のサイズなど、バナー作成上の基本知識に対しご指摘をいただきましたので、次回はその部分をしっかりと学習した上で作成しようと思います。
          </p>
        </section>
      </div>
    </Layout>
  );
};
