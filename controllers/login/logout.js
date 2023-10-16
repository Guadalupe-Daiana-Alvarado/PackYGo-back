import User from "../../models/User.js";

const signOutController =  async (req,res,next)=>{
    console.log('REQQ', req)
  try {
    await User.findOneAndUpdate(
      {email:req.user.email},
      {online:false}
    ).save()
    return res.status(200).json({
      message:'User signout!'
    })
  } catch (error) {
    next (error)
  }
}

export default signOutController