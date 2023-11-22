import {defineType} from 'sanity'
import returnFields from './returnFields'
const accessories = defineType({
  name: 'accessories',
  type: 'document',
  title: 'Accessories',
  fields: returnFields(),
})

export default accessories
