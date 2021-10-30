

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'



Route.get('/', async ({ view }) => {
  return view.render('welcome')
})


Route.get('/signUp', "PagesController.signup")

Route.get("/login","PagesController.login")



Route.post("/signUp","PagesController.authSignup")
Route.post("/login" ,"PagesController.authLogin")



// Route.post("/signUp",async ({ request,response })=>{

//   const payload = await request.validate(UserValidator)

//   await user.create(payload)

//   response.redirect().back()

// })


// Route.post("/login",async ({ request,response ,auth })=>{


// const {email,password} = request.all()


// await auth.attempt(email,password)


//   response.redirect().back()

// })