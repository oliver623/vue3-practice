import { createSharedComposable } from '@vueuse/core'
import MyButton from './myButton/myButton.vue'
import MyInput from './myInput/myInput.vue'

const componentsPool = [
    MyButton,
    MyInput
]
export default {
    install(app, options) {
        console.log('app====', app)
        console.log('options====', options)
        if(options.components){
            options.components.map((comName) => {
                componentsPool.map((com) => {
                    if(com.name === comName){
                        app.component(com.name, com)
                    }
                })
            })
        }else {
            componentsPool.map((com) => {
                app.component(com.name, com)
            })
        }
    }
}