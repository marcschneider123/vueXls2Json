<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<h1>xls-json-converter</h1>
                <h2>Converts .xlsx file to JSON</h2>
                <ol>
                    <li>Select File to convert (<a href="demodata/items.xlsx">example .xlsx file</a>)</li>
                    <li>Upload</li>
                    <li>Copy output</li>
                </ol>
				<vue-xlsx-table @on-select-file="handleSelectedFile">Select file</vue-xlsx-table>
			</div>
			<div class="col-12">
                <h1 class="pt-5">output</h1>
                <button class="btn btn-sm btn-secondary" type="button" title="Copy Code"
					v-clipboard="JSON.stringify(output)"
					@success="clipboardSuccessHandler">
                    copy JSON
                </button>
                <pre v-text="output" class="border mt-3">
                </pre>
			</div>
		</div>
	</div>
</template>
<script>

    import moment from 'moment'
	import {clipboard} from 'vue-clipboards'

	export default {
        computed: {
        	//calculate next month
		    nextMonth(){
		    	let nextMonth = moment(new Date()).add(1, 'month')
		    	return nextMonth.startOf('month').format("DD.MM.YYYY") + ' - ' + nextMonth.endOf('month').format("DD.MM.YYYY")
            }
        },
		data() {
			return {
                month: new Date(),
				output: {
					'infotext':{
						'time': ''
                    },
                    'categories':{
                        'premium' : {},
                        'quality' : {},
                        'budget' : {}
					}
				}
			}
		},
        directives: {clipboard},
		methods: {
			handleSelectedFile (convertedData) {
			    console.log(convertedData.body)
                this.formatOutput(convertedData.body)

			},
			formatOutput(categories){
				this.output.infotext.time = this.nextMonth
				categories.forEach((val) => {
					this.output['categories'][val.category][val.name] = val
				})
			},
			clipboardSuccessHandler(e) {
				alert('JSON copied to clipboard!')
			}
		}
	}
</script>
