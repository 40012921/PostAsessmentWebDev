var express = require('express');
var app = express() ;
var hotellist= require('./hotels.json')
var cors = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  }
app.use(cors);
app.get ("/showAll",function(req,res){
    res.status(200).send(hotellist);
})
app.get("/showByCity",function(req,res){
    var hotelcity = req.query.hotelcity;
    var newHotelList =[] ;
    hotellist.forEach(hotel=>{
        if (hotel.hotelcity==hotelcity)
            newHotelList.push(hotel);
    });
    res.status(200).send(newHotelList);
})
app.get("/showByCuisine",function(req,res){
    var cuisine = req.query.cuisine;
    var newHotelList =[] ;
    hotellist.forEach(hotel=>{
        if (hotel.cuisine==cuisine)
            newHotelList.push(hotel);
    });
    res.status(200).send(newHotelList);
})
app.get("/showByType",function(req,res){
    var type = req.query.type;
    var newHotelList =[] ;
    hotellist.forEach(hotel=>{
        if (hotel.type==type)
            newHotelList.push(hotel);
    });
    res.status(200).send(newHotelList);
})
app.listen('3000',function(){
    console.log('server is listening to por 3000')
})