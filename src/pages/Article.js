import '../css/article.css';

import React from 'react';
import {Typography} from '@rmwc/typography';

export default class Article extends React.PureComponent {
    render() {
        return (
            <div className="article">
                <Typography use="headline4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </Typography>
                <Typography use="subtitle1">
                    <p>Duis ac ultrices enim</p>
                </Typography>
                <Typography use="body1">
                    <p>Duis at ex quis libero placerat semper. Phasellus a sem egestas, pellentesque metus auctor, scelerisque magna. Donec vestibulum erat sit amet ipsum consequat, eget suscipit libero pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum semper varius. Duis quis nibh massa. Pellentesque faucibus, libero at laoreet accumsan, velit risus commodo sapien, nec molestie libero ipsum vitae diam. Donec congue libero a vehicula euismod. Duis efficitur maximus faucibus. Proin tempus, enim eget accumsan egestas, ante arcu luctus ligula, eget maximus lorem dolor at est. Nulla commodo mauris et urna volutpat, eu dictum tortor iaculis. Aenean semper gravida dolor rhoncus pulvinar. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    <p>Maecenas convallis tempus mi vitae pellentesque. Nam porttitor tortor mauris, a pulvinar nisl blandit nec. Curabitur ac egestas urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse gravida erat ac dui sagittis, et porttitor diam elementum. Donec sodales tellus non eros convallis volutpat. Morbi scelerisque metus nec porttitor viverra.</p>
                    <p>Maecenas aliquam eleifend eleifend. Aliquam non massa nibh. Maecenas nec fringilla dui. Maecenas ipsum metus, lacinia ut sem vitae, vulputate varius ante. Curabitur id facilisis dolor, quis vestibulum dolor. Nullam vel pretium nunc. Curabitur elit nulla, dignissim et est quis, tincidunt luctus ipsum. Cras iaculis luctus congue. Fusce cursus risus ac viverra porttitor. Vivamus porta, mauris at porttitor sollicitudin, erat ante tristique augue, id porta eros quam ut elit. Morbi mollis faucibus cursus.</p>
                    <p>In sit amet urna mi. In luctus est pharetra bibendum pretium. Maecenas malesuada ante at eros placerat, id porttitor sapien vulputate. Nam pellentesque faucibus tortor quis vulputate. Quisque in ullamcorper risus. Integer commodo non nunc id varius. Etiam ultricies pharetra luctus. Aenean vestibulum ipsum at scelerisque fringilla. Maecenas sodales enim eros, sed mattis diam fermentum ac.</p>
                    <p>Nunc at neque sed augue cursus finibus. Curabitur at vulputate mauris, in consequat nisi. Nam lacinia dui fermentum, interdum massa vitae, consequat mauris. Quisque aliquam tristique dolor a ullamcorper. Sed est mi, feugiat vitae elit ultrices, aliquet tristique lorem. Aenean tristique pellentesque mattis. Quisque dapibus enim molestie tempus mollis. Sed porttitor, magna eget tempor scelerisque, magna ipsum sagittis purus, ut dignissim nunc purus quis nulla. Nulla viverra risus vitae massa fringilla, a euismod augue tempus. Pellentesque id placerat lorem, sit amet accumsan erat. Nullam pretium pellentesque enim. Nullam nec ultrices neque. Fusce vel facilisis purus, nec facilisis nisi. Vivamus molestie quis lacus ac fermentum.</p>
                </Typography>
            </div>
        );
    }
}