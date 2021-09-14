const express      = require('express')
const cors         = require('cors')
const app          = express()
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi    = require('swagger-ui-express')
const multer       = require('multer')
var   MongoClient  = require('mongodb').MongoClient
var   database     = ''

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads")
        
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

const upload = multer({storage: storage})
	
app.use(cors())

const options = {
    definition: {
        openapi: '3.0.0',
        info   : {
            title  : 'Node Js Api Project for mongo db',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:8080/'
            }
        ]
    },
    apis: [
        './mongodb.js'
    ]
}

const swaggerSpec = swaggerJsDoc(options)

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.listen(8080, () => {
    MongoClient.connect('mongodb://localhost:27017' , { useNewUrlParser: true}, (error, result) => {
        if(error) throw error
        database = result.db('fyp')
        console.log('Connection Successfull')
    })
})

/**
 * @swagger
 * /:
 *  get:
 *      summary: This api is used to check if get method is working or not
 *      description: This api is used to check if get method is working or not
 *      responses:
 *          200:
 *              description: To test get method
 */

 app.get('/', (req, resp) => {
    resp.send('welcome to mongo db')
})


//************************************************************************************************************************/
//************************************************************************************************************************/
//********************************************* USER API SECTION *********************************************************/
//************************************************************************************************************************/
//************************************************************************************************************************/
/**
 * @swagger
 * components:
 *      schemas:
 *          Users:
 *              Type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                  name:
 *                      type: string
 *                  username:
 *                      type: string
 *                  email:
 *                      type: string
 *                  phone:
 *                      type: string
 *                  password:
 *                      type: string
 *                  address:
 *                      type: string
 *                  description:
 *                      type: string
 */


/**
 * @swagger
 * /api/users:
 *  get:
 *      summary: This api is used to fetch user records from the database
 *      description: This api is used to fetch user records from the database
 *      responses:
 *          200:
 *              description: To test get method
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/Users'
 */

app.get('/api/users', (req, resp) => {
    database.collection('users').find({}).toArray((err, result) => {
        if(err) throw err
        resp.send(result)

    })
})

/**
 * @swagger
 * /api/users{id}:
 *  get:
 *      summary: This api is used to fetch user records from the database
 *      description: This api is used to fetch user records from the database
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: numeric ID required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: To test get method
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/Users'
 */

 app.get('/api/users:id', (req, resp) => {
    database.collection('users').find({id: parseInt(req.params.id)}).toArray((err, result) => {
        if(err) throw err
        resp.send(result)

    })
})

/**
 * @swagger
 * /api/users/addUser:
 *  post:
 *      summary: This api is used to insert data into database
 *      description: This api is used to insert data into database
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/Users'
 *      responses:
 *          200:
 *              description: Added Successfully
 */

app.post('/api/users/addUser', upload.single("userImage"), (req, resp) => {
    let res = database.collection('users').find({}).sort({id: -1}).limit(1)
    res.forEach(obj => {
        if(obj){
            let user = {
                id       : obj.id + 1,
                firstName: req.body.firstName,
                lastName : req.body.lastName,
                username : req.body.username,
                email    : req.body.email,
                password : req.body.password,
                dob      : req.body.dob,
                gender   : req.body.gender,
                city     : req.body.city,
                credits  : 0
            }
            database.collection('users').insertOne(user, (err, result) => {
                if(err) resp.status(500).send(err)
                resp.send('Added Successfully')
            })
        }
    })
})


/**
 * @swagger
 * /api/users{id}:
 *  put:
 *      summary: This api is used to update data into database
 *      description: This api is used to updatee data into database
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: numeric ID required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/Users'
 *      responses:
 *          200:
 *              description: Updated Successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/Users'
 */

app.put('/api/users:id', (req, resp) => {
    let user   = {
        id       : parseInt(req.params.id),
        firstName: req.body.firstName,
        lastName : req.body.lastname,
        username : req.body.username,
        email    : req.body.email,
        password : req.body.password,
        dob      : req.body.dob,
        gender   : req.body.gender,
        city     : req.body.city,
        credits  : req.body.credits
    }

    database.collection('users').updateOne(
        {id: parseInt(req.params.id)},
        {$set: user},
        (err, result) => {
        if(err) throw err
        resp.send(user)

    })
})


/**
 * @swagger
 * /api/users{id}:
 *  delete:
 *      summary: This api is used to delete data into database
 *      description: This api is used to delete data into database
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: numeric ID required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Updated Successfully
 */

app.delete('/api/users:id', (req, resp) => {
    database.collection('users').deleteOne({id: parseInt(req.params.id)}, (err, result) => {
        if(err) throw err
        resp.send('Book is deleted')

    })
})

//************************************************************************************************************************/
//************************************************************************************************************************/
//****************************************** ADVISOR API SECTION *********************************************************/
//************************************************************************************************************************/
//************************************************************************************************************************/

 app.get('/api/advisors', (req, resp) => {
    database.collection('advisors').find({}).toArray((err, result) => {
        if(err) throw err
        resp.send(result)

    })
})

 app.get('/api/advisors:id', (req, resp) => {
    database.collection('advisors').find({id: parseInt(req.params.id)}).toArray((err, result) => {
        if(err) throw err
        resp.send(result)

    })
})

app.post('/api/advisors/addAdvisor', (req, resp) => {
    let res = database.collection('advisors').find({}).sort({id: -1}).limit(1)
    res.forEach(obj => {
        if(obj){
            let advisor = {
                id         : obj.id + 1,
                name       : req.body.name,
                username   : req.body.username,
                email      : req.body.email,
                phone      : req.body.phone,
                password   : req.body.password,
                address    : req.body.address,
                description: req.body.description
            }
            database.collection('advisors').insertOne(advisor, (err, result) => {
                if(err) resp.status(500).send(err)
                resp.send('Added Successfully')
            })
        }
    })
})

app.put('/api/advisors:id', (req, resp) => {
    let advisor   = {
        id         : parseInt(req.params.id),
        name       : req.body.name,
        username   : req.body.username,
        email      : req.body.email,
        phone      : req.body.phone,
        password   : req.body.password,
        address    : req.body.address,
        description: req.body.description,
    }

    database.collection('advisors').updateOne(
        {id: parseInt(req.params.id)},
        {$set: advisor},
        (err, result) => {
        if(err) throw err
        resp.send(advisor)

    })
})

app.delete('/api/advisors:id', (req, resp) => {
    database.collection('advisors').deleteOne({id: parseInt(req.params.id)}, (err, result) => {
        if(err) throw err
        resp.send('Successfully Deleted')

    })
})

//************************************************************************************************************************/
//************************************************************************************************************************/
//****************************************** Category API SECTION ********************************************************/
//************************************************************************************************************************/
//************************************************************************************************************************/

 app.get('/api/categories', (req, resp) => {
    database.collection('categories').find({}).toArray((err, result) => {
        if(err) throw err
        resp.send(result)

    })
})

 app.get('/api/categories:id', (req, resp) => {
    database.collection('categories').find({id: parseInt(req.params.id)}).toArray((err, result) => {
        if(err) throw err
        resp.send(result)

    })
})

app.post('/api/categories/addCategory', (req, resp) => {
    let res = database.collection('categories').find({}).sort({id: -1}).limit(1)
    res.forEach(obj => {
        if(obj){
            let category = {
                id         : obj.id + 1,
                name       : req.body.name,
                description: req.body.description
            }
            database.collection('categories').insertOne(category, (err, result) => {
                if(err) resp.status(500).send(err)
                resp.send('Added Successfully')
            })
        }
    })
})

app.put('/api/categories:id', (req, resp) => {
    let category   = {
        id         : parseInt(req.params.id),
        name       : req.body.name,
        description: req.body.description,
    }

    database.collection('categories').updateOne(
        {id: parseInt(req.params.id)},
        {$set: category},
        (err, result) => {
        if(err) throw err
        resp.send(category)

    })
})

app.delete('/api/categories:id', (req, resp) => {
    database.collection('categories').deleteOne({id: parseInt(req.params.id)}, (err, result) => {
        if(err) throw err
        resp.send('Successfully Deleted')

    })
})

//************************************************************************************************************************/
//************************************************************************************************************************/
//****************************************** Sub Category API SECTION ****************************************************/
//************************************************************************************************************************/
//************************************************************************************************************************/

app.get('/api/subCategories', (req, resp) => {
    database.collection('subCategories').find({}).toArray((err, result) => {
        if(err) throw err
        resp.send(result)

    })
})

app.get('/api/subCategories:id', (req, resp) => {
    database.collection('subCategories').find({id: parseInt(req.params.id)}).toArray((err, result) => {
        if(err) throw err
        resp.send(result)

    })
})

app.post('/api/subCategories/addSubCategory', (req, resp) => {
    let res = database.collection('subCategories').find({}).sort({id: -1}).limit(1)
    res.forEach(obj => {
        if(obj){
            let subCategory = {
                id         : obj.id + 1,
                categoryId : req.body.categoryId,
                name       : req.body.name,
                description: req.body.description
            }
            database.collection('subCategories').insertOne(subCategory, (err, result) => {
                if(err) resp.status(500).send(err)
                resp.send('Added Successfully')
            })
        }
    })
})

app.put('/api/subCategories:id', (req, resp) => {
    let subCategory   = {
        id         : parseInt(req.params.id),
        categoryId : req.body.categoryId,
        name       : req.body.name,
        description: req.body.description,
    }

    database.collection('subCategories').updateOne(
        {id: parseInt(req.params.id)},
        {$set: subCategory},
        (err, result) => {
        if(err) throw err
        resp.send(subCategory)

    })
})

app.delete('/api/subCategories:id', (req, resp) => {
    database.collection('subCategories').deleteOne({id: parseInt(req.params.id)}, (err, result) => {
        if(err) throw err
        resp.send('Successfully Deleted')

    })
})