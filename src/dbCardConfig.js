export default {
  dbName: 'card',
  version: 1,
  tables: [
    {
      tableName: 'info',
      option: { keyPath: 'id' },
      indexs: [
        {
          key: 'id',
          option: {
            unique: true
          }
        },
        {
          key: 'question'
        },
        {
          key: 'answer'
        }
      ]
    },
    {
      tableName: 'cards',
      option: { keyPath: 'id' },
      indexs: [
        {
          key: 'id',
          option: {
            unique: true
          }
        },
        {
          key: 'title'
        },
        {
          key: 'content'
        }
      ]
    },
    {
      tableName: 'timeline',
      option: { keyPath: 'id' },
      index: [
        {
          key: 'id',
          option: {
            unique: true
          }
        },
        {
          key: 'timeline'
        }
      ]
    },
    {
      tableName: 'answer',
      option: { keyPath: 'id' },
      index: [
        {
          key: 'id',
          option: {
            unique: true
          }
        },
        {
          key: 'userid'
        },
        {
          key: 'question'
        },
        {
          key: 'answer'
        },
        {
          key: 'cardtitle'
        },
        {
          key: 'cardcontent'
        },
        {
          key: 'selectedtimeline'
        }
      ]
    }
  ]
}
