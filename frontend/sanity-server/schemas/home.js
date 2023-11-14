// /schemas/product.js (.ts)

import {defineType} from 'sanity'
import returnFields from './returnFields'
const home = defineType({
  name: 'home',
  type: 'document',
  title: 'Home',
  fields: returnFields(),
})

export default home
