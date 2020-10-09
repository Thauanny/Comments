import { shallowMount } from "@vue/test-utils";
import App from "../src/App";

describe('Test in App', () => {
    test('Verificar se e uma instancia do vue', () =>{
        const wrapper = shallowMount(App)
        expect(wrapper.vm).toBeTruthy()
    })
})