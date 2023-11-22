import {defineType} from 'sanity'
import returnFields from './returnFields'
const kids = defineType({
  name: 'kids',
  type: 'document',
  title: 'Kids',
  fields: returnFields(),
})

export default kids
