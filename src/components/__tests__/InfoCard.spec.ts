import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import InfoCard from '@/components/Home/InfoCard.vue'

/**
 * I am using vite test here.
 * For demo, I am adding a very simple test.
 * More tests can be added.
 * Link: https://vitest.dev/
 */
describe('InfoCard', () => {
  it('renders properly', () => {
    const wrapper = mount(InfoCard, { props: { title: 'Implied Load' } })
    expect(wrapper.text()).toContain('Implied Load')
  })
})
