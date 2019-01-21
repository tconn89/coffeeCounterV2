import {
    TopAppBar,
    TopAppBarNavigationIcon,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
} from '@rmwc/top-app-bar';

import React from 'react';

export default class TopNav extends React.Component {
    render() {
        return (
            <TopAppBar style={{backgroundColor: 'green'}}>
                <TopAppBarRow>
                    <TopAppBarSection>
                    <TopAppBarNavigationIcon
                        icon="menu"
                        onClick={this.props.onMenuIconClick}
                    />
                    <TopAppBarTitle>Coffees Drank Today</TopAppBarTitle>
                    </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>
        );
    }
}
