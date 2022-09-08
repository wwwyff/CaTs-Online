import CardSelect from '@/components/CardSelect.vue'
import Idb from 'idb-js'
import dbCardConfig from '@/dbCardConfig'

export default {
  name: 'CardView',
  components: {
    CardSelect
  },
  data () {
    return {
      msg: 'title',
      content: [],
      totalPage: [],
      pageSize: 2,
      pageNum: 1,
      dataShow: [],
      currentPage: 1,
      title: 0,
      cl01: ''
    }
  },
  created: function () {
    Idb(dbCardConfig).then(cardDb => {
      cardDb.queryAll({
        tableName: 'cards',
        success: r => {
          // console.log(r)
          const titleNum = this.$route.query.titleNum
          if (titleNum !== undefined) {
            this.title = parseInt(titleNum)
          }
          switch (this.title) {
            case 0: this.cl01 = '#E14725'
              break
            case 1: this.cl01 = '#2AADCA'
              break
            case 2: this.cl01 = '#7687C7'
              break
            case 3: this.cl01 = '#A832C6'
              break
            case 4: this.cl01 = '#F2E914'
              break
            case 5: this.cl01 = '#6EAF58'
              break
          }
          console.log('titleNum')
          console.log(this.title)
          this.msg = r[this.title].title
          this.content = r[this.title].content
          this.pageNum = Math.ceil(this.content.length / this.pageSize) || 1
          for (let i = 0; i < this.pageNum; i++) {
            this.totalPage[i] = this.content.slice(this.pageSize * i, this.pageSize * (i + 1))
          }
          const page = parseInt(this.$route.query.currentPage)
          console.log(page)
          if (!isNaN(page) && page !== 0) {
            this.currentPage = page
            this.dataShow = this.totalPage[page - 1]
            console.log(page)
          } else if (page === 0) {
            this.dataShow = this.totalPage[page]
          } else {
            this.dataShow = this.totalPage[this.currentPage - 1]
          }
        }
      })
    })
  },
  methods: {
    nextPage () {
      console.log('nextpage')
      console.log(this.currentPage)
      if (this.currentPage === this.pageNum) return
      this.dataShow = this.totalPage[this.currentPage++]
      console.log(this.currentPage)
      console.log(this.pageNum)
      var obj = document.getElementById('pagenum')
      obj.style.color = '#4682B4'
    },
    page (i) {
      this.currentPage = i
      this.dataShow = this.totalPage[i - 1]
    },
    prePage () {
      if (this.currentPage === 0) return
      this.dataShow = this.totalPage[--this.currentPage]
      console.log(this.dataShow)
      var obj = document.getElementById('pagenum')
      obj.style.color = '#4682B4'
    },
    next () {
      this.title++
      switch (this.title) {
        case 0: this.cl01 = '#E14725'
          break
        case 1: this.cl01 = '#2AADCA'
          break
        case 2: this.cl01 = '#7687C7'
          break
        case 3: this.cl01 = '#A832C6'
          break
        case 4: this.cl01 = '#F2E914'
          break
        case 5: this.cl01 = '#6EAF58'
          break
      }
      this.currentPage = 1
      console.log(this.title)
      Idb(dbCardConfig).then(cardDb => {
        cardDb.queryAll({
          tableName: 'cards',
          success: r => {
            console.log(r)
            this.msg = r[this.title].title
            this.content = r[this.title].content
            console.log(this.msg)
            console.log(this.content)
            console.log(this.content.length)
            this.pageNum = Math.ceil(this.content.length / this.pageSize) || 1
            for (let i = 0; i < this.pageNum; i++) {
              this.totalPage[i] = this.content.slice(this.pageSize * i, this.pageSize * (i + 1))
            }
            this.dataShow = this.totalPage[this.currentPage]
            console.log(this.dataShow)
          }
        })
      })
    },
    finish () {
      this.$router.push({
        path: '/results'
      })
    }
  }
}
