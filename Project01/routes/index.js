import { Router } from "express";
import logIn from "../public/javascripts/login";

const express = require("express");
const app = express();

app.get('/login', function(req, res){
  const root = document.querySelector("#container");
  root.innerHTML = await logIn.getHtml();
});