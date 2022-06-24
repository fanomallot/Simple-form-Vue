members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Acoustic Guitar'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Electric Guitar'
    }
]

const handlingForms = {
  data() {
    return {
      members: window.members,
      newMember: {}
    }
  },
  methods: {
    save() {
      if (!this.newMember.fname || !this.newMember.lname || !this.newMember.instrument) {
        alert('All fields are mandatory')
        return
      }
      window.members.push(this.newMember)
      this.newMember = {}
    }
  },
};

Vue.createApp(handlingForms).mount('#app');
