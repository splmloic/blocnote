import React from 'react';
import { Menu } from 'antd';
import SideNote from './SideNotes';
import NewNote from './NewNote'

function Sidebar() {
  return (
    <Menu theme="dark" mode="inline" selectable={true}>
        <button onClick={NewNote}>Add a note</button>
        <SideNote/>
    </Menu>
  );
}

export default Sidebar;

