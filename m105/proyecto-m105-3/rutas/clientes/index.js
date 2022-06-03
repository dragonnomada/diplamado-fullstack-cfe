// Middleware es un controlador intermedio que puede ser plegable dentro de las rutas
// Generalemente el controlador principal llamado `app = express()`
// establece las rutas de dos maneras:
// app.<get|post|put|...>(<ruta>, <handler>) --> <handler> ~ middleware
// app.use(<ruta>, <router>) --> <router> ~ middleware