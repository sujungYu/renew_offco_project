import axios from 'axios';

const Calendar = {
  state: {
    year: '',
    month: '',
    day: '',
    todos: [],
    showtodos: [],
  },
  mutations: {
    initTodo(state) {
      state.todos = [];
    },
    clickDate(state, payload) {
      state.year = payload.year;
      state.month = payload.month;
      state.day = payload.day;
    },
    addNewTodo(state, todoItem) {
      state.todos.push(todoItem);
    },
    clearAll(state) {
      state.todos = [];
    },
  },
  actions: {
    getTodo({ commit }, payload) {
      //해당방ID를 payload로 받음
      // eslint-disable-next-line prettier/prettier
      axios.get(`${'http://localhost:8000'}/todolist?calendarId=${payload}`).then(todos => {
          for (let i = 0; i < todos.data.length; i++) {
            commit('addNewTodo', todos.data[i]);
          }
        });
    },
  },
  getters: {
    showTodo: state => {
      return state.todos.filter(
        todo =>
          todo.createdAt == state.year + '-' + state.month + '-' + state.day,
      );
    },
  },
};
export default Calendar;
