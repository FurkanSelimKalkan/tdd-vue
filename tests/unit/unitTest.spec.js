import { mount } from '@vue/test-utils';
import TaskComponent from '@/components/TaskComponent.vue';

describe('TaskComponent', () => {
    it('renders a task title', () => {
        const title = 'Learn Vue.js TDD';
        const wrapper = mount(TaskComponent, {
            propsData: { title }
        });
        expect(wrapper.text()).toMatch(title);
    });
});
