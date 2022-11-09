import express, { json, urlencoded} from 'express'
import multer, { diskStorage } from 'multer'
import { create } from 'express-handlebars'
import loadProducts from './loadProducts.js'

const { Router } = express
const { productos, file } = loadProducts()
const context = {                    
  siteTitle:'APAPACHO',          
  siteSubTitle:'Diseño Infantil',
  description:`"Vestuario hecho a mano para apapachar a quienes amas"`,
  logo:'/assets/img/logo.jpg',
  logoTitle:'Logo Apapacho',
  navbarLinks:[
      {
          url:'/',
          title:'Inicio'
      },
      {
          url:'/productos',
          title:'Productos'
      },
      {
          url:'/tienda',
          title:'Tienda'
      }
  ], 
}

const PORT = 8080

const hbs = create({
  partialsDir: "views/partials/",    
  defaultLayout: 'main',
  helpers: {
    active(url,path){ 
      return path === url ? "active" : "" 
    },
    loadPage(v1,v2,opts){      
      return v1==v2 ? opts.fn(this) : opts.inverse(this) 
    }
  }  
})

const app = express()
      app.use(json())
      app.use(urlencoded({ extended: true }))
      app.use(express.static('public'))
      app.engine('handlebars',hbs.engine)
      app.set('view engine','handlebars')
      app.set("views", "./views")

const storageProductImage = diskStorage({
  destination: (req, file, cb) => {
    cb(null,'public/assets/img/')
  },
  filename: (req, file, cb) => {
    cb(null,file.originalname)
  }
})
const uploadProductImage = multer({storage:storageProductImage})

const routerProductos = new Router()
      routerProductos.use(json())

      routerProductos.get('/', (req, res) => {                       
        context.path=req.route.path
        res.render('home',context)
      })
      app.use('/', routerProductos)

      routerProductos.get('/tienda', (req, res) => {  
        context.path=req.route.path
        const data = {
          ...context,
          productos:productos
        }
        res.render("tienda",data);
      })
      app.use('/tienda', routerProductos)

      routerProductos.get('/productos', (req, res) => {  
        context.path=req.route.path
        if(productos.length>0){
          const data = {
            ...context,
            productos:productos
          }
          res.render("productos",data);
        } else {
          const data = {
            ...context            
          }
          res.render("productos",data);
        }
        
      })
      app.use('/productos', routerProductos)
     
      routerProductos.get('/tienda/producto/:id', (req, res) => {
        const id = parseInt(req.params.id)
        if(isNaN(id) || id <= 0){
          return res.send(`<h1>ERROR 404</h1><img src="https://http.cat/404" />`)
        } 
        context.path=req.route.path
        const producto = productos.find( p => p.id===id)
        const data = {
          ...context,
          productos:producto
        }
        res.render("producto",data)
      })
      app.use('/tienda/producto/:id', routerProductos)

      routerProductos.post('/productos', uploadProductImage.single('thumbnail'), (req, res,next) => {        
        try {
          const obj = JSON.parse(JSON.stringify(req.body))          
                obj.thumbnail = `/assets/img/${req.file.filename}`  
                const newProd = file.save(obj)                  
                      newProd.then( np => {
                        productos.push(np)
                        return res.redirect('/')
                      })      

        } catch (err) {
          const error = new Error(err)
          error.httpStatusCode = 400          
          return next(error)
        }
      })

const server = app.listen(PORT, () => {
          console.log(`🚀 Server started on PORT ${PORT} at ${new Date().toLocaleString()}`)
        }        
      );
      server.on("error", error => console.log(`Error al iniciar servidor, ${error}`))