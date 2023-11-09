// aqui seria, através do mongoose, a tentativa de conexao com o mongodb.
//  A string de conexao seria uma constante presente no arquivo .env

import mongoose from "mongoose";

mongoose.connect(process.env.STRING_CONEXAO_DB);

let db = mongoose.connection;

export default db;
