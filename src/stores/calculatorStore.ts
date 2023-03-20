import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCalculatorStore = defineStore('calculator', () => {
  /**
   * `region` value can be fetched from users location
   *  Here hard coding it.
   *  Ideally we should have a different region store
   *  with all the options, initial value and related getters & actions
   *  For simplicity, add it here and hard coding the values
   */
  const region = ref('berlin')

  const broker_tax = ref(0.0714)
  const city_tax = ref(0.06)

  const property_price = ref(320000)
  const total_savings = ref(80000)
  const real_estate_commission = ref(true)
  const annual_repayment_rate = ref(2)

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

  /**
   * This is the main ref which will hold the table data
   */
  const rates_table = ref({})

  const fetchRatesTableData = async () => {
    /**
     * Generally I would like to add my graph ql queries here, based on user selection
     * However, as the I don't have any working end point to work with
     * I am not writing the actual logic.
     *
     * The fetching can be done using axios or vue apollo or simple fetch
     * Below I am writing a basic axios implementation
     *
     * const response = await axios({
     *     method: 'POST',
     *     url: 'https://hypofriend.de/g',
     *     data: {
     *       query: `
     *       {
     *         root {
     *           rates_table(property_price: 340000, repayment: 2, loan_amount: 315664, years_fixed: [5, 10, 15, 20, 25, 30])
     *         }
     *       }
     *       `
     *     }
     *   })
     *
     *
     */

    /**
     * Below I am mocking the response,
     * having time I could have also added a mocking package like Miragejs https://miragejs.com/docs/advanced/graphql/
     * also we can add some delay and loading state for better user experience.
     */

    const response = {
      meta: {
        serverTime: '2023-03-20T07:13:21+00:00',
        status: 0,
        key: 'OK'
      },
      data: {
        root: {
          ratesTable: {
            '5': {
              borrowingRate: 3.9,
              monthlyRate: 1552.01
            },
            '10': {
              borrowingRate: 3.78,
              monthlyRate: 1520.44
            },
            '15': {
              borrowingRate: 3.89,
              monthlyRate: 1549.38
            },
            '20': {
              borrowingRate: 4.24,
              monthlyRate: 1641.45
            },
            '25': {
              borrowingRate: 4.23,
              monthlyRate: 1638.82
            },
            '30': {
              borrowingRate: 5,
              monthlyRate: 1841.37
            }
          }
        }
      }
    }
    rates_table.value = response.data.root.ratesTable
  }

  return {
    region,

    property_price,
    total_savings,
    real_estate_commission,
    annual_repayment_rate,

    raw_loan_amount,
    loanToValue,

    rates_table,

    fetchRatesTableData
  }
})
