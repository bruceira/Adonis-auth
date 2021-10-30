
import  UserValidator  from 'App/Validators/UserValidator';

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import  user  from 'App/Models/user';


export default class PagesController {

  public login({view}:HttpContextContract){
    return view.render("login")
  }

  public signup({ view }:HttpContextContract){
    return view.render("signup")
  }

  public authSignup= async ({ request,response })=>{


    const payload = await request.validate(UserValidator)

    await user.create(payload)

    response.redirect().back()
  }

  public authLogin = async({ request,response,auth })=>{

    const {email,password} = await request.all()


    await auth.attempt(email,password)



    response.redirect().back()
  }


}
