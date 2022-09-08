import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Idb from 'idb-js'
import dbCardConfig from './dbCardConfig'
import _global_ from './script/global.js'
const app = createApp(App)
app.config.globalProperties.$test = 'hello world!!'
app.config.globalProperties.$userID = _global_.userID
app.use(router).mount('#app')

Idb(dbCardConfig).then(cardDb => {
  cardDb.insert({
    tableName: 'info',
    data: {
      id: 1,
      question: 'Which age group are you belong to?',
      answer: ['18', '19', '20', '21', '22', 'over 22']
    },
    success: () => console.log('添加成功')
  })
  cardDb.insert({
    tableName: 'cards',
    data: [{
      id: 5,
      title: 'Afterwards',
      content: ['Feedback was critical and beneficial',
        'I was able to use the feedback to reflect on my exam performance',
        'I self-reflected on my study and revision methods and sought to improve it for future exams',
        'The feedback was not beneficial or was too vague',
        'I was not able to use the feedback to reflect on my exam performance',
        'I did not self-reflect on my study and revision methods']
    },
    {
      id: 0,
      title: 'Services & Support',
      content: [
        'I sought help from support services to cope with stress before the exam and found it helpful',
        'I sought help from support services to cope with stress before the exam and didn’t find it helpful',
        'I did not seek help from support services to cope with stress before the exam',
        'I sought help from friends to cope with stress before the exam and found it helpful',
        'I sought help from friends to cope with stress before the exam and didn’t find it helpful',
        'I did not seek help from friends to cope with stress before the exam',
        'I sought help from family to cope with stress before the exam and found it helpful',
        'I sought help from family to cope with stress before the exam and didn’t find it helpful',
        'I did not seek help from family to cope with stress before the exam',
        'I sought help from student/library services to improve my revision techniques and it was helpful',
        'I sought help from student/library services to improve my revision techniques and it wasn’t helpful',
        'I did not seek help from student/library services to improve my revision techniques',
        'I required and was given special compensation during the exam (i.e., more time, quiet room etc.) which helped',
        'I required and was given special compensation during the exam (i.e., more time, quiet room etc.) that did not help',
        'I sought revision advice from other students which helped',
        'I sought revision advice from otherstudents which didn’t help',
        'I didn’t seek revision advice from other students',
        'I regularly engaged in self-reflective practice',
        'I did not regularly engage in self-reflective practice',
        'I asked my parents for support and guidance',
        'I didn’t ask my parents for support and guidance'
      ]
    },
    {
      id: 1,
      title: 'Feelings',
      content: [
        'I felt stressed about the exam',
        'I felt stressed about revision',
        'I did not feel stressed about the exam',
        'I did not feel stressed about the exam',
        'I felt I was going to do badly in the exam',
        'I felt I did not do enough revision',
        'I felt I had done sufficient revision',
        'I felt I had no control over the outcome of the exam',
        'I felt I had control over the outcome of the exam',
        'I felt depressed because of the exam',
        'I felt anxious about the exam',
        'I did not feel anxious about the exam',
        'I did not feel depressed about the exam',
        'I felt confident about the exam',
        'I did not feel confident about the exam',
        'I felt overwhelmed',
        'I did not feel overwhelmed',
        'The available revision resources from university were satisfactory',
        'The available revision resources from university were unsatisfactory',
        'Online revision resources were satisfactory',
        'Online revision resources were unsatisfactory',
        'I was satisfied with myself after the exam',
        'I was not satisfied with myself after the exam',
        'I was satisfied with support from tutors/lecturers',
        'I was not satisfied with support from tutors/lecturers'
      ]
    },
    {
      id: 2,
      title: 'Events',
      content: [
        'I created a revision plan or timetable',
        'I planned ‘down time’ into my revision plan or timetable',
        'I regularly drank alcohol to excess, and this negatively impacted my exam revision',
        'I frequently put revision off to do other things (i.e., go for lunch, watch TV)',
        'I did not create a revision plan',
        'I joined a study group and found it helpful',
        'I joined a study group but did not find it helpful',
        'I did not join a study group',
        'I amended my revision plan due to advice or self-reflective practice',
        'I practiced my exam technique (i.e., did practice exams)',
        'I did not practice my exam technique (i.e., did not do practice exams)',
        'I procrastinated during revision',
        'I experienced a health or personal issue that significantly impacted my ability to revise',
        'I revised almost every day',
        'I revised for around 2 hours a day',
        'I revised for around 4 hours a day',
        'I revised for 6+ hours a day',
        'I paced myself when revising',
        'I did not pace myself when revising',
        'I ‘crammed’ revision',
        'I began revising for the exam',
        'I took regular study breaks when revising',
        'I did not take regular study breaks when revising',
        'I had an adequate study area',
        'I did not have an adequate study area'
      ]
    },
    {
      id: 3,
      title: 'Thoughts',
      content: [
        'I did not know how to start revising',
        'I was uncertain whether I was revising properly',
        'I was worried I was revising the wrong things',
        'I was confidentI was revising the right things',
        'I worried I would forget things during the exam',
        'I was confident I would remember things during the exams',
        'I wish I had created a revision plan',
        'I wish I had stuck to my revision plan',
        'I wish I had sought help to guide my revision',
        'My revision targets were not realistic',
        'My revision targets were realistic',
        'I thought I was revising properly'
      ]
    },
    {
      id: 4,
      title: 'Behaviours',
      content: [
        'I adhered to a revision plan',
        'I used time management techniques (i.e., Pomodoro) and they were beneficial',
        'I used time management techniques (i.e., Pomodoro) and they weren’t beneficial',
        'I did not use time management techniques (i.e., Pomodoro)',
        'I created but did not adhere to a revision plan',
        'I maintained a good sleep schedule',
        'I drank fluids regularly (non-alcoholic)',
        'I ate regular meals',
        'I did not sleep well or regularly',
        'I missed meals frequently',
        'I did not drink enough (non-alcoholic)',
        'I was easily distracted from revising',
        'I went to bed early and slept well the night before',
        'I stayed up late the night before and did not get enough sleep',
        'I prepared my bag the night before the exam',
        'I did not prepare my bag the night before the exam',
        'I drank excessive alcohol the night before the exam'
      ]
    }
    ],
    success: () => console.log('添加成功')
  })
  cardDb.insert({
    tableName: 'timeline',
    data: [{
      id: 0,
      timeline: ['1 Year Prior', '6 Months Before', '1 Month Before', '1 Week Before', '1 Day Before', '1 Hour Before', 'Just Before', 'I took exam']
    },
    {
      id: 1,
      timeline: ['Afterwards']

    }],
    success: () => console.log('添加成功')
  })
})
