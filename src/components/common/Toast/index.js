import Toast from './Toast'

const obj = {}
obj.install = function(Vue){
    const  toastComponent = Vue.extend(Toast)
    const toast = new toastComponent()
    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast
}

export default obj