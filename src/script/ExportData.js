import Idb from 'idb-js'
import dbCardConfig from '@/dbCardConfig'
import { getCurrentInstance } from 'vue'

export default {
  name: 'FinishView',
  data () {
    return {
      answer: []
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
  methods: {
    showresults () {
      Idb(dbCardConfig).then(cardDb => {
        cardDb.query({
          tableName: 'answer',
          condition: (item) => item.userid === this.userId,
          success: r => {
            console.log(r)
            this.answer = r
            console.log(this.answer)
            let str = 'id,userid,question,answer,cardtitle,cardcontent,selectedtimeline\n'
            // let str = '<tr><td>Id</td><td>userId</td><td>Question</td><td>Answer</td><td>CardContent</td><td>CardTitle</td><td>SelectedTimeline</td></tr>'
            for (let i = 0; i < this.answer.length; i++) {
              for (const item in this.answer[i]) {
                // 增加\t为了不让表格显示科学计数法或者其他格式
                str += `${this.answer[i][item] + '\t'},`
              }
              str += '\n'
            }
            const uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str)
            const link = document.createElement('a')
            link.href = uri
            link.download = 'Results.csv'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          }
        })
      })
    }

  }
}
