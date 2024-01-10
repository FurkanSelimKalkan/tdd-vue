import { mount } from '@vue/test-utils';
import TaskList from '@/components/TaskList.vue';
import TaskComponent from '@/components/TaskComponent.vue';

describe('TaskList.vue', () => {
    it('should render multiple tasks', () => {
        const wrapper = mount(TaskList, {
            data() {
                return {
                    tasks: ['Task 1', 'Task 2']
                };
            }
        });

        const taskComponents = wrapper.findAllComponents(TaskComponent);
        expect(taskComponents.length).toBe(2);
        expect(taskComponents.at(0).props('title')).toBe('Task 1');
        expect(taskComponents.at(1).props('title')).toBe('Task 2');
    });
});
