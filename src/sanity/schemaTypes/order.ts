const orderSchema = {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'customer',
        title: 'Customer',
        type: 'reference',
        to: [{ type: 'customer' }],
      },
      {
        name: 'firstName', // Add this field
        title: 'Customer First Name',
        type: 'string',
      },
      {
        name: 'secondName', // Add this field
        title: 'Customer Second Name',
        type: 'string',
      },
      {
        name: 'items',
        type: 'array',
        title: 'Items',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'id',
                type: 'string',
                title: 'Product ID',
              },
              {
                name: 'product_name',
                type: 'string',
                title: 'Product Name',
              },
              {
                name: 'product_price',
                type: 'number',
                title: 'Product Price',
              },
              {
                name: 'product_color',
                type: 'string',
                title: 'Product Color',
              },
              {
                name: 'product_quantity',
                type: 'number',
                title: 'Product Quantity',
              },
              {
                name: 'product_size',
                type: 'string',
                title: 'Product Size',
              },
              {
                name: 'product_total',
                type: 'number',
                title: 'Product Total',
              },
              {
                name: 'product_image', // Add this field for the image
                type: 'image',
                title: 'Product Image',
              },
            ],
          },
        ],
      },
      {
        name: 'order_date',
        type: 'datetime',
        title: 'Order Date',
      },
      {
        name: 'total_amount',
        title: 'Total Amount',
        type: 'number',
      },
    ],
  };
  
  export default orderSchema;
  