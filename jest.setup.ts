import { config } from '@vue/test-utils'
import { DatePicker } from 'ant-design-vue'
config.global.components = {
  'a-date-picker': DatePicker,
}
