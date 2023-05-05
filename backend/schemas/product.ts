export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'coconut', value: 'coconut'},
          {title: 'fruits', value: 'fruits'},
          {title: 'creamer', value: 'creamer'},
        ],
      },
    },
    {
      name: 'bin',
      title: 'Bin',
      type: 'string',
      options: {
        list: [
          {title: 'A1', value: 'A1'},
          {title: 'A2', value: 'A2'},
          {title: 'A3', value: 'A3'},
          {title: 'A4', value: 'A4'},
          {title: 'A5', value: 'A5'},
          {title: 'A6', value: 'A6'},
        ],
      },
    },
    {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
  ],
}
