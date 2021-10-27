import { Router } from "express";
import compatibility1 from "../models/compatibility1.js";
import compatibility2 from "../models/compatibility2.js";
import compatibility3 from "../models/compatibility3.js";
import compatibility4 from "../models/compatibility4.js";
import compatibility5 from "../models/compatibility5.js";
import {
  compatibilityMessage1,
  compatibilityMessage2,
  compatibilityMessage3,
  compatibilityMessage4,
  compatibilityMessage5,
  successfulMessage,
} from "../compatibility.mesages/messages.js";

const compatibilityRoute = Router();

compatibilityRoute.post("/compatibilityroute", async function (req, res) {
  try {
    const data = JSON.stringify(req.body);
    const selectedComponents = await compatibility1.findOne({ name: data });

    if (selectedComponents) {
      res.status(201).json({
        message: compatibilityMessage1,
      });
    } else {
      const selectedComponents2 = await compatibility2.findOne({ name: data });
      if (selectedComponents2) {
        res.status(201).json({
          message: compatibilityMessage2,
        });
      } else {
        const selectedComponents3 = await compatibility3.findOne({
          name: data,
        });
        if (selectedComponents3) {
          res.status(201).json({
            message: compatibilityMessage3,
          });
        } else {
          const selectedComponents4 = await compatibility4.findOne({
            name: data,
          });
          if (selectedComponents4) {
            res.status(201).json({ message: compatibilityMessage4 });
          } else {
            const selectedComponents5 = await compatibility5.findOne({
              name: data,
            });
            if (selectedComponents5) {
              res.status(201).json({ message: compatibilityMessage5 });
            } else {
              res.status(201).json({ message: successfulMessage });
            }
          }
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
});

export default compatibilityRoute;
