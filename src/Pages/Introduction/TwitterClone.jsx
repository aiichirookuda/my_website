import React from 'react';
import { Layout } from '../../components/Templates/Layout/Layout';
import { CloseBtn } from '../../components/CloseBtn/CloseBtn';
import { MainVisual } from '../../components/MainVisual/MainVisual';

import Style from './Introduction.module.scss';

export const TwitterClone = ({ topImage, title }) => {
  return (
    <Layout>
      <div className={Style.Introduction}>
        <CloseBtn />
        <MainVisual topImage={topImage} title={title} />

        <section className={Style.overview}>
          <h2>overview</h2>
          <p>
            React、Typescript、Firebase で作成した Twitter
            のクローン。状態管理にはReduxToolkitを導入。
            <br />
            （完成：2021年6月29日、制作時間：100時間）
          </p>
        </section>

        <section className={Style.general}>
          <h3>機能</h3>
          <ul>
            <li>
              ユーザー新規登録
              <ul>
                <li>Googleアカウントで新規登録</li>
                <li>プロフィール画像設定</li>
              </ul>
            </li>
            <li>
              ログイン、ログアウト
              <ul>
                <li>パスワードリセット機能</li>
              </ul>
            </li>
            <li>ツイート投稿、閲覧</li>
            <li>コメント投稿、閲覧</li>
          </ul>
        </section>

        <section className={Style.general}>
          <h3>作成ページリンク</h3>
          <p>
            <a
              href="https://twitter-clone-4832d.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              https://twitter-clone-4832d.web.app/
            </a>
          </p>
        </section>

        <section className={Style.general}>
          <h3>振り返り</h3>
          <p>
            ReduxToolkitを試してみた結果、状態管理に必要なコード量を減らすことができ、コードの可読性があがりました。開発時間の短縮、チームでの開発円滑化に役立ちそうだと感じます。
          </p>
          <p>
            また、googleアカウントを使ったユーザー新規作成機能など、firebaseの利便性も学ぶことが学ぶことができました。
          </p>
        </section>
      </div>
    </Layout>
  );
};
