import React from 'react';
import { Layout } from '../../components/Templates/Layout/Layout';
import { CloseBtn } from '../../components/CloseBtn/CloseBtn';
import { MainVisual } from '../../components/MainVisual/MainVisual';

import Style from './Introduction.module.scss';

export const ChatApp = ({ topImage, title }) => {
  return (
    <Layout>
      <div className={Style.Introduction}>
        <CloseBtn />
        <MainVisual topImage={topImage} title={title} />

        <section className={Style.overview}>
          <h2>overview</h2>
          <p>
            React,
            Firebaseで作成したチャットアプリ。UIのデザインにはMaterial-UIを使用しました。
            <br />
            （完成：2021年6月11日、制作時間：42時間）
          </p>
        </section>

        <section className={Style.general}>
          <h3>機能</h3>
          <ul>
            <li>ログイン機能</li>
            <li>アバター表示</li>
            <li>メッセージの投稿</li>
            <li>メッセージリストの取得、表示</li>
            <li>メッセージ投稿者の表示</li>
          </ul>
        </section>

        <section className={Style.general}>
          <h3>作成ページリンク</h3>
          <p>
            <a
              href="https://chat-55cce.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              https://chat-55cce.web.app/
            </a>
          </p>
        </section>

        <section className={Style.general}>
          <h3>振り返り</h3>
          <p>
            firebaseでデータベースの取り扱いが少し理解できた気がします。また、Material-UIはデザインの自由度はある程度の制限がかかるものの、コーディング時間の大幅な短縮に繋がるため使い方によっては非常に便利なものだと感じました。
          </p>
        </section>
      </div>
    </Layout>
  );
};
