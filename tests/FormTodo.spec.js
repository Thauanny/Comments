import { shallowMount } from "@vue/test-utils";
import App from "../src/App";
import FormTodo from "../src/components/FormTodo";

describe('Test in App', () => {
    test('Verificar se e uma instancia do vue', () =>{
        const wrapper = shallowMount(App)
        expect(wrapper.vm).toBeTruthy()
    }),
    test('verificar dados do data', () => {
        expect(typeof FormTodo.data). toBe('function')
        const defaultData  = FormTodo.data()
        expect(defaultData.name).toBe('');
    })
})