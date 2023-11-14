// /schemas/product.js (.ts)

import {defineType} from 'sanity'
import returnFields from './returnFields'
const men = defineType({
  name: 'men',
  type: 'document',
  title: 'Men',
  fields: returnFields(),
})

export default men
