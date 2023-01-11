export const baseTheme = {
  colors: {
    primary: '#39b2e5',
    buttonsAndScroll: '#4c5263',
    completed: '#a10606',
    font: '#000'
  },

  typography: {
    fontFamily: 'Segoe UI',
    fontSize: '1.7rem',
    fontWeight: '500'
  },

  media: {
    position: 'center'
  },

  settings: {
    app: {
      height: '700px',
      width: '1300px',
      posCenter: '50%',
      borderRadius: '2.5rem'
    },
    footer: {
      height: '20%',
      posTop: '85%',
      posLeft: '2%',
      filterLink: {
        height: '2.7rem',
        width: '7rem',
        marginLeft: '6px',
        borderRadius: '0.7rem'
      },
      localize: {
        width: '150px',
        height: '0%',
        left: '1%'
      }
    },
    todoList: {
      height: '18rem',
      width: '47.5rem',
      left: '0.15rem',
      scrollbar: {
        width: '7px'
      },
      scrollbarTrack: {
        boxShadow: '5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset'
      },
      todo: {
        height: '2.5rem',
        left: '45rem',
        marginTop: '0.5rem',
        marginLeft: '0.5rem',
        width: '1.8rem'
      }
    },
    addTodo: {
      marginTop: '0.5rem',
      height: '2.5rem',
      borderRaidus: '0.7rem',
      addTodoInput: {
        width: '25rem'
      },
      addTodoButton: {
        width: '2.5rem',
        marginLeft: '2.5rem'
      }
    }
  }
};
