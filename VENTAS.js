use('Supermercado')

//CRUD 
// db.Ventas.insertMany([
//         {
//           "detalle_venta": "Compra de ropa",
//           "fecha_hora": [
//             {
//               "fecha": "2023-10-15",
//               "hora": "15:30:00"
//             }
//           ],
//           "total_pagar": 120,
//           "tipo_pago": "tarjeta",
//           "estado_venta": "realizado",
//           "cliente": {
//             "nombre": "Maria",
//             "telefono": "9876543210"
//           }
//         },
//         {
//           "detalle_venta": "Compra de electrónicos",
//           "fecha_hora": [
//             {
//               "fecha": "2023-10-16",
//               "hora": "11:15:00"
//             }
//           ],
//           "total_pagar": 500,
//           "tipo_pago": "efectivo",
//           "estado_venta": "realizado",
//           "cliente": {
//             "nombre": "Carlos",
//             "telefono": "5551234567"
//           }
//         },
//         {
//           "detalle_venta": "Compra de muebles",
//           "fecha_hora": [
//             {
//               "fecha": "2023-10-17",
//               "hora": "14:45:00"
//             }
//           ],
//           "total_pagar": 800,
//           "tipo_pago": "transacción",
//           "estado_venta": "realizado",
//           "cliente": {
//             "nombre": "Laura",
//             "telefono": "1237894560"
//           }
//         },
//         {
//           "detalle_venta": "Compra de juguetes",
//           "fecha_hora": [
//             {
//               "fecha": "2023-10-18",
//               "hora": "10:00:00"
//             }
//           ],
//           "total_pagar": 50,
//           "tipo_pago": "tarjeta",
//           "estado_venta": "realizado",
//           "cliente": {
//             "nombre": "Pedro",
//             "telefono": "4569871230"
//           }
//         },
//         {
//           "detalle_venta": "Compra de libros",
//           "fecha_hora": [
//             {
//               "fecha": "2023-10-19",
//               "hora": "16:30:00"
//             }
//           ],
//           "total_pagar": 60,
//           "tipo_pago": "efectivo",
//           "estado_venta": "realizado",
//           "cliente": {
//             "nombre": "Ana",
//             "telefono": "7896543210"
//           }
//         },
//         {
//           "detalle_venta": "Compra de alimentos",
//           "fecha_hora": [
//             {
//               "fecha": "2023-10-20",
//               "hora": "09:45:00"
//             }
//           ],
//           "total_pagar": 150,
//           "tipo_pago": "transacción",
//           "estado_venta": "realizado",
//           "cliente": {
//             "nombre": "Luis",
//             "telefono": "6543217890"
//           }
//         },
//         {
//           "detalle_venta": "Compra de electrodomésticos",
//           "fecha_hora": [
//             {
//               "fecha": "2023-10-21",
//               "hora": "13:15:00"
//             }
//           ],
//           "total_pagar": 700,
//           "tipo_pago": "tarjeta",
//           "estado_venta": "realizado",
//           "cliente": {
//             "nombre": "Isabel",
//             "telefono": "9874563210"
//           }
//         },
//         {
//           "detalle_venta": "Compra de herramientas",
//           "fecha_hora": [
//             {
//               "fecha": "2023-10-22",
//               "hora": "17:00:00"
//             }
//           ],
//           "total_pagar": 90,
//           "tipo_pago": "efectivo",
//           "estado_venta": "realizado",
//           "cliente": {
//             "nombre": "Roberto",
//             "telefono": "1236547890"
//           }
//         },
//         {
//           "detalle_venta": "Compra de ropa deportiva",
//           "fecha_hora": [
//             {
//               "fecha": "2023-10-23",
//               "hora": "14:30:00"
//             }
//           ],
//           "total_pagar": 120,
//           "tipo_pago": "tarjeta",
//           "estado_venta": "realizado",
//           "cliente": {
//             "nombre": "Elena",
//             "telefono": "4567891230"
//           }
//         },
//         {
//           "detalle_venta": "Compra de electrónicos",
//           "fecha_hora": [
//             {
//               "fecha": "2023-10-24",
//               "hora": "10:30:00"
//             }
//           ],
//           "total_pagar": 600,
//           "tipo_pago": "transacción",
//           "estado_venta": "realizado",
//           "cliente": {
//             "nombre": "Sofía",
//             "telefono": "9871234560"
//           }
//         }
// ])




// db.Ventas.find({ "cliente.nombre": {$eq:"Sofía"} });


// db.Ventas.updateOne(
//     { "detalle_venta": "Compra de electrónicos", "cliente.nombre": "Sofía" },
//     { $set: { "cliente.telefono": 12345567888 } }
// );

// db.Ventas.remove({ "cliente.nombre": "Elena" });



//indices

// db.Ventas.createIndex({ tipo_pago: 1 });
      

// db.Ventas.find({}, { tipo_pago: 1 }).sort({ tipo_pago: 1 });

// db.Ventas.createIndex({ tipo_pago: 1, cliente: 1 });


// db.Ventas.find({ tipo_pago: "transacción", "cliente.nombre": "Sofía" })

//Agregaciones

// db.Ventas.aggregate([
//     {$match: { "total_pagar": 600,"cliente.nombre": "Sofía"  }}
//   ]);
  

// db.Ventas.aggregate([
//   { $project: { _id: 0, detalle_venta: 1, total_pagar: 1, tipo_pago: 1 } },
// ]);


// db.Ventas.aggregate([
//   { $group: { _id: "$detalle_venta", totaldocs: { $sum: 1 } } },
// ]);


// db.Clientes.aggregate([
//   { $group: { _id: "$tipo_pago", totaldocs: { $sum: 1 } } },
//   { $out: "aggResults" },
// ]);
// db.aggResults.find();



// db.Ventas.aggregate([
//           {
//             $match: { detalle_venta: "Compra de electrónicos" },
//           },
//           { $unwind: "$cliente" },
//         ]);
        
    
    
    // db.Ventas.aggregate([
    //   { $match: { detalle_venta: "Compra de electrónicos" } },
    //   { $unwind: "$cliente" },
    //   { $project: { _id: 0, "cliente.nombre": 1, "cliente.telefono": 1 } },
    //   { $sort: { "cliente.nombre": -1 } },
    // ]);
    
    
//     db.Ventas.aggregate([
//         { $match: { detalle_venta: "Compra de electrónicos" } },
//         { $unwind: "$cliente" },
//         { $project: { _id: 0, "cliente.nombre": 1, "cliente.telefono": 1 } },
//         { $sort: { "cliente.nombre": -1 } },
//         { $limit: 1 },
//   ]);
    
    
    // db.Ventas.aggregate([
    //     {$match: {  detalle_venta: "Compra de ropa"} },
    //     {$addFields: { monto_final: {  $sum: "$total_pagar" } }}
    //   ]);
      

//     db.Ventas.aggregate([
//   { $unwind: "$cliente"},
//   { $count: "total_documents" },
// ]);


// db.Ventas.aggregate([
//     { $match: {tipo_pago: "QR" } },
//     { $project: { _id: 0, detalle_venta: 1 } },
//     {
//       $lookup: {
//         from: "Clientes",
//         localField: "Nombre",
//         foreignField: "cliente", 
//         as: "Cliente",
//       },
//     }
//   ]);
  

// db.Ventas.aggregate([{ $sortByCount: "$total_pagar" }]);

// db.Ventas.aggregate([
//   { $unwind: "$cliente" },
//   { $group: { _id: "$detalle_venta", totalProduct: { $sum: "$total_pagar" } } },
// ]);
