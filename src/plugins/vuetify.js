import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Create Vuetify instance
const vuetify = createVuetify({components,
    directives,
    ssr: true,})

export default vuetify