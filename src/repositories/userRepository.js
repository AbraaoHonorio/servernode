const ImportClient = require('../config/config');
const client = ImportClient.get();

  exports.get=  () =>  {
      const results = []
          
      //Realiza a leitura no banco de dados
      const query = client.query('SELECT * FROM clientes ')
  
      query.then(function(row){
          results.push(row)
      })
  
      return query
     /* query.then(function(response){
          return res.json(response.rows)
      })*/
  
     
  }