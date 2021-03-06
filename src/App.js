import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About } from './Pages/About/About';
import { Works } from './Pages/Works/Works';
import { MouseStalker } from './components/MouseStalker/MouseStalker';

import { web } from './data/web';
import { logo } from './data/logo';
import { banner } from './data/banner';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route
          path="/works"
          render={({ match: { url } }) => (
            <Switch>
              <Route exact path={url}>
                <Works />
              </Route>
              {web.map((i) => {
                return (
                  <Route key={i} path={`${url}${i.path}`}>
                    {i.children}
                  </Route>
                );
              })}
              {logo.map((i) => {
                return (
                  <Route key={i} path={`${url}${i.path}`}>
                    {i.children}
                  </Route>
                );
              })}
              {banner.map((i) => {
                return (
                  <Route key={i} path={`${url}${i.path}`}>
                    {i.children}
                  </Route>
                );
              })}
              {}
            </Switch>
          )}
        />
      </Switch>
      <MouseStalker />
    </BrowserRouter>
  );
}

export default App;
