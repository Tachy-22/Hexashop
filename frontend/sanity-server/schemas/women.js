import {defineType} from 'sanity'
import returnFields from './returnFields'
const women = defineType({
  name: 'women',
  type: 'document',
  title: 'Women',
  fields: returnFields(),
})

export default women
