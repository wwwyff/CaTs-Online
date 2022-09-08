// @ is an alias to /src
import TimeLine from '@/components/TimeLine.vue'
import Idb from 'idb-js'
import dbCardConfig from '@/dbCardConfig'
import { getCurrentInstance } from 'vue'

export default {
  name: 'TimeLineView',
  components: {
    TimeLine
  },
  data () {
    return {
      msg: '1',
      timegroup: [],
      content: '',
      title: '',
      selecttime: [],
      dataShow: [],
      currentPage: 0,
      titleNum: 0,
      card: []
    }
  },
  setup () {
    const { proxy } = getCurrentInstance()
    console.log(proxy.$userID)
    const userId = proxy.$userID
    return {
      userId
    }
  },
  created: function () {
    const param = this.$route.query.content
    this.content = param
    const p = this.$route.query.title
    this.title = p
    const page = this.$route.query.currentPage
    this.currentPage = page
    console.log(this.currentPage)
    const titleNum = this.$route.query.titleNum
    this.titleNum = titleNum
    console.log('titleNum')
    console.log(this.titleNum)
    // var pd = this.$route.query.dataShow
    // this.dataShow.push(pd)
    Idb(dbCardConfig).then(cardDb => {
      cardDb.queryAll({
        tableName: 'timeline',
        success: r => {
          if (this.title === 'Afterwards') {
            this.timegroup = r[1].timeline
          } else {
            this.timegroup = r[0].timeline
          }
        }
      })
    })
  },
  methods: {
    ok () {
      // Idb(dbCardConfig).then(cardDb => {
      //   cardDb.query_by_primaryKey({
      //     tableName: 'answer',
      //     target: this.userId,
      //     success: (res) => {
      //       this.card = res.card
      //       console.log('查')
      //       console.log(this.card)
      //       this.card.push({ cardtitle: this.title, cardcontent: this.content, selectedtimeline: JSON.stringify(this.selecttime) })
      //       console.log('test')
      //       console.log(this.card)
      //       Idb(dbCardConfig).then(cardDb => {
      //         cardDb.update_by_primaryKey({
      //           tableName: 'answer',
      //           target: this.userId,
      //           handle: val => {
      //             for (let i = 0; i < this.card.length; i++) {
      //               for (const item in this.card[i]) {
      //                 val.card[i][item] = this.card[i][item]
      //                 console.log(this.card[i][item])
      //               }
      //             }
      //           },
      //           success: res => {
      //             console.log(res)
      //             // var r = confirm('Submit successfully')
      //             // if (r === true) {
      //             //   this.$router.push({
      //             //     path: '/card',
      //             //     query: {
      //             //       currentPage: this.currentPage,
      //             //       titleNum: this.titleNum
      //             //     }
      //             //   })
      //             // }
      //           }
      //         })
      //       }, err => {
      //         console.log(err)
      //       })
      //     }
      //   })
      // })
      const id = this.userId + '' + Math.ceil(Math.random() * 10000)
      Idb(dbCardConfig).then(cardDb => {
        cardDb.insert({
          tableName: 'answer',
          data: {
            id: id,
            userid: this.userId,
            question: '',
            answer: '',
            cardtitle: this.title,
            cardcontent: this.content,
            selectedtimeline: JSON.stringify(this.selecttime)
          },
          success: res => {
            console.log('添加成功')
            console.log(res)
            this.$router.push({
              path: '/card',
              query: {
                currentPage: this.currentPage,
                titleNum: this.titleNum
              }
            })
          }
        })
      })
    },
    back () {
      this.$router.push({
        path: '/card',
        query: {
          currentPage: this.currentPage,
          titleNum: this.titleNum
        }
      })
    },
    sendValue (s) {
      this.selecttime = s
      console.log(this.selecttime)
    }
  }
}
