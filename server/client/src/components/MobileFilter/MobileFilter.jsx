import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const MobileFilter = () => {

    const FaFilter = () => {
        return (
            <FontAwesomeIcon
                className="filterIcon"
                icon="search"
                size="2x"
                spin
                style={{ color: 'white' }}
            />
        )
    }

    return ( 
        <ProSidebar toggled={false} collapsed={false} >
            <Menu iconShape="square">
                <MenuItem 
                //icon={FaFilter}
                >
                    <FontAwesomeIcon
                className="filterIcon"
                icon="search"
                size="2x"
                //spin
                style={{ color: 'white',
                 zIndex: 2 
                }}
            />

                    Filters
                </MenuItem>
                <SubMenu title="Components" >
                <MenuItem>Component 1</MenuItem>
                <MenuItem>Component 2</MenuItem>
                </SubMenu>
            </Menu>
        </ProSidebar>
     );
}
 
export default MobileFilter;


