import Members from '@/services/members.js'
export default {
  data () {
    return {
      Allyears: [{name: 'Final year', members: []},
        {name: 'MCA', members: []},
        {name: 'Mtech', members: []},
        {name: 'Third Year', members: []},
        {name: 'Second Year', members: []},
        {name: 'First Year', members: []}
      ]
    }
  },
  methods: {
    categorise (mem) {
      if (mem.degree_name === 'BTECH') {
        if (mem.year_name === '3') { this.Allyears[3].members.push(mem) } else if (mem.year_name === '2') { this.Allyears[4].members.push(mem) } else if (mem.year_name === '1') { this.Allyears[5].members.push(mem) } else if (mem.year_name === '4') { this.Allyears[0].members.push(mem) }
      } else if (mem.degree_name === 'MTECH') { this.Allyears[2].members.push(mem) } else if (mem.degree_name === 'MCA') { this.Allyears[1].members.push(mem) }
    }
  },
  async created () {
    try {
      const memberss = (await Members.getMembers()).data
      console.log(memberss)
      memberss.forEach((mem) => {
        this.categorise(mem)
      })
    } catch (e) {
      console.log(e.message)
    }
  },
  components: {
    'particles': () => import('@/components/particles')
  }
}
