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
            _id: '1',
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
            _id: '2',
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
            _id: '3',
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
            _id: '4',
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
            _id: '5',
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
            _id: '6',
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
            _id: '7',
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