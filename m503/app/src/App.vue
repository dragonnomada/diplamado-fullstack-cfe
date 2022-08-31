<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu side="start" menu-id="principal" content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="inbox-list">
            <ion-list-header>Plataforma de Anomalías</ion-list-header>
            <ion-note>Bienvenido pepe@gmail.com</ion-note>

            <template v-if="sesionIniciada">
              <ion-menu-toggle auto-hide="false" v-for="(p, i) in appPages" :key="i">
                <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url" lines="none"
                  detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
                  <ion-icon slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
                  <ion-label>{{  p.title  }}</ion-label>
                </ion-item>
              </ion-menu-toggle>
            </template>
          </ion-list>

          <ion-list id="labels-list">
            <ion-list-header>Opciones</ion-list-header>

            <template v-if="sesionIniciada">
              <ion-item lines="none">
                <ion-icon slot="start" :ios="bookmarkOutline" :md="bookmarkSharp"></ion-icon>
                <ion-label @click="cerrarSesion()">Cerrar Sesión</ion-label>
              </ion-item>
            </template>
            <template v-else>
              <ion-item lines="none" class="pointer" @click="iniciarSesion()">
                <ion-icon slot="start" :ios="logIn" :md="logIn"></ion-icon>
                <ion-label>Iniciar Sesión</ion-label>
              </ion-item>
            </template>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
      <ion-menu side="end" menu-id="detalles" content-id="main-content" type="overlay">
        <ion-content>
          <template v-if="anomaliaSeleccionada">
            <div>
              {{ anomaliaSeleccionada }}
            </div>
            <hr>
            <template v-if="anomaliaSeleccionada.publicada">
              <span>Anomalía publicada: Se muestran evidencias y comentarios</span>
            </template>
            <template v-else>
              <div>
                <span>Anomalía sin publicar: Capturamos los detalles de la anomalía</span>
              </div>
              <div>
                <ion-label>Detalles de la anomalía</ion-label>
                <ion-textarea placeholder="Enter more information here..."></ion-textarea>
              </div>
              <div>
                <ion-label>Tipo anomalía</ion-label>
                <ion-select placeholder="Select fruit">
                  <ion-select-option value="apples">Apples</ion-select-option>
                  <ion-select-option value="oranges">Oranges</ion-select-option>
                  <ion-select-option value="bananas">Bananas</ion-select-option>
                </ion-select>
              </div>
              <ion-button>Publicar</ion-button>
            </template>

            <template v-if="!anomaliaSeleccionada.registrada">
              <div>
                <span>Esperando tener internet para enviar la anomalía al servidor </span>
              </div>
            </template>
          </template>
          <template v-else>
            <span>Selecciona una anomalía del mapa</span>
          </template>
        </ion-content>
      </ion-menu>
    </ion-split-pane>
  </ion-app>
</template>

<script setup>
import { menuController, alertController, IonApp, IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonRouterOutlet, IonSplitPane } from '@ionic/vue';
import { ref, provide, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { logIn, archiveOutline, archiveSharp, bookmarkOutline, bookmarkSharp, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem'

const selectedIndex = ref(0);

const appPages = [
  {
    title: 'Mapa de Anomalías',
    url: '/folder/Inbox',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Perfil',
    url: '/folder/Outbox',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Mis Anomalías',
    url: '/folder/Favorites',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Mis Evidencias',
    url: '/folder/Trash',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  },
  {
    title: 'Mis Notificaciones',
    url: '/folder/Archived',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'Comentarios',
    url: '/folder/Spam',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  }
];

const labels = ['Conectado a Internet', 'Cerrar Sesión'];

const path = window.location.pathname.split('folder/')[1];

if (path !== undefined) {
  selectedIndex.value = appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
}

const route = useRoute();

// Inicio de Sesión

const usuario = ref(null) // usuario.value = null

const sesionIniciada = computed(() => usuario.value !== null)

provide("store/usuario", usuario)
provide("store/sesionIniciada", sesionIniciada)

const anomalias = ref({}) // anomalias.value = {}
const anomaliaSeleccionada = ref(null)

async function crearAnomalia(latitude, longitude, map) {
  const anomaliaId = Math.random().toString(32).slice(2) // ID: 13 (32 digitos y letras) 1/13^32

  const anomalia = {
    anomaliaId,
    marcador: {
      title: `Anomalía #${anomaliaId}`,
      coordinate: {
        lat: latitude,
        lng: longitude
      }
    },
    publicada: false,
    registrada: false,
    registro: null // { >>> API }
  }

  const markerId = await map.value.addMarker(anomalia.marcador)

  anomalia.marcador.id = markerId

  anomalias.value[markerId] = anomalia

  console.log("Marcador creado", markerId, anomaliaId, latitude, longitude)

  // Guardar localmente las anomalía mientras no estén registradas en la base de datos
  // Mandar a llamar al API para registrar la animalía
  // y si es correcto borrar la anomalía del archivo local
}

async function abrirAnomalia(markerId) {
  console.log("Abrir la anomalía con marcador", markerId)

  // TODO: Abrir la anomalía
  const anomalia = anomalias.value[markerId]
    
  console.log({ ...anomalia, marcador: { ...anomalia.marcador } })

  anomaliaSeleccionada.value = anomalia

  await menuController.open("detalles")
}

provide("store/crearAnomalia", crearAnomalia)
provide("store/abrirAnomalia", abrirAnomalia)

// Activar la Sesión
async function activarSesion(correo, token) {
  try {
    await Filesystem.writeFile({
      path: 'secrets/usuarioLocal.json',
      directory: Directory.Library,
      encoding: Encoding.UTF8,
      data: JSON.stringify({
        correo,
        token
      })
    })
    console.log("Sesión guardada")
  } catch (error) {
    console.log("No se pudo guardar la sesión")
  }

  usuario.value = {
    correo,
    token
  }
}

// Servicio: Iniciar Sesión
async function apiIniciarSesion(correo, contraseña) {
  // TODO: Llamada al API de iniciar sesión
  const response = await fetch("http://localhost:5000/auth/login", {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      correo,
      contraseña
    })
  })

  if (response.ok) {
    const data = await response.json() // { error, token, correo, token }
    if (data.error) {
      console.log(data.message)
    } else {
      console.log(data.correo, data.token)
      // TODO: Activar Sesión (actualizar el archivo de usuario local y la referencia)
      await activarSesion(data.correo, data.token)
    }
  } else {
    const error = await response.json()
    console.warn(error)
    const alert = await alertController.create({
      header: error.message,
      buttons: [
        {
          text: "aceptar",
          handler: () => {
            alert.dismiss()
          }
        }
      ]
    })
    await alert.present()
  }
}

// TODO: Comprobar si hay un usuario registrado localmente que no haya cerrado sesión
onMounted(async () => {
  // Checar cuándo haya conexión a internet
  // revisar las anomalías no registradas en el servidor
  // 1: y registrarlas borrándolas del  archivo local 
  // 2: (retener anomalías si se quiere en modo offline)
  // pero considerar que ya fueron registradas en el servidor para no repetirlas
  // 3: Crear un archivo de anomalias locales ya registradas
  //    al iniciar la aplicación o al tener internet descargar las anomalías
  //    registradas desde el servidor (ya actualizadas con otros usuarios)
  //    repetir cada minuto para tener nuevas anomalías registradas por otros usuarios

  await menuController.close("detalles")

  try {
    const usuarioLocal = await Filesystem.readFile({
      path: 'secrets/usuarioLocal.json',
      directory: Directory.Library,
      encoding: Encoding.UTF8,
    })
    console.log(usuarioLocal.data)
    console.log("Sesión recuperada")
    usuario.value = JSON.parse(usuarioLocal.data)
  } catch (error) {
    console.warn(error)
    console.log("El usuario no ha iniciado sesión")
  }
})

async function cerrarSesion() {
  try {
    await Filesystem.deleteFile({
      path: 'secrets/usuarioLocal.json',
      directory: Directory.Library
    })
    console.log("Se ha borrado la sesión local")
  } catch (error) {
    console.warn(error)
    console.log("No se puede borrar el archivo del usuario local")
  }
  usuario.value = null
}

async function iniciarSesion() {
  // TODO: Lanzar un formulario y llamar al api /auth/login
  const alert = await alertController.create({
    header: "Iniciar Sesión",
    buttons: [
      {
        text: "Aceptar",
        handler: async alertData => {
          console.log(alertData)
          // Hacer un fetch o llamar a la función encargada de iniciar sesión
          await apiIniciarSesion(alertData.correo, alertData.contraseña)
        }
      }
    ],
    inputs: [
      {
        name: "correo",
        type: "text",
        placeholder: "Correo"
      },
      {
        name: "contraseña",
        type: "password",
        placeholder: "Contraseña"
      },
    ]
  })

  await alert.present()
}

</script>

<style scoped>
.pointer {
  user-select: none;
  cursor: pointer;
}

ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>
