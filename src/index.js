// import _ from 'lodash';
import './style.css';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = ``;

  return element;
}

document.body.appendChild(component());
var editor = grapesjs.init({
  container : '#gjs',
  plugins: ['gjs-blocks-basic'],
  pluginsOpts: {
    'gjs-blocks-basic': {/* ...options */}
  },
  components: '<div class="txt-red">Hello world!</div>',
  style: '',
});
var blockManager = editor.BlockManager;

/**BLOCOS */
blockManager.add('Título 1', {
label: 'Título 1',
content: '<h1>Título 1</h1>',
});