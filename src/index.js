import _ from 'lodash';
import './style.css';
import './iconfont/iconfont.css';
import Avatar from './avatar.png';
// import Test from './data/test.json';
import XmlData from './data/data.xml';
import printMe from './print.js';
import {cube} from './math.js';

const obj = {
    component: function () {
        var element = document.createElement('div');

        // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
        element.innerHTML = _.join([
            'Hello', 'webpack'
        ], ' ');
        element.classList.add('hello');

        const avatar = new Image();
        avatar.src = Avatar;
        console.log(Avatar);

        element.appendChild(avatar);

        const iconfont = document.createElement('i');

        iconfont.classList.add('iconfont');
        iconfont.classList.add('icon-check-circle');
        document.body.appendChild(iconfont);

        console.log(XmlData);
        console.log(XmlData.constructor);

        const btn = document.createElement('button');
        btn.innerHTML = 'Click me and check the console!';
        btn.onclick = printMe;
        element.appendChild(btn);
        return element;
    }
}
console.log(module);
console.log(module.hot);
if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    });
}

document.body.appendChild(obj.component());
