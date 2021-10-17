import todolist from '../img/web_todolist.png';
import cloneTube from '../img/web_clonetube.png';
import chatApp from '../img/web_chat-app.png';
import twitterClone from '../img/web_twitter-clone.png';
import helloWebDesign from '../img/web_hello-web-design.png';
import boneVoyage from '../img/web_bone-voyage.png';

import { TodoList } from '../Pages/Introduction/TodoList';
import { CloneTube } from '../Pages/Introduction/CloneTube';
import { ChatApp } from '../Pages/Introduction/ChatApp';
import { TwitterClone } from '../Pages/Introduction/TwitterClone';
import { HelloWebDesign } from '../Pages/Introduction/HelloWebDesign';
import { BoneVoyage } from '../Pages/Introduction/BoneVoyage';

export const web = [
  {
    title: 'BONE VOYAGE',
    image: boneVoyage,
    path: '/bone-voyage',
    children: <BoneVoyage topImage={boneVoyage} title={'BONE VOYAGE'} />,
  },
  {
    title: 'Hello, Web Design.',
    image: helloWebDesign,
    path: '/hello-web-design',
    children: (
      <HelloWebDesign topImage={helloWebDesign} title={'Hello, Web Design.'} />
    ),
  },
  {
    title: 'twitter-clone',
    image: twitterClone,
    path: '/twitter-clone',
    children: <TwitterClone topImage={twitterClone} title={'twitter-clone'} />,
  },
  {
    title: 'chat-app',
    image: chatApp,
    path: '/chat-app',
    children: <ChatApp topImage={chatApp} title={'chat-app'} />,
  },
  {
    title: 'CloneTube',
    image: cloneTube,
    path: '/clone-tube',
    children: <CloneTube topImage={cloneTube} title={'CloneTube'} />,
  },
  {
    title: 'todolist',
    image: todolist,
    path: '/todolist',
    children: <TodoList topImage={todolist} title={'todolist'} />,
  },
];
