# 🎁 Amigo Secreto

Una aplicación web simple e interactiva para organizar sorteos de amigo secreto de manera fácil y divertida.

## 📋 Descripción

**Amigo Secreto** es una aplicación web que permite a los usuarios agregar nombres de amigos a una lista y realizar un sorteo aleatorio para determinar quién será el "amigo secreto". Es perfecta para organizar intercambios de regalos en fiestas, eventos familiares, o reuniones de trabajo.

## ✨ Características

- **Interfaz intuitiva**: Diseño limpio y fácil de usar
- **Agregar participantes**: Añade nombres de forma rápida y sencilla
- **Lista visual**: Visualiza todos los participantes agregados
- **Sorteo aleatorio**: Genera un resultado completamente aleatorio
- **Validaciones**: Previene errores como nombres vacíos o sorteos sin participantes
- **Diseño responsivo**: Funciona correctamente en diferentes dispositivos

## 🚀 Demostración

### Funcionalidades principales:

1. **Agregar amigos**: Escribe un nombre y haz clic en "Añadir"
2. **Visualizar lista**: Todos los nombres agregados aparecen en una lista
3. **Sortear**: Presiona el botón "Sortear amigo" para obtener el resultado
4. **Resultado**: Se muestra claramente quién fue seleccionado

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica de la aplicación
- **CSS3**: Estilos modernos con variables CSS y diseño responsivo
- **JavaScript (ES6+)**: Lógica de la aplicación y manipulación del DOM
- **Google Fonts**: Tipografías Inter y Merriweather

## 📁 Estructura del Proyecto

```
challenge-amigo-secreto_esp-main/
│
├── index.html              # Archivo principal HTML
├── style.css              # Estilos CSS
├── app.js                 # Lógica JavaScript
├── assets/                # Recursos multimedia
│   ├── amigo-secreto.png  # Imagen principal
│   └── play_circle_outline.png # Ícono del botón
└── README.md              # Documentación del proyecto
```

## 🏃‍♂️ Cómo Ejecutar el Proyecto

### Opción 1: Ejecución Local Simple

1. **Clona o descarga** este repositorio en tu computadora
2. **Navega** hasta la carpeta del proyecto
3. **Abre** el archivo `index.html` en tu navegador web preferido
4. ¡Listo! La aplicación estará funcionando

### Opción 2: Servidor Local (Recomendado)

Para una mejor experiencia y evitar problemas de CORS:

1. **Instala un servidor local simple:**

   ```bash
   # Con Python 3
   python -m http.server 8000

   # Con Node.js (si tienes npx)
   npx http-server

   # Con Live Server (extensión de VS Code)
   # Clic derecho en index.html > "Open with Live Server"
   ```

2. **Abre tu navegador** y ve a `http://localhost:8000`

## 📖 Cómo Usar la Aplicación

1. **Agregar participantes:**

   - Escribe el nombre de un amigo en el campo de texto
   - Haz clic en el botón "Añadir" o presiona Enter
   - El nombre aparecerá en la lista debajo

2. **Realizar el sorteo:**

   - Asegúrate de tener al menos un participante en la lista
   - Haz clic en el botón "Sortear amigo"
   - El resultado aparecerá destacado en verde

3. **Nuevo sorteo:**
   - Puedes agregar más participantes y sortear nuevamente
   - Cada sorteo es completamente aleatorio e independiente

## 🎯 Funcionalidades Técnicas

### Validaciones Implementadas:

- ✅ Verificación de nombres vacíos o solo espacios
- ✅ Prevención de sorteos sin participantes
- ✅ Limpieza automática de espacios innecesarios

### Características del Código:

- 📝 Código limpio y bien comentado
- 🔧 Funciones modulares y reutilizables
- 🎨 Uso de variables CSS para fácil personalización
- 📱 Diseño responsivo con Flexbox

## 👨‍💻 Autor

Desarrollado como parte de un desafío de programación para fortalecer habilidades en lógica de programación y desarrollo web.

---

## 🎉 ¡Disfruta organizando tus intercambios de regalos!

Si te gustó este proyecto, no olvides darle una ⭐ y compartirlo con tus amigos.
