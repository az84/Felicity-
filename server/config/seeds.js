const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'wedding pacakges' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'skincare',
      description:
        '',
      image: '',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: '',
      description:
        '',
      image: '',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'cake',
      category: categories[1]._id,
      description:
        'display',
      image: '',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Soap',
      category: categories[1]._id,
      description:
        'display',
      image: 'soap.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 's',
      category: categories[1]._id,
      description:
        '',
      image: '',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'xyz',
      category: categories[2]._id,
      description:
        'display',
      image: '',
      price: 399.99,
      quantity: 30
    },
    {
      name: '',
      category: categories[2]._id,
      description:
        '',
      image: '',
      price: 199.99,
      quantity: 30
    },
    {
      name: '',
      category: categories[3]._id,
      description:
        '.',
      image: '',
      price: 9.99,
      quantity: 100
    },
    {
      name: '',
      category: categories[4]._id,
      description: '',
      image: '',
      price: 1.99,
      quantity: 1000
    },
    {
      name: '',
      category: categories[4]._id,
      description:
        '',
      image: '',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        '',
      image: '',
      price: 7.99,
      quantity: 100
    },
    {
      name: '',
      category: categories[4]._id,
      description:
        '',
      image: '',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
