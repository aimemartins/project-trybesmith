import { RowDataPacket } from 'mysql2';
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

const UserModel = { userLogin };

export default UserModel;