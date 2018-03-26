const TossAPI = require('toss-node-api')
const shortId = require('shortid') // 테스트용
const Toss = TossAPI.Toss

const apiKey = 'sk_test_apikey1234567890a'
const tossObject = new Toss({ apiKey })
console.log(tossObject)

const requiredInfo = {
  orderNo: shortId.generate(), // 상품 결제에 대한 유니크값
  amount: 35000,
  productDesc: '토스티셔츠',
  autoExecute: false,
  retUrl: 'https://tossdev.github.io/'
}

const optionalInfo = {
  amountTaxable: 0,
  amountTaxFree: 0,
  amountVat: 0,
  amountServiceFee: 0,
  expiredTime: 0,
  resultCallback: 'https://tossdev.github.io/',
  escrow: false,
  cashReceipt: true,
  checkoutType: 'both',
  arsAuthSkippable: 'Y',
  userPhone: '00000000000',
  partnerId: '',
  metadata: ''
}
const main = async () => {
  const data = await tossObject.makePayment(requiredInfo, optionalInfo)
  console.log(data)
}

main ()
