const _ = require('lodash');
Vue.use(require('vue-moment'));
import vueXlsxTable from 'vue-xlsx-table'
Vue.use(vueXlsxTable, {rABS: false}) //Browser FileReader API have two methods to read local file readAsBinaryString and readAsArrayBuffer, default rABS false

import xlsJsonConverter from './components/xlsJsonConverter';

const app = new Vue({
	el: '#app',
	components: {
		xlsJsonConverter
	}
});
