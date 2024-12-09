import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'Pages',
  fields: [
    {
      label: 'Page Name',
      name: 'title',
      type: 'text',
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'content',
          fields: [
            {
              name: 'SomeTextField',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          label: 'tab 2',
          fields: [
            {
              name: 'numberField',
              type: 'number',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
