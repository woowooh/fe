import React from 'react';
import Button, { ButtonType, ButtonSize} from "./components/Button/button"
import Menu from "./components/Menu/menu"
import MenuItem from "./components/Menu/menuItem"
import SubMenu from './components/Menu/subMenu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={'0'} mode="vertical" defaultOpenSubMenus={['2']}>
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem disabled> 
            cool link 2
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown1
            </MenuItem>
            <MenuItem>
              dropdown2
            </MenuItem>
            <MenuItem>
              dropdown3
            </MenuItem>
          </SubMenu>
          <MenuItem>
            cool link 3
          </MenuItem>
        </Menu>
        <Button autoFocus onClick={ (e) => {e.preventDefault(); alert('www')}}>sample </Button>
        <Button btnType={ButtonType.Default}> Hello button </Button>
        <Button disabled btnType={ButtonType.Default}> Hello button </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Large hello </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}> small Primary </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> small danger </Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled> baidu </Button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
