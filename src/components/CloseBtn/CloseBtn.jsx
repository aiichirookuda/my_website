import React from 'react';
import { useHistory } from 'react-router';

import Style from './CloseBtn.module.scss';

export const CloseBtn = () => {
  const history = useHistory();

  const backWorksPage = () => {
    history.push('/works');
  };

  return (
    <div className={Style.CloseBtn}>
      <button onClick={backWorksPage} type="button">
        閉じる
      </button>
    </div>
  );
};
