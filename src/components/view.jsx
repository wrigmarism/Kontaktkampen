import React, {Component} from "react";
import {db} from "../services/firebase";

export function getView(view){
    try {
        const v = db.collection("views").doc(view).get();
        return v.data();
      } catch (error) {
        console.error("Error fetching user", error);
      }
    }
