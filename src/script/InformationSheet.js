import InformationSheet from '@/components/InformationSheet.vue'
import Idb from 'idb-js'
import dbCardConfig from '@/dbCardConfig'
import { getCurrentInstance } from 'vue'
// import { inject } from 'vue'
export default {
  name: 'InformationView',
  components: {
    InformationSheet
  },
  data () {
    return {
      msg: '',
      answer: {},
      selectanswer: ''
    }
  },
  created: function () {
    console.log(this.selectanswer)
    Idb(dbCardConfig).then(cardDb => {
      cardDb.query({
        tableName: 'info',
        condition: (item) => item.question === 'Which age group are you belong to?',
        success: r => {
          console.log(r)
          this.msg = r[0].question
          this.answer = r[0].answer
          console.log(this.msg)
          console.log(this.answer)
        }
      })
    })
  },
  setup () {
    const { proxy } = getCurrentInstance()
    console.log(proxy.$userID)
    const userId = proxy.$userID
    return {
      userId
    }
  },
  methods: {
    submit () {
      const id = this.userId + '' + Math.ceil(Math.random() * 1000)
      Idb(dbCardConfig).then(cardDb => {
        cardDb.insert({
          tableName: 'answer',
          data: {
            id: id,
            userid: this.userId,
            question: this.msg,
            answer: this.selectanswer
            // card: [{ cardtitle: 'default', cardcontent: 'default', selectedtimeline: 'default' }]
          },
          success: r => {
            console.log('添加成功')
            this.$router.push('/card')
          }
        })
      })
      console.log('成功')
    },
    sendValue (s) {
      this.selectanswer = s
      console.log(this.selectanswer)
    }
  }
}
