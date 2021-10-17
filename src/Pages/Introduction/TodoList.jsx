import React from 'react';
import { Layout } from '../../components/Templates/Layout/Layout';
import { CloseBtn } from '../../components/CloseBtn/CloseBtn';
import { MainVisual } from '../../components/MainVisual/MainVisual';

import Style from './Introduction.module.scss';

export const TodoList = ({ topImage, title }) => {
  return (
    <Layout>
      <div className={Style.Introduction}>
        <CloseBtn />
        <MainVisual topImage={topImage} title={title} />

        <section className={Style.overview}>
          <h2>overview</h2>
          <p>
            はじめて作った成果物。Reactで作成しました。
            <br />
            （完成：2021年1月25日 制作時間：60時間）
          </p>
        </section>

        <section className={Style.general}>
          <h3>機能</h3>
          <ul>
            <li>todoの追加、削除、完了。</li>
            <li>todoの詳細記載、締め切り日設定。</li>
            <li>
              todoの色分け。
              <ul>
                <li>締め切り日に達してない→緑</li>
                <li>締め切り日当日→黄</li>
                <li>締め切り日を過ぎた→赤</li>
              </ul>
            </li>
            <li>完了したtodoは、完了済としてdoneリストへ表示されます。</li>
            <li>doneリストには完了日が記載されます。</li>
            <li>doneからtodoへ戻せます。</li>
            <li>
              スマホ画面対応。
              <ul>
                <li>画面右上ボタンでtodo⇄doneの切替可能。</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className={Style.general}>
          <h3>コンセプト</h3>
          <ul>
            <li>シンプル</li>
            <li>ノートと付箋のような雰囲気</li>
          </ul>
        </section>

        <section className={Style.general}>
          <h3>作成ページリンク</h3>
          <p>
            <a
              href="https://aiichirookuda.github.io/todolist/"
              target="_blank"
              rel="noreferrer"
            >
              https://aiichirookuda.github.io/todolist/
            </a>
          </p>
        </section>

        <section className={Style.general}>
          <h3>振り返り</h3>
          <p>
            はじめての成果物とはいえ、もっとコンポーネントを分けてコーディングするなど、作成後のメンテナンス性などを考慮すべきでした。
          </p>
          <p>
            またデザイン面では、ボタンサイズなどは適切か、ぱっと見で使い方が把握できるかなど、UI
            /UXの知識の浅さに気づくことができました。
          </p>
        </section>
      </div>
    </Layout>
  );
};
