const customerSchema = {
    name: 'customer',
    title: 'Customer',
    type: 'document',
    fields: [
      {
        name: 'firstName',
        type: 'string',
        title: 'First Name',
      },
      {
        name: 'secondName',
        type: 'string',
        title: 'Second Name',
      },
      {
        name: 'country',
        type: 'string',
        title: 'Country',
      },
      {
        name: 'address',
        type: 'text',
        title: 'Address',
      },
      {
        name: 'city',
        type: 'string',
        title: 'City',
      },
      {
        name: 'province',
        type: 'string',
        title: 'Province',
      },
      {
        name: 'zipCode',
        type: 'string',
        title: 'Zip Code',
      },
      {
        name: 'phone',
        type: 'string',
        title: 'Phone',
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
      },
    ],
  };
  
  export default customerSchema;
  