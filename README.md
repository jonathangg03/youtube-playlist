# Creador de Playlist de YouTube.

Una aplicación que realiza una busqueda usando la API de YouTube, y usando Drag
and drop, se crea una playlist, y se puede ordenar de la misma forma. Para ver
la aplicación, haz clic [aquí](https://youtube-playlist-ten.vercel.app/ 'aquí').

[![YouTube Playlist](https://dav-dev.com/assets/projects/playlist.jpg 'Miriio')](https://dav-dev.com/assets/projects/playlist.jpg 'Miriio')

## Instrucciones de uso

- Al ingresar a la aplicación, realiza una busqueda. Puedes elegir cuantos
  resultados mostrar, y con el boton que está debajo de los resultados, se
  pueden cargar más. Sí editas la busqueda o aumentas la cantidad, no podrás
  cargar más.
- Una vez cargados, puedes arrastrar uno por uno hacia el cuadro que está abajo.
  Cuando hayas movido uno, el reproductor que está al final mostrará los videos
  que estén en esta segunda sección.
- Cuando ordenes esta segunda sección, en ese mismo orden se mostrarán los
  videos en el reproductor.
- Se acamodan igualmente, arrastrandolos.

## Tecnologías usadas

- JavaScript.
- React.js.
- Vercel.
- Wepack.
- YouTube API.
- Beautiful DnD.

## Correr aplicación en local

- Debes clonar este repositorio.
- Abrir una terminal e ingresar a la carpeta creada.
- Instalar las dependencias con el comando "npm install".
- Crear una cuenta en Google Cloud Console, y conseguir la API Key.
- Esta key debes agregarla en el archivo .env.example, el cual debes renombrar
  en ".env".
- Iniciar el proyecto con el comando "npm run dev". Correrá en el puerto 3000.
