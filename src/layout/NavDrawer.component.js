import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerSubtitle,
    DrawerTitle,
} from '@rmwc/drawer';
import {
    List,
    ListItem,
} from '@rmwc/list';

import {Link} from 'react-router-dom';
import React from 'react';
import {routes} from '../Routes';

export default class NavDrawer extends React.Component {
    render() {
        const {onClose, open} = this.props;

        return (
            <Drawer modal onClose={onClose} open={open}>
                <DrawerHeader>
                    <DrawerTitle>DrawerHeader</DrawerTitle>
                    <DrawerSubtitle>Subtitle</DrawerSubtitle>
                </DrawerHeader>
                <DrawerContent>
                    <List>
                        {
                            routes
                                .filter((route) => (route.leftNav))
                                .map((route) => (
                                    <ListItem key={route.path} tag={Link} to={route.path}>{route.name}</ListItem>
                                ))
                        }
                    </List>
                </DrawerContent>
            </Drawer>
        );
    }
}