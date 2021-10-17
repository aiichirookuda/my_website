import React from 'react';
import { Layout } from '../../components/Templates/Layout/Layout';
import { CloseBtn } from '../../components/CloseBtn/CloseBtn';
import { MainVisual } from '../../components/MainVisual/MainVisual';

import Style from './Introduction.module.scss';

export const CloneTube = ({ topImage, title }) => {
  return (
    <Layout>
      <div className={Style.Introduction}>
        <CloseBtn />
        <MainVisual topImage={topImage} title={title} />

        <section className={Style.overview}>
          <h2>overview</h2>
          <p>
            TypeScript、React で作成した YouTube クローンページ。 API
            データ取得の練習として作成しました。
            <br />
            （完成：2021年6月1日、制作時間：72時間）
          </p>
        </section>

        <section className={Style.general}>
          <h3>機能</h3>
          <ul>
            <li>mostPopular 動画のリスト表示</li>
            <li>動画検索</li>
            <li>動画視聴</li>
            <li>視聴中動画の関連動リスト表示</li>
            <li>カテゴリ別動画リスト表示</li>
            <li>スマホ画面対応</li>
          </ul>
        </section>

        <section className={Style.general}>
          <h3>リンク</h3>
          <p>
            <a
              href="https://aiichirookuda.github.io/CloneTube/"
              target="_blank"
              rel="noreferrer"
            >
              https://aiichirookuda.github.io/CloneTube/
            </a>
          </p>
        </section>

        <section className={Style.general}>
          <h3>工夫した点</h3>
          <p>
            カテゴリ別の人気動画がさくっと表示できたら良いなあと思い、カテゴリ検索機能を追加しました。作成当時のYouTubeのトップページにはまだカテゴリ検索ボタンはなかった気がします。
          </p>
        </section>

        <section className={Style.general}>
          <p>
            動画の自動再生、動画のチャンネル名表示などもっと実装できることはあった。また、ユーザー目線での利便性を考慮し、カテゴリ選択後、現在どのカテゴリを閲覧しているのかを表示すべきでした。
          </p>
        </section>
      </div>
    </Layout>
  );
};
