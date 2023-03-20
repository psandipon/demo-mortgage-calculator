import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCalculatorStore = defineStore('calculator', () => {
  const region = ref('berlin')

  const broker_tax = ref(0.0714)
  const city_tax = ref(0.06)

  const property_price = ref(320000)
  const total_savings = ref(80000)
  const real_estate_commission = ref(true)
  const annual_repayment_rate = ref(2)

  const rates_table = ref([])

  const notary_costs = computed(() => 2144.0 + 0.013 * (property_price.value - 100000.0))
  const broker_costs = computed(() => {
    if (real_estate_commission.value) {
      return broker_tax.value * property_price.value
    }
    return 0
  })

  const stamp_duty_cost = computed(() => city_tax.value * property_price.value)

  const total_const = computed(
    () => notary_costs.value + broker_costs.value + stamp_duty_cost.value
  )

  const raw_loan_amount = computed(
    () => total_const.value - total_savings.value + property_price.value
  )

  const loanToValue = computed(() => raw_loan_amount.value / property_price.value)

  return {
    region,

    property_price,
    total_savings,
    real_estate_commission,
    annual_repayment_rate,

    raw_loan_amount,
    loanToValue,

    rates_table
  }
})
