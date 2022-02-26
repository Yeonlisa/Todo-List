import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import FocusScreen from './screens/FocusScreen';
import ListScreen from './screens/ListScreen';
import { Task } from './types';
import useLocalStorage from './hooks/use-local-storage';
import TaskContext from './contexts/task-store';
import styled from 'styled-components';
import { colors, GlobalStyle } from './styles';
import GlobalFonts from './fonts/font'

const Layout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 35px;
`;

const Nav = styled.nav`
  display: flex;
  margin-bottom: 45px;
`;

const TabButton = styled(NavLink)`
  align-items: center;
  background: #02343F;
  color: #F0EDCC;
  display: flex;
  height: 62px;
  justify-content: center;
  text-decoration: none;
  width: 120px;

  &:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  &:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  &.active {
    background: ${colors.primary};
    color: #02343F;
  }
`;

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

  return (
    <>
      <GlobalStyle />
      <GlobalFonts />
      <BrowserRouter>
        <TaskContext.Provider value={[tasks, setTasks]}>
          <Layout>
            <Nav>
              <TabButton exact to="/" activeClassName="active">
                List
              </TabButton>
              <TabButton to="/focus" activeClassName="active">
                Focus
              </TabButton>
            </Nav>
            <br />
            
            <Switch>
              <Route exact path="/">
                <ListScreen />
              </Route>
              <Route path="/focus">
                <FocusScreen />
              </Route>
            </Switch>
          </Layout>
        </TaskContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
