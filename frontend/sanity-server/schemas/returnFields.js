import {defineField, defineArrayMember} from 'sanity'

const returnFields = () => {
  const fields = [
    defineField({
      name: 'document',
      type: 'string',
      title: 'Document',
    }),
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        defineArrayMember({
          name: 'header',
          type: 'object',
          title: 'Header',
          fields: [
            {
              name: 'category',
              type: 'string',
              title: 'Category',
            },
            {
              name: 'description',
              type: 'string',
              title: 'Description',
            },
            {
              name: 'products',
              type: 'array',
              title: 'Products',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'tag',
                  fields: [
                    {type: 'string', name: 'label'},
                    {type: 'image', name: 'url'},
                    {type: 'string', name: 'price'},
                    {type: 'string', name: 'stars'},
                    {type: 'boolean', name: 'isFavorite'},
                    {type: 'boolean', name: 'isInCart'},
                  ],
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ]
  return fields
}

export default returnFields
