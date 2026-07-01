# Catstagram EFSI

Aplicacion movil tipo Instagram creada con React Native y Expo SDK 54. Migra la logica del proyecto web anterior a componentes nativos, consumiendo imagenes de gatos desde una API externa y mostrando feed, historias, detalle de post y perfil.

## Instalacion

```bash
npm install
npx expo start
```

## Estructura de app/

```
app/
  components/
    ActionBar.jsx
    CommentItem.jsx
    FeedPost.jsx
    ProfileGridItem.jsx
    StoriesList.jsx
  data/
    mockComments.js
    mockUsers.js
  navigation/
    AppNavigator.jsx
  screens/
    HomeScreen.jsx
    PostDetailScreen.jsx
    ProfileScreen.jsx
  services/
    catApi.js
  styles/
    colors.js
    globalStyles.js
```

## Pantallas

- `HomeScreen`: carga posts de gatos al iniciar, muestra stories y renderiza el feed con `FlatList`.
- `PostDetailScreen`: recibe el post por navegacion, muestra imagen grande, usuario, ubicacion, caption, comentarios y like funcional.
- `ProfileScreen`: muestra avatar, biografia, estadisticas, boton "Editar perfil" y una grilla de publicaciones con `FlatList` y `numColumns={3}`.

## Componentes

- `FeedPost`: tarjeta reutilizable para cada publicacion del feed.
- `StoriesList`: lista horizontal de historias integrada como `ListHeaderComponent` del feed.
- `ProfileGridItem`: celda cuadrada reutilizable para la grilla del perfil.
- `ActionBar`: botones de Me gusta, Comentar, Compartir y Guardar con `@expo/vector-icons`.
- `CommentItem`: comentario simulado con usuario y texto.

## Estado y efectos

- `useState` se usa para guardar posts cargados, estado de carga y likes activos en `HomeScreen`, `ProfileScreen`, `FeedPost` y `PostDetailScreen`.
- `useEffect` se usa en `HomeScreen` y `ProfileScreen` para cargar datos al renderizar por primera vez.
- Axios se usa en `app/services/catApi.js` para consumir `https://api.thecatapi.com/v1/images/search`.

## FlatList

- El feed de `HomeScreen` usa exclusivamente `FlatList`; no usa `ScrollView` con `.map()`.
- Las stories usan `FlatList` horizontal.
- El perfil usa `FlatList` con `numColumns={3}` para una grilla de tres columnas simetricas.

## Diseno

Se usaron capturas de referencia de Instagram movil: fondo blanco, texto negro, separadores grises suaves, barra superior tipo Instagram, iconografia similar e imagenes cuadradas.

## Checklist

- [x] Proyecto Expo con React Native.
- [x] `App.js` importa `AppNavigator`.
- [x] Navegacion con React Navigation, Native Stack y Bottom Tabs.
- [x] Home, Profile y PostDetail conectados.
- [x] Feed con API externa de gatos usando Axios.
- [x] Minimo 10 imagenes cargadas y mapeadas a objetos post.
- [x] Feed renderizado con `FlatList`.
- [x] Stories horizontales integradas al feed.
- [x] Likes funcionales con `useState`.
- [x] Perfil con grilla `FlatList` y `numColumns={3}`.
- [x] Componentes nativos: `View`, `Text`, `Image`, `Pressable`, `SafeAreaView`.
- [x] Estilos con `StyleSheet.create()`.
- [x] Iconos con `@expo/vector-icons`.
- [x] Splash screen configurada con `expo-splash-screen`.
- [x] Icono nativo configurado en `app.json`.
- [x] Sin archivos CSS ni codigo web con `div`, `img`, `button` o `className`.
- [x] Texto visible con contraste legible, sin estilos ocultos o transparentes.
