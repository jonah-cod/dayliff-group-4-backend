import RouteModel from "../models/routes.js";
import { idGenerator } from "../utilities/idGenerator.js";

export async function getRoutesControllers(req, res) {
  try {
    let definedRoutes = await RouteModel.find();
    res.json(definedRoutes);
  } catch (error) {
    console.log(error);
  }
}

export async function postNewRouteController(req, res) {
  let route = req.body;
  try {
    let newRoute = new RouteModel({...route, route_id:idGenerator()});
    await newRoute.save();
    res.json({succes:true, message: "route saved"});
  } catch (error) {
    console.log(error);
  }
}

export async function updateRouteController(req, res){
      try {
            let updatedRoute = req.body;
            const { route_id} = req.params;
            let result = await RouteModel.findOneAndUpdate({route_id: route_id}, updatedRoute)
            res.json(result);
      } catch (error) {
            console.log(error)
      }
}

export async function deleteRouteController(req, res){
      let { route_id } = req.params;

      try {
            let result = await RouteModel.deleteOne({route_id});
            let { deletedCount, acknowledged} = result;
        if (acknowledged && deletedCount) {
            res.json({success: true, message:"route deleted"});
        }else{
            res.json({success: false, message: "failed"})
        }
      } catch (error) {
            console.log(error)
      }
}
