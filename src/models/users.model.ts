import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { ILogin, IUser } from '../interfaces';
import connection from './connection';

const userLogin = async (login:ILogin): Promise<IUser[]> => {
  const { username } = login;
  const [result] = await connection.execute <RowDataPacket[] & IUser[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?', 
    [username],
  );
  return result;
};

const createUser = async (user: IUser): Promise<IUser[]> => {
  const { username, vocation, level, password } = user;
  const [result] = await connection.execute <ResultSetHeader & IUser[]>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)', 
    [username, vocation, level, password],
  );
  return result;
};

const UserModel = { userLogin, createUser };

export default UserModel;