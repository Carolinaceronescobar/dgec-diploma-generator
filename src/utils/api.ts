// api.ts

// Función simulada para obtener programas desde la base de datos
export const obtenerProgramasDesdeBD = async (): Promise<string[]> => {
    // Simulación de una llamada a la base de datos
    return new Promise((resolve) => {
      setTimeout(() => {
        // Datos ficticios de programas
        const programas = ['Diploma de Ciberseguridad', 'Curso de Gestión de Activos', 'Curso Prueba 3'];
        resolve(programas);
      }, 1000); // Simular un tiempo de espera de 1 segundo
    });
}

    // Función para obtener información del usuario desde la base de datos
    export const obtenerInformacionUsuario = async (userName: string): Promise<any> => {
      try {
      // Aquí deberías realizar una llamada a tu base de datos para obtener la información del usuario
      // Puedes usar una biblioteca como axios para hacer solicitudes HTTP
  
      // Por ahora, simulamos la obtención de datos
      const response = await fetch(`/api/usuarios/${userName}`);

      if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error al obtener información del usuario:', error);
      throw error;
  }
};

  
  