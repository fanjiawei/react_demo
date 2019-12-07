import React from 'react';
import ReactDOM from 'react-dom';
import map from 'lodash-es/map';
import styles from './index.module.scss';

const element = document.createElement('div');
ReactDOM.render(<main>
    <h1 className={styles.title}>Hello World!<small>sub title</small></h1>
    {
        map([
            {name: '张三'},
            {name: '李四'},
            {name: '王五'}
        ], i => <div>{i.name}</div>)
    }
</main>, element);

document.body.appendChild(element);
