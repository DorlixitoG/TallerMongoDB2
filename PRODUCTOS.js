use('Supermercado')

// CRUD

// db.Productos.insertMany([
    
//         {
//           "Nombre": "Arroz",
//           "Descripcion": "Arroz blanco, 1 kg.",
//           "Categoria": "Granos",
//           "Precio": 2.99,
//           "Ventas": [
//             {
//               "DetalleVenta": "Compra de productos de limpieza",
//               "FechaHora": [
//                 {
//                   "Fecha": "2023-10-12",
//                   "Hora": "12:00:00"
//                 },
//                 {
//                   "Fecha": "2023-10-14",
//                   "Hora": "14:00:00"
//                 }
//               ],
//               "TotalPagar": 80,
//               "TipoPago": "transaccion",
//               "EstadoVenta": "realizado"
//             }
//           ]
//         },
//         {
//           "Nombre": "Aceite de Oliva",
//           "Descripcion": "Aceite de oliva virgen extra, 500 ml.",
//           "Categoria": "Aceites",
//           "Precio": 4.99,
//           "Ventas": [
//             {
//               "DetalleVenta": "Venta a cliente regular",
//               "FechaHora": [
//                 {
//                   "Fecha": "2023-10-15",
//                   "Hora": "10:30:00"
//                 }
//               ],
//               "TotalPagar": 15,
//               "TipoPago": "tarjeta",
//               "EstadoVenta": "realizado"
//             }
//           ]
//         },
//         {
//           "Nombre": "Lavadora",
//           "Descripcion": "Lavadora de carga frontal, 8 kg.",
//           "Categoria": "Electrodomésticos",
//           "Precio": 399.99,
//           "Ventas": [
//             {
//               "DetalleVenta": "Venta promocional",
//               "FechaHora": [
//                 {
//                   "Fecha": "2023-10-10",
//                   "Hora": "15:45:00"
//                 }
//               ],
//               "TotalPagar": 349.99,
//               "TipoPago": "transaccion",
//               "EstadoVenta": "realizado"
//             }
//           ]
//         },
//         {
//           "Nombre": "Manzanas",
//           "Descripcion": "Manzanas frescas, 1 kg.",
//           "Categoria": "Frutas",
//           "Precio": 3.49,
//           "Ventas": [
//             {
//               "DetalleVenta": "Venta de frutas al por mayor",
//               "FechaHora": [
//                 {
//                   "Fecha": "2023-10-11",
//                   "Hora": "09:15:00"
//                 }
//               ],
//               "TotalPagar": 50,
//               "TipoPago": "efectivo",
//               "EstadoVenta": "realizado"
//             }
//           ]
//         },
//         {
//           "Nombre": "Televisor LED",
//           "Descripcion": "Televisor LED de 55 pulgadas, 4K",
//           "Categoria": "Electrónica",
//           "Precio": 799.99,
//           "Ventas": [
//             {
//               "DetalleVenta": "Venta especial de electrónicos",
//               "FechaHora": [
//                 {
//                   "Fecha": "2023-10-09",
//                   "Hora": "18:30:00"
//                 }
//               ],
//               "TotalPagar": 699.99,
//               "TipoPago": "transaccion",
//               "EstadoVenta": "realizado"
//             }
//           ]
//         },
//         {
//           "Nombre": "Camiseta",
//           "Descripcion": "Camiseta de algodón, talla M",
//           "Categoria": "Ropa",
//           "Precio": 14.99,
//           "Ventas": [
//             {
//               "DetalleVenta": "Venta de ropa de temporada",
//               "FechaHora": [
//                 {
//                   "Fecha": "2023-10-13",
//                   "Hora": "14:15:00"
//                 }
//               ],
//               "TotalPagar": 20.99,
//               "TipoPago": "tarjeta",
//               "EstadoVenta": "realizado"
//             }
//           ]
//         },
//         {
//           "Nombre": "Ordenador portátil",
//           "Descripcion": "Portátil de alto rendimiento, 15 pulgadas",
//           "Categoria": "Electrodomésticos",
//           "Precio": 999.99,
//           "Ventas": [
//             {
//               "DetalleVenta": "Venta a cliente corporativo",
//               "FechaHora": [
//                 {
//                   "Fecha": "2023-10-14",
//                   "Hora": "09:30:00"
//                 }
//               ],
//               "TotalPagar": 899.99,
//               "TipoPago": "transaccion",
//               "EstadoVenta": "realizado"
//             }
//           ]
//         },
//         {
//           "Nombre": "Pantalones vaqueros",
//           "Descripcion": "Pantalones vaqueros, talla 32",
//           "Categoria": "Ropa",
//           "Precio": 29.99,
//           "Ventas": [
//             {
//               "DetalleVenta": "Venta de ropa casual",
//               "FechaHora": [
//                 {
//                   "Fecha": "2023-10-16",
//                   "Hora": "17:00:00"
//                 }
//               ],
//               "TotalPagar": 34.99,
//               "TipoPago": "efectivo",
//               "EstadoVenta": "realizado"
//             }
//           ]
//         },
//         {
//           "Nombre": "Cafetera",
//           "Descripcion": "Cafetera programable, 12 tazas",
//           "Categoria": "Electrodomésticos",
//           "Precio": 49.99,
//           "Ventas": [
//             {
//               "DetalleVenta": "Venta de electrodomésticos de cocina",
//               "FechaHora": [
//                 {
//                   "Fecha": "2023-10-17",
//                   "Hora": "11:45:00"
//                 }
//               ],
//               "TotalPagar": 44.99,
//               "TipoPago": "tarjeta",
//               "EstadoVenta": "realizado"
//             }
//           ]
//         },
//         {
//           "Nombre": "Silla de oficina",
//           "Descripcion": "Silla de oficina ergonómica",
//           "Categoria": "Muebles",
//           "Precio": 129.99,
//           "Ventas": [
//             {
//               "DetalleVenta": "Venta de mobiliario de oficina",
//               "FechaHora": [
//                 {
//                   "Fecha": "2023-10-18",
//                   "Hora": "16:20:00"
//                 }
//               ],
//               "TotalPagar": 119.99,
//               "TipoPago": "transaccion",
//               "EstadoVenta": "realizado"
//             }
//           ]
//         }
//       ]
      
// )


// db.Productos.find({ "Ventas.TotalPagar": {$gte:119.99} });


//db.Productos.updateOne(
//    { "Nombre": "Camiseta", "Ventas.TotalPagar": 20.99 },
//    { $set: { "Ventas.$.TotalPagar": 30.22 } }
//);




// db.Productos.remove({ "Ventas.TipoPago": "transaccion" });


//indices

// db.Productos.createIndex({ Nombre: 1 });

// db.Productos.find({}, { Nombre: 1 }).sort({ Nombre: 1 });

// db.Productos.createIndex({ Nombre: 1, Productos_Comprados: 1 });


// db.Productos.find({ Nombre: "Camiseta", "Ventas.TotalPagar": 20.99})


//Agregaciones

// db.Productos.aggregate([
//     {$match: { "Nombre": "Camiseta","Ventas.TipoPago": "tarjeta"} }
//   ]);
  

// db.Productos.aggregate([
//   { $project: { _id: 0, Nombre: 1, Descripcion: 1, Precio: 1 } },
// ]);


// db.Productos.aggregate([
//   { $group: { _id: "$Nombre", totaldocs: { $sum: 1 } } },
// ]);


// db.Clientes.aggregate([
//   { $group: { _id: "$Nombre", totaldocs: { $sum: 1 } } },
//   { $out: "aggResults" },
// ]);
// db.aggResults.find();



// db.Productos.aggregate([
//           {
//             $match: { Nombre: "Camiseta" },
//           },
//           { $unwind: "$Ventas" },
//         ]);
        
    
    
    // db.Productos.aggregate([
    //   { $match: { Nombre: "Camiseta" } },
    //   { $unwind: "$Ventas" },
    //   { $project: { _id: 0, "Ventas.TotalPagar": 1, "Ventas.TipoPago": 1 } },
    //   { $sort: { "Ventas.TipoPago": -1 } },
    // ]);
    
    
    // db.Productos.aggregate([
    //     { $match: { Nombre: "Camiseta" } },
    //     { $unwind: "$Ventas" },
    //     { $project: { _id: 0, "Ventas.TotalPagar": 1, "Ventas.TipoPago": 1 } },
    //     { $sort: { "Ventas.TipoPago": -1 } },
    //     { $limit: 1 },
    //   ]);
      
    
    
    // db.Productos.aggregate([
    //     {$match: { Nombre: "Camiseta" } },
    //     {$addFields: { TotalCompras: {  $sum: "$Ventas.TotalPagar" } }}
    //   ]);
      
    
    // db.Productos.aggregate([
    //   { $unwind: "$Ventas"},
    //   { $count: "total_documents" },
    // ]);


    // db.Productos.aggregate([
    //         { $match: { Nombre: "Camiseta" } },
    //         { $project: { _id: 0, Nombre: 1 } },
    //         {
    //           $lookup: {
    //             from: "Ventas",
    //             localField: "Detalle_Venta",
    //             foreignField: "detalle_ventas", 
    //             as: "Ventas",
    //           },
    //         }
    //       ]);
          
        
        // db.Productos.aggregate([{ $sortByCount: "$Cantidad" }]);
        
        // db.Productos.aggregate([
        //   { $unwind: "$Ventas" },
        //   { $group: { _id: "$Nombre", totalProduct: { $sum: "$Ventas.TotalPagar" } } },
        // ]);
        

        