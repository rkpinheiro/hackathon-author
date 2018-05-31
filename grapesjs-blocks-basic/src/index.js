import grapesjs from 'grapesjs';

export default grapesjs.plugins.add('gjs-blocks-basic', (editor, opts = {}) => {
  const config = {
    blocks: ['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video', 'map'],
    flexGrid: 0,
    stylePrefix: 'gjs-',
    addBasicStyle: true,
    category: 'Basic',
    labelColumn1: '1 Coluna',
    labelColumn2: '2 Colunas',
    labelColumn3: '3 Colunas',
    labelColumn37: '2 Colunas 3/7',
    labelText: 'Texto',
    labelLink: 'Link',
    labelImage: 'Imagem',
    labelVideo: 'Video',
    labelMap: 'Mapa',
    ...opts
  };

  // Add blocks
  const loadBlocks = require('./blocks');
  loadBlocks.default(editor, config);

});
