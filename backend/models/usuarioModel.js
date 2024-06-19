import { pool } from '../database/connection.js'

// GET getAllUsuario
export async function obtenerTodosLosUsuarios() {
  try {
    const [result] = await pool.query('CALL ObtenerTodosLosUsuarios()');
    return result[0];
  } catch (error) {
    console.error('Error fetching obtenerTodosLosUsuarios:', error);
    throw error;
  }
}

// GET getUsuarioByEmail
export async function obtenerUsuarioPorCorreo(req) {
  try {
    const { Correo } = req.body;
    const [result] = await pool.query('CALL ObtenerUsuarioPorCorreo(?)', [ Correo ]);
    return result[0];
  }catch (error) {
    console.error('Error fetching obtenerUsuarioPorCorreo:', error);
    throw error;
  }
}

// POST createUsuario
export async function crearUsuario(req) {
  try {    
    const { Nombre, Apellido, Correo, Contrasena, ID_RolUsuario } = req.body;
    const [result] = await pool.query('CALL CrearUsuario(?, ?, ?, ?, ?)', [ Nombre, Apellido, Correo, Contrasena, ID_RolUsuario ]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error('Error fetching crearUsuario:', error);
    throw error;
  }  
}