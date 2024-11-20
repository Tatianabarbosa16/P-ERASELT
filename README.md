 Definición del proyecto
 Propósito: Crear una aplicación web que permita a los usuarios gestionar su huella digital, registrar cuentas en línea, y simular la búsqueda y eliminación de datos sensibles públicos, para que luego  el usuario tenga mejor entendimiemto de como interactuar con el sitio web.
 Objetivo principal: Ayudar a los usuarios a mantener el control de su privacidad en línea al ofrecerles una herramienta para gestionar sus datos y gestionar mejor el control.
 Problema a resolver: Los usuarios tienen poca visibilidad y control sobre la información que han compartido en diversas plataformas sociales. EraseIt aborda este problema centralizando la gestión y brindando simulaciones educativas y que acciones debe tomar al respecto.
  
  Alcance del proyecto

Incluye:

Gestión CRUD de cuentas (Crear, Leer, Actualizar, Eliminar).
Simulación de búsqueda de datos públicos.
Interfaz simple e intuitiva para que los usuarios realicen la gestión de su información con usuario y correo.

No incluye:

Búsquedas automáticas de datos reales en internet (API avanzadas, proximo a expanción) .
Procesos automáticos de eliminación en plataformas externas.

Identificación de los Stakeholders

Usuarios finales: Personas preocupadas por su privacidad en línea.
Clientes/Patrocinadores: Profesores y evaluadores del bootcamp.
Equipo de desarrollo: Desarrolladores involucrados en la creación del proyecto.
Empresas: Sector interesado en la gestión y la prevencion de  correos e informes en linea sensibles.

Fase de Planificación

 Planificación de requerimientos

Requerimientos funcionales:

CRUD funcional para cuentas.
Simulación de búsqueda de datos.
Interfaz para gestionar cuentas.
Requerimientos no funcionales:

Rendimiento rápido con tiempo de respuesta menor a 2 segundos.
Diseño intuitivo y amigable para usuarios no técnicos.

 Estructura del proyecto (WBS)

Frontend
Crear página principal (introducción y formulario de prueba).
Diseño del CRUD (formulario, tabla).
Backend
Configuración del servidor con Node.js y Express.
Implementación de rutas CRUD y simulación.
Base de datos
Configurar SQLite.
Crear tablas y gestionar datos.

Pruebas
Unitarias y de integración para asegurar la calidad.

 Cronograma (resumido)

Tarea	Tiempo estimado
Configuración del entorno	2 días
Diseño del frontend	1 días
Backend y base de datos	6 días
Pruebas y ajustes	2 días

ecursos y presupuesto

Tecnológicos: Node.js, Express, MongoDB, , Postman.
Personas a cargo: 1 desarrollador 

 Plan de gestión de riesgos

Riesgo	Probabilidad	Mitigación
Errores en la conexión BD	Media	Revisión del código y testing
Plazos ajustados	
Confusión con rutas	Baja	Documentación clara

 Fase de Ejecución
Desarrollo del producto

Metodología: Desarrollo iterativo, priorizando funcionalidad CRUD básica y simulaciones.

 Implementación de funcionalidades

CRUD:
Ruta /api/accounts para manejar cuentas (GET, POST, PUT, DELETE).

Simulación:
Resultados estáticos cargados dinámicamente.
Control de calidad

Pruebas unitarias con Postman para verificar el correcto funcionamiento de las rutas.
Pruebas manuales en la interfaz para asegurar la experiencia del usuario.

Fase de Monitoreo y Control
ASeguimiento del progreso

Uso de listas de tareas y seguimiento diario de avances.
 Revisión de calidad

Evaluación periódica de la interfaz para garantizar su usabilidad y funcionalidad.
 Gestión de cambios

Cambio implementado: Migración de MYSQL a MongoDB  para simplificar la conexión y evitar problemas técnicos.
Razón: MYSQL presentó problemas de configuración y compatibilidad en el entorno local.

 Fase de Cierre
 Entrega del proyecto

Se entrega la aplicación funcional con la siguiente documentación:
Código fuente organizado.
Instrucciones para ejecutar el proyecto.
Pruebas realizadas y resultados.

Evaluación del proyecto

Feedback de los stakeholders: Evaluar si se cumplieron los objetivos iniciales.
 Lecciones aprendidas

Aspectos positivos: Adaptabilidad para solucionar problemas técnicos.
Aspectos a mejorar: Gestión inicial del tiempo y análisis de herramientas antes de comenzar, mas investigacion sobre rutas a obtener.

 

