import setupMSW from './msw-setup.js'
import { config } from "@vue/test-utils"
import { createVuestic } from 'vuestic-ui'
import router from '@/router'
import { RouterLinkStub } from '@vue/test-utils'
import '@testing-library/jest-dom/extend-expect';

setupMSW()

config.global.plugins = [
    createVuestic(),
    router,
]

config.global.stubs = {
    'router-link': RouterLinkStub,
    'RouterLink': RouterLinkStub,
}

config.global.directives = {
    'editable': {}
}