const pool = require("../../config/database");

module.exports = {
  createUser: (data, callBack) => {
    pool.query(
      "insert into registration(firstName, lastName, gender, email, password, number) values (?,?,?,?,?,?)",
      [
          data.firstName,
          data.lastName,
          data.gender,
          data.email,
          data.password,
          data.number
      ],
      (error, results, fields) => {
          if (error){
              return callBack(error);
          }
          return callBack(null, results);
      }
    );
  },
  getAllUsers: callBack =>{
      pool.query("select firstName,lastName,gender,email,number from registration",
      [],
      (error, results, fields) =>{
          if (error){
              return callBack(error);
          }
          return callBack(null,results);
      });
  },
  getUserByUserId: (id, callBack) => {
      pool.query("select firstName,lastName,gender,email,number from registration where id = ?",
      [id],
      (error, results, fields) => {
          if (error){
              return callBack(error);
          }
          return callBack(null,results[0]);
      });
  },
  updateUser: (data, callBack) => {
      pool.query("update registration set firstname=?, lastName=? ,gender=?, email=?, password=?, number=? where id=?",
      [
        data.firstName,
        data.lastName,
        data.gender,
        data.email,
        data.password,
        data.number,
        data.id
      ],
      (error, results, fields) => {
          if (error){
              return callBack(error);
          }
          return callBack(null, results);
      });
  },
  deleteUser: (data, callBack) =>{
      pool.query("delete from registration where id=?",
      [data.id],
      (error, results, fields) =>{
          if (error){
              return callBack(error);
          }
          return callBack(null, results[0]);
      });
  },
  getUserByUserEmail: (email, callBack) =>{
      pool.query("select * from registration where email=?",
      [email],
      (error, results, fields) =>{
          if (error){
              return callBack(error);
          }
          return callBack(null, results[0]);
      });
  }
};
