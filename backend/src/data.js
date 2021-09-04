import bcrypt from 'bcryptjs'

const data = {
    users:[
        {
          name: 'admin',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'job',
          email: 'job@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
    ],

    products:[
        {
            name: 'black-shoes',
            category: 'tenis',
            image: '/images/black-shoes.jpg',
            price: 220,
            countInStock: 20,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: ' Novo tenis moderno'
        },

        {
            name: 'blue-jeans',
            category: 'Calsa feminina',
            image: '/images/blue-jeans.jpg',
            price: 120,
            countInStock: 0,
            brand: 'jensfamini',
            rating: 4.8,
            numReviews: 15,
            description: ' jeans feminino elegante'
        },

        {
            name: 'brown-basic',
            category: 'roupa',
            image: '/images/brown-basic.jpg',
            price: 70,
            countInStock: 15,
            brand: 'NewStyle',
            rating: 4.5,
            numReviews: 8,
            description: ' Blusa feminina preta descolada'
        },

        {
            name: 'brown-men',
            category: 'tenis',
            image: '/images/brown-men.jpg',
            price: 300,
            countInStock: 10,
            brand: 'Adidas',
            rating: 4.8,
            numReviews: 10,
            description: '  Tenis Adidas esporte fino'
        },

        {
            name: 'gray-basic',
            category: 'Calsa feninina',
            image: '/images/gray-basic.jpg',
            price: 200,
            countInStock: 10,
            brand: 'new jens',
            rating: 3.8,
            numReviews: 12,
            description: '  Calsa feminina jens azul'
        },

        {
            name: 'spring-jacket',
            category: 'Jaqueta',
            image: '/images/spring-jacket.jpg',
            price: 350,
            countInStock: 8,
            brand: 'boy',
            rating: 4.5,
            numReviews: 11,
            description: 'jaqueta masculino '
        },

        {
            name: 'torn-jeans',
            category: 'calsa jeans',
            image: '/images/torn-jeans.jpg',
            price: 250,
            countInStock: 9,
            brand: 'boy',
            rating: 4.0,
            numReviews: 10,
            description: 'Calsa masculina azul '
        },
    ]
}

export default data;