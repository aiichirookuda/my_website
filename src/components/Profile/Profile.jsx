import React from 'react';
import photo from '../../img/profile.png';
import Style from './Profile.module.scss';

export const Profile = () => {
  const profiles = [
    { title: 'Name', data: 'Aiichiro' },
    { title: 'Location', data: 'TOKYO' },
    { title: 'Likes', data: 'Music / Movie / Game' },
  ];

  return (
    <div className={Style.Profile}>
      <figure>
        <img src={photo} alt="プロフィール画像" />
      </figure>

      <div>
        {profiles.map((profile, index) => {
          return (
            <dl key={index}>
              <dt>{profile.title}</dt>
              <dd>{profile.data}</dd>
            </dl>
          );
        })}
      </div>

      <div>
        <p>
          大学卒業後、アプリ開発会社で５年間営業と企画を担当。WEBサービスの素晴らしさを知り、「自分で作って世に出してみたい！」という思いでWEB制作の勉強をはじめました。
        </p>
        <p>
          progate、udemy、書籍でHTML、CSS、JS、Reactなどを学習。現在は職業訓練校でWEBデザインを学んでいます。
        </p>
        <p>
          WEBサイト、WEBアプリなどのフロントエンドエンジニアを目指して精進しています！
        </p>
      </div>
    </div>
  );
};
