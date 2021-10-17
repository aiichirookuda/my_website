import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Top } from './Pages/Top/Top';
import { About } from './Pages/About/About';
import { Works } from './Pages/Works/Works';

import { web } from './data/web';
import { banner } from './data/banner';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Top />
        </Route>
        <Route path="/about">
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
              {banner.map((i) => {
                return (
                  <Route key={i} path={`${url}${i.path}`}>
                    {i.children}
                  </Route>
                );
              })}
            </Switch>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
