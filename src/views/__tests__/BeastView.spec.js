import {
    waitFor
} from '@testing-library/vue';
import { defineComponent } from 'vue';
import { mount, flushPromises } from '@vue/test-utils'

import BeastView from '../BeastView.vue';

const AsyncComponent = defineComponent({
    components: { BeastView },
    template: '<Suspense><BeastView /></Suspense>'
})

describe('Testing the beast view', () => {
    let getSpy, wrapper;

    beforeEach(async () => {
        getSpy = vi.spyOn(window, 'fetch');
        wrapper = mount(AsyncComponent);
        await waitFor(() => expect(getSpy).toHaveBeenCalledTimes(1))
        await flushPromises()
    });

    test('the heading should be shown', async () => {
        expect(wrapper.get('h1').text()).toEqual('Niffler')
        expect(wrapper.find('.beast-text').text()).toEqual('A small, furry, black-furred creature with a long snout and a love for shiny objects.')
    });

    test('there should be two second level headings', async () => {
        expect(wrapper.findAll('h2').length).toEqual(2)
        expect(wrapper.findAll('h2')[0].text()).toEqual('Skills')
        expect(wrapper.findAll('h2')[1].text()).toEqual('Habitat')
    });

    test('there should be three third level headings', async () => {
        const headingElement = wrapper.findAll('h3')
        const headings = ['Burrowing', 'Treasure-finding', 'Explosive Sneezes']
        
        expect(headingElement.length).toEqual(3)
        headings.forEach(
            (title, i) => {
                expect(wrapper.findAll('h3')[i].text()).toEqual(title)
            }
        )
    });

    test('the first skill should show the content', async () => {
        const firstSkill = wrapper.findAll('.beast-skill')[0]
        expect(firstSkill.text()).toEqual('BurrowingCan dig through dirt and rock with ease, creating intricate tunnels and burrows.')
    });
});