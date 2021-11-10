const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Apparel' }, // clothing items like scarves, socks, shirts, dresses
        { name: 'Accessories' }, // things like pins, glasses, belts
        { name: 'Bags' }, // clutches, purses, totes
        { name: 'Beauty' }, // skincare and makeup products
        { name: 'Home Deco' } // pillows, blankets, candles, lights, etc
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Blue Gold Boho Mandala Hoodie ',
            description:`Our blue & gold boho mandala hoodie is custom-made-to-order and handcrafted to the highest quality standards. This spiritual pull over sweater features golden mandalas on a blue grunge background.`,
            origin: `Made in USA`,
            image: 'MandalaHoodie.jpg',
            category: categories[0]._id,
            price: 28.00,
            quantity: 15
        },
        {
            name: 'Cottage-core Two Piece Fall Sweater Plaid Wool Dress',
            description:
                `Woven and Sewn Palm handmade by artisans in Mexico. Its traditional fedora style crown with a relatively short brim. The custom piping consisting of discarded and up-cycled fabric.
                100% Palm
                
                3” brim`,
            origin: `Made in USA`,
            image: 'CottageDress.jpg',
            category: categories[0]._id,
            price: 70.00,
            quantity: 5
        },
        {
            name: 'Beautiful Swarovski Crystals and Fresh Water Pearls Jewelry Set',
            category: categories[1]._id,
            description:
                `Beautiful and elegant set made with the highest quality imported Swarovski crystals and fresh water pearls.`,
            origin: `N/A`,
            image: 'JewelrySet.jpg',
            price: 100.00,
            quantity: 20
        },
        {
            name: 'Linen Face Mask',
            category: categories[1]._id,
            description:
                `BALTIC BLOOM masks are high quality masks sewn with love and care; we are using high quality stone washed linen in many color variations.`,
            origin: `N/A`,
            image: 'FaceMask.jpg',
            price: 6.00,
            quantity: 5
        },
        {
            name: `Wooden Watch`,
            category: categories[1]._id,
            description:
                `This WILD wood watch is precision crafted from sandalwood and features a wooden strap finely polished to bring out the grain and colour of the natural wood. This timepiece features modern and timeless design with a stylish black face that features hourly markers, calendar date, day of the week and 24-hour display. The Gold trims provide a unique blend of vintage and modern design.`,
            origin: `Made in USA`,
            image: 'WoodWatch.jpg',
            price: 200.00,
            quantity: 3
        },
        {
            name: 'Handmade Felted Handbag',
            category: categories[2]._id,
            description:
                `Elegant everyday bags with an interesting and unusual style, with elements of embroidery and three-dimensional felting. Comfortable to wear on the shoulder. Inside lining fabric , pocket for mobile phone, magnetic closure. Handmade from 100% wool. There is a hard bottom. Width Approx: 42 cm; 16.5 inches Height Approx: 32 cm; 12.5 inches For best result, hand wash in cold water and hang dry in the shade. PLEASE NOTE: The colors of some picture may slightly vary on different monitors. If you have any questions please do not hesitate to contact me!!! Is it a treat to yourself or a gift to your best friend. Thank you for visiting my shop.`,
            origin: `Made in USA`,
            image: 'MushroomBag.jpg',
            price: 29.95,
            quantity: 15
        },
        {
            name: 'Long Handle Shoulder Graphite Felt Bag',
            category: categories[2]._id,
            description:
                `Limited Edition Felt & Wood III is a Graphite Felt Bag designed with a long belt made of washable paper and wooden (oak) handle. It is an original design handmade using a magnetic snap and the user’s comfort
                in mind.
                
                It has modern mobility and thoughtful design. It is designed with innovative features and high-end felt materials for you to carry your littlethings with comfort and style. Try carrying them in your hands or use the long belt to carry your bag on your shoulder. It’s perfect for a walk in your neighborhood or uses them for professional purposes.
                `,
            origin: `Made in USA`,
            image: 'CrossBody.jpg',
            price: 68.00,
            quantity: 3
        },
        {
            name: 'Virgin Prickly Pear Organic Seed Oil',
            category: categories[3]._id,
            description:
                `Virgin Prickly Pear Seed Oil Organic (cold pressed, unrefined) - secret of super hydrated skin, brightening, wrinkle-reducing, glowing skin.
                New Hot Beauty Miracle Product - Prickly Pear Seed Oil, also known as: Cactus seed Oil, Barbary fig oil, Indian fig oil! The secret to super hydrated skin that comes from the desert.
                
                Prickly Pear Seed Oil is one of the most expensive beauty oils in the world.
                
                Prickly Pear Oil is great for all skin types, and especially for mature skin. It is amazing oil for both people who want to start preventable care for anti-aging and people who address the signs of aging. You will feel the immediate skin-softening effects and your skin will glow.`,
            origin: `Made in USA`,
            image: 'SkinCare.jpg',
            price: 22.00,
            quantity: 25
        },
        {
            name: 'Boho Wall Décor',
            category: categories[4]._id,
            description: 'Original handmade oil painting, frameless/unstretched.',
            origin: `N/A`,
            image: 'OriginalPainting.jpg',
            price: 150.00,
            quantity: 30
        },
        {
            name: 'Retro Eclectic Colorful Ceramic Vase',
            category: categories[4]._id,
            description:`Approximately 3-3.5" tall. These are bud vases, not full size vases. Handmade decorated. BIG size vases are 5" tall. These aren't the smaller bud vases, and are more comparable to a regular sized vase that holds more flowers.`,
            origin: `Made in USA`,
            image: 'CeramicVase.jpg',
            price: 50.00,
            quantity: 15
        },
        {
            name: 'Special Design Gold Mirrored Large Wall Clock',
            category: categories[4]._id,
            description:`It will illuminate your home, living room, bedroom or office, add a beautiful image and make you happy.`,
            origin: `Made in USA`,
            image: 'WallClock.jpg',
            price: 180.00,
            quantity: 10
        },
        {
            name: 'Ceramic Hanging Flower Plant',
            category: categories[4]._id,
            description:`Creative Ceramic Hanging Flower Plant Pots sloth Animal Vase decoration.`,
            origin: `Made in the USA`,
            image: 'HangingFlower.jpg',
            price: 45.00,
            quantity: 12
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